import axios from 'axios';

export const startProcess = async () => {
    try {
        const response = await axios.post('http://localhost:8080/api/start-process');
        console.log(response.data);
    } catch (error) {
        console.error('Error starting process:', error);
    }
};