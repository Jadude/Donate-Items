import React from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./components/routes/Home";
import Login from "./components/routes/Login";
import Logout from "./components/routes/Logout";
import SignUp from "./components/routes/SignUp";
import Error404 from "./components/routes/Error404";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/login" element={<Login/>}/>
                <Route path="/signup" element={<SignUp/>}/>
                <Route path="/logout" element={<Logout/>}/>
                <Route path="*" element={<Error404 />}/>
                {/*<Route path="/" element={<Form/>}/>*/}
                {/*<Route path="/panel" element={<AdminPanel/>}/>*/}
            </Routes>
        </BrowserRouter>
    )
        ;
}

export default App;
