export const validateConfig = (config) => {
    const errors = [];

    if (config.totalTickets <= 0) {
        errors.push({
            field: 'totalTickets',
            message: 'Total tickets must be greater than 0',
        });
    }

    if (config.ticketReleaseRate <= 0 || config.ticketReleaseRate > 100) {
        errors.push({
            field: 'ticketReleaseRate',
            message: 'Release rate must be between 1 and 100',
        });
    }

    if (config.customerRetrievalRate <= 0 || config.customerRetrievalRate > 100) {
        errors.push({
            field: 'customerRetrievalRate',
            message: 'Retrieval rate must be between 1 and 100',
        });
    }

    if (config.maxTicketCapacity <= 0 || config.maxTicketCapacity < config.totalTickets) {
        errors.push({
            field: 'maxTicketCapacity',
            message: 'Capacity must be greater than 0 and total tickets',
        });
    }

    if (config.numberOfCustomers <= 0) {
        errors.push({
            field: 'numberOfCustomers',
            message: 'Number of customers must be greater than 0',
        });
    }

    if (config.numberOfVendors <= 0) {
        errors.push({
            field: 'numberOfVendors',
            message: 'Number of vendors must be greater than 0',
        });
    }

    return errors;
};