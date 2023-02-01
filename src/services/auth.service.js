import axios from "../api/axios";

const REG_URL = '/auth/signup';
const LOGIN_ENDPOINT = '/auth/signup';
const LOGOUT_ENDPOINT = '/auth/signout';

const register = (username, email, password) => {

    return axios.post(REG_URL, {
        username,
        email,
        password
    });
};

const login = (username, password) => {
    return axios.post(LOGIN_ENDPOINT, {
        username,
        password,
    })
    .then((response) => {
        if(response.data.username) {
            localStorage.setItem('user', JSON.stringify(response.data));
        }
        return response.data;
    });
};

const logout = () => {
    localStorage.removeItem('user');
    return axios.post(LOGOUT_ENDPOINT).then((response) => {
        return response.data
    });
};

const getCurrentUser = () => {
    return JSON.parse(localStorage.getItem('user'));
};

const AuthService = {
    register,
    login,
    logout,
    getCurrentUser,
}

export default AuthService;