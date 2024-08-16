import axios from 'axios';

const API_URL = 'https://localhost:7117/api/Role';

export const assignRole = async (userId, roleName) => {
    try {
        const response = await axios.post(`${API_URL}/AssignRole`, null, {
            params: {
                userId,
                roleName
            }
        });
        return response.data;
    }
    catch (error) {
        if(error.response&&error.response.data) {
            throw new Error (error.response.data ||'An error occured while assigning the role.');
        }
        throw new Error('An error occured while assigning the role.');
    }
};

export default assignRole;