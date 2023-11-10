import React, {useState} from "react";
import './App.css';
import {Navigate, Route, Routes, RouterProvider, createBrowserRouter, createRoutesFromElements} from "react-router-dom";
import HomePage from "./pages/Home.page";
import NotFoundPage from "./pages/NotFound.page";
import {BlogPage, blogLoader} from "./pages/Blog.page";
import AboutPage from "./pages/About.page";
import Layout from "./componets/Layout";
import {SinglePage, singlePostLoader} from "./pages/Single.page";
import {CreatePost, createPostAction} from "./componets/CreatePost";
import {EditPostPage, updatePostAction} from "./pages/EditPost.page";
import LoginPage from "./pages/Login.page";
import RequireAuth from "./hoc/RequireAuth";
import {AuthProvider} from "./hoc/AuthProvider";
import ErrorPage from "./pages/Error.page";


const router = createBrowserRouter(createRoutesFromElements(
    <Route path="/" element={<Layout/>} >
        <Route index path="/" element={<HomePage/>}/>
        <Route path="posts" element={<BlogPage/>} loader={blogLoader} errorElement={<ErrorPage/>}/>
        <Route path="posts/:id" element={<SinglePage/>} loader={singlePostLoader}/>
        <Route path="posts/:id/edit" element={<EditPostPage/>} loader={singlePostLoader} action={updatePostAction}/>
        <Route path="posts/new" element={
            <RequireAuth>
                <CreatePost/>
            </RequireAuth>
        } action={createPostAction}/>
        <Route path="about/" element={<AboutPage/>}>
            <Route path="contacts" element={<p>Our Contacts</p>}/>
            <Route path="team" element={<p>Our Team</p>}/>
        </Route>
        <Route path="login" element={<LoginPage/>}/>
        <Route path="about-us" element={<Navigate to="/about" replace/>}/>
        <Route path="*" element={<NotFoundPage/>}/>
    </Route>
));


function App() {
    const [isChecked, setIsChecked] = useState(false);

    const handleCheckboxChange = () => {
        setIsChecked(!isChecked);
    };

    return (
        <AuthProvider>
            <div className="App">
                <RouterProvider router={router}/>
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
        </AuthProvider>
    );
}

export default App;
