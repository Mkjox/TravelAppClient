import axios from 'axios';

const API_URL = 'https://localhost:7117/Follow/';

const followUser = async (followerId, followeeId) => {
    try {
        const response  = await axios.post(`{API_URL}/follow`, {followerId,followeeId});
        return response.data;
    }
    catch(error) {
        throw error.response.data;
    }
};

const unfollowUser = async (followerId, followeeId) => {
    try {
        const response = await axios.post(`${API_URL}/unfollow`, {followerId,followeeId});
        return response.data;
    }
    catch(error) {
        throw error.response.data;
    }
};

export default {
    followUser,
    unfollowUser
};