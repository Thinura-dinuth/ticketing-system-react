import { useState } from 'react';
import ConfigurationForm from './components/ConfigurationForm';
import { DEFAULT_CONFIG } from './constants/config';

function App() {
    const [config, setConfig] = useState(DEFAULT_CONFIG);

    const handleConfigChange = (newConfig) => {
        setConfig(newConfig);
    };

    return (
        <div className="">
            <div className="">
                <ConfigurationForm config={config} onChange={handleConfigChange} />
            </div>
        </div>
    );
}

export default App;