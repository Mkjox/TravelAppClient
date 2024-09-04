import axios from 'axios';

const API_URL = 'https://localhost:7117/api/follow/';

const followUser = async (followerId, followeeId) => {
    try {
        const response = await axios.post(`${API_URL}/followUser`, { followerId, followeeId });
        return response.data;
    }
    catch (error) {
        throw error.response.data;
    }
};

const unfollowUser = async (followerId, followeeId) => {
    try {
        const response = await axios.post(`${API_URL}/unfollowUser`, { followerId, followeeId });
        return response.data;
    }
    catch (error) {
        throw error.response.data;
    }
};

const listFollowingUsers = async (followerId, followeeId) => {
    try {
        const response = await axios.get(`${API_URL}/following`, { followerId, followeeId });
        return response.data;
    }
    catch (error) {
        throw error.response.data;
    }
};

const listFollowerUsers = async (followeeId, followerId) => {
    try {
        const response = await axios.get(`${API_URL}/followers`, {followeeId, followerId});
        return response.data;
    }
    catch (error) {
        throw error.response.data;
    }
};

export default {
    followUser,
    unfollowUser,
    listFollowingUsers,
    listFollowerUsers
};