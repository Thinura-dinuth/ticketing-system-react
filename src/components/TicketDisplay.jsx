// src/components/TicketDisplay.jsx
import PropTypes from 'prop-types';
import ControlPanel from './ControlPanel';
import LogDisplay from './LogDisplay';

export default function TicketDisplay({ config, logs, onStart, onStop }) {
    return (
        <div>
            <h1>Ticket Availability</h1>
            <p>Total Tickets: {config.totalTickets}</p>
            <p>Ticket Release Rate: {config.ticketReleaseRate}</p>
            <p>Customer Retrieval Rate: {config.customerRetrievalRate}</p>
            <p>Max Ticket Capacity: {config.maxTicketCapacity}</p>
            <ControlPanel onStart={onStart} onStop={onStop}/>
            <LogDisplay logs={logs}/>
        </div>
    );
}

TicketDisplay.propTypes = {
    config: PropTypes.object.isRequired,
    logs: PropTypes.arrayOf(PropTypes.string).isRequired,
    onStart: PropTypes.func.isRequired,
    onStop: PropTypes.func.isRequired,
};