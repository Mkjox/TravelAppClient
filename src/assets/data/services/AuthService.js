import axios from 'axios';

const API_URL = 'https://localhost:7117';

const register = async (username, password, email) => {
    return axios.post(`${API_URL}/register`, {
        username,
        password,
        email
    });
};

const login = async (email, password) => {
    return axios.post(`${API_URL}/login`, {
        email,
        password
    });
};

export default {
    register,
    login
};