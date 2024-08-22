import axios from 'axios';

const API_URL = 'https://localhost:7117/api';

const addPost = async (thumbnail, title, content, balance, rating, duration) => {
    try {
        const response = await axios.post(`${API_URL}/Post/Add`, {
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
        const response = await axios.post(`${API_URL}/Post/Update`, {
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
        const response = await axios.delete(`${API_URL}/Post/Delete/${postId}`);
        return response.data;
    }
    catch (error) {
        throw error.response.data;
    }
};

const hardDeletePost = async (postId) => {
    try {
        const response = await axios.delete(`${API_URL}/Post/HardDelete/${postId}`);
        return response.data;
    }
    catch (error) {
        throw error.response.data;
    }
};

const undoDeletePost = async (postId) => {
    try {
        const response = await axios.post(`${API_URL}/Post/UndoDelete/${postId}`);
        return response.data;
    }
    catch (error) {
        throw error.response.data;
    }
};

const getPost = async (postId) => {
    try {
        const response = await axios.get(`${API_URL}/Post/GetPost/${postId}`);
        return response.data;
    }
    catch (error) {
        throw error.response.data;
    }
};

const getAllPosts = async () => {
    try {
        const response = await axios.get(`${API_URL}/Post/GetAllPosts`);
        return response.data;
    }
    catch (error) {
        throw error.response.data;
    }
};

const getAllPostsByNonDeleted = async () => {
    try {
        const response = await axios.get(`${API_URL}/Post/GetAllByNonDeleted`);
        return response.data;
    }
    catch (error) {
        throw error.response.data;
    }
};

const getAllPostsByNonDeletedAndActive = async () => {
    try {
        const response = await axios.get(`${API_URL}/Post/GetAllByNonDeletedAndActive`);
        return response.data;
    }
    catch (error) {
        throw error.response.data;
    }
};

const getAllPostsByDeleted = async () => {
    try {
        const response = await axios.get(`${API_URL}/Post/GetAllDeleted`);
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