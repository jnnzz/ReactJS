export function LoginForm(){
    return <div>
        <form onSubmit={()=> {
            const formData = new FormData(e.target);
            const username = formData.get("username");
            const password = formData.get("password");

            // fetch("http://localhost:3001/api/login", {
            //     body: {
            //         username,
            //         password,
            //     },
            //     method: "POST",
            // });
        }}>
            <label htmlFor="username">Username</label>
            <br />
            <input id="username" type="text" 
            onChange={(e)=>{
                console.log(e.target.value);
            }}
            name ="username"
            />

            <br />
            <label htmlFor="password">Password</label>
            <br />
            <input type="password" id="password" name = "password" />
            <br />
            <button>Login</button>
        </form>
    </div>
}