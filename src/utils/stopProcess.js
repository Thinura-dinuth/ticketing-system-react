import axios from "axios";

export const stopProcess = async () => {
    try {
        await axios.post('http://localhost:8080/api/stop-process');
        console.log('Process stopped successfully');
    } catch (error) {
        console.error('Error stopping process:', error);
    }
};