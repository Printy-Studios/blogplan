// Core
import { useLoaderData, useRevalidator } from 'react-router-dom';

// Components
import Details from '@/components/layout/Details';
import Page from '@/components/layout/Page';
import ArticleList from '@/components/lists/ArticleList';

// Icons
import PlusIcon from '@/icons/plus.svg'

// Types
import { Article } from '@/types/Article';
import db from '@/util/db';
import { useRef } from 'react';


export default function DashboardPage() {

    const { articles } = useLoaderData() as { articles: Article[]};
    const { revalidate } = useRevalidator();

    const articleDetailsRef = useRef<HTMLDetailsElement>(null);

    console.log(articles);


    // Handlers

    /**
     * On 'new article' button pressed. Creates new article
     */
    const handleNewArticleClick = async () => {
        await db.createArticle({
            title: 'New Article'
        })

        if(articleDetailsRef.current) {
            articleDetailsRef.current.open = true;
        }

        revalidate();
    }

    return (
        <Page>
            
            <section className='details-list'>
                <h1>Dashboard</h1>
                <Details
                    title={<h2>Favorites</h2>}
                    actionIcon={PlusIcon}
                >
                    Aaa
                </Details>
                <Details
                    title={<h2>Articles</h2>}
                    action={handleNewArticleClick}
                    actionIcon={PlusIcon}
                    detailsRef={articleDetailsRef}
                >
                    <ArticleList
                        articles={articles}
                    />
                </Details>
                <Details
                    title={<h2>Favorites</h2>}
                    actionIcon={PlusIcon}
                >
                    Aaa
                </Details>
            </section>
            
        </Page>
    )
}