import { Calendar, User, Edit2, Trash2 } from 'lucide-react';
import './BlogCard.css';

const BlogCard = ({ blog, isOwner, onEdit, onDelete }) => {
    return (
        <div className="blog-card glass animate-fade">
            <div className="card-header">
                <h3 className="blog-title">{blog.title}</h3>
                {isOwner && (
                    <div className="owner-actions">
                        <button onClick={() => onEdit(blog)} title="Edit"><Edit2 size={18} /></button>
                        <button onClick={() => onDelete(blog._id)} title="Delete" className="delete-btn"><Trash2 size={18} /></button>
                    </div>
                )}
            </div>
            
            <p className="blog-content">
                {blog.content.length > 150 
                    ? `${blog.content.substring(0, 150)}...` 
                    : blog.content}
            </p>

            <div className="card-footer">
                <div className="meta-item">
                    <User size={14} />
                    <span>{blog.authorInfo?.name || 'You'}</span>
                </div>
                <div className="meta-item">
                    <Calendar size={14} />
                    <span>{new Date(blog.createdAt).toLocaleDateString()}</span>
                </div>
            </div>
        </div>
    );
};

export default BlogCard;
