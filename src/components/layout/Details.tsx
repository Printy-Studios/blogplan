// Core
import { PropsWithChildren, ReactNode, MouseEvent, Ref } from 'react'
import ChevronDown from '@/icons/chevron-down.svg'

type DetailsProps = {
    /** Title of summary */
    title: ReactNode
    /**
     * Action button click handler
     */
    action?: () => void
    /**
     * Action button icon
     */
    actionIcon?: string
    detailsRef?: Ref<HTMLDetailsElement>
}

/**
 * <details> wrapper
 */
export default function Details( { title, actionIcon, action, children, detailsRef }: PropsWithChildren<DetailsProps>) {

    const handleActionClick = (e: MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        if(action){
            action();
        }
    }

    return (
        <details
            ref={detailsRef}
        >
            <summary>
                { title }
                <img src={ChevronDown} className='icon'/>
                {action ? 
                    <button 
                        onClick={handleActionClick}
                        className='icon-button'
                    >
                        <img src={actionIcon || ""} className='icon'/>
                    </button> //#TODO: Replace this with IconButton
                : null} 
            </summary>
            <div>
                { children }
            </div>
        </details>
    )
}