import {useLocation, useNavigate} from "react-router-dom";
import {useAuth} from "../hooks/useAuth";
import React from 'react';

const LoginPage = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const fromPage = location?.state?.from?.pathname || '';
    const {signIn} = useAuth();

    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const user = form.username.value;
        signIn(user, () => navigate(fromPage, {replace: true}));
    }
    return (
        <div>
            <h1>Login Page</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="username">
                    Name: <input type="text" name="username"/>
                </label>
                <button type="submit">SignIn</button>
            </form>
        </div>
    );
};

export default LoginPage;