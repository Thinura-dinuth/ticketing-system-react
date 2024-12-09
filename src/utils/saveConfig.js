import axios from 'axios';

export const saveConfigToFile = async (config) => {
    try {
        const response = await axios.post('http://localhost:8080/api/save-config', JSON.stringify(config, null, 2), {
            headers: {
                'Content-Type': 'application/json'
            }
        });
        console.log(response.data);
    } catch (error) {
        console.error('Error saving configuration:', error);
    }
};