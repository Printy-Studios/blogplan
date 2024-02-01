// Types
import { Article } from '@/types/Article'
import ListButton from '../buttons/ListButton'

type ArticleListProps = {
    /**
     * List of articles to display
     */
    articles: Article[]
}

/**
 * Simple list that displays a list of articles
 */
export default function ArticleList( { articles }: ArticleListProps) {
    return (
        <ul>
            
                {articles.map((article) => (
                    <li>
                        <ListButton
                            leftText={article.title}
                            rightText={article.published ? 'Published' : ''}
                        />
                    </li>
                ))}
            
        </ul>
    )
}