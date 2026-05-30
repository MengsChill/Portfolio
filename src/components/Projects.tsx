import React, { useState } from 'react';
import { Globe, Code, MessageSquare, BarChart2, ExternalLink } from 'lucide-react';

const GithubIcon: React.FC<{ size?: number }> = ({ size = 18 }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
        <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
);

interface Project {
    id: string;
    title: string;
    description: string;
    category: 'web' | 'scripts' | 'visual';
    tags: string[];
    github: string;
    demo: string;
    icon: React.ReactNode;
}

export const Projects: React.FC = () => {
    const [filter, setFilter] = useState<'all' | 'web' | 'scripts' | 'visual'>('all');

    const projectsList: Project[] = [
        {
            id: 'taskflow',
            title: 'TaskFlow Dashboard (CRUD)',
            description: 'A full-stack task manager app built to organize schedules. Features user authentication, customizable boards, task categories, and an SQLite database to store user tasks securely.',
            category: 'web',
            tags: ['React', 'Node.js', 'Express', 'SQLite'],
            github: 'https://github.com',
            demo: '#',
            icon: <Globe size={24} />
        },
        {
            id: 'gitstats',
            title: 'GitStats Analyzer CLI',
            description: 'A Python command-line utility that fetches public repository profiles from the GitHub REST API. Parses commit rates, top active hours, and languages to output clean Matplotlib graphs.',
            category: 'scripts',
            tags: ['Python', 'REST API', 'Matplotlib', 'JSON Parsing'],
            github: 'https://github.com',
            demo: '#',
            icon: <Code size={24} />
        },
        {
            id: 'chatspace',
            title: 'Real-Time Socket ChatRoom',
            description: 'A responsive chat application using WebSockets. Supports real-time text transmissions, dynamic typing notifications, active user lists, and multiple group channels.',
            category: 'web',
            tags: ['HTML5/CSS3', 'JavaScript', 'Node.js', 'Socket.io'],
            github: 'https://github.com',
            demo: '#',
            icon: <MessageSquare size={24} />
        },
        {
            id: 'algosketch',
            title: 'AlgoSketch Arena Visualizer',
            description: 'An interactive algorithm visualizer demonstrating how fundamental sorting methods work. Generates randomized bar arrays and colors active swaps step-by-step.',
            category: 'visual',
            tags: ['React', 'TypeScript', 'CSS Keyframes', 'Asynchronous JS'],
            github: 'https://github.com',
            demo: '#',
            icon: <BarChart2 size={24} />
        }
    ];

    const filteredProjects = filter === 'all' 
        ? projectsList 
        : projectsList.filter(p => p.category === filter);

    return (
        <section className="section-container" id="projects">
            <div className="section-header">
                <div className="section-badge">Projects</div>
                <h2 className="section-title">Technical Projects</h2>
                <div className="section-bar"></div>
            </div>

            {/* Project Filters */}
            <div className="project-filters">
                <button 
                    className={`filter-btn ${filter === 'all' ? 'active' : ''}`}
                    onClick={() => setFilter('all')}
                >
                    All Projects
                </button>
                <button 
                    className={`filter-btn ${filter === 'web' ? 'active' : ''}`}
                    onClick={() => setFilter('web')}
                >
                    Web Apps
                </button>
                <button 
                    className={`filter-btn ${filter === 'scripts' ? 'active' : ''}`}
                    onClick={() => setFilter('scripts')}
                >
                    Scripts &amp; CLI
                </button>
                <button 
                    className={`filter-btn ${filter === 'visual' ? 'active' : ''}`}
                    onClick={() => setFilter('visual')}
                >
                    Visualizers
                </button>
            </div>

            {/* Projects Grid */}
            <div className="projects-grid" id="projects-grid">
                {filteredProjects.map((project) => (
                    <article key={project.id} className="project-card glass-panel">
                        <div className="proj-header">
                            <div className="proj-icon-box">
                                {project.icon}
                            </div>
                            <div className="proj-links">
                                <a href={project.github} target="_blank" rel="noreferrer" className="proj-link" title="Source Code">
                                    <GithubIcon size={18} />
                                </a>
                                <a href={project.demo} className="proj-link" title="Interactive View">
                                    <ExternalLink size={18} />
                                </a>
                            </div>
                        </div>

                        <h3>{project.title}</h3>
                        <p>{project.description}</p>
                        
                        <div className="proj-tags">
                            {project.tags.map((tag) => (
                                <span key={tag} className="proj-tag">{tag}</span>
                            ))}
                        </div>
                    </article>
                ))}
            </div>
        </section>
    );
};
