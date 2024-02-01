import { PropsWithChildren } from 'react';

export default function Page( { children }: PropsWithChildren) {
    return (
        <>
            <header className='app'>

            </header>
            <main>
                { children }
            </main>
        </>
    )
}