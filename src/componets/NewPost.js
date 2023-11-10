import React from 'react';
import {Form} from "react-router-dom";

const NewPost = ({submitting}) => {
    return (
        <Form  action="/posts/new" method="post">
            <label htmlFor="">
                Title:
                <input type="text" name="title"/>
            </label>
            <label htmlFor="">
                Body:
                <input type="text" name="body"/>
            </label>
            <input type="hidden" name="userId" value="1"/>
            <button disabled={submitting} type="submit">Add post</button>
        </Form>
    );
};

export default NewPost;