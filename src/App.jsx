import UserProfile from "./Components/UserProfile";
import { UserDetails } from "./Components/UserDetails";
export default function App(){
    const mockUsers = [
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
    ]
    return (
        <div>
            {mockUsers.map((user) => {
                return <UserDetails key = {user.id} user = {user}/>
            })}
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
