// Core
import { useNavigate } from 'react-router-dom'

// Types
import { Article } from '@/types/Article'
import { Section } from '@/types/Section'

// Components
import ListButton from '../buttons/ListButton'
import ButtonList from './ButtonList'

// Constants
import routes from '@/constants/routes'

type OutlineListProps = {
    /**
     * List of articles to display
     */
    outline: Section[]
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
    const handleSectionClick = (section_id: number) => {
        // navigate(routes.article(article_id))
    }

    return (
        <ButtonList<Section>
            leftText={(section) => section.name}
            data={outline}
            onClick={(section) => handleSectionClick(section.id)}
            keyFn={(section) => section.id}
        />
    )
}