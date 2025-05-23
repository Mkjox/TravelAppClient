import axios from 'axios';

const API_URL = "https://localhost:7117";

class HttpClient {
    constructor(endpoint) {
        this.api = axios.create({
            baseURL: `${API_URL}${endpoint}`,
            headers: {
                "Content-Type": "application/json",
            },
        });
    }

    async getAll(queryString = "") {
        try {
            const response = await this.api.get(queryString);
            return response.data;
        }
        catch (error) {
            console.error("Error fetching data:", error);
            throw error;
        }
    }

    async getById(id) {
        try {
            const response = await this.api.get(`/${id}`);
            return response.data;
        }
        catch (error) {
            console.error(`Error fetching item with id ${id}`, error);
            throw error;
        }
    }

    async create(data) {
        try {
            const response = await this.api.post("", data);
            return response.data;
        }
        catch (error) {
            console.error("Error creating item:", error);
            throw error;
        }
    }
    
    async update(id, data) {
        try {
            const response = await this.api.put(`/${id}`, data);
            return response.data;
        }
        catch (error) {
            console.error(`Error updating item with id ${id}:`, error);
            throw error;
        }
    }

    async delete(id) {
        try {
            await this.api.delete(`/${id}`);
        }
        catch (error) {
            console.error(`Error deleting item with id ${id}:`, error);
            throw error;
        }
    }
}

export default HttpClient;