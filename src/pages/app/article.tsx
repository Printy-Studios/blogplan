// Core
import { useLoaderData } from 'react-router-dom'
import { Formik } from 'formik';

// Components
import Page from '@/components/layout/Page'
import ArticleHeader from '@/components/layout/ArticleHeader';
import Details from '@/components/layout/Details';
import DisplayInput from '@/components/input/DisplayInput';

// Types
import { Article } from '@/types/Article';

/**
 * Single article page
 * @returns 
 */
export default function ArticlePage() {

    const { article } = useLoaderData() as { article: Article };

    return (
        <Page
            header={<ArticleHeader />}
        >
            <Formik
                initialValues={{
                    title: article.title
                }}
                onSubmit={() => {}}
            >
                <section className='article'>
                    <DisplayInput
                        name='title'
                        displayWrapper='h1'
                    />
                    <Details
                        title="Outline"
                    >

                    </Details>
                </section>
            </Formik>
            
        </Page>
    )
}