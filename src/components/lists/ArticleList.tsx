// Core
import { useNavigate } from 'react-router-dom'

// Types
import { Article } from '@/types/Article'

// Components
import ListButton from '../buttons/ListButton'

// Constants
import routes from '@/constants/routes'

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

    const navigate = useNavigate();
    
    /**
     * On article list item click. Redirects to respective article's page
     * 
     * @param article_id ID of article to redirect to
     */
    const handleArticleClick = (article_id: number) => {
        navigate(routes.article(article_id))
    }

    return (
        <ul>
            
                {articles.map((article) => (
                    <li
                        key={article.id}
                    >
                        <ListButton
                            leftText={article.title}
                            rightText={article.published ? 'Published' : ''}
                            onClick={() => handleArticleClick(article.id)}
                        />
                    </li>
                ))}
            
        </ul>
    )
}