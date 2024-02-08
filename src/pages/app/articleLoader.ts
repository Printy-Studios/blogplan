// Core
import { LoaderFunctionArgs } from 'react-router-dom'

// Util
import db from '@/util/db'

/**
 * Loader for article page
 * 
 * ## Params
 * 
 * `article_id` - ID of article to fetch and display
 */
export default async function articleLoader( { params }: LoaderFunctionArgs) {

    const article = await db.getArticle(parseInt(params.article_id!));
    if (!article) throw new Error('Could not find article by ID ' + params.article_id);
    const outline = await db.getSections(article.id);

    console.log(outline)

    if(!article) {
        throw new Error('Article not found')
    }

    return {
        article,
        outline
    }
}