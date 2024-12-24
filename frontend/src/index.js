// src/index.js
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.js'; // Add the .js extension
import './styles/global.css'; // Ensure this path is correct

ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById('root')
);