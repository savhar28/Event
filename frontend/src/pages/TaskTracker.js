// src/pages/TaskTracker.js
import React, { useState } from 'react';

const TaskTracker = () => {
    const [tasks, setTasks] = useState([]);
    const [taskName, setTaskName] = useState('');
    const [taskDeadline, setTaskDeadline] = useState('');
    const [editingIndex, setEditingIndex] = useState(null);

    const handleAddTask = () => {
        if (editingIndex !== null) {
            const updatedTasks = tasks.map((task, index) => 
                index === editingIndex ? { name: taskName, deadline: taskDeadline } : task
            );
            setTasks(updatedTasks);
            setEditingIndex(null);
        } else {
            setTasks([...tasks, { name: taskName, deadline: taskDeadline }]);
        }
        resetForm();
    };

    const handleEditTask = (index) => {
        setTaskName(tasks[index].name);
        setTaskDeadline(tasks[index].deadline);
        setEditingIndex(index);
    };

    const handleDeleteTask = (index) => {
        setTasks(tasks.filter((_, i) => i !== index));
    };

    const resetForm = () => {
        setTaskName('');
        setTaskDeadline('');
    };

    return (
        <div className="p-6 bg-gray-100 min-h-screen">
            <h2 className="text-3xl font-bold mb-6 text-center">Task Tracker</h2>
            <div className="mb-6 bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold mb-4">Add / Edit Task</h3>
                <div className="flex flex-col md:flex-row md:space-x-4">
                    <input
                        type="text"
                        placeholder="Task Name"
                        value={taskName}
                        onChange={(e) => setTaskName(e.target.value)}
                        className="border border-gray-300 p-3 rounded-md mb-4 md:mb-0 w-full md:w-1/2"
                    />
                    <input
                        type="date"
                        value={taskDeadline}
                        onChange={(e) => setTaskDeadline(e.target.value)}
                        className="border border-gray-300 p-3 rounded-md mb-4 md:mb-0 w-full md:w-1/2"
                    />
                </div>
                <button
                    onClick={handleAddTask}
                    className="bg-blue-500 text-white px-4 py-3 rounded-md hover:bg-blue-600 transition duration-200 transform hover:scale-105"
                >
                    {editingIndex !== null ? 'Update Task' : 'Add Task'}
                </button>
            </div>
            <div>
                <table className="min-w-full bg-white border border-gray-300 rounded-lg shadow-lg">
                    <thead>
                        <tr className="bg-gray-200">
                            <th className="py-3 px-4 border-b text-left">Task Name</th>
                            <th className="py-3 px-4 border-b text-left">Deadline</th>
                            <th className="py-3 px-4 border-b text-left">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {tasks.map((task, index) => (
                            <tr key={index} className="hover:bg-gray-100 transition duration-200">
                                <td className="py-3 px-4 border-b">{task.name}</td>
                                <td className="py-3 px-4 border-b">{task.deadline}</td>
                                <td className="py-3 px-4 border-b">
                                    <button
                                        onClick={() => handleEditTask(index)}
                                        className="text-blue-500 hover:underline mr-2"
                                    >
                                        Edit
                                    </button>
                                    <button
                                        onClick={() => handleDeleteTask(index)}
                                        className="text-red-500 hover:underline"
                                    >
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default TaskTracker;