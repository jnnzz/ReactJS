import PropTypes from 'prop-types';
import { UserFavoriteFoods } from "./UserFavoriteFoods";
import { UserUsername } from "./UserUsername";
export default function UserProfile(props){
    return (
    <div id="user-profile">
        <UserUsername username={props.username} />
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
UserProfile.propTypes = {
    username: PropTypes.string.isRequired,
    age: PropTypes.number.isRequired,
    callMe: PropTypes.func.isRequired,
    isLoggedIn: PropTypes.bool,
    favorites: PropTypes.arrayOf(
        PropTypes.shape({
            name: PropTypes.string.isRequired,
            id: PropTypes.string.isRequired,
        })
    )
}