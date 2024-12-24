import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom for navigation

const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <nav style={styles.navbar}>
            <h1 style={styles.title}>Event Management Dashboard</h1>
            <button style={styles.hamburger} onClick={toggleMobileMenu}>
                &#9776;
            </button>
            <ul style={{
                ...styles.navList,
                ...(isMobileMenuOpen ? styles.navListMobile : {}),
            }}>
                <li style={styles.navItem}>
                    <Link to="/" style={styles.navLink}>Home</Link>
                </li>
                <li style={styles.navItem}>
                    <Link to="/events" style={styles.navLink}>Event Management</Link>
                </li>
                <li style={styles.navItem}>
                    <Link to="/attendees" style={styles.navLink}>Attendee Management</Link>
                </li>
                <li style={styles.navItem}>
                    <Link to="/tasks" style={styles.navLink}>Task Tracker</Link>
                </li>
            </ul>
        </nav>
    );
};

// Styles for the navbar with responsiveness
const styles = {
    navbar: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '10px 20px',
        backgroundColor: '#4CAF50',
        color: 'white',
        position: 'relative',
        zIndex: 1000,
    },
    title: {
        margin: 0,
        fontSize: '1.5rem',
    },
    navList: {
        listStyleType: 'none',
        display: 'flex',
        margin: 0,
        padding: 0,
        gap: '20px',
        transition: 'all 0.3s ease-in-out',
    },
    navListMobile: {
        flexDirection: 'column',
        position: 'absolute',
        top: '60px',
        left: '0',
        right: '0',
        backgroundColor: '#4CAF50',
        padding: '10px',
        boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
        display: 'flex',
        gap: '10px',
    },
    navItem: {},
    navLink: {
        color: 'white',
        textDecoration: 'none',
        fontSize: '1rem',
        transition: 'color 0.3s',
    },
    navLinkHover: {
        color: '#FFD700',
    },
    hamburger: {
        display: 'none',
        background: 'none',
        border: 'none',
        color: 'white',
        fontSize: '1.5rem',
        cursor: 'pointer',
    },
    // Media queries for responsiveness
    '@media (max-width: 768px)': {
        navList: {
            display: 'none',
        },
        hamburger: {
            display: 'block',
        },
        navListMobile: {
            display: 'flex',
        },
    },
    '@media (min-width: 769px)': {
        navList: {
            display: 'flex',
        },
        navListMobile: {
            display: 'none',
        },
    },
};

export default Navbar;