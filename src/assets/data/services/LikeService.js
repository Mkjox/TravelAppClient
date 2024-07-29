import axios from 'axios';

const API_URL = '';

const likePost = async (userId, postId) => {
    try {
        const response = await axios.post(`${API_URL}/like`, { userId, postId });
        return response.data;
    }
    catch (error) {
        throw error.response.data;
    }
};

const unlikePost = async (userId, postId) => {
    try {
        const response = await axios.post(`${API_URL}/unlike`, { userId, postId });
        return response.data;
    }
    catch (error) {
        throw error.response.data;
    }
};

export default {
    likePost,
    unlikePost
};