import axios from "axios";

const API_URL = "https://localhost:7117/Category";

const addCategory = async (Name, Description, IsActive) => {
    try {
        const response = await axios.post(`${API_URL}/Category/Add`, { Name, Description, IsActive });
        return response.data;
    }
    catch (error) {
        return error.response.data;
    }
};

const updateCategory = async (Name, Description, IsActive, IsDeleted) => {
    try {
        const response = await axios.post(`${API_URL}/Category/Update`, { Name, Description, IsActive, IsDeleted });
        return response.data;
    }
    catch (error) {
        return error.response.data;
    }
};

const deleteCategory = async (categoryId) => {
    try {
        const response = await axios.delete(`${API_URL}/Category/DeleteCategory/${categoryId}`);
        return response.data;
    }
    catch (error) {
        return error.response.data;
    }
}

const hardDelete = async (categoryId) => {
    try {
        const response = await axios.delete(`${API_URL}/Category/HardDeleteCategory/${categoryId}`);
        return response.data;
    }
    catch (error) {
        return error.response.data;
    }
}

const undoDelete = async (categoryId, modifiedByName) => {
    try {
        const response = await axios.post(`${API_URL}/Category/UndoDelete/${categoryId}`, { modifiedByName });
        return response.data;
    }
    catch (error) {
        return error.response.data;
    }
}

const getCategories = async (categoryId) => {
    try {
        const response = await axios.get(`${API_URL}/Category/GetCategoryById/${categoryId}`);
        return response.data;
    }
    catch (error) {
        return error.response.data;
    }
}

const getAllCategories = async () => {
    try {
        const response = await axios.get(`${API_URL}/Category/GetAllCategories`);
        return response.data;
    }
    catch (error) {
        return error.response.data;
    }
};

const getAllByDeleted = async () => {
    try {
        const response = await axios.get(`${API_URL}/Categories/GetAllByDeleted`);
        return response.data;
    }
    catch (error) {
        return error.response.data;
    }
};

const getAllByNonDeleted = async () => {
    try {
        const response = await axios.get(`${API_URL}/Categories/GetAllByNonDeleted`);
        return response.data;
    }
    catch (error) {
        return error.response.data;
    }
};

const getAllByNonDeletedAndActive = async () => {
    try {
        const response = await axios.get(`${API_URL}/Categories/GetAllByNonDeletedAndActive`);
        return response.data;
    }
    catch (error) {
        return error.response.data;
    }
};

const countCategories = async () => {
    try {
        const response = await axios.post(`${API_URL}/Categories/CountCategories`);
        return response.data;
    }
    catch (error) {
        return error.response.data;
    }
};

const countByNonDeletedCategories = async () => {
    try {
        const response = await axios.post(`${API_URL}/Categories/CountByNonDeletedCategories`);
        return response.data;
    }
    catch (error) {
        return error.response.data;
    }
};


export default {
    addCategory,
    updateCategory,
    deleteCategory,
    hardDelete,
    undoDelete,
    getCategories,
    getAllCategories,
    getAllByDeleted,
    getAllByNonDeleted,
    getAllByNonDeletedAndActive,
    countCategories,
    countByNonDeletedCategories
};