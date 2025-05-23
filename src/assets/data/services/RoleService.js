import api from './api';


export const assignRole = async (userId, roleName) => {
    try {
        const response = await api.post(`role/AssignRole`, null, {
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