import { createElement } from "react";

export function UserFavoriteFoods(){
    return createElement(
        "section",
        null,
        <div>
            <span>Favorite Food</span>
            <br />
            <ul>
                <li>Burger</li>
                <li>pizza</li>
            </ul>
        </div>
    )
}