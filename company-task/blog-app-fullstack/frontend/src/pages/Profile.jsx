import { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { User, Mail, Lock, ShieldCheck, Save } from 'lucide-react';
import './Auth.css'; // Reuse auth styles for layout

const Profile = () => {
    const { user, updateProfile } = useAuth();
    
    const [name, setName] = useState(user?.name || '');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    
    const [status, setStatus] = useState({ type: '', message: '' });
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus({ type: '', message: '' });

        if (password && password !== confirmPassword) {
            return setStatus({ type: 'error', message: 'Passwords do not match' });
        }

        setLoading(true);
        try {
            const data = { name };
            if (password) data.password = password;

            const result = await updateProfile(data);
            if (result.success) {
                setStatus({ type: 'success', message: 'Profile updated successfully!' });
                setPassword('');
                setConfirmPassword('');
            } else {
                setStatus({ type: 'error', message: result.message });
            }
        } catch (err) {
            setStatus({ type: 'error', message: 'Failed to update profile' });
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="auth-container section animate-fade">
            <div className="auth-card glass">
                <div className="auth-header">
                    <div className="profile-icon">
                        <ShieldCheck size={48} color="var(--primary)" />
                    </div>
                    <h2>Account Settings</h2>
                    <p>Manage your personal information and security</p>
                </div>

                {status.message && (
                    <div className={`${status.type}-alert animate-fade`}>
                        {status.message}
                    </div>
                )}

                <form onSubmit={handleSubmit} className="auth-form">
                    <div className="input-group">
                        <label>Display Name</label>
                        <div className="input-with-icon">
                            <User size={20} />
                            <input 
                                type="text" 
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                required
                            />
                        </div>
                    </div>

                    <div className="input-group">
                        <label>Email Address (Read-only)</label>
                        <div className="input-with-icon">
                            <Mail size={20} />
                            <input 
                                type="email" 
                                value={user?.email || ''} 
                                disabled 
                                style={{ opacity: 0.6 }}
                            />
                        </div>
                    </div>

                    <hr style={{ border: 'none', borderTop: '1px solid var(--border)', margin: '10px 0' }} />
                    
                    <div className="auth-header" style={{ textAlign: 'left', gap: '4px', marginBottom: '10px' }}>
                        <h4 style={{ fontSize: '1.1rem' }}>Update Password</h4>
                        <p style={{ fontSize: '0.85rem' }}>Leave blank to keep current password</p>
                    </div>

                    <div className="input-group">
                        <label>New Password</label>
                        <div className="input-with-icon">
                            <Lock size={20} />
                            <input 
                                type="password" 
                                placeholder="••••••••"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>
                    </div>

                    <div className="input-group">
                        <label>Confirm Password</label>
                        <div className="input-with-icon">
                            <Lock size={20} />
                            <input 
                                type="password" 
                                placeholder="••••••••"
                                value={confirmPassword}
                                onChange={(e) => setConfirmPassword(e.target.value)}
                            />
                        </div>
                    </div>

                    <button type="submit" className="btn btn-primary w-full" disabled={loading}>
                        <Save size={20} />
                        {loading ? 'Saving Changes...' : 'Save Changes'}
                    </button>
                </form>
            </div>

            <style>{`
                .success-alert {
                    background: rgba(34, 197, 94, 0.1);
                    border: 1px solid #22c55e;
                    color: #22c55e;
                    padding: 12px;
                    border-radius: var(--radius);
                    font-size: 0.9rem;
                    text-align: center;
                }
                .profile-icon {
                    background: var(--glass);
                    width: 80px;
                    height: 80px;
                    border-radius: 50%;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    margin: 0 auto 16px;
                }
            `}</style>
        </div>
    );
};

export default Profile;
