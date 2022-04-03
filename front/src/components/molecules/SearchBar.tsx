import { HStack, Input } from "@chakra-ui/react";
import { useState, memo, VFC } from "react";
import { User } from "../../types/User";

import { SecondaryButton } from "../atoms/Button/SecondaryButton";

type Props = {
    onClick: (id?: any) => void;
    user?: User;
    loading: boolean;
}

export const SearchBar: VFC<Props> = memo((props) => {
    const { onClick, user, loading } = props;

    const [id, setId] = useState<string | undefined>();
    const onChangeId = (e: any) => setId(e.target.value);
    return (
        <HStack spacing="6px">
            <Input placeholder='idを入力してください' onChange={onChangeId} />
            <SecondaryButton color="white" bg="teal.400" loading={loading} colorScheme="teal" onClick={onClick} id={id}>getUser</SecondaryButton>
        </HStack>
    )
})
