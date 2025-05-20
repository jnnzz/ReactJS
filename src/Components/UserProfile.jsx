import { UserFavoriteFoods } from "./UserFavoriteFoods";
import { UserUsername } from "./UserUsername";
export default function UserProfile(props){
    return (
    <div id="user-profile">
        <UserUsername username="jannn" />
        <div>
            <span>Email:</span>
            <span>larocojanlorenz@gmail.com</span>
            <br />
            <b>Age: </b>
            <span>{props.age}</span>
            {/* <span>{props.favorites}</span> */}
        </div>
        <UserFavoriteFoods></UserFavoriteFoods>
    </div>
    );
}