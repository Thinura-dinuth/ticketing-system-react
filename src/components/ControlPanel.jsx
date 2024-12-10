import PropTypes from 'prop-types';
import { startProcess } from '../utils/startProcess';
import { stopProcess } from '../utils/stopProcess';

export default function ControlPanel({ onStart, onStop }) {
    const handleStart = async () => {
        await startProcess();
        onStart();
    };

    const handleStop = async () => {
        await stopProcess();
        onStop();
    };

    return (
        <div className="control-panel">
            <button onClick={handleStart}>Start</button>
            <button onClick={handleStop}>Stop</button>
        </div>
    );
}

ControlPanel.propTypes = {
    onStart: PropTypes.func.isRequired,
    onStop: PropTypes.func.isRequired,
};