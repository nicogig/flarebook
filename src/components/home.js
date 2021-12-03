import React, { useEffect, useState } from "react";
import Post from "./post";
import PostSender from "./postSender";
import './home.css';

const Home = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const getPosts = async () => {
            const apiResponse = await fetch(
                "https://my-app.nicogig.workers.dev/"
            );
            const postsJson = await apiResponse.json();
            setPosts(postsJson);
        };

        getPosts();
    }, []);

    return (
        <div className="home">
            <PostSender />
            {posts.map((post) => (
                <Post
                    username={post.username}
                    title={post.title}
                    content={post.content}
                />
            ))}
        </div>
    );
};

export default Home;