import { memo } from "react";

import { Button } from "../atoms/Button";
import { useGetUsers } from "../../hooks/useGetUsers";

export const User = memo(() => {
    const { getUsers } = useGetUsers();
    return (
        <Button onClick={getUsers}>getUsers</Button>
    )
})
