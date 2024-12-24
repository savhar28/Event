// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Use Routes instead of Switch
import Navbar from './components/Navbar.js'; // Add .js extension
import Footer from './components/Footer.js'; // Add .js extension
import EventManagement from './pages/EventManagement.js'; // Add .js extension
import AttendeeManagement from './pages/AttendeeManagement.js'; // Add .js extension
import TaskTracker from './pages/TaskTracker.js'; // Add .js extension
import './styles/global.css'; // Ensure this path is correct

const App = () => {
    return (
        <Router>
            <div>
                <Navbar />
                <Routes> {/* Use Routes instead of Switch */}
                    <Route path="/" element={<EventManagement />} />
                    <Route path="/events" element={<EventManagement />} />
                    <Route path="/attendees" element={<AttendeeManagement />} />
                    <Route path="/tasks" element={<TaskTracker />} />
                </Routes>
                <Footer />
            </div>
        </Router>
    );
};

export default App;