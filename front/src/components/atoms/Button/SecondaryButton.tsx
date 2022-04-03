import { Button } from "@chakra-ui/react";
import { memo, ReactNode, VFC } from "react";

type Props = {
    color: string;
    bg: string;
    loading: boolean;
    colorScheme: string;
    children: ReactNode;
    onClick: (id?: any) => void;
    id?: any
}

export const SecondaryButton: VFC<Props> = memo((props) => {
    const { color, bg, loading, colorScheme, children, onClick, id } = props;
    console.log(id);

    return (
        <Button
            color={color}
            bg={bg}
            onClick={onClick}
            isLoading={loading}
            colorScheme={colorScheme}
        >
            {children}
        </Button>
    );
})
