import './index.css';
import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ConfigurationForm from './components/ConfigurationForm.jsx';
import TicketDisplay from './components/TicketDisplay.jsx';
import { DEFAULT_CONFIG } from './constants/config';

function App() {
    const [config, setConfig] = useState(DEFAULT_CONFIG);
    const [logs, setLogs] = useState([]);

    const handleConfigChange = (newConfig) => {
        setConfig(newConfig);
    };

    const handleStart = () => {
        setLogs([...logs, 'System started']);
    };

    const handleStop = () => {
        setLogs([...logs, 'System stopped']);
    };

    return (
        <Router>
            <Routes>
                <Route path="/" element={
                    <ConfigurationForm config={config} onChange={handleConfigChange} />
                } />
                <Route path="/ticket-display" element={
                    <TicketDisplay
                        config={config}
                        logs={logs}
                        onStart={handleStart}
                        onStop={handleStop}
                    />
                } />
            </Routes>
        </Router>
    );
}

export default App;