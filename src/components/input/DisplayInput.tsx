// Core
import { useField } from 'formik';
import { ChangeEvent, ComponentProps, useEffect, useReducer, useRef, useState } from 'react'

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

    console.log(inputRef)

    //-- Handlers --//

    /**
     * Called when the component is clicked while not in edit mode
     */
    const handleDisplayClick = () => {
        setEditing(true);
    }

    const handleFocusOut = () => {
        setEditing(false);
    }

    useEffect(() => {

        if(editing) {
            inputRef.current?.addEventListener('focusout', handleFocusOut)
            inputRef.current?.focus();
        } else {
            inputRef.current?.removeEventListener('focusout', handleFocusOut)
        }

        return () => {
            inputRef.current?.removeEventListener('focusout', handleFocusOut)
        }
    }, [editing])

    return(
        editing ?
            <input
                {...props}
                ref={inputRef}
                className={inputClassName || ""}
                onChange={(e: ChangeEvent<HTMLInputElement>) => {
                    field.onChange(props.name)(e);
                    onChange && onChange(e);
                }}
                value={field.value}
            />
        : <DisplayWrapper onClick={handleDisplayClick}>{field.value}</DisplayWrapper>
    )
}