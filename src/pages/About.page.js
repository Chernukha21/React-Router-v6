import React from 'react';
import {Outlet} from "react-router-dom";
import CustomLink from "../componets/CustomLink";

const AboutPage = () => {
    return (
        <div>
            <h1>About page</h1>
            <ul>
                <li>
                    <CustomLink to="contacts">to Contacts</CustomLink>
                </li>
                <li>
                    <CustomLink to="team">to Team</CustomLink>
                </li>
            </ul>
            <Outlet/>
        </div>
    );
};

export default AboutPage;