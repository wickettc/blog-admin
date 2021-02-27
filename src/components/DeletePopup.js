import React from 'react';
import { deletePost } from '../api/blogCall';
import { useHistory } from 'react-router-dom';

const DeletePopup = ({ id, title, setShowDelete, token, setUpdated }) => {
    let history = useHistory();

    return (
        <div>
            <h3>Are you sure you want to delete "{title}"</h3>
            <button
                onClick={() => {
                    deletePost(id, token);
                    setUpdated(true);
                    history.push('/');
                }}
            >
                Yes
            </button>
            <button onClick={() => setShowDelete(false)}>No</button>
        </div>
    );
};

export default DeletePopup;
