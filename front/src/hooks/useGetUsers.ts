import axios from "axios";

import { useCallback } from "react";
import { User } from "../types/User";

export const useGetUsers = () => {

    const getUsers = useCallback(() => {
        axios.get<Array<User>>("http://127.0.0.1:8000/users")
            .then(res => console.log(res.data))
            .catch((err) => {
                alert("ユーザーが取得できませんでした。")
                console.log(err)
            })
    }, []);

    return {getUsers};
}
