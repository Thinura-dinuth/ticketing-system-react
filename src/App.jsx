import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ConfigurationForm from './components/ConfigurationForm';
import TicketDisplay from './components/TicketDisplay';
import { DEFAULT_CONFIG } from './constants/config';

function App() {
    const [config, setConfig] = useState(DEFAULT_CONFIG);

    const handleConfigChange = (newConfig) => {
        setConfig(newConfig);
    };

    return (
        <Router>
            <Routes>
                <Route path="/" element={<ConfigurationForm config={config} onChange={handleConfigChange} />} />
                <Route path="/ticket-display" element={<TicketDisplay config={config} />} />
            </Routes>
        </Router>
    );
}

export default App;