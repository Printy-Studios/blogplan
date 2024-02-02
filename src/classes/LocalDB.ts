// Types
import { Article, ArticleCreate } from '@/types/Article';

// Constants
import storage_keys from '@/constants/storage_keys';

// Util
import storage from '@/util/storage';

// Classes
import DB from './DB';

export default class LocalDB extends DB {

    /**
     * Get max ID for given resource
     * @param key key of resource, for examples 'articles'
     */
    private getMaxID(key: string) {
        const max_ids = storage.get(storage_keys.max_ids);
        if(!max_ids) {
            storage.set('max_ids', {
                [storage_keys.articles]: 1
            });
            return 1;
        }

        const max_id = max_ids[key];

        if(!max_id) {
            storage.set(storage_keys.max_ids, {
                ...max_ids,
                [key]: 1
            })
            return 1;
        }

        storage.set(storage_keys.max_ids, {
            ...max_ids,
            [key]: max_id + 1
        })

        return max_id + 1;
    }

    async getArticle(article_id: number): Promise<Article | null> {
        const articles = await this.getArticles();

        const article = await articles.find(_article => _article.id == article_id);

        if(!article) {
            return null;
        }

        return article;
    }

    /**
     * Get all articles
     * @returns array of Article objects
     */
    async getArticles(): Promise<Article[]> {

        const articles = storage.get(storage_keys.articles);

        if(!articles) {
            storage.set(storage_keys.articles, []);
            return [];
        }

        return storage.get(storage_keys.articles);
    }
    
    /**
     * Create new article according to the passed Article object
     * @param article 
     */
    async createArticle(article: ArticleCreate): Promise<number> {
        const articles = await this.getArticles();

        const id = this.getMaxID(storage_keys.articles);

        storage.set(storage_keys.articles, [
            ...articles,
            {
                ...article,
                id
            }
        ])

        return id;
    }
}