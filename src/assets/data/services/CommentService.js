import axios from 'axios';

const API_URL = 'https://localhost:7117/Comment';

// need CreatedByName into it
// IT NEEDS UNDO DELETE

const addComment = async (comment, postId) => {
    try {
        const response = await axios.post(`${API_URL}/AddComment`, {
            comment,
            postId
        });
        return response.data;
    }
    catch (error) {
        throw error.response.data;
    }
}

const updateComment = async (comment, postId) => {
    try {
        const response = await axios.put(`${API_URL}/UpdateComment`, {
            comment,
            postId
        });
        return response.data;
    }
    catch (error) {
        throw error.response.data;
    }
};

const deleteComment = async (commentId) => {
    try {
        const response = await axios.put(`${API_URL}/DeleteComment`, {
            commentId
        });
        return response.data;
    }
    catch (error) {
        throw error.response.data;
    }
};

const hardDeleteComment = async (commentId) => {
    try {
        const response = await axios.delete(`${API_URL}/HardDeleteComment`, {
            commentId
        });
        return response.data;
    }
    catch (error) {
        throw error.response.data;
    }
};


const getCommentById = async (commentId) => {
    try {
        const response = await axios.get(`${API_URL}/GetCommentById`, {
            commentId
        });
        return response.data;
    }
    catch (error) {
        throw error.response.data;
    }
};

const getAllComments = async () => {
    try {
        const response = await axios.get(`${API_URL}/GetAllComments`);
        return response.data;
    }
    catch (error) {
        throw error.response.data;
    }
};

const getDeletedComments = async () => {
    try {
        const response = await axios.get(`${API_URL}/GetDeletedComments`);
        return response.data;
    }
    catch (error) {
        throw error.response.data;
    }
};

const getAllCommentsByNonDeleted = async () => {
    try {
        const response = await axios.get(`${API_URL}/GetAllByNonDeleted`);
        return response.data;
    }
    catch (error) {
        throw error.response.data;
    }
};

const getAllCommentsByNonDeletedAndActive = async () => {
    try {
        const response = await axios.get(`${API_URL}/GetAllByNonDeletedAndActive`);
        return response.data;
    }
    catch (error) {
        throw error.response.data;
    }
};

const countComments = async () => {
    try {
        const response = await axios.get(`${API_URL}/CountComments`);
        return response.data;
    }
    catch (error) {
        throw error.response.data;
    }
};

const countNonDeletedComments = async () => {
    try {
        const response = await axios.get(`${API_URL}/CountNonDeletedComments`);
        return response.data;
    }
    catch (error) {
        throw error.response.data;
    }
};

export default {
    addComment,
    updateComment,
    deleteComment,
    hardDeleteComment,
    getCommentById,
    getAllComments,
    getDeletedComments,
    getAllCommentsByNonDeleted,
    getAllCommentsByNonDeletedAndActive,
    countComments,
    countNonDeletedComments
};