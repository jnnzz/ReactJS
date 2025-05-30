import { useState } from "react";

export function RegisterForm(){
    const [formFields, setFormFields] = useState({
        username: "",
        password: "",
    });

   // const isDisabled = !username || !password || !displayName;


    return  (
    <form action="">
        <div>
            <label htmlFor="username">Username</label>
            <input type="text" id="username" value={formFields.username}
            onChange={(e) => {
                setFormFields((currentState) => ({...currentState, username: e.target.value,}))
            }} />
        </div>
        <div>
            <label htmlFor="password">Password</label>
            <input type="text" id="password" value = {formFields.password} onChange={(e) => {
                setFormFields((currentState) => ({...currentState, password: e.target.value,}))
            }}/>
        </div>
        <div>
            <span>Username: {formFields.username}</span>
        </div>
          <div>
            <span>Password: {formFields.password}</span>
        </div>
        {/* <button disabled = {isDisabled}>Sign up</button> */}
    </form>
    );
}