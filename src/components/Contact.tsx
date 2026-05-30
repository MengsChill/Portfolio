import React, { useState } from 'react';
import { Mail, Send, CheckCircle } from 'lucide-react';

const GithubIcon: React.FC<{ size?: number }> = ({ size = 24 }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
        <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
);

const LinkedinIcon: React.FC<{ size?: number }> = ({ size = 24 }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
        <rect width="4" height="12" x="2" y="9" />
        <circle cx="4" cy="4" r="2" />
    </svg>
);

export const Contact: React.FC = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitted(true);
    };

    return (
        <section className="section-container" id="contact">
            <div className="section-header">
                <div className="section-badge">Contact</div>
                <h2 className="section-title">Get In Touch</h2>
                <div className="section-bar"></div>
            </div>

            <div className="contact-grid">
                <div className="contact-card glass-panel">
                    <h3>Contact Information</h3>
                    <p>Have an internship opportunity, a project idea, or just want to chat about programming? Feel free to reach out. I would love to hear from you!</p>
                    
                    <div className="contact-methods">
                        <div className="contact-method">
                            <Mail size={24} />
                            <div>
                                <span>Email Address</span>
                                <a href="mailto:cm@example.edu">cm@example.edu</a>
                            </div>
                        </div>
                        <div className="contact-method">
                            <GithubIcon size={24} />
                            <div>
                                <span>GitHub Profile</span>
                                <a href="https://github.com" target="_blank" rel="noreferrer">github.com/developer</a>
                            </div>
                        </div>
                        <div className="contact-method">
                            <LinkedinIcon size={24} />
                            <div>
                                <span>LinkedIn Connection</span>
                                <a href="https://linkedin.com" target="_blank" rel="noreferrer">linkedin.com/in/developer</a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="contact-form-container glass-panel">
                    {!isSubmitted ? (
                        <form onSubmit={handleSubmit}>
                            <div className="form-row">
                                <div className="form-group">
                                    <label htmlFor="name">Name</label>
                                    <input 
                                        type="text" 
                                        id="name" 
                                        required 
                                        placeholder="Your name" 
                                        className="glass-input"
                                        value={formData.name}
                                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="email">Email</label>
                                    <input 
                                        type="email" 
                                        id="email" 
                                        required 
                                        placeholder="your.email@domain.com" 
                                        className="glass-input"
                                        value={formData.email}
                                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                    />
                                </div>
                            </div>
                            <div className="form-group">
                                <label htmlFor="subject">Subject</label>
                                <input 
                                    type="text" 
                                    id="subject" 
                                    required 
                                    placeholder="e.g., Internship / Collaboration" 
                                    className="glass-input"
                                    value={formData.subject}
                                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="message">Message</label>
                                <textarea 
                                    id="message" 
                                    rows={5} 
                                    required 
                                    placeholder="Write your message here..." 
                                    className="glass-input"
                                    value={formData.message}
                                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                ></textarea>
                            </div>
                            
                            <button type="submit" className="btn btn-primary btn-block">
                                <span>Send Message</span>
                                <Send size={16} />
                            </button>
                        </form>
                    ) : (
                        <div id="form-success" className="form-feedback">
                            <CheckCircle className="success-icon" />
                            <h4>Message Sent Successfully!</h4>
                            <p>Thank you for reaching out. I've received your message and will get back to you as soon as possible.</p>
                            <button 
                                className="btn btn-secondary btn-sm" 
                                style={{ marginTop: '20px' }}
                                onClick={() => {
                                    setIsSubmitted(false);
                                    setFormData({ name: '', email: '', subject: '', message: '' });
                                }}
                            >
                                Send Another Message
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
};

