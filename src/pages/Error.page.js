import React from 'react';
import {isRouteErrorResponse,useRouteError} from "react-router-dom";

const ErrorPage = () => {
    const error = useRouteError();
    if(isRouteErrorResponse(error)){
        return (
            <div>
                <h2>{error.status}</h2>
                <h3>{error.data.message || ''}</h3>
                <h3>{error.data.reason || ''}</h3>
            </div>
        );
    }
    throw error;
};

export default ErrorPage;