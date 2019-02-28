import React from 'react';

const Friend = ({ friend, deleteUser }) => {
    return (
        <div>
            <h2>{friend.name} ({friend.age})</h2>
            <p><a href="/">{friend.email}</a></p>
            <button onClick={() => deleteUser(friend.id)}>Delete</button>
        </div>
    );
}

export default Friend;
