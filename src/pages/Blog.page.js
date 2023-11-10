import React, {Suspense} from 'react';
import {NavLink, useLoaderData, useSearchParams, defer, Await, json} from "react-router-dom";
import CustomLink from "../componets/CustomLink";
import BlogFilter from "../componets/BlogFilter";
import Loading from "../componets/loading/Loading";


const BlogPage = () => {
    const {posts} = useLoaderData();
    const [searchParams, setSearchParams] = useSearchParams();
    const searchQuery = searchParams.get('post') || '';
    const latest = searchParams.has('latest');
    const startsFrom = latest ? 80 : 1;

    return (
        <div>
            <h1>Blog Page</h1>
            <BlogFilter latest={latest} searchQuery={searchQuery} setSearchParams={setSearchParams}/>
            <CustomLink to="new">Add new post</CustomLink>
            <Suspense fallback={<Loading/>}>
                <Await resolve={posts}>
                    {
                        (resolvedPosts) => (<> {resolvedPosts.filter(post => post.title.includes(searchQuery) && post.id >= startsFrom).map(post =>
                            (<NavLink to={`/posts/${post.id}`}>
                                <li>{post.title}</li>
                            </NavLink>)
                        )}</>)
                    }
                </Await>
            </Suspense>
        </div>
    );
};

async function getPosts() {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    return res.json();
}

const blogLoader = async () => {
    const posts = await getPosts();

    if (!posts.length) {
        throw json({message: 'Not Found', reason: 'Wrong url'}, {status: 404})
    }

    return  {
        posts
    }
}

export {BlogPage, blogLoader};