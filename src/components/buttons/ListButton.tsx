import { ComponentProps } from 'react'

type ListButtonProps = ComponentProps<'button'> & {
    leftText: string,
    rightText?: string
}

export default function ListButton( { leftText, rightText, ...props }: ListButtonProps) {
    return (
        <button
            {...props}
            className='list-button'
        >
            <span className='left'>
                {leftText}
            </span>
            <span className='right'>
                {rightText}
            </span>
        </button>
    )
}