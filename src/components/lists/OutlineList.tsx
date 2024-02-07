// Core
import { useNavigate } from 'react-router-dom'

// Types
import { Article } from '@/types/Article'

// Components
import ListButton from '../buttons/ListButton'

// Constants
import routes from '@/constants/routes'
import ButtonList from './ButtonList'

type OutlineListProps = {
    /**
     * List of articles to display
     */
    outline: string[]
}

/**
 * Simple list that displays a list of articles
 */
export default function OutlineList( { outline }: OutlineListProps) {

    const navigate = useNavigate();
    
    /**
     * On article list item click. Redirects to respective article's page
     * 
     * @param article_id ID of article to redirect to
     */
    const handleSecClick = (article_id: number) => {
        navigate(routes.article(article_id))
    }

    return (
        <ButtonList<string>
            data={outline}
        />
    )
}