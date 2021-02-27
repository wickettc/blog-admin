import React, { useState, useEffect } from 'react';
import { fetchPosts } from '../api/blogCall';
import { Link } from 'react-router-dom';

const Home = ({ updated, setUpdated }) => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const getPosts = async () => {
            const res = await fetchPosts();
            setPosts(res);
        };
        getPosts();
        setUpdated(false);
    }, [updated, setUpdated]);

    return (
        <div>
            {posts.length > 0 ? (
                posts.map((post) => {
                    return (
                        <div
                            style={{ border: '1px solid black', margin: '5px' }}
                            key={post._id}
                        >
                            <Link to={`/post/${post._id}`}>{post.title}</Link>
                            <div>{post.time}</div>
                        </div>
                    );
                })
            ) : (
                <div>No posts to display</div>
            )}
        </div>
    );
};

export default Home;
