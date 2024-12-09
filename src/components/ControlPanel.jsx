import PropTypes from 'prop-types';
import { startProcess } from '../utils/startProcess';

export default function ControlPanel({ onStart, onStop }) {
    const handleStart = async () => {
        await startProcess();
        onStart();
    };

    return (
        <div>
            <button onClick={handleStart}>Start</button>
            <button onClick={onStop}>Stop</button>
        </div>
    );
}

ControlPanel.propTypes = {
    onStart: PropTypes.func.isRequired,
    onStop: PropTypes.func.isRequired,
};