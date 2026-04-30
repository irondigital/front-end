import { useState, useEffect } from 'react';
import axios from 'axios';
import PostCard from '../components/PostCard';

const Home = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const res = await axios.get('http://localhost:5000/api/posts');
        setPosts(res.data);
        setLoading(false);
      } catch (err) {
        setError('Failed to fetch posts. Please try again later.');
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  if (loading) return <div className="loader"><div className="spinner"></div></div>;

  return (
    <div>
      <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
        <h1 style={{ fontSize: '3rem', marginBottom: '1rem', background: 'linear-gradient(to right, #3b82f6, #8b5cf6)', WebkitBackgroundClip: 'text', color: 'transparent' }}>
          Welcome to MERNBlog
        </h1>
        <p style={{ fontSize: '1.2rem', maxWidth: '600px', margin: '0 auto' }}>
          Discover interesting stories, ideas, and knowledge from writers around the world.
        </p>
      </div>

      {error && <div className="error-message">{error}</div>}

      {posts.length === 0 && !error ? (
        <div className="empty-state">
          <h3>No posts found</h3>
          <p>Be the first to create a post!</p>
        </div>
      ) : (
        <div className="posts-grid">
          {posts.map(post => (
            <PostCard key={post._id} post={post} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Home;
