import React from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';
import './PostDetails.css'
const PostDetails = () => {
    const postData = useLoaderData();
    console.log(postData);
    const {title,body ,id , userId} = postData;
    const navigateAuthor = useNavigate()
    const handleAuthor = () =>{
        navigateAuthor(`/friend/${userId}`)
    }
    return (
        <div className='postDetails'>
            <h1>post Details Id {id}</h1>
            <h2>Title : {title}</h2>
            <h3>Body : {body}</h3>
            <button onClick={handleAuthor}>Get The Author</button>
        </div>
    );
};

export default PostDetails;