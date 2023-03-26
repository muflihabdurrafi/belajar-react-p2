import React from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
    const navigate = useNavigate();

    function loginHandler(event) {
        event.preventDefault();
        const checkLogin = true;
        if (checkLogin) {
            navigate("/About");
        }
    }

    return (
        <>
            <h1>klik login</h1>
            <form onSubmit={loginHandler}>
                <label htmlFor="username">Username</label>
                <input type="text" name="username" />
                <label htmlFor="password">Password</label>
                <input type="text" name="password" />
                <button>Login</button>
            </form>
        </>
    );
}
