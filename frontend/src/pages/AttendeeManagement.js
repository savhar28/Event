// src/pages/AttendeeManagement.js
import React, { useState } from 'react';

const AttendeeManagement = () => {
    const [attendees, setAttendees] = useState([]);
    const [attendeeName, setAttendeeName] = useState('');
    const [attendeeEmail, setAttendeeEmail] = useState('');
    const [editingIndex, setEditingIndex] = useState(null);

    const handleAddAttendee = () => {
        if (editingIndex !== null) {
            const updatedAttendees = attendees.map((attendee, index) =>
                index === editingIndex ? { name: attendeeName, email: attendeeEmail } : attendee
            );
            setAttendees(updatedAttendees);
            setEditingIndex(null);
        } else {
            setAttendees([...attendees, { name: attendeeName, email: attendeeEmail }]);
        }
        resetForm();
    };

    const handleEditAttendee = (index) => {
        setAttendeeName(attendees[index].name);
        setAttendeeEmail(attendees[index].email);
        setEditingIndex(index);
    };

    const handleDeleteAttendee = (index) => {
        setAttendees(attendees.filter((_, i) => i !== index));
    };

    const resetForm = () => {
        setAttendeeName('');
        setAttendeeEmail('');
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-pink-500 to-purple-600 py-10 px-4">
            <h2 className="text-4xl font-extrabold text-white mb-10 text-center">
                Attendee Management
            </h2>
            <div className="bg-white p-6 rounded-xl shadow-lg max-w-3xl mx-auto">
                <h3 className="text-2xl font-bold text-purple-700 mb-6">Add / Edit Attendee</h3>
                <div className="grid gap-4 md:grid-cols-2">
                    <input
                        type="text"
                        placeholder="Attendee Name"
                        value={attendeeName}
                        onChange={(e) => setAttendeeName(e.target.value)}
                        className="bg-gray-100 border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-4 focus:ring-purple-400"
                    />
                    <input
                        type="email"
                        placeholder="Attendee Email"
                        value={attendeeEmail}
                        onChange={(e) => setAttendeeEmail(e.target.value)}
                        className="bg-gray-100 border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-4 focus:ring-purple-400"
                    />
                </div>
                <button
                    onClick={handleAddAttendee}
                    className="w-full mt-6 bg-gradient-to-r from-green-400 to-blue-500 text-white py-3 rounded-lg hover:scale-105 transform transition duration-300"
                >
                    {editingIndex !== null ? 'Update Attendee' : 'Add Attendee'}
                </button>
            </div>
            <div className="mt-10 bg-white p-6 rounded-xl shadow-lg max-w-5xl mx-auto overflow-auto">
                <h3 className="text-2xl font-bold text-purple-700 mb-6">Attendee List</h3>
                <table className="w-full border border-gray-300 rounded-lg shadow-lg">
                    <thead>
                        <tr className="bg-gradient-to-r from-purple-400 to-pink-400 text-white">
                            <th className="py-4 px-6 text-left">Attendee Name</th>
                            <th className="py-4 px-6 text-left">Email</th>
                            <th className="py-4 px-6 text-left">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {attendees.length > 0 ? (
                            attendees.map((attendee, index) => (
                                <tr
                                    key={index}
                                    className="hover:bg-gray-100 transition duration-200"
                                >
                                    <td className="py-4 px-6 border-b">{attendee.name}</td>
                                    <td className="py-4 px-6 border-b">{attendee.email}</td>
                                    <td className="py-4 px-6 border-b">
                                        <button
                                            onClick={() => handleEditAttendee(index)}
                                            className="text-blue-500 hover:text-blue-700 hover:underline mr-4"
                                        >
                                            Edit
                                        </button>
                                        <button
                                            onClick={() => handleDeleteAttendee(index)}
                                            className="text-red-500 hover:text-red-700 hover:underline"
                                        >
                                            Delete
                                        </button>
                                    </td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td
                                    colSpan="3"
                                    className="text-center py-4 px-6 text-gray-500"
                                >
                                    No attendees available. Add some!
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AttendeeManagement;
