import axios from "axios";

const API_URL = "https://localhost:7117/api/category";

const addCategory = async (Name, Description, IsActive) => {
    try {
        const response = await axios.post(`${API_URL}/Add`, { Name, Description, IsActive });
        return response.data;
    }
    catch (error) {
        return error.response.data;
    }
};

const updateCategory = async (Name, Description, IsActive, IsDeleted) => {
    try {
        const response = await axios.post(`${API_URL}/Update`, { Name, Description, IsActive, IsDeleted });
        return response.data;
    }
    catch (error) {
        return error.response.data;
    }
};

const deleteCategory = async (categoryId) => {
    try {
        const response = await axios.delete(`${API_URL}/DeleteCategory/${categoryId}`);
        return response.data;
    }
    catch (error) {
        return error.response.data;
    }
}

const hardDelete = async (categoryId) => {
    try {
        const response = await axios.delete(`${API_URL}/HardDeleteCategory/${categoryId}`);
        return response.data;
    }
    catch (error) {
        return error.response.data;
    }
}

const undoDelete = async (categoryId, modifiedByName) => {
    try {
        const response = await axios.post(`${API_URL}/UndoDelete/${categoryId}`, { modifiedByName });
        return response.data;
    }
    catch (error) {
        return error.response.data;
    }
}

const getCategories = async (categoryId) => {
    try {
        const response = await axios.get(`${API_URL}/GetCategoryById/${categoryId}`);
        return response.data;
    }
    catch (error) {
        return error.response.data;
    }
}

const getAllCategories = async () => {
    try {
        const response = await axios.get(`${API_URL}/GetAllCategories`);
        return response.data;
    }
    catch (error) {
        return error.response.data;
    }
};

const getAllByDeleted = async () => {
    try {
        const response = await axios.get(`${API_URL}/GetAllByDeleted`);
        return response.data;
    }
    catch (error) {
        return error.response.data;
    }
};

const getAllByNonDeleted = async () => {
    try {
        const response = await axios.get(`${API_URL}/GetAllByNonDeleted`);
        return response.data;
    }
    catch (error) {
        return error.response.data;
    }
};

const getAllByNonDeletedAndActive = async () => {
    try {
        const response = await axios.get(`${API_URL}/GetAllByNonDeletedAndActive`);
        return response.data;
    }
    catch (error) {
        return error.response.data;
    }
};

const countCategories = async () => {
    try {
        const response = await axios.post(`${API_URL}/CountCategories`);
        return response.data;
    }
    catch (error) {
        return error.response.data;
    }
};

const countByNonDeletedCategories = async () => {
    try {
        const response = await axios.post(`${API_URL}/CountByNonDeletedCategories`);
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