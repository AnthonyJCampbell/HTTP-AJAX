import React from 'react';

const Friend = ({ friend, deleteUser, updateUser }) => {
    return (
        <div>
            <div className="friendTop"
                style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    }}>
                <h2 style={{marginRight: "12px"}}>{friend.name} ({friend.age}) </h2>
                <i style={{transform: "scale(1.5)",marginRight: "14px"}} onClick={() => updateUser(friend.id)} className="fa fa-pencil-square" aria-hidden="true"></i>
                <i style={{transform: "scale(1.5)"}}onClick={() => deleteUser(friend.id)} className="fa fa-window-close" aria-hidden="true"></i>
            </div>
            <p><a href="/">{friend.email}</a></p>
        </div>
    );
}

export default Friend;
