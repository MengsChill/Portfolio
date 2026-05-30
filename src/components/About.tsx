import React from 'react';
import { GraduationCap, Code2 } from 'lucide-react';

export const About: React.FC = () => {
    return (
        <section className="section-container" id="about">
            <div className="section-header">
                <div className="section-badge">About Me</div>
                <h2 className="section-title">My Journey &amp; Education</h2>
                <div className="section-bar"></div>
            </div>
            
            <div className="about-grid">
                <div className="about-bio glass-panel">
                    <h3>A Dedicated Developer</h3>
                    <p>
                         My journey in software development began in my diploma coursework, where I discovered the satisfaction of writing clean code and solving logical puzzles. I enjoy building things that work seamlessly, from clean database schemas to dynamic, responsive frontend views.
                    </p>
                    <p>
                        With over a year of hands-on coding experience, I focus on mastering core programming concepts like object-oriented design, RESTful API integrations, and efficient database query structuring. I prefer creating functional, well-documented applications that deliver immediate value.
                    </p>
                    
                    <div className="quick-facts" style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginTop: '20px' }}>
                        <div className="fact-card">
                            <GraduationCap size={28} />
                            <div>
                                <h4>Academic Focus</h4>
                                <p>Diploma in Computer Science — Java, Data Structures &amp; Databases</p>
                            </div>
                        </div>
                        <div className="fact-card">
                            <Code2 size={28} />
                            <div>
                                <h4>Development Focus</h4>
                                <p>Full-Stack Web Development, CLI scripting &amp; Clean Code</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="timeline-container glass-panel">
                    <h3>Milestones</h3>
                    <div className="timeline">
                        <div className="timeline-item">
                            <div className="timeline-marker"></div>
                            <div className="timeline-content">
                                <span className="timeline-date">2026 - Present</span>
                                <h4>Software Developer</h4>
                                <p>Assisted in migrating Express routing architectures and creating database migration scripts. Built custom admin dashboards in React.</p>
                            </div>
                        </div>
                        <div className="timeline-item">
                            <div className="timeline-marker"></div>
                            <div className="timeline-content">
                                <span className="timeline-date">2024 - 2025</span>
                                <h4>Open Source Contributor</h4>
                                <p>Contributed bug fixes and README clarifications to open-source UI libraries. Set up continuous integration workflows.</p>
                            </div>
                        </div>
                        <div className="timeline-item">
                            <div className="timeline-marker"></div>
                            <div className="timeline-content">
                                <span className="timeline-date">2023 - 2024</span>
                                <h4>Diploma CS Student</h4>
                                <p>Began academic studies in structured programming, relational databases (SQL), OOP basics (Java), and Git collaboration.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

