import React from 'react';
import {useParams} from "react-router-dom";

const EditPostPage = () => {
    const {id} = useParams();
    return (
        <div>
            {`Edit post ${id}`}
        </div>
    );
};

export default EditPostPage;