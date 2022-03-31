import { memo, ReactNode, VFC } from "react";

type Props = {
    children: ReactNode;
    onClick: () => void;
}

export const Button: VFC<Props> = memo((props) => {
    const { children, onClick } = props;

    return <button onClick={onClick}>{children}</button>;
})
