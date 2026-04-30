import { useState, useEffect, useContext } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { AuthContext } from '../context/AuthContext';
import { Calendar, User as UserIcon, ArrowLeft, Edit2, Trash2 } from 'lucide-react';

const SinglePost = () => {
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const { id } = useParams();
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const res = await axios.get(`http://localhost:5000/api/posts/${id}`);
        setPost(res.data);
        setLoading(false);
      } catch (err) {
        setError('Post not found or failed to load.');
        setLoading(false);
      }
    };

    fetchPost();
  }, [id]);

  const handleDelete = async () => {
    if (window.confirm('Are you sure you want to delete this post?')) {
      try {
        const config = {
          headers: {
            Authorization: `Bearer ${user.token}`
          }
        };
        await axios.delete(`http://localhost:5000/api/posts/${id}`, config);
        navigate('/');
      } catch (err) {
        alert('Failed to delete post');
      }
    }
  };

  if (loading) return <div className="loader"><div className="spinner"></div></div>;

  if (error) return (
    <div className="container" style={{ textAlign: 'center', marginTop: '4rem' }}>
      <h2>Oops!</h2>
      <p style={{ color: 'var(--text-muted)', marginTop: '1rem', marginBottom: '2rem' }}>{error}</p>
      <Link to="/" className="btn btn-primary">Go Back Home</Link>
    </div>
  );

  const date = new Date(post.createdAt).toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric'
  });

  // Check if current logged in user is the author
  const isAuthor = user && (post.author?._id === user._id || post.author === user._id);

  return (
    <div className="single-post">
      <Link to="/" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-muted)', marginBottom: '2rem' }}>
        <ArrowLeft size={16} /> Back to all posts
      </Link>

      <div className="single-post-header">
        <h1 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>{post.title}</h1>
        <div className="single-post-meta">
          <span style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
            <UserIcon size={16} />
            {post.author?.username || 'Unknown Author'}
          </span>
          <span style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
            <Calendar size={16} />
            {date}
          </span>
        </div>
      </div>

      <div className="single-post-content">
        {post.content}
      </div>

      {isAuthor && (
        <div className="single-post-actions">
          <Link to={`/edit-post/${post._id}`} className="btn btn-outline">
            <Edit2 size={16} /> Edit Post
          </Link>
          <button onClick={handleDelete} className="btn btn-danger">
            <Trash2 size={16} /> Delete Post
          </button>
        </div>
      )}
    </div>
  );
};

export default SinglePost;
