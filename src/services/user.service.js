import axios from "../api/axios";

const DATA_SERVICE_URL = `${process.env.API_URL + ':' + process.env.API_PORT}/v1/`;

const getPublicContent = () => {
    return axios.get(DATA_SERVICE_URL + 'users');
};

const getUserBoard = () => {
    return axios.get(DATA_SERVICE_URL + 'user');
};

const getModeratorBoard = () => {
    return axios.get(DATA_SERVICE_URL + 'mod');
};

const getAdminBoard = () => {
    return axios.get(DATA_SERVICE_URL + 'admin');
};

const UserService = {
    getPublicContent,
    getUserBoard,
    getModeratorBoard,
    getAdminBoard,
}

export default UserService;