// Components
import Details from '@/components/layout/Details';
import Page from '@/components/layout/Page';
import ArticleList from '@/components/layout/lists/ArticleList';

// Icons
import PlusIcon from '@/icons/plus.svg'

// Types
import { Article } from '@/types/Article';

const placeholder_articles: Article[] = [
    {
        id: 1,
        title: 'Article 1',
        published: true
    },
    {
        id: 2,
        title: 'Article 2',
        published: false
    }
]

export default function DashboardPage() {
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
                    actionIcon={PlusIcon}
                >
                    <ArticleList
                        articles={placeholder_articles}
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