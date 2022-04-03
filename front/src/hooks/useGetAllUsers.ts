import axios from "axios";

import { useCallback, useState } from "react";
import { User } from "../types/User";

export const useGetAllUsers = () => {

    const api = axios.create({
        baseURL: "http://127.0.0.1:8000"
    })

    const [users, setUsers] = useState<Array<User>>([]);

    const [usersLoading, setUsersLoading] = useState<boolean>(false);

    const getAllUsers = useCallback(() => {
        setUsersLoading(true);
        api.get<Array<User>>("/users")
            .then(res => setUsers(res.data))
            .catch((err) => {
                alert("ユーザーが取得できませんでした。");
                console.log(err);
            })
            .finally(() => setUsersLoading(false));
    }, []);

    return { getAllUsers, users, usersLoading };
}
