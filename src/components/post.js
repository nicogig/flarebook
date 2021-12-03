import React from "react";
import './post.css';

const Post = ({username, title, content}) => {
    return (
        <div className="post">
            <div className="postHeader">
                <div className="postHeaderText">
                    <h3>{title}</h3>
                    <p>{username}</p>
                </div>
            </div>
            <div className="postContent">
                <p>{content}</p>
            </div>
        </div>

    );
};

export default Post;