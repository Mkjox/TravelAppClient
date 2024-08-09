import axios from 'axios';

const API_URL = 'https://localhost:7117/Like';

const likePost = async (userId, postId) => {
    try {
        const response = await axios.post(`${API_URL}/likePost`, { userId, postId });
        return response.data;
    }
    catch (error) {
        throw error.response.data;
    }
};

const unlikePost = async (userId, postId) => {
    try {
        const response = await axios.post(`${API_URL}/unlikePost`, { userId, postId });
        return response.data;
    }
    catch (error) {
        throw error.response.data;
    }
};

const likeComment = async (userId, commentId) => {
    try {
        const response = await axios.post(`${API_URL}/likeComment`, {userId,commentId});
        return response.data;
    }
    catch(error) {
        throw error.response.data;
    }
};

const unlikeComment = async (userId, commentId) => {
    try {
        const response = await axios.post(`${API_URL}/unlikeComment`, {userId,commentId});
        return response.data;
    }
    catch(error) {
        throw error.response.data;
    }
};

export default {
    likePost,
    unlikePost,
    likeComment,
    unlikeComment
};