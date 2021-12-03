import React, { useState } from "react";
import './postSender.css';

const PostSender = () => {
    const [title, setTitle] = useState('');
    const [message, setMessage] = useState('');
    const [user, setUser] = useState('');

    const handleSubmit = e => {
        const requestOptions = {
            mode: 'cors',
            method: 'POST',
            headers: { 
                'Access-Control-Allow-Origin': '*',
                'Content-Type': 'application/json' 
            },
            body: JSON.stringify({
                title: title,
                username: user,
                content: message
            })
        }
        console.log(JSON.stringify({
            title: title,
            username: user,
            content: message
        }));
        fetch("https://my-app.nicogig.workers.dev/", requestOptions);
        e.preventDefault();
        setTitle('')
        setMessage('');
        setUser('');
        window.location.reload(true);
    };

    return (
        <div className="postSender">
            <form>
                <input
                    value={user}
                    onChange={e => setUser(e.target.value)}
                    className="postSenderInput"
                    placeholder="Who are you?"
                />
                <input
                    value={title}
                    onChange={e => setTitle(e.target.value)}
                    className="postSenderInput"
                    placeholder="Give your post a title..."
                />
                <input
                    value={message}
                    onChange={e => setMessage(e.target.value)}
                    className="postSenderInput"
                    placeholder="What's on your mind?"
                />
                <button onClick={handleSubmit} type="submit">Send</button>
            </form>
        </div>
    );

};

export default PostSender;