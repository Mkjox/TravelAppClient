import api from "./api";

const CategoryService = {
    addCategory: async (Name, Description, IsActive) => {
        try {
            const response = await api.post('category/Add', {
                Name,
                Description,
                IsActive
            });
            return response.data;
        }
        catch (error) {
            return error.response.data;
        }
    },

    updateCategory: async (Name, Description, IsActive, IsDeleted) => {
        try {
            const response = await api.post('category/Update', {
                Name,
                Description,
                IsActive,
                IsDeleted
            });
            return response.data;
        }
        catch (error) {
            return error.response.data;
        }
    },

    deleteCategory: async (categoryId) => {
        try {
            const response = await api.delete(`category/DeleteCategory/${categoryId}`);
            return response.data;
        }
        catch (error) {
            return error.response.data;
        }
    },

    hardDelete: async (categoryId) => {
        try {
            const response = await api.delete(`category/HardDeleteCategory/${categoryId}`);
            return response.data;
        }
        catch (error) {
            return error.response.data;
        }
    },

    undoDelete: async (categoryId, modifiedByName) => {
        try {
            const response = await api.post(`category/UndoDelete/${categoryId}`, {
                modifiedByName
            });
            return response.data;
        }
        catch (error) {
            return error.response.data;
        }
    },

    getCategoryById: async (categoryId) => {
        try {
            const response = await api.get(`category/GetCategoryById/${categoryId}`)
            return response;
        }
        catch (error) {
            return error.response;
        }
    },

    getAllCategories: async () => {
        try {
            const response = await api.get('category/GetAllCategories');
            return response;
        }
        catch (error) {
            return error.response;
        }
    },

    getAllByDeleted: async () => {
        try {
            const response = await api.get('category/GetAllByDeleted');
            return response;
        }
        catch (error) {
            return error.response;
        }
    },

    getAllByNonDeleted: async () => {
        try {
            const response = await api.get('category/GetAllByNonDeleted');
            return response;
        }
        catch (error) {
            return error.response;
        }
    },

    getAllByNonDeletedAndActive: async () => {
        try {
            const response = await api.get('category/GetAllByNonDeletedAndActive');
            return response;
        }
        catch (error) {
            return error.response;
        }
    },

    countCategories: async () => {
        try {
            const response = await api.get('category/CountCategories');
            return response;
        }
        catch (error) {
            return error.response;
        }
    },

    countByNonDeletedCategories: async () => {
        try {
            const response = await api.get('category/CountByNonDeletedCategories');
            return response;
        }
        catch (error) {
            return error.response;
        }
    },
};

export default CategoryService;