import axios from 'axios';

const API_URL = '';

const addPost = async (photo, title, content, balance, rating, duration) => {
    try {
        const response = await axios.post(`${API_URL}`, {
            thumbnail,
            title,
            content,
            balance,
            rating,
            duration,
            category
        });
        return response.data;
    }
    catch (error) {
        throw error.response.data;
    }
};

export default {
    addPost
};