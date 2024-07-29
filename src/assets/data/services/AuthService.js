import axios from 'axios';

const API_URL = '';

const register = (username, password, email) => {
    return axios.post(`${API_URL}/register`, {
        username,
        password,
        email
    });
};

const login = (email, password) => {
    return axios.post(`${API_URL}/login`, {
        email,
        password
    });
};

export default {
    register,
    login
};