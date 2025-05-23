import api from './api';


// need CreatedByName into it
// IT NEEDS UNDO DELETE

const addComment = async (comment, postId) => {
    try {
        const response = await api.post(`comment/AddComment`, {
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
        const response = await api.put(`comment/UpdateComment`, {
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
        const response = await api.put(`comment/DeleteComment`, {
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
        const response = await api.delete(`comment/HardDeleteComment`, {
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
        const response = await api.get(`comment/GetCommentById`, {
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
        const response = await api.get(`comment/GetAllComments`);
        return response.data;
    }
    catch (error) {
        throw error.response.data;
    }
};

const getDeletedComments = async () => {
    try {
        const response = await api.get(`comment/GetDeletedComments`);
        return response.data;
    }
    catch (error) {
        throw error.response.data;
    }
};

const getAllCommentsByNonDeleted = async () => {
    try {
        const response = await api.get(`comment/GetAllByNonDeleted`);
        return response.data;
    }
    catch (error) {
        throw error.response.data;
    }
};

const getAllCommentsByNonDeletedAndActive = async () => {
    try {
        const response = await api.get(`comment/GetAllByNonDeletedAndActive`);
        return response.data;
    }
    catch (error) {
        throw error.response.data;
    }
};

const countComments = async () => {
    try {
        const response = await api.get(`comment/CountComments`);
        return response.data;
    }
    catch (error) {
        throw error.response.data;
    }
};

const countNonDeletedComments = async () => {
    try {
        const response = await api.get(`comment/CountNonDeletedComments`);
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