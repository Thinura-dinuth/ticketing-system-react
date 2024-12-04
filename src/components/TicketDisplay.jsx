import PropTypes from 'prop-types';

export default function TicketDisplay({ config }) {
    return (
        <div>
            <h1>Ticket Availability</h1>
            <p>Total Tickets: {config.totalTickets}</p>
            <p>Ticket Release Rate: {config.ticketReleaseRate}</p>
            <p>Customer Retrieval Rate: {config.customerRetrievalRate}</p>
            <p>Max Ticket Capacity: {config.maxTicketCapacity}</p>
        </div>
    );
}

TicketDisplay.propTypes = {
    config: PropTypes.object.isRequired,
};