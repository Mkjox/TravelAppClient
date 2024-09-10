import axios from 'axios';

const API_URL = 'http://10.0.2.2:5001/api/like';

const LikeService = {
    likePost: async (userId, postId) => {
        try {
            const response = await axios.post(`${API_URL}/likePost`, { userId, postId });
            return response.data;
        }
        catch (error) {
            throw error.response.data;
        }
    },

    unlikePost: async (userId, postId) => {
        try {
            const response = await axios.post(`${API_URL}/unlikePost`, { userId, postId });
            return response.data;
        }
        catch (error) {
            throw error.response.data;
        }
    },

    likeComment: async (userId, commentId) => {
        try {
            const response = await axios.post(`${API_URL}/likeComment`, { userId, commentId });
            return response.data;
        }
        catch (error) {
            throw error.response.data;
        }
    },

    unlikeComment: async (userId, commentId) => {
        try {
            const response = await axios.post(`${API_URL}/unlikeComment`, { userId, commentId });
            return response.data;
        }
        catch (error) {
            throw error.response.data;
        }
    },

    isPostLiked: async (postId, userId) => {
        try {
            const response = await axios.get(`${API_URL}/IsLikedPost/${postId}/${userId}`);
            console.log(response.data);
            return response.data.IsLiked;
        }
        catch (error) {
            console.error('Encountered an error while checking if post is liked', error);
            throw error;
        }
    },

    isCommentLiked: async (commentId, userId) => {
        try {
            const response = await axios.get(`${API_URL}/IsLikedComment/${commentId}/${userId}`);
            return response.data.IsLiked;
        }
        catch (error) {
            throw error.response.data;
        }
    },
};

export default LikeService;