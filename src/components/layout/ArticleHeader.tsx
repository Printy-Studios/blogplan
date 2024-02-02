// Core
import { useNavigate } from 'react-router-dom';

// Components
import IconButton from '../buttons/IconButton';

// Icons
import ArrowLeftIcon from '@/icons/arrow-left.svg'

export default function ArticleHeader() {

    const navigate = useNavigate();

    const handleBackButtonClick = () => {
        navigate(-1);
    }

    return (
        // #TODO: <header/> element should be here and not in <Page/>
        <IconButton
            icon={ArrowLeftIcon}
            onClick={handleBackButtonClick}
        />
    )
}