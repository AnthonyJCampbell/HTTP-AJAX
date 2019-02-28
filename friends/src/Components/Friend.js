import React from 'react';

const Friend = ({ friend, deleteUser }) => {
    return (
        <div>
            <div className="friendTop"
                style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center"}}>
                <h2>{friend.name} ({friend.age}) </h2><i onClick={() => deleteUser(friend.id)}     className="fa fa-window-close" aria-hidden="true"></i>
            </div>
            <p><a href="/">{friend.email}</a></p>
        </div>
    );
}

export default Friend;
