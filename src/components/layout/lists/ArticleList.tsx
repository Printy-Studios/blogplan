// Types
import { Article } from '@/types/Article'

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
            <li>

            </li>
        </ul>
    )
}