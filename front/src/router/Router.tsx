import { memo } from "react";
import { Routes, Route } from "react-router-dom";
import { Hello } from "../components/pages/Hello";
import { User } from "../components/pages/User";

export const Router = memo(() => {
    return (
        <Routes>
            <Route path="/" element={<Hello />}/>
            <Route path="/users" element={<User />}/>
        </Routes>
    )
});
