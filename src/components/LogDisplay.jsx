import React, { useEffect, useState, useRef } from 'react';
import PropTypes from 'prop-types';

export default function LogDisplay({ logs: initialLogs }) {
    const [logMessages, setLogMessages] = useState(initialLogs);
    const logEndRef = useRef(null);

    useEffect(() => {
        // Establish WebSocket connection
        const socket = new WebSocket('ws://localhost:8080/logs');

        socket.onopen = () => {
            console.log('WebSocket connection established');
        };

        socket.onmessage = (event) => {
            setLogMessages((prevLogs) => [...prevLogs, event.data]);
        };

        socket.onerror = (error) => {
            console.error('WebSocket error:', error);
        };

        socket.onclose = (event) => {
            console.log('WebSocket connection closed', event);
        };

        return () => {
            socket.close();
        };
    }, []);

    // Automatically scroll to the bottom of logs
    useEffect(() => {
        logEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, [logMessages]);

    return (
        <div className="log-display" style={{
            height: '300px',
            overflowY: 'auto',
            border: '1px solid #ccc',
            padding: '10px'
        }}>
            <h2>System Logs</h2>
            <ul style={{ listStyleType: 'none', padding: 0 }}>
                {logMessages.map((log, index) => (
                    <li key={index} style={{
                        fontFamily: 'monospace',
                        marginBottom: '5px',
                        wordBreak: 'break-word'
                    }}>
                        {log}
                    </li>
                ))}
            </ul>
            <div ref={logEndRef} />
        </div>
    );
}

LogDisplay.propTypes = {
    logs: PropTypes.arrayOf(PropTypes.string)
}

LogDisplay.defaultProps = {
    logs: []
};