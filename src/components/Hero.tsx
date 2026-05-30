import React from 'react';
import { ArrowRight, Play, Cpu } from 'lucide-react';

export const Hero: React.FC = () => {
    return (
        <section className="hero-section" id="hero">
            <div className="hero-content">
                <div className="badge-status">
                    <span className="status-dot"></span>
                    <span className="status-text">Available for Internships &amp; Junior Roles</span>
                </div>
                <h1 className="hero-title">
                    Hi, I am Meng. <br />
                    <span className="gradient-text">Visualizing algorithms.</span>
                </h1>
                <p className="hero-subtitle">
                    I am a Computer Science Diploma student with 1+ year of programming experience. I enjoy building clean full-stack web applications, database scripts, and highly responsive user interfaces.
                </p>
                <div className="hero-buttons">
                    <a href="#projects" className="btn btn-primary">
                        <span>Explore Projects</span>
                        <ArrowRight size={16} />
                    </a>
                    <a href="#visualizer" className="btn btn-secondary">
                        <span>Run Algorithms</span>
                        <Play size={16} />
                    </a>
                </div>
            </div>
            
            {/* Hero Tech Stack Micro-Console */}
            <div className="micro-console glass-panel">
                <div className="console-header">
                    <div className="console-dots">
                        <span className="dot red"></span>
                        <span className="dot yellow"></span>
                        <span className="dot green"></span>
                    </div>
                    <span className="console-title">profile.ts</span>
                    <Cpu size={14} className="console-icon" />
                </div>
                <div className="console-body">
                    <div className="code-line"><span className="c-comment">// 1+ years of programming experience</span></div>
                    <div className="code-line"><span className="c-keyword">interface</span> <span className="c-key">Developer</span> &#123;</div>
                    <div className="code-line indent-1"><span className="c-var">name</span>: <span className="c-keyword">string</span>;</div>
                    <div className="code-line indent-1"><span className="c-var">skills</span>: <span className="c-keyword">string</span>[];</div>
                    <div className="code-line indent-1"><span className="c-var">focus</span>: <span className="c-keyword">string</span>;</div>
                    <div className="code-line">&#125;</div>
                    <div className="code-line"></div>
                    <div className="code-line"><span className="c-keyword">const</span> <span className="c-var">student</span>: <span className="c-key">Developer</span> = &#123;</div>
                    <div className="code-line indent-1"><span className="c-var">name</span>: <span className="c-str">"CS Diploma Student"</span>,</div>
                    <div className="code-line indent-1"><span className="c-var">skills</span>: [<span className="c-str">"Java"</span>, <span className="c-str">"Python"</span>, <span className="c-str">"C++"</span>, <span className="c-str">"SQL"</span>],</div>
                    <div className="code-line indent-1"><span className="c-var">focus</span>: <span className="c-str">"Building responsive web apps"</span></div>
                    <div className="code-line">&#125;;</div>
                    <div className="code-line output">&gt; Ready to build and collaborate</div>
                </div>
            </div>
        </section>
    );
};

