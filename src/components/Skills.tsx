import React from 'react';
import { Terminal, Layers } from 'lucide-react';

interface Skill {
    name: string;
    level: number; // Percentage
}

export const Skills: React.FC = () => {
    const languages: Skill[] = [
        { name: 'Java', level: 85 },
        { name: 'Python', level: 80 },
        { name: 'JavaScript / HTML / CSS', level: 80 },
        { name: 'C++', level: 65 },
        { name: 'SQL', level: 75 }
    ];

    const tools: Skill[] = [
        { name: 'Node.js / Express', level: 75 },
        { name: 'Git & GitHub Version Control', level: 85 },
        { name: 'SQLite / MySQL Databases', level: 75 },
        { name: 'REST APIs & JSON Parsing', level: 80 },
        { name: 'Linux Commands & Shell Scripts', level: 70 }
    ];

    return (
        <section className="section-container" id="skills">
            <div className="section-header">
                <div className="section-badge">Skills</div>
                <h2 className="section-title">Skills &amp; Technologies</h2>
                <div className="section-bar"></div>
            </div>

            <div className="skills-grid">
                <div className="skills-category glass-panel">
                    <div className="cat-header">
                        <Terminal size={28} />
                        <h3>Languages</h3>
                    </div>
                    <div className="skills-list">
                        {languages.map((skill) => (
                            <div key={skill.name} className="skill-item">
                                <div className="skill-name-row">
                                    <span className="skill-title">{skill.name}</span>
                                    <span className="skill-perc">{skill.level}%</span>
                                </div>
                                <div className="skill-bar-bg">
                                    <div 
                                        className="skill-bar-fill" 
                                        style={{ transform: 'scaleX(1)', width: `${skill.level}%` }}
                                    ></div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="skills-category glass-panel">
                    <div className="cat-header">
                        <Layers size={28} />
                        <h3>Frameworks &amp; Tools</h3>
                    </div>
                    <div className="skills-list">
                        {tools.map((skill) => (
                            <div key={skill.name} className="skill-item">
                                <div className="skill-name-row">
                                    <span className="skill-title">{skill.name}</span>
                                    <span className="skill-perc">{skill.level}%</span>
                                </div>
                                <div className="skill-bar-bg">
                                    <div 
                                        className="skill-bar-fill" 
                                        style={{ transform: 'scaleX(1)', width: `${skill.level}%` }}
                                    ></div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};
