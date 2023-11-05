import React, {useEffect, useState} from 'react';
import {useParams, useNavigate} from "react-router-dom";
import CustomLink from "../componets/CustomLink";


const SinglePage = ({posts}) => {
    const {id} = useParams();
    const navigate = useNavigate();
    const [post, setPost] = useState(null);

    const goBack = () => navigate(-1);
    const goHome = () => navigate('/', {replace: true});

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
            .then(res => res.json())
            .then(data => setPost(data))
    }, [id]);

    return (
        <div>
            {post && (
                <>
                    <button onClick={goBack}>Go back</button>
                    <button onClick={goHome}>Go home</button>
                    <h1>{post.title}</h1>
                    <p>{post.body}</p>
                    <CustomLink to={`/posts/${id}/edit`}>Edit</CustomLink>
                </>
            )}
        </div>
    );
};

export default SinglePage;