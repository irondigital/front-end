import { useState, useEffect } from 'react';
import api from '../utils/api';
import BlogCard from '../components/BlogCard';
import { Search, ChevronLeft, ChevronRight, SlidersHorizontal } from 'lucide-react';
import './Home.css';

const Home = () => {
    const [blogs, setBlogs] = useState([]);
    const [loading, setLoading] = useState(true);
    const [search, setSearch] = useState('');
    const [sortBy, setSortBy] = useState('createdAt');
    const [order, setOrder] = useState('desc');
    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const [totalBlogs, setTotalBlogs] = useState(0);

    const limit = 6;

    useEffect(() => {
        fetchBlogs();
    }, [page, sortBy, order]);

    const fetchBlogs = async () => {
        setLoading(true);
        try {
            const { data } = await api.get(`/public/blogs`, {
                params: { search, sortBy, order, page, limit }
            });
            if (data.success) {
                setBlogs(data.data);
                setTotalPages(data.pages);
                setTotalBlogs(data.total);
            }
        } catch (err) {
            console.error(err);
        } finally {
            setLoading(false);
        }
    };

    const handleSearch = (e) => {
        e.preventDefault();
        setPage(1);
        fetchBlogs();
    };

    return (
        <div className="home-container container section animate-fade">
            <header className="hero-section">
                <h1>Explore the world through <span>Stories</span></h1>
                <p>Connecting curious minds with passionate writers from around the globe.</p>
                
                <form onSubmit={handleSearch} className="search-bar glass">
                    <Search size={20} className="search-icon" />
                    <input 
                        type="text" 
                        placeholder="Search by title or author..."
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                    />
                    <button type="submit" className="btn btn-primary">Search</button>
                </form>
            </header>

            <div className="filters-row">
                <div className="blogs-count">
                    Found <span>{totalBlogs}</span> stories
                </div>
                
                <div className="filter-group">
                    <SlidersHorizontal size={18} />
                    <select value={sortBy} onChange={(e) => { setSortBy(e.target.value); setPage(1); }}>
                        <option value="createdAt">Date (Newest)</option>
                        <option value="title">Blog Title</option>
                        <option value="userName">Author Name</option>
                    </select>
                    <select value={order} onChange={(e) => { setOrder(e.target.value); setPage(1); }}>
                        <option value="desc">Descending</option>
                        <option value="asc">Ascending</option>
                    </select>
                </div>
            </div>

            {loading ? (
                <div className="loading-state">Scouring the library...</div>
            ) : blogs.length > 0 ? (
                <>
                    <div className="blogs-grid">
                        {blogs.map(blog => (
                            <BlogCard key={blog._id} blog={blog} isOwner={false} />
                        ))}
                    </div>

                    {totalPages > 1 && (
                        <div className="pagination">
                            <button 
                                className="btn btn-outline" 
                                disabled={page === 1}
                                onClick={() => setPage(page - 1)}
                            >
                                <ChevronLeft size={20} />
                            </button>
                            
                            <div className="page-numbers">
                                {[...Array(totalPages)].map((_, i) => (
                                    <button 
                                        key={i + 1}
                                        className={`page-num ${page === i + 1 ? 'active' : ''}`}
                                        onClick={() => setPage(i + 1)}
                                    >
                                        {i + 1}
                                    </button>
                                ))}
                            </div>

                            <button 
                                className="btn btn-outline" 
                                disabled={page === totalPages}
                                onClick={() => setPage(page + 1)}
                            >
                                <ChevronRight size={20} />
                            </button>
                        </div>
                    )}
                </>
            ) : (
                <div className="empty-state glass">
                    <h3>No matches found</h3>
                    <p>Try adjusting your search or filters to find what you're looking for.</p>
                </div>
            )}
        </div>
    );
};

export default Home;
