// Types
import { Article, ArticleCreate } from '@/types/Article';

export default abstract class DB {
    /**
     * Get article by ID
     * @param article_id ID of article
     * 
     * @returns Promise resolving to an Article object or null if article not found
     */
    abstract getArticle(article_id: number): Promise<Article | null>
    abstract getArticles(): Promise<Article[]>
    abstract createArticle(article: ArticleCreate): Promise<number>
}