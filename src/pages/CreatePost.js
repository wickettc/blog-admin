import React, { useState } from 'react';
import { createPost } from '../api/blogCall';
import { useHistory } from 'react-router-dom';

const CreatePost = ({ token }) => {
    const [title, setTitle] = useState('');
    const [message, setMessage] = useState('');
    let history = useHistory();

    const handleChange = (e) => {
        if (e.target.name === 'title') {
            setTitle(e.target.value);
        } else {
            setMessage(e.target.value);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        await createPost(title, message, token);
        setTitle('');
        setMessage('');
        history.push('/');
    };

    return (
        <div>
            <h2>Create Post</h2>
            <form onSubmit={handleSubmit}>
                <input
                    name="title"
                    value={title}
                    placeholder="Title"
                    required
                    onChange={handleChange}
                />
                <textarea
                    name="message"
                    value={message}
                    required
                    onChange={handleChange}
                    placeholder="Enter Blog Post"
                />
                <button>Post</button>
            </form>
        </div>
    );
};

export default CreatePost;
