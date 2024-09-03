import axios from 'axios';

const API_URL = 'https://192.168.1.110:7117/api/post';

const PostService = {
    addPost: async (title, content, thumbnail, balance, rating, duration, categoryId, location) => {
        try {
            const response = await axios.post(`${API_URL}/Add`, {
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
            const response = await axios.post(`${API_URL}/Update`, {
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
            const response = await axios.delete(`${API_URL}/Delete/${postId}`);
            return response.data;
        }
        catch (error) {
            throw error.response.data;
        }
    },

    hardDeletePost: async (postId) => {
        try {
            const response = await axios.delete(`${API_URL}/HardDelete/${postId}`);
            return response.data;
        }
        catch (error) {
            throw error.response.data;
        }
    },

    undoDeletePost: async (postId) => {
        try {
            const response = await axios.post(`${API_URL}/UndoDelete/${postId}`);
            return response.data;
        }
        catch (error) {
            throw error.response.data;
        }
    },

    getPost: async (postId) => {
        try {
            const response = await axios.get(`${API_URL}/GetPost/${postId}`);
            return response.data;
        }
        catch (error) {
            throw error.response.data;
        }
    },

    getAllPosts: async () => {
        try {
            const response = await axios.get(`${API_URL}/GetAllPosts`);
            return response.data;
        }
        catch (error) {
            throw error.response.data;
        }
    },

    getAllPostsByNonDeleted: async () => {
        try {
            const response = await axios.get(`${API_URL}/GetAllByNonDeleted`);
            return response.data;
        }
        catch (error) {
            throw error.response.data;
        }
    },

    getAllPostsByNonDeletedAndActive: async () => {
        try {
            const response = await axios.get(`${API_URL}/GetAllByNonDeletedAndActive`);
            console.log(response.data);
            return response.data;
        }
        catch (error) {
            throw error.response.data;
        }
    },

    getAllPostsByDeleted: async () => {
        try {
            const response = await axios.get(`${API_URL}/GetAllDeleted`);
            return response.data;
        }
        catch (error) {
            throw error.response.data;
        }
    },
};

export default PostService;