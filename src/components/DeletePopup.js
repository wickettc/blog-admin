import React from 'react';
import { deletePost, deleteComment } from '../api/blogCall';
import { useHistory } from 'react-router-dom';

const DeletePopup = ({
    id,
    title,
    setShowDelete,
    token,
    setUpdated,
    redirectTo,
    postORComment,
}) => {
    let history = useHistory();

    return (
        <div>
            <h3>Are you sure you want to delete "{title}"</h3>
            <button
                onClick={() => {
                    postORComment === 'post'
                        ? deletePost(id, token)
                        : deleteComment(id, token);
                    setUpdated(true);
                    history.push(`${redirectTo}`);
                }}
            >
                Yes
            </button>
            <button onClick={() => setShowDelete(false)}>No</button>
        </div>
    );
};

export default DeletePopup;
