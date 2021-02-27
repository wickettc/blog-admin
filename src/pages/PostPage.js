import React, { useState, useEffect } from 'react';
import DeletePopup from '../components/DeletePopup';
import EditPopup from '../components/EditPopup';
import { fetchSinglePost } from '../api/blogCall';
import _ from 'lodash';

const PostPage = ({ match, token, setUpdated }) => {
    const [post, setPost] = useState({});
    const [comments, setComments] = useState({});
    const [showDelete, setShowDelete] = useState(false);
    const [showEdit, setShowEdit] = useState(false);

    useEffect(() => {
        const getPost = async (id) => {
            const res = await fetchSinglePost(id);
            setPost(res.post);
            setComments(res.comments);
            console.log(res);
        };
        getPost(match.params.id);
    }, [match.params.id]);

    return (
        <div>
            {_.isEmpty(post) ? (
                <div>Nothing to display</div>
            ) : (
                <div>
                    {showEdit ? (
                        <EditPopup
                            title={post.title}
                            message={post.message}
                            setShowEdit={setShowEdit}
                            id={post._id}
                            token={token}
                            setUpdated={setUpdated}
                        />
                    ) : null}
                    {showDelete ? (
                        <DeletePopup
                            title={post.title}
                            setShowDelete={setShowDelete}
                            id={post._id}
                            token={token}
                            setUpdated={setUpdated}
                        />
                    ) : null}
                    <h2>"{post.title}" Page</h2>
                    <p>{post.message}</p>
                    <div
                        onClick={() => setShowEdit(true)}
                        className="edit-post-div"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                        >
                            <path d="M18.363 8.464l1.433 1.431-12.67 12.669-7.125 1.436 1.439-7.127 12.665-12.668 1.431 1.431-12.255 12.224-.726 3.584 3.584-.723 12.224-12.257zm-.056-8.464l-2.815 2.817 5.691 5.692 2.817-2.821-5.693-5.688zm-12.318 18.718l11.313-11.316-.705-.707-11.313 11.314.705.709z" />
                        </svg>
                    </div>
                    <div
                        onClick={() => setShowDelete(true)}
                        className="delete-post-div"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                        >
                            <path d="M3 6v18h18v-18h-18zm5 14c0 .552-.448 1-1 1s-1-.448-1-1v-10c0-.552.448-1 1-1s1 .448 1 1v10zm5 0c0 .552-.448 1-1 1s-1-.448-1-1v-10c0-.552.448-1 1-1s1 .448 1 1v10zm5 0c0 .552-.448 1-1 1s-1-.448-1-1v-10c0-.552.448-1 1-1s1 .448 1 1v10zm4-18v2h-20v-2h5.711c.9 0 1.631-1.099 1.631-2h5.315c0 .901.73 2 1.631 2h5.712z" />
                        </svg>
                    </div>
                    <h3>Comments Associated</h3>
                    {comments.length > 0 ? (
                        comments.map((comment, index) => {
                            return (
                                <div key={comment._id}>
                                    {index + 1}. {comment.commentbody}
                                </div>
                            );
                        })
                    ) : (
                        <div>No comments</div>
                    )}
                </div>
            )}
        </div>
    );
};

export default PostPage;
