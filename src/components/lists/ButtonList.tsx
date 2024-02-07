// Components
import ListButton from '../buttons/ListButton'

type ButtonListProps<DataT> = {
    data: DataT[]
    onClick?: (item: DataT) => void,
    leftText?: ((item: DataT) => string | null) | string | null,
    rightText?: ((item: DataT) => string | null) | string | null,
    keyFn?: (item: DataT) => string | number
}

export default function ButtonList<DataT>( { data, leftText, rightText, onClick, keyFn }: ButtonListProps<DataT>) {

    return (
        <ul> 
            {data.map((item: DataT) => (
                <li
                    key={keyFn ? keyFn(item) : null}
                >
                    <ListButton
                        leftText={typeof leftText == 'string' ? leftText : leftText ? (leftText(item) || "") : ""}
                        rightText={typeof rightText == 'string' ? rightText : rightText ? (rightText(item) || "") : ""}
                        onClick={() => {onClick ? onClick(item) : null}}
                    />
                </li>
            ))}
        </ul>
    );
}