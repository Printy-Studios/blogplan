// Types
import { Article, ArticleCreate, ArticleUpdate } from '@/types/Article';

export default abstract class DB {
    //-- Articles --//
    /**
     * Get article by ID
     * @param article_id ID of article
     * 
     * @returns Promise resolving to an Article object or null if article not found
     */
    abstract getArticle(article_id: number): Promise<Article | null>;
    /**
     * Get all articles
     * 
     * @returns Promise resolving to an array of Articles
     */
    abstract getArticles(): Promise<Article[]>;
    /**
     * Create new article
     * @param article Article object to create
     * 
     * @returns id of newly created article
     */
    abstract createArticle(article: ArticleCreate): Promise<number>;
    /**
     * Set an article to a specific Article object
     * @param article article to change
     */
    abstract setArticle(article: Article): Promise<void>;
    /**
     * Update an article
     * @param article Article object with updated values.
     */
    abstract updateArticle(article: ArticleUpdate): Promise<void>;
}