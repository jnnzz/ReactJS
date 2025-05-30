
import PropTypes from "prop-types";
import { useState } from "react";
export function UserDetails({user, setUsers}){

    const [isEditing, setIsEditing] = useState(false);
    const [username, setUsername] = useState(user.username);
    const [email, setEmail] = useState(user.email);

    return (
        <div>
            <div>
             
                <button
                onClick={() => {
                    setIsEditing((currentState) => !currentState);
                }}>
                    Edit
                </button>
                <button onClick={() => {
                    setUsers((currentUserState) => currentUserState.filter(
                        (currentUser) => currentUser.id !== user.id
                    ));
                }}>
                    Delete</button>

                <button onClick={() => {
                    setUsers((currentUsersState) => {
                     return currentUsersState.map((currentUser)=>{
                        if (currentUser.id === user.id)
                            return { ...currentUser, username, email};
                        else return currentUser;
                    })
                });
                     setIsEditing(false);
                }}
                >Save</button>

            <div>
                <b>ID: </b>
                <span>{user.id}</span>
                <br />
                <b>Username: </b>
                {isEditing ?(
                    <input type="text" name = "username"
                    id = "username"
                    value = {username}
                    onChange={(e)=>{
                        setUsername(e.target.value);
                    }}
                    />
                ) : (
                    <span>{user.username}</span>
                )}
                
                <br />
                <b>Email: </b>
                 {isEditing ?(
                    <input type="text" name = "email"
                    id = "email"
                    value = {email}
                    onChange={(e)=>{
                        setEmail(e.target.value);
                    }}
                    />
                ) : (
                    <span>{user.email}</span>
                )}
                </div>
            </div>
            
        </div>
        // <div>
        // <b>ID: </b>
        // <span>{user.id}</span>
        // <br />
        // <b>Username: </b>
        // <span>{user.username}</span>
        // <br />
        // <b>Email: </b>
        // <span>{user.email}</span>
        // </div>
    );
}