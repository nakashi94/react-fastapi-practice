import { useCallback, useState } from "react";
import axios from "axios";

import { User } from "../types/User";

export const useGetUser = () => {

    const api = axios.create({
        baseURL: "http://127.0.0.1:8000"
    })
    
    const [user, setUser] = useState<User>();

    const [userLoading, setUserLoading] = useState<boolean>(false);

    const getUser = useCallback((id?: any) => {
        setUserLoading(true);
        api.get(`/users/${1}`)
            .then(res => {
                setUser(res.data);
                console.log(res.data);
            })
            .catch(err => console.log(err))
            .finally(() => setUserLoading(false))
    }, []);

    return { getUser, user, userLoading }
}
