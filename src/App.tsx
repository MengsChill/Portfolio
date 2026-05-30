import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Projects } from './components/Projects';
import { AlgoVisualizer } from './components/AlgoVisualizer';
import { Skills } from './components/Skills';
import { Contact } from './components/Contact';

const App: React.FC = () => {
    const [theme, setTheme] = useState<string>('dark');

    // Apply the active theme as a data-attribute on the root html node
    useEffect(() => {
        document.documentElement.setAttribute('data-theme', theme);
    }, [theme]);

    const toggleTheme = () => {
        setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
    };

    return (
        <>
            {/* Top Navigation Bar */}
            <Navbar theme={theme} toggleTheme={toggleTheme} />

            {/* Main Layout Content */}
            <main className="content-wrapper">
                <Hero />
                <About />
                <Projects />
                <AlgoVisualizer />
                <Skills />
                <Contact />

                {/* Footer Section */}
                <footer className="footer">
                    <p>&copy; {new Date().getFullYear()} CS Portfolio. Designed &amp; Engineered with React + TypeScript.</p>
                </footer>
            </main>
        </>
    );
};

export default App;

