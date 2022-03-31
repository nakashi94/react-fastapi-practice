import { memo } from "react";
import axios from "axios";

export const Hello = memo(() => {
    axios.get("http://127.0.0.1:8000/", {
    })
        .then((res) => {
            console.log(res.data)
            console.log(typeof(res))
        })
        .catch(err => console.log(err))
    return (
        <>
            Hello React!
        </>
    )
})
