import axios from 'axios';

const API_URL = 'http://10.0.2.2:5001/api/role';

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