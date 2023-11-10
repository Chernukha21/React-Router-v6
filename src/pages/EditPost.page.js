import React from 'react';
import {useActionData, useLoaderData, useNavigation, useParams} from "react-router-dom";
import UpdatePost from "../componets/UpdatePost";


const EditPostPage = () => {
    // const {id} = useParams();
    const data = useActionData();
    const {post, id} = useLoaderData();
    const navigation = useNavigation();

    return (
        <div>
            {data?.message && <div>{data.message}</div>}
            {`Edit post ${id}`}
            <UpdatePost {...post} submitting={navigation.state === "submitting"}/>
        </div>
    );
};

const updatePost = async (post) => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${post.get('id')}`, {
        method: 'PUT',
        body: post
    })
    return res.json();
}

const updatePostAction = async ({request}) => {
    const formData = await request.formData();
    if(!formData.get('title') || !formData.get('body')){
        return {message: 'All fields are required'};
    }
    const updatedPost = await updatePost(formData);
    return {message: `Post ${updatedPost.id} was updated`};
}

export  {EditPostPage, updatePostAction};