// Core
import { ComponentProps } from 'react'

type IconButtonProps = ComponentProps<'button'> & {
    icon: string
}

export default function IconButton( { icon, ...props }: IconButtonProps) {
    return (
        <button 
            className='icon-button'
            {...props}
        >
            <img src={icon} className='icon'/>
        </button>
    )
}