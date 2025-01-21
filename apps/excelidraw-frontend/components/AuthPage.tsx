
"use  client";

export function AuthPage({isSignin} : {
    isSignin:boolean
}) {
    return <div className="w-full h-screen flex justify-center items-center">
        <div className="p-2 m-2 bg-white rounded">
            <input type="text" placeholder="Email"></input>
            <input type="password" placeholder="Password"></input>

            <button onClick={() => {}}
            >{isSignin ? "Sign in" : "Sign up"}</button>
        </div>
    </div>
}