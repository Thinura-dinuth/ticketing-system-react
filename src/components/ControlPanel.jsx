import PropTypes from 'prop-types';

export default function ControlPanel({ onStart, onStop }) {
    return (
        <div>
            <button onClick={onStart}>Start</button>
            <button onClick={onStop}>Stop</button>
        </div>
    );
}

ControlPanel.propTypes = {
    onStart: PropTypes.func.isRequired,
    onStop: PropTypes.func.isRequired,
};