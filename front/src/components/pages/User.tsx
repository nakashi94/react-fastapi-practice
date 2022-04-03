import { memo, VFC } from "react";

import { PrimaryButton } from "../atoms/Button/PrimaryButton";
import { useGetAllUsers } from "../../hooks/useGetAllUsers";
import { useGetUser } from "../../hooks/useGetUser";
import { UserCard } from "../organisms/UserCard";
import { HStack, Wrap, WrapItem } from "@chakra-ui/react";
import { SearchBar } from "../molecules/SearchBar";

export const User: VFC = memo(() => {
    const { getAllUsers, users, usersLoading } = useGetAllUsers();
    const { getUser, user, userLoading } = useGetUser();
    return (
        <>
            <HStack spacing={12}>
                <PrimaryButton color="white" bg="blue.400" loading={usersLoading} colorScheme="blue" onClick={getAllUsers}>getUsers</PrimaryButton>
                <SearchBar onClick={getUser} user={user} loading={userLoading}/>
            </HStack>
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
