import React, {Suspense} from 'react';
import {useLoaderData, useNavigate, defer, Await, useAsyncValue} from "react-router-dom";
import CustomLink from "../componets/CustomLink";
import Loading from "../componets/loading/Loading";

const Post = () => {
    const post = useAsyncValue();
    return <>
        <h1>{post.title}</h1>
        <p>{post.body}</p>
    </>

}


const Comments = () => {
    const comments = useAsyncValue();
    return (
        <div>
            <h2>Comments</h2>
            {comments.map(comment => {
                return <>
                    <h3>{comment.email}</h3>
                    <h4>{comment.name}</h4>
                    <p>{comment.body}</p>
                </>
            })}
        </div>
    )
}

const SinglePage = () => {
    const navigate = useNavigate();
    const {post, comments, id} = useLoaderData();

    const goBack = () => navigate(-1);
    const goHome = () => navigate('/', {replace: true});

    return (
        <div>
            <button onClick={goBack}>Go back</button>
            <button onClick={goHome}>Go home</button>
            <Suspense fallback={<Loading/>}>
                <Await resolve={post}>
                    <Post />
                </Await>
            </Suspense>
            <Suspense fallback={<Loading/>}>
                <Await resolve={comments}>
                    <Comments />
                </Await>
            </Suspense>
            <CustomLink to={`/posts/${id}/edit`}>Edit</CustomLink>
        </div>
    );
};

async function getPostById(id) {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
    return res.json();
}

async function getCommentsByPost(id){
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`);
    return res.json();
}

const singlePostLoader = async ({params}) => {
    const id = params.id;
    return defer({post: await getPostById(id), id, comments: getCommentsByPost(id)});
}

export {SinglePage, singlePostLoader};