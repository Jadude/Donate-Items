import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainLayout from "./components/layout/MainLayout";
import Home from "./components/routes/Home";
import Login from "./components/routes/Login";

function App() {
    return (
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<MainLayout/>}>
                        <Route path="/" element={<Home/>}/>
                        {/*<Route path="/" element={<Form/>}/>*/}
                        <Route path="/login" element={<Login/>}/>
                        {/*<Route path="/" element={<SignUp/>}/>*/}
                        {/*<Route path="/" element={<Logout/>}/>*/}
                        {/*<Route path="/panel" element={<AdminPanel/>}/>*/}
                        {/*<Route path="*" element={<Error404 />}/>*/}
                    </Route>
                </Routes>
            </BrowserRouter>
    );
}

export default App;
