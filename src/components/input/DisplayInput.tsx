// Core
import { useField } from 'formik';
import { ChangeEvent, ComponentProps, useEffect, useRef, useState } from 'react'

type DisplayInputProps = ComponentProps<'input'> & {
    /**
     * Input name, for Formik
     */
    name: string
    /**
     * Which element to use as the wrapper for the display text (when not editing)
     */
    displayWrapper: 'h1' | 'h2' | 'span' | 'p',
    inputClassName?: string
}

/**
 * An input that also acts as a display. By default it is not editable but if you
 * click on it it becomes editable
 */
export default function DisplayInput( { onChange, displayWrapper, inputClassName, ...props }: DisplayInputProps) {

    const DisplayWrapper = displayWrapper;

    //-- State --//
    const [ editing, setEditing ] = useState<boolean>(false);

    //-- Hooks --//
    const [ field ] = useField(props.name);

    //-- Refs --//
    /**
     * Used for listening for input's unfocus event
     */
    const inputRef = useRef<HTMLInputElement>(null);

    //-- Handlers --//

    /**
     * Called when the component is clicked while not in edit mode
     */
    const handleDisplayClick = () => {
        setEditing(true);
    }

    /**
     * Called when input is focused out. Sets editing mode to false
     */
    const handleFocusOut = () => {
        setEditing(false);
    }

    

    useEffect(() => {

        const input_element = inputRef.current!;

        input_element.addEventListener('focusout', handleFocusOut)

        return () => {
            input_element.removeEventListener('focusout', handleFocusOut)
        }
    }, [])

    useEffect(() => {
        const input_element = inputRef.current!;
        if(editing) {
            input_element.focus()
        }
    }, [ editing ])

    return(
        <>
            <input
                {...props}
                ref={inputRef}
                className={inputClassName || ""}
                style={{
                    display: editing ? 'flex' : 'none'
                }}
                onChange={(e: ChangeEvent<HTMLInputElement>) => {
                    field.onChange(props.name)(e);
                    onChange && onChange(e);
                }}
                value={field.value}
            />
            {!editing ? <DisplayWrapper onClick={handleDisplayClick}>{field.value}</DisplayWrapper> : null}
        </>
        
    )
}