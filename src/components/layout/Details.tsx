// Core
import { PropsWithChildren, ReactNode, MouseEvent } from 'react'
import ChevronDown from '@/icons/chevron-down.svg'

type DetailsProps = {
    title: ReactNode
    action?: () => void
    actionIcon?: string
}

export default function Details( { title, actionIcon, action, children }: PropsWithChildren<DetailsProps>) {

    const handleActionClick = (e: MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        if(action){
            action();
        }
    }

    return (
        <details>
            <summary>
                { title }
                <img src={ChevronDown} className='icon'/>
                <button 
                    onClick={handleActionClick}
                    className='icon-button'
                >
                    <img src={actionIcon || ""} className='icon'/>
                </button>
            </summary>
            <div>
                { children }
            </div>
        </details>
    )
}