import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Post.css'
const Post = ({post}) => {
    const handleNavigate = useNavigate();
    const handleEvent =()=>{
        handleNavigate(`/posts/${id}`)
    }
    const {id , title, body} = post;
    return (
        <div className='post'>
            <h2>{id}</h2>
            <h2>{title}</h2>
            <h2>{body}</h2>
            <button onClick={handleEvent}>Onclick</button>
        </div>
    );
};

export default Post;