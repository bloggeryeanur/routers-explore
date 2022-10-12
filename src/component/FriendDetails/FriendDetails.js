import React from 'react';
import { useLoaderData } from 'react-router-dom';

const FriendDetails = () => {
    const friend = useLoaderData();
    
    return (
        <div>
            <h3>Address {friend.name}</h3>
            <h2>Everything is working...</h2>
        </div>
    );
};

export default FriendDetails;