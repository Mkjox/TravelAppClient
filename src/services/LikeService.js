import api from './api';

const LikeService = {
    likePost: async (userId, postId) => {
        try {
            const response = await api.post(`like/likePost`, { userId, postId });
            return response.data;
        }
        catch (error) {
            throw error.response.data;
        }
    },

    unlikePost: async (userId, postId) => {
        try {
            const response = await api.post(`like/unlikePost`, { userId, postId });
            return response.data;
        }
        catch (error) {
            throw error.response.data;
        }
    },

    likeComment: async (userId, commentId) => {
        try {
            const response = await api.post(`like/likeComment`, { userId, commentId });
            return response.data;
        }
        catch (error) {
            throw error.response.data;
        }
    },

    unlikeComment: async (userId, commentId) => {
        try {
            const response = await api.post(`like/unlikeComment`, { userId, commentId });
            return response.data;
        }
        catch (error) {
            throw error.response.data;
        }
    },

    isPostLiked: async (postId, userId) => {
        try {
            const response = await api.get(`like/IsLikedPost/${postId}/${userId}`);
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
            const response = await api.get(`like/IsLikedComment/${commentId}/${userId}`);
            return response.data.IsLiked;
        }
        catch (error) {
            throw error.response.data;
        }
    },
};

export default LikeService;