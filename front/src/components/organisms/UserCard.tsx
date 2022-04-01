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
            <dl>
                <dt>id</dt>
                <dd>{id}</dd>
                <dt>name</dt>
                <dd>{name}</dd>
                <dt>age</dt>
                <dd>{age}</dd>
                <dt>sex</dt>
                <dd>{sex}</dd>
            </dl>
        </>
    )
})
