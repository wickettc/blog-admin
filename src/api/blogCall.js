import axios from 'axios';

const login = async (username, password) => {
    try {
        const response = await axios.post('http://localhost:3000/auth/login', {
            username,
            password,
        });
        return response.data;
    } catch (err) {
        console.log(err);
    }
};

export { login };
