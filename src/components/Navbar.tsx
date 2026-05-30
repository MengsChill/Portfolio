import React, { useState } from 'react';
import { Sun, Moon, Menu, X } from 'lucide-react';

interface NavbarProps {
    theme: string;
    toggleTheme: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ theme, toggleTheme }) => {
    const [mobileOpen, setMobileOpen] = useState(false);

    const navItems = [
        { label: 'About', href: '#about' },
        { label: 'Contact', href: '#contact' },
    ];

    return (
        <>
            <header className="glass-nav">
                <div className="nav-container">
                    <a href="#" className="logo">
                        <span className="logo-bracket">&lt;</span>
                        <span className="logo-text">CS.Student</span>
                        <span className="logo-bracket">/&gt;</span>
                    </a>
                    
                    <nav className="nav-links">
                        {navItems.map((item) => (
                            <a key={item.label} href={item.href} className="nav-item">
                                {item.label}
                            </a>
                        ))}
                    </nav>

                    <div className="nav-actions">
                        <button 
                            id="theme-toggle" 
                            className="btn-icon" 
                            onClick={toggleTheme}
                            title={`Switch to ${theme === 'dark' ? 'Light' : 'Dark'} Mode`}
                        >
                            {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
                        </button>
                        
                        <button 
                            className="mobile-menu-toggle btn-icon" 
                            onClick={() => setMobileOpen(!mobileOpen)}
                            aria-label="Toggle Menu"
                        >
                            {mobileOpen ? <X size={18} /> : <Menu size={18} />}
                        </button>
                    </div>
                </div>
            </header>

            {/* Mobile Nav Overlay */}
            <div className={`mobile-nav-overlay ${mobileOpen ? 'open' : ''}`}>
                <nav className="mobile-nav-links">
                    {navItems.map((item) => (
                        <a 
                            key={item.label} 
                            href={item.href} 
                            className="mobile-nav-item"
                            onClick={() => setMobileOpen(false)}
                        >
                            {item.label}
                        </a>
                    ))}
                </nav>
            </div>
        </>
    );
};

