import axios from 'axios';

const baseURL = 'http://localhost:3000/';

const login = async (username, password) => {
    try {
        const response = await axios.post(`${baseURL}auth/login`, {
            username,
            password,
        });
        return response.data;
    } catch (err) {
        console.log(err);
    }
};

const fetchPosts = async () => {
    try {
        const response = await axios.get(`${baseURL}blog/posts`);
        return response.data;
    } catch (err) {
        console.log(err);
    }
};

const fetchSinglePost = async (id) => {
    try {
        const response = await axios.get(`${baseURL}blog/post/${id}`);
        return response.data;
    } catch (err) {
        console.log(err);
    }
};

const createPost = async (title, message, token) => {
    try {
        const response = await axios.post(
            `${baseURL}blog/posts`,
            {
                title,
                // hard coded author for the time it is alway me
                author: 'Chase Wickett',
                message,
            },
            { headers: { Authorization: token } }
        );
        return response;
    } catch (err) {
        console.log(err);
    }
};

const deletePost = async (id, token) => {
    try {
        const response = await axios.delete(`${baseURL}blog/post/${id}`, {
            headers: { Authorization: token },
        });
        return response;
    } catch (err) {
        console.log(err);
    }
};

export { login, fetchPosts, fetchSinglePost, createPost, deletePost };
