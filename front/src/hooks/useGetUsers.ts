import axios from "axios";

import { useCallback } from "react";
import { User } from "../types/User";

export const useGetUsers = () => {

    const api = axios.create({
        baseURL: "http://127.0.0.1:8000"
    })

    const getUsers = useCallback(() => {
        api.get<Array<User>>("/users")
            .then(res => console.log(res.data))
            .catch((err) => {
                alert("ユーザーが取得できませんでした。")
                console.log(err)
            })
    }, []);

    return {getUsers};
}
