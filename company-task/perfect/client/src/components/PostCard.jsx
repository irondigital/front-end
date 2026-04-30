import { Link } from 'react-router-dom';
import { Calendar, User as UserIcon } from 'lucide-react';

const PostCard = ({ post }) => {
  // Format date
  const date = new Date(post.createdAt).toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric'
  });

  return (
    <Link to={`/post/${post._id}`} className="post-card">
      <h3 className="post-card-title">{post.title}</h3>
      <p className="post-card-excerpt">
        {post.content}
      </p>
      <div className="post-card-footer">
        <span style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
          <UserIcon size={14} />
          {post.author?.username || 'Unknown'}
        </span>
        <span style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
          <Calendar size={14} />
          {date}
        </span>
      </div>
    </Link>
  );
};

export default PostCard;
