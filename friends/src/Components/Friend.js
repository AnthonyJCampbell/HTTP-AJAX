import React, { Component } from 'react';

const Friend = ({ friend }) => {
    return (
        <div>
            <h2>{friend.name} ({friend.age})</h2>
            <p><a href="/">{friend.email}</a></p>
        </div>
    );
}

export default Friend;
