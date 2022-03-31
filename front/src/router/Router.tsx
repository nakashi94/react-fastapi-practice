import { memo } from "react";
import { Routes, Route } from "react-router-dom";
import { Hello } from "../pages/Hello";

export const Router = memo(() => {
    return (
        <Routes>
            <Route path="/" element={<Hello />}/>
        </Routes>
    )
});
