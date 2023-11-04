import React, {useState} from "react";
import logo from './logo.svg';
import './App.css';
import { MyContextProvider } from './MyContext';
import SearchComponent from "./componets/SearchComponent";
import SelectComponent from "./componets/SelectComponent";
import Todos from "./componets/Todos";
import {Routes, Route, Link} from "react-router-dom";
import HomePage from "./componets/Home.page";
import NotFoundPage from "./componets/NotFound.page";
import BlogPage from "./componets/Blog.page";
import AboutPage from "./componets/About.page";



function App() {
    const [isChecked, setIsChecked] = useState(false);

    const handleCheckboxChange = () => {
        setIsChecked(!isChecked);
    };
    return (
        <MyContextProvider>

            <div className="App">
                <header className="App-header">
                    <div className="header__links">
                        <Link to="/">Home</Link>
                        <Link to="/posts">Blog</Link>
                        <Link to="/about">About</Link>
                    </div>
                    <img src={logo} className="App-logo" alt="logo"/>
                </header>
                <Routes>
                    <Route path="/" element={<HomePage/>}/>
                    <Route path="/posts" element={<BlogPage/>}/>
                    <Route path="/about" element={<AboutPage/>}/>
                    <Route path="*" element={<NotFoundPage/>}/>
                </Routes>

                <SearchComponent/>
                <SelectComponent/>
                <Todos/>
                <div>
                    {/* Используем тег <label> для обертки */}
                    <label>
                        <input
                            type="checkbox"
                            checked={isChecked}
                            onChange={handleCheckboxChange}
                        />
                        Check this box
                    </label>
                </div>
            </div>
        </MyContextProvider>
    );
}

export default App;
