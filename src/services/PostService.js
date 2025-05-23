import axios from 'axios';
import api from './api';

const PostService = {
    addPost: async (title, content, thumbnail, balance, rating, duration, categoryId, location) => {
        try {
            const response = await api.post('post/Add', {
                title,
                content,
                thumbnail,
                balance,
                rating,
                duration,
                categoryId,
                location
            });
            return response.data;
        }
        catch (error) {
            throw error.response.data;
        }
    },

    updatePost: async (title, content, thumbnail, balance, rating, duration, categoryId, location) => {
        try {
            const response = await api.post('post/Update', {
                title,
                content,
                thumbnail,
                balance,
                rating,
                duration,
                categoryId,
                location
            });
            return response.data;
        }
        catch (error) {
            throw error.response.data;
        }
    },

    deletePost: async (postId) => {
        try {
            const response = await api.delete(`post/Delete/${postId}`);
            return response.data;
        }
        catch (error) {
            throw error.response.data;
        }
    },

    hardDeletePost: async (postId) => {
        try {
            const response = await api.delete(`post/HardDelete/${postId}`);
            return response.data;
        }
        catch (error) {
            throw error.response.data;
        }
    },

    undoDeletePost: async (postId) => {
        try {
            const response = await api.post(`post/UndoDelete/${postId}`);
            return response.data;
        }
        catch (error) {
            throw error.response.data;
        }
    },

    getPost: async (postId) => {
        try {
            const response = await api.get(`post/GetPost/${postId}`);
            return response;
        }
        catch (error) {
            throw error.response;
        }
    },

    getAllPosts: async () => {
        try {
            const response = await api.get('post/GetAllPosts');
            return response;
        }
        catch (error) {
            throw error.response;
        }
    },

    getAllPostsByNonDeleted: async () => {
        try {
            const response = await api.get('post/GetAllByNonDeleted');
            return response;
        }
        catch (error) {
            throw error.response;
        }
    },

    getAllPostsByNonDeletedAndActive: async () => {
        try {
            const response = await api.get('post/GetAllByNonDeletedAndActive');
            return response;
        }
        catch (error) {
            throw error.response;
        }
    },

    getAllPostsByDeleted: async () => {
        try {
            const response = await api.get('post/GetAllDeleted');
            return response;
        }
        catch (error) {
            throw error.response;
        }
    },

    searchPost: async (keyword, isAscending) => {
        try {
            const response = await api.get('post/Search', {
                params: {
                    keyword,
                    isAscending
                },
            });
            return response;
        }
        catch (error) {
            throw error.response || 'Error occurred during search';
        }
    }
};

export default PostService;