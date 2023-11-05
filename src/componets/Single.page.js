import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import {NavLink} from "react-router-dom";


const SinglePage = ({posts}) => {
    const {id} = useParams();
    const [post, setPost] = useState(null);
    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
            .then(res => res.json())
            .then(data => setPost(data))
    }, [id]);

    return (
        <div>
            {post && (
                <>
                    <h1>{post.title}</h1>
                    <p>{post.body}</p>
                    <NavLink to={`/posts/${id}/edit`}>Edit</NavLink>
                </>
            )}
        </div>
    );
};

export default SinglePage;