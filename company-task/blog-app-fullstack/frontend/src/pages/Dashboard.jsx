import { useState, useEffect } from 'react';
import api from '../utils/api';
import BlogCard from '../components/BlogCard';
import { Plus, X, Save } from 'lucide-react';
import './Dashboard.css';

const Dashboard = () => {
    const [blogs, setBlogs] = useState([]);
    const [loading, setLoading] = useState(true);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [currentBlog, setCurrentBlog] = useState(null); // For editing
    const [formData, setFormData] = useState({ title: '', content: '' });
    const [error, setError] = useState('');

    useEffect(() => {
        fetchMyBlogs();
    }, []);

    const fetchMyBlogs = async () => {
        try {
            const { data } = await api.get('/blogs/me');
            if (data.success) {
                setBlogs(data.data);
            }
        } catch (err) {
            console.error(err);
        } finally {
            setLoading(false);
        }
    };

    const handleOpenModal = (blog = null) => {
        if (blog) {
            setCurrentBlog(blog);
            setFormData({ title: blog.title, content: blog.content });
        } else {
            setCurrentBlog(null);
            setFormData({ title: '', content: '' });
        }
        setIsModalOpen(true);
        setError('');
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
        setFormData({ title: '', content: '' });
        setCurrentBlog(null);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        
        try {
            if (currentBlog) {
                // Update
                const { data } = await api.put(`/blogs/${currentBlog._id}`, formData);
                if (data.success) {
                    setBlogs(blogs.map(b => b._id === currentBlog._id ? data.data : b));
                    handleCloseModal();
                }
            } else {
                // Create
                const { data } = await api.post('/blogs', formData);
                if (data.success) {
                    setBlogs([data.data, ...blogs]);
                    handleCloseModal();
                }
            }
        } catch (err) {
            setError(err.response?.data?.message || 'Something went wrong');
        }
    };

    const handleDelete = async (id) => {
        if (window.confirm('Are you sure you want to delete this blog?')) {
            try {
                const { data } = await api.delete(`/blogs/${id}`);
                if (data.success) {
                    setBlogs(blogs.filter(b => b._id !== id));
                }
            } catch (err) {
                console.error(err);
            }
        }
    };

    return (
        <div className="dashboard-container container section animate-fade">
            <header className="dashboard-header">
                <div>
                    <h1>Your Dashboard</h1>
                    <p className="text-muted">Manage your articles and stories</p>
                </div>
                <button className="btn btn-primary" onClick={() => handleOpenModal()}>
                    <Plus size={20} />
                    <span>New Project</span>
                </button>
            </header>

            {loading ? (
                <div className="loading-state">Loading your blogs...</div>
            ) : blogs.length > 0 ? (
                <div className="blogs-grid">
                    {blogs.map(blog => (
                        <BlogCard 
                            key={blog._id} 
                            blog={blog} 
                            isOwner={true}
                            onEdit={handleOpenModal}
                            onDelete={handleDelete}
                        />
                    ))}
                </div>
            ) : (
                <div className="empty-state glass">
                    <h3>No blogs yet</h3>
                    <p>Start writing your first story to share with the world.</p>
                    <button className="btn btn-outline" onClick={() => handleOpenModal()}>
                        Create First Blog
                    </button>
                </div>
            )}

            {/* Modal */}
            {isModalOpen && (
                <div className="modal-overlay">
                    <div className="modal-content glass animate-fade">
                        <div className="modal-header">
                            <h2>{currentBlog ? 'Edit Blog' : 'Create New Blog'}</h2>
                            <button className="close-btn" onClick={handleCloseModal}><X size={24} /></button>
                        </div>

                        {error && <div className="error-alert">{error}</div>}

                        <form onSubmit={handleSubmit} className="blog-form">
                            <div className="input-group">
                                <label>Headline</label>
                                <input 
                                    type="text" 
                                    placeholder="Enter a catchy title..."
                                    value={formData.title}
                                    onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                                    required
                                />
                            </div>

                            <div className="input-group">
                                <label>Story Content</label>
                                <textarea 
                                    rows="8" 
                                    placeholder="Tell your story..."
                                    value={formData.content}
                                    onChange={(e) => setFormData({ ...formData, content: e.target.value })}
                                    required
                                />
                            </div>

                            <div className="modal-footer">
                                <button type="button" className="btn btn-outline" onClick={handleCloseModal}>Cancel</button>
                                <button type="submit" className="btn btn-primary">
                                    <Save size={18} />
                                    <span>{currentBlog ? 'Update Blog' : 'Publish Blog'}</span>
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Dashboard;
