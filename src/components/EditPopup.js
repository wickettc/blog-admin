import React, { useState } from 'react';
import { editPost } from '../api/blogCall';
import { useHistory } from 'react-router-dom';

const EditPopup = ({ id, title, message, setShowEdit, token, setUpdated }) => {
    const [formTitle, setFormTitle] = useState(title);
    const [formMessage, setFormMessage] = useState(message);
    let history = useHistory();

    const handleChange = (e) => {
        if (e.target.name === 'title') {
            setFormTitle(e.target.value);
        } else {
            setFormMessage(e.target.value);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        await editPost(id, formTitle, formMessage, token);
        setShowEdit(false);
        history.push('/');
    };

    return (
        <div>
            <h3>Updating "{title}"</h3>
            <form onSubmit={handleSubmit}>
                <input value={formTitle} name="title" onChange={handleChange} />
                <textarea
                    value={formMessage}
                    name="message"
                    onChange={handleChange}
                />
                <button>Update</button>
                <button onClick={() => setShowEdit(false)} type="button">
                    Cancel
                </button>
            </form>
        </div>
    );
};

export default EditPopup;
