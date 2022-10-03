import React from 'react';
import { useLoaderData } from 'react-router-dom';
import './FriendDetails.css'
const FriendDetails = () => {
    const friendsData = useLoaderData();
    const {name , username , id , email} = friendsData;
    return (
        <div className='details'>
            <h1>Friend Details</h1>
            <p>{id}</p>
            <h2>Name : {name}</h2>
            <h3>UserName : {username}</h3>
            <h4>Email :{email}</h4>
        </div>
    );
};

export default FriendDetails;