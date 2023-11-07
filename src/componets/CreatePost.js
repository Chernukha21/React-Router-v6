import React from 'react';
import {useAuth} from "../hooks/useAuth";
import {Navigate, useLocation, useNavigate} from "react-router-dom";


const CreatePost = () => {
    const {user,signOut} = useAuth();
    const navigate = useNavigate();

    return (
        <div>
            <h1>Create post</h1>
            <button onClick={() => signOut(() => navigate('/', {replace: true}))}>Logout</button>
        </div>
    );
};

export default CreatePost;