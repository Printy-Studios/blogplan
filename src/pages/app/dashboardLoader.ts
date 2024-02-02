import db from '@/util/db'

export default async function dashboardLoader() {

    const articles = await db.getArticles();

    return {
        articles
    }
}