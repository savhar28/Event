// src/pages/EventManagement.js
import React, { useState } from 'react';

const EventManagement = () => {
    const [events, setEvents] = useState([]);
    const [eventName, setEventName] = useState('');
    const [eventDate, setEventDate] = useState('');
    const [eventLocation, setEventLocation] = useState('');
    const [editingIndex, setEditingIndex] = useState(null);

    const handleAddEvent = () => {
        if (editingIndex !== null) {
            const updatedEvents = events.map((event, index) =>
                index === editingIndex ? { name: eventName, date: eventDate, location: eventLocation } : event
            );
            setEvents(updatedEvents);
            setEditingIndex(null);
        } else {
            setEvents([...events, { name: eventName, date: eventDate, location: eventLocation }]);
        }
        resetForm();
    };

    const handleEditEvent = (index) => {
        setEventName(events[index].name);
        setEventDate(events[index].date);
        setEventLocation(events[index].location);
        setEditingIndex(index);
    };

    const handleDeleteEvent = (index) => {
        setEvents(events.filter((_, i) => i !== index));
    };

    const resetForm = () => {
        setEventName('');
        setEventDate('');
        setEventLocation('');
    };

    return (
        <div className="min-h-screen bg-gradient-to-b from-blue-400 to-indigo-600 py-10 px-6">
            <h2 className="text-4xl font-extrabold text-white mb-8 text-center">
                Event Management
            </h2>
            <div className="bg-white p-6 rounded-lg shadow-lg max-w-4xl mx-auto">
                <div className="flex flex-wrap gap-6 mb-6">
                    <input
                        type="text"
                        placeholder="Event Name"
                        value={eventName}
                        onChange={(e) => setEventName(e.target.value)}
                        className="flex-grow bg-gray-100 border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-4 focus:ring-blue-300"
                    />
                    <input
                        type="date"
                        value={eventDate}
                        onChange={(e) => setEventDate(e.target.value)}
                        className="flex-grow bg-gray-100 border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-4 focus:ring-blue-300"
                    />
                    <input
                        type="text"
                        placeholder="Location"
                        value={eventLocation}
                        onChange={(e) => setEventLocation(e.target.value)}
                        className="flex-grow bg-gray-100 border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-4 focus:ring-blue-300"
                    />
                </div>
                <button
                    onClick={handleAddEvent}
                    className="w-full bg-gradient-to-r from-green-400 to-teal-500 text-white py-3 rounded-lg hover:scale-105 transform transition duration-300"
                >
                    {editingIndex !== null ? 'Update Event' : 'Add Event'}
                </button>
            </div>
            <div className="mt-10 grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                {events.map((event, index) => (
                    <div
                        key={index}
                        className="bg-white p-5 rounded-lg shadow-lg hover:shadow-xl transform transition duration-300"
                    >
                        <h3 className="text-xl font-bold text-gray-700 mb-2">{event.name}</h3>
                        <p className="text-gray-500 mb-1">
                            <span className="font-semibold text-gray-600">Date: </span>
                            {event.date}
                        </p>
                        <p className="text-gray-500 mb-3">
                            <span className="font-semibold text-gray-600">Location: </span>
                            {event.location}
                        </p>
                        <div className="flex justify-between">
                            <button
                                onClick={() => handleEditEvent(index)}
                                className="text-sm bg-blue-500 text-white py-1 px-3 rounded-lg hover:bg-blue-600 transition"
                            >
                                Edit
                            </button>
                            <button
                                onClick={() => handleDeleteEvent(index)}
                                className="text-sm bg-red-500 text-white py-1 px-3 rounded-lg hover:bg-red-600 transition"
                            >
                                Delete
                            </button>
                        </div>
                    </div>
                ))}
                {events.length === 0 && (
                    <p className="text-center text-white col-span-full">
                        No events to display.
                    </p>
                )}
            </div>
        </div>
    );
};

export default EventManagement;
