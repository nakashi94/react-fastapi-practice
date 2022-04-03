import { memo, VFC } from "react";

import { Button } from "../atoms/Button";
import { useGetUsers } from "../../hooks/useGetUsers";
import { UserCard } from "../organisms/UserCard";
import { Wrap, WrapItem } from "@chakra-ui/react";

export const User: VFC = memo(() => {
    const { getUsers, users } = useGetUsers();
    return (
        <>
            <Button onClick={getUsers}>getUsers</Button>
            <Wrap spacing="12px">
                {users.map((user) => (
                    <WrapItem key={user.id}>
                        <UserCard id={user.id} name={user.name} age={user.age} sex={user.sex} />
                    </WrapItem>
                ))}
            </Wrap>
        </>
    );
})
