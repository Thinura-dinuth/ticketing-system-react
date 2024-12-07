import PropTypes from 'prop-types';

export default function LogDisplay({ logs }) {
    return (
        <div>
            <h2>Logs</h2>
            <ul>
                {logs.map((log, index) => (
                    <li key={index}>{log}</li>
                ))}
            </ul>
        </div>
    );
}

LogDisplay.propTypes = {
    logs: PropTypes.arrayOf(PropTypes.string).isRequired,
};