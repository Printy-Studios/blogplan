// Types
import { Article, ArticleCreate, ArticleUpdate } from '@/types/Article';
import { Section, SectionCreate } from '@/types/Section';

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
    abstract getArticles(filter?: Partial<Article>): Promise<Article[]>;
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
    /**
     * Deletes an article
     * @param article_id ID of article to delete
     */
    abstract deleteArticle(article_id: number): Promise<void>;

    //-- Sections --//
    /**
     * Create new section for an article
     * @param article_id 
     * @param section 
     */
    abstract createSection(section: SectionCreate): Promise<number>;
    /**
     * Delete section by ID
     * @param section_id ID of section to delete
     */
    abstract deleteSection(section_id: number): Promise<void>;
    /**
     * Get all sections of an article
     * @param article_id ID of article for which to retrieve sections
     * 
     * @returns and array of Section objects for specified article
     */
    abstract getSections(article_id: number): Promise<Section[]>;
}