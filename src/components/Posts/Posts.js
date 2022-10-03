import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Post from '../Post/Post';
import './Posts.css'
const Posts = () => {
    const allPosts = useLoaderData();
    console.log(allPosts);
    return (
        <div className='posts'>
            {
                allPosts.map(post=><Post key={post.id} post={post}></Post>)
            }
        </div>
    );
};

export default Posts;