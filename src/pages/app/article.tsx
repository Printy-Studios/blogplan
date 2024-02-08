// Core
import { useLoaderData, useRevalidator } from 'react-router-dom'
import { Formik } from 'formik';

// Components
import Page from '@/components/layout/Page'
import ArticleHeader from '@/components/layout/ArticleHeader';
import Details from '@/components/layout/Details';
import DisplayInput from '@/components/input/DisplayInput';

// Types
import { Article } from '@/types/Article';
import db from '@/util/db';

// Icons
import PlusIcon from '@/icons/plus.svg'
import { Section } from '@/types/Section';
import OutlineList from '@/components/lists/OutlineList';

/**
 * Single article page
 * @returns 
 */
export default function ArticlePage() {

    //-- Hooks --//
    const { article, outline } = useLoaderData() as { article: Article, outline: Section[] };
    const { revalidate } = useRevalidator();

    //-- Handlers --//

    /**
     * On title input value change. Updates the articles title
     * @param new_title the new title
     */
    const handleTitleChange = async (new_title: string) => {
        await db.updateArticle({
            id: article.id,
            title: new_title
        })
    }

    /**
     * On 'Add section' button click. Creates new section for the article
     */
    const handleAddSection = async () => {
        await db.createSection({
            article_id: article.id,
            name: "New Section"
        })
        revalidate();
    }

    const handleArchiveArticle = async () => {
        await db.updateArticle({
            id: article.id,
            archived: true
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
                <section className='article details-list'>
                    <DisplayInput
                        name='title'
                        displayWrapper='h1'
                        onChange={(e) => handleTitleChange(e.currentTarget.value)}
                    />
                    <Details
                        title={<h2>Outline</h2>}
                        action={handleAddSection}
                        actionIcon={PlusIcon}
                    >
                        <OutlineList
                            outline={outline}
                        />
                    </Details>
                    <button 
                        className='primary'
                        type='button'
                        onClick={handleArchiveArticle}
                    >
                        ARCHIVE ARTICLE
                    </button>
                </section>
            </Formik>
            
        </Page>
    )
}