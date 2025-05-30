import UserProfile from "./Components/UserProfile";
import { UserDetails } from "./Components/UserDetails";
import { LoginForm } from "./Components/LoginForm";
import { RegisterForm } from "./Components/RegisterForm";
import { useEffect, useState } from "react";

export default function App(){
        const [sync, setSync] = useState(false);
        const [users, setUsers] =useState( [
        {
            id:1,
            username: "nyzo",
            email: "nyzo@gmail.com",
        },
        {
            id:2,
            username: "cassie",
            email: "cassie@gmail.com",
        },
        {
            id:3,
            username: "alpha",
            email: "alpha@gmail.com",
        },
    ]);
    useEffect(() => {
        console.log("rendered");
    },[sync]);
    // const mockUsers = [
    //     {
    //         id:1,
    //         username: "nyzo",
    //         email: "nyzo@gmail.com",
    //     },
    //     {
    //         id:2,
    //         username: "cassie",
    //         email: "cassie@gmail.com",
    //     },
    //     {
    //         id:3,
    //         username: "alpha",
    //         email: "alpha@gmail.com",
    //     },
    // ]
    // return (
    //     <div>
    //         {mockUsers.map((user) => {
    //             return <UserDetails key = {user.id} user = {user}/>
    //         })}
    //     </div>
    // )

   return (
        <div>
            {users.map((user) => (
                <UserDetails key={user.id} user={user} setUsers={setUsers} />
            ))}
            <button onClick={() => setSync((currentCount)=> !currentCount)}>Clickk to count</button>
        </div>
    )

    // return  ( 
    //     <div>
    //         <UserProfile username="wasap" age={19} favorites={[
    //             {
    //             name: "sushi",
    //             id: "Sushi",
    //             type: "seafood",
    //             },
    //             {
    //             name: "pizza",
    //             id: "Pizza",
    //             type: "seafood",
    //             },
    //         ]}
    //         />

    //     </div>
    // );
}
