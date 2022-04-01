import { memo, VFC } from "react";

import { Button } from "../atoms/Button";
import { useGetUsers } from "../../hooks/useGetUsers";
import { UserCard } from "../organisms/UserCard";

export const User: VFC = memo(() => {
    const { getUsers, users } = useGetUsers();
    return (
        <>
            <Button onClick={getUsers}>getUsers</Button>
            {users.map((user) => (
                <div key={user.id}>
                    <UserCard id={user.id} name={user.name} age={user.age} sex={user.sex} />
                    <h2>{user.name}</h2>
                    {console.log(user)}
                </div>
            ))}
        </>
    );
})
