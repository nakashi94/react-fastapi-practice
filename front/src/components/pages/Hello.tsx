import { memo, useState } from "react";
import axios from "axios";

type hello = {
    hello: string;
}

export const Hello = memo(() => {
    const [greeting, setGreeting] = useState<string>("");
    axios.get<hello>("http://127.0.0.1:8000/")
        .then((res) => {
            console.log(res.data.hello)
            setGreeting(res.data.hello)
        })
        .catch(err => console.log(err))
    return (
        <>
            {greeting}
        </>
    )
})
