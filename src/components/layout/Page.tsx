import { PropsWithChildren, ReactNode } from 'react';

type PageProps = {
    header?: ReactNode
}

export default function Page( { children, header }: PropsWithChildren<PageProps>) {
    return (
        <>
            <header className='app'>
                { header }
            </header>
            <main>
                { children }
            </main>
        </>
    )
}