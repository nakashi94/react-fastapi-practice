import { Box, Center } from "@chakra-ui/react";
import { memo, VFC } from "react";

type Props = {
    id: number;
    name: string;
    age: number;
    sex: string;
}

export const UserCard: VFC<Props> = memo((props) => {
    const { id, name, age, sex } = props;
    return (
        <>
            <Box 
                w="240px"
                bg="white"
                borderWidth="1px"
                borderRadius="lg"
                overflow="hidden"
            >
                <Center as="h3" fontSize="lg" fontWeight="semibold" m={4}>{name}</Center>
                    <Center as="p">
                        {`id : ${id}`}
                    </Center>
                    <Center as="p">
                        {`age : ${age}`}
                    </Center>
                    <Center as="p" mb={4}>
                        {`sex : ${sex}`}
                    </Center>
            </Box>
        </>
    )
})
