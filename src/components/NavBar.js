import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';

const NavBar = ({ loggedIn, setLoggedIn, setToken }) => {
    const logout = () => {
        setLoggedIn(false);
        setToken('');
    };

    return (
        <nav>
            <Link to="/">Home</Link>
            <Link to="createpost">Create Post</Link>
            {loggedIn ? (
                <div className="logout" onClick={() => logout()}>
                    Logout
                </div>
            ) : (
                <Link to="login">Log In</Link>
            )}
        </nav>
    );
};

export default NavBar;
