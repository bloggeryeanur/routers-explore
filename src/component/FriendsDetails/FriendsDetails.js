import React from 'react';
import { useLoaderData } from 'react-router-dom';

const FriendsDetails = () => {
    const friend = useLoaderData()
    console.log(friend)
    
    return (
        <div>
            <h3>Name : {friend.name}</h3>
            <p>Phone : {friend.phone}</p>
            <small>Website : {friend.website}</small>
        </div>
    );
};

export default FriendsDetails;