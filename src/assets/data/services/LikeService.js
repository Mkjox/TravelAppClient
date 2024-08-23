import axios from 'axios';

const API_URL = 'https://localhost:7117/api/like';

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

const isPostLiked = async (postId, userId) => {
    try {
        const response = await axios.get(`${API_URL}/IsLiked/${postId}/${userId}`);
        return response.data.IsLiked;
    }
    catch (error) 
    {
        console.error('Encountered an error while checking if post is liked', error);
        throw error;
    }
};

const isCommentLiked = async(commentId, userId) => {
    try {
        const response = await axios.get(`${API_URL}/IsLiked/${commentId}/${userId}`);
        return response.data.IsLiked;
    }
    catch (error) {
        throw error.response.data;
    }
};

export default {
    likePost,
    unlikePost,
    likeComment,
    unlikeComment,
    isPostLiked,
    isCommentLiked
};