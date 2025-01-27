import axios from 'axios';

const API_URL = 'http://10.0.2.2:5001/api/post';

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
            return response;
        }
        catch (error) {
            throw error.response;
        }
    },

    getAllPosts: async () => {
        try {
            const response = await axios.get(`${API_URL}/GetAllPosts`);
            return response;
        }
        catch (error) {
            throw error.response;
        }
    },

    getAllPostsByNonDeleted: async () => {
        try {
            const response = await axios.get(`${API_URL}/GetAllByNonDeleted`);
            return response;
        }
        catch (error) {
            throw error.response;
        }
    },

    getAllPostsByNonDeletedAndActive: async () => {
        try {
            const response = await axios.get(`${API_URL}/GetAllByNonDeletedAndActive`);
            return response;
        }
        catch (error) {
            throw error.response;
        }
    },

    getAllPostsByDeleted: async () => {
        try {
            const response = await axios.get(`${API_URL}/GetAllDeleted`);
            return response;
        }
        catch (error) {
            throw error.response;
        }
    },

        searchPost: async (keyword, isAscending) => {
            try {
                const response = await axios.get(`${API_URL}/Search`, {
                    params: {
                        keyword,
                        isAscending
                    },
                });
                return response.data;
            }
            catch (error) {
                throw error.response?.data || 'Error occurred during search';
            }
    }
};

export default PostService;