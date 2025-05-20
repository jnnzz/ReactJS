import UserProfile from "./Components/UserProfile";

export default function App(){
    return  ( 
        <div>
            <UserProfile age={19} favorites={[
                {
                name: "sushi",
                type: "seafood",
            },
            ]}
            />

        </div>
    );
}
