import React, { useState } from 'react';
import { login } from '../api/blogCall';
import { useHistory } from 'react-router-dom';

const Login = ({ setToken, setLoggedIn }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    let history = useHistory();

    const handleChange = (e) => {
        if (e.target.name === 'username') {
            setUsername(e.target.value);
        } else {
            setPassword(e.target.value);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const res = await login(username, password);
        setToken(`Bearer ${res.token}`);
        setLoggedIn(true);
        setUsername('');
        setPassword('');
        history.push('/');
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Username"
                    name="username"
                    value={username}
                    onChange={handleChange}
                />
                <input
                    type="password"
                    placeholder="Password"
                    name="password"
                    value={password}
                    onChange={handleChange}
                />
                <button>Login</button>
            </form>
        </div>
    );
};

export default Login;
