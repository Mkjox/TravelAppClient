import axios from 'axios';

const API_URL = 'https://localhost:7117/Post';

const addPost = async (thumbnail, title, content, balance, rating, duration) => {
    try {
        const response = await axios.post(`${API_URL}/Add`, {
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

const updatePost = async (title, content, thumbnail, balance, rating, duration) => {
    try {
        const response = await axios.post(`${API_URL}/Update`, {
            title,
            content,
            thumbnail,
            balance,
            rating,
            duration
        });
        return response.data;
    }
    catch (error) {
        throw error.response.data;
    }
};

const deletePost = async (postId) => {
    try {
        const response = await axios.delete(`${API_URL}/Delete/${postId}`);
        return response.data;
    }
    catch (error) {
        throw error.response.data;
    }
};

const hardDeletePost = async (postId) => {
    try {
        const response = await axios.delete(`${API_URL}/HardDelete/${postId}`);
        return response.data;
    }
    catch (error) {
        throw error.response.data;
    }
};

const undoDeletePost = async (postId) => {
    try {
        const response = await axios.post(`${API_URL}/UndoDelete/${postId}`);
        return response.data;
    }
    catch (error) {
        throw error.response.data;
    }
};

const getPost = async (postId) => {
    try {
        const response = await axios.get(`${API_URL}/GetPost/${postId}`);
        return response.data;
    }
    catch (error) {
        throw error.response.data;
    }
};

const getAllPosts = async () => {
    try {
        const response = await axios.get(`${API_URL}/GetAllPosts`);
        return response.data;
    }
    catch (error) {
        throw error.response.data;
    }
};

const getAllPostsByNonDeleted = async () => {
    try {
        const response = await axios.get(`${API_URL}/GetAllByNonDeleted`);
        return response.data;
    }
    catch (error) {
        throw error.response.data;
    }
};

const getAllPostsByNonDeletedAndActive = async () => {
    try {
        const response = await axios.get(`${API_URL}/GetAllByNonDeletedAndActive`);
        return response.data;
    }
    catch (error) {
        throw error.response.data;
    }
};

const getAllPostsByDeleted = async () => {
    try {
        const response = await axios.get(`${API_URL}/GetAllDeleted`);
        return response.data;
    }
    catch (error) {
        throw error.response.data;
    }
};

export default {
    addPost,
    updatePost,
    deletePost,
    hardDeletePost,
    undoDeletePost,
    getPost,
    getAllPosts,
    getAllPostsByNonDeleted,
    getAllPostsByNonDeletedAndActive,
    getAllPostsByDeleted
};