import { ComponentProps } from 'react'

type ListButtonProps = ComponentProps<'button'> & {
    leftText: string,
    rightText?: string
}

export default function ListButton( { leftText, rightText }: ListButtonProps) {
    return (
        <button>
            <span>
                {leftText}
            </span>
            <span>
                {rightText}
            </span>
        </button>
    )
}