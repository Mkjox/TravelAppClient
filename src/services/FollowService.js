import api from './api';


const followUser = async (followerId, followeeId) => {
    try {
        const response = await api.post(`follow/followUser`, { followerId, followeeId });
        return response.data;
    }
    catch (error) {
        throw error.response.data;
    }
};

const unfollowUser = async (followerId, followeeId) => {
    try {
        const response = await api.post(`follow/unfollowUser`, { followerId, followeeId });
        return response.data;
    }
    catch (error) {
        throw error.response.data;
    }
};

const listFollowingUsers = async (followerId, followeeId) => {
    try {
        const response = await api.get(`follow/following`, { followerId, followeeId });
        return response.data;
    }
    catch (error) {
        throw error.response.data;
    }
};

const listFollowerUsers = async (followeeId, followerId) => {
    try {
        const response = await api.get(`follow/followers`, {followeeId, followerId});
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