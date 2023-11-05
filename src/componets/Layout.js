import React from 'react';
import {Outlet} from "react-router-dom";
import logo from "../logo.svg";
import CustomLink from "./CustomLink";

const Layout = () => {
    const setActive = () => ({isActive}) => isActive ? 'active-link' : '';

    return (
        <>
            <header className="App-header">
                <div className="header__links">
                    <CustomLink className={setActive()} to="/">Home</CustomLink>
                    <CustomLink className={setActive()} to="/posts">Blog</CustomLink>
                    <CustomLink className={setActive()} to="/about">About</CustomLink>
                </div>
                <img src={logo} className="App-logo" alt="logo"/>
            </header>
            <main className="container">
                <Outlet/>
            </main>
            <footer className="container">2023</footer>
        </>

    );
};

export default Layout;