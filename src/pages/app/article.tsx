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
import db from '@/util/db';

/**
 * Single article page
 * @returns 
 */
export default function ArticlePage() {

    //-- Hooks --//
    const { article } = useLoaderData() as { article: Article };

    //-- Handlers --//

    const handleTitleChange = (new_title: string) => {
        db.updateArticle({
            id: article.id,
            title: new_title
        })
    }

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
                        onChange={(e) => handleTitleChange(e.currentTarget.value)}
                    />
                    <Details
                        title={<h2>Outline</h2>}
                    >

                    </Details>
                </section>
            </Formik>
            
        </Page>
    )
}