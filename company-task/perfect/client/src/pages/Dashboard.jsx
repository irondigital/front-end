import { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { AuthContext } from '../context/AuthContext';
import { PlusCircle, Edit2, Trash2, Clock } from 'lucide-react';

const Dashboard = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const { user } = useContext(AuthContext);

  useEffect(() => {
    const fetchUserPosts = async () => {
      try {
        const config = {
          headers: {
            Authorization: `Bearer ${user.token}`
          }
        };
        const res = await axios.get('http://localhost:5000/api/posts/user/me', config);
        setPosts(res.data);
        setLoading(false);
      } catch (err) {
        setError('Failed to fetch your posts.');
        setLoading(false);
      }
    };

    if (user) {
      fetchUserPosts();
    }
  }, [user]);

  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this post?')) {
      try {
        const config = {
          headers: {
            Authorization: `Bearer ${user.token}`
          }
        };
        await axios.delete(`http://localhost:5001/api/posts/${id}`, config);
        setPosts(posts.filter(post => post._id !== id));
      } catch (err) {
        alert('Failed to delete post');
      }
    }
  };

  if (loading) return <div className="loader"><div className="spinner"></div></div>;

  return (
    <div>
      <div className="dashboard-header">
        <div>
          <h1 style={{ marginBottom: '0.5rem' }}>Dashboard</h1>
          <p>Welcome back, <span style={{ color: 'white', fontWeight: '500' }}>{user.username}</span>!</p>
        </div>
        <Link to="/create-post" className="btn btn-primary">
          <PlusCircle size={18} />
          Create New Post
        </Link>
      </div>

      {error && <div className="error-message">{error}</div>}

      <div style={{ marginTop: '2rem' }}>
        <h2 style={{ fontSize: '1.5rem', marginBottom: '1.5rem', borderBottom: '1px solid var(--card-border)', paddingBottom: '0.5rem' }}>
          Your Posts
        </h2>

        {posts.length === 0 ? (
          <div className="empty-state">
            <h3 style={{ marginBottom: '0.5rem' }}>You haven't written any posts yet</h3>
            <p style={{ marginBottom: '1.5rem' }}>Share your thoughts with the world!</p>
            <Link to="/create-post" className="btn btn-primary">
              Write your first post
            </Link>
          </div>
        ) : (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {posts.map(post => (
              <div key={post._id} style={{
                background: 'var(--card-bg)',
                border: '1px solid var(--card-border)',
                borderRadius: '0.75rem',
                padding: '1.5rem',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center'
              }}>
                <div>
                  <Link to={`/post/${post._id}`} style={{ display: 'block', fontSize: '1.25rem', fontWeight: '600', color: 'white', marginBottom: '0.5rem' }}>
                    {post.title}
                  </Link>
                  <div style={{ display: 'flex', gap: '1rem', color: 'var(--text-muted)', fontSize: '0.875rem' }}>
                    <span style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
                      <Clock size={14} />
                      {new Date(post.createdAt).toLocaleDateString()}
                    </span>
                  </div>
                </div>
                <div style={{ display: 'flex', gap: '0.75rem' }}>
                  <Link to={`/edit-post/${post._id}`} className="btn btn-outline" style={{ padding: '0.5rem' }}>
                    <Edit2 size={16} />
                  </Link>
                  <button onClick={() => handleDelete(post._id)} className="btn btn-danger" style={{ padding: '0.5rem' }}>
                    <Trash2 size={16} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
