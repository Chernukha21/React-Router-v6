import React from 'react';
import {useState, useEffect} from "react";
import {NavLink, useLocation, useSearchParams} from "react-router-dom";
import CustomLink from "../componets/CustomLink";
import BlogFilter from "../componets/BlogFilter";



const BlogPage = () => {
    const [posts, setPosts] = useState([]);
    const [searchParams, setSearchParams] = useSearchParams();

    const searchQuery = searchParams.get('post') || '';
    const latest = searchParams.has('latest');
    const startsFrom = latest ? 80 : 1;

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(res => res.json())
            .then(data => setPosts(data))
    }, []);


    return (
        <div>
            <h1>Blog Page</h1>
            <BlogFilter latest={latest} searchQuery={searchQuery} setSearchParams={setSearchParams}/>
            <CustomLink to="/posts/new">Add new post</CustomLink>
            {posts.filter(post => post.title.includes(searchQuery) && post.id >= startsFrom).map(post =>
                (<NavLink to={`/posts/${post.id}`}>
                    <li>{post.title}</li>
                </NavLink>)
            )}
        </div>
    );
};

export default BlogPage;