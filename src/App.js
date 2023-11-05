import React, {useState} from "react";
import './App.css';
import {MyContextProvider} from './MyContext';
import {Route, Routes} from "react-router-dom";
import HomePage from "./componets/Home.page";
import NotFoundPage from "./componets/NotFound.page";
import BlogPage from "./componets/Blog.page";
import AboutPage from "./componets/About.page";
import Layout from "./componets/Layout";
import SinglePage from "./componets/Single.page";
import CreatePost from "./componets/CreatePost";
import EditPostPage from "./componets/EditPost.page";

function App() {
    const [isChecked, setIsChecked] = useState(false);

    const handleCheckboxChange = () => {
        setIsChecked(!isChecked);
    };
    return (
        <MyContextProvider>
            <div className="App">
                <Routes>
                    <Route path="/" element={<Layout/>}>
                        <Route index path="/" element={<HomePage/>}/>
                        <Route path="posts" element={<BlogPage/>}/>
                        <Route path="posts/:id" element={<SinglePage/>}/>
                        <Route path="posts/:id/edit" element={<EditPostPage/>}/>
                        <Route path="posts/new" element={<CreatePost/>}/>
                        <Route path="about" element={<AboutPage/>}/>
                        <Route path="*" element={<NotFoundPage/>}/>
                    </Route>
                </Routes>
                <div>
                    <label>
                        <input
                            type="checkbox"
                            checked={isChecked}
                            onChange={handleCheckboxChange}
                        />
                        {isChecked ? `Checked` : `Check this box`}
                    </label>
                </div>
            </div>
        </MyContextProvider>
    );
}

export default App;
