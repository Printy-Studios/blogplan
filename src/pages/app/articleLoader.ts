// Core
import { LoaderFunctionArgs } from 'react-router-dom'

// Util
import db from '@/util/db'

export default async function articleLoader( { params }: LoaderFunctionArgs) {

    const article = await db.getArticle(parseInt(params.article_id!))

    if(!article) {
        throw new Error('Article not found')
    }

    return {
        article
    }
}