import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

const API_URL = 'http://10.0.2.2:5001/api/auth';

const AuthService = {
    login: async (email, password) => {
        try {
            const credentials = { email, password };
            const response = await axios.post(`${API_URL}/login`, credentials);

            await AsyncStorage.setItem('authToken', response.data.token);
            await AuthService.fetchAndStoreUserInfo(response.data.token);
        }
        catch (error) {
            console.error('Login failed:', error.response ? error.response.data : error.message);
            throw new Error('Login failed. Please check your credentials and try again.');
        }
    },

    register: async (username, password, email) => {
        try {
            const registrationData = {
                username, password, email
            };

            const response = await axios.post(`${API_URL}/register`, { userAddDto: registrationData });

            await AsyncStorage.setItem('authToken', response.data.token);
            await AuthService.fetchAndStoreUserInfo(response.data.token);
        }
        catch (error) {
            console.error('Registration failed:', error.response ? error.response.data : error.message);
            throw new Error('Registration failed. Please check your information and try again.');
        }
    },

    fetchAndStoreUserInfo: async (token) => {
        try {
            const response = await axios.get(`${API_URL}/current-user`, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });

            await AsyncStorage.setItem('userInfo', JSON.stringify(response.data));
            console.log('User information stored successfully:', response.data);
        }
        catch (error) {
            console.error('Failed to fetch user info:', error);
            throw error;
        }
    }
};

export default AuthService;