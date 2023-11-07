import React from 'react';
import {useState, useEffect} from "react";
import {NavLink, useLocation} from "react-router-dom";
import CustomLink from "../componets/CustomLink";


const BlogPage = () => {
    const [posts, setPosts] = useState([]);
    console.log(useLocation());


    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(res => res.json())
            .then(data => setPosts(data))
    }, []);


    return (
        <div>
            <h1>Blog Page</h1>
            <CustomLink to="/posts/new">Add new post</CustomLink>
            {posts.map(post =>
                (<NavLink to={`/posts/${post.id}`}>
                    <li>{post.title}</li>
                </NavLink>)
            )}
        </div>
    );
};

export default BlogPage;