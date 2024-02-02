// Core
import { useLoaderData } from 'react-router-dom'

// Components
import Page from '@/components/layout/Page'

// Types
import { Article } from '@/types/Article';
import ArticleHeader from '@/components/layout/ArticleHeader';

export default function ArticlePage() {

    const { article } = useLoaderData() as { article: Article };

    return (
        <Page
            header={<ArticleHeader />}
        >
            <section className='article'>
                <h1>{article.title}</h1>
            </section>
        </Page>
    )
}