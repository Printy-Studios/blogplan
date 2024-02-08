// Types
import { Article, ArticleCreate, ArticleUpdate } from '@/types/Article';

// Constants
import storage_keys from '@/constants/storage_keys';

// Util
import storage from '@/util/storage';

// Classes
import DB from './DB';

export default class LocalDB extends DB {

    //-- Util --//
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

    //-- Articles --//

    async getArticle(article_id: number): Promise<Article | null> {
        const articles = await this.getArticles();

        const article = await articles.find(_article => _article.id == article_id);

        if(!article) {
            return null;
        }

        return article;
    }

    async getArticles(): Promise<Article[]> {

        const articles = storage.get(storage_keys.articles);

        if(!articles) {
            storage.set(storage_keys.articles, []);
            return [];
        }

        return storage.get(storage_keys.articles);
    }
    
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

    async setArticle(article: Article): Promise<void> {
        const articles = await this.getArticles();

        console.log(articles[0].id);
        console.log(article.id)

        const article_index = articles.findIndex(_article => article.id == _article.id);

        if (article_index == -1) throw new Error('Could not find article with ID ' + article.id);

        articles[article_index] = article;

        storage.set(storage_keys.articles, articles);
    }

    async updateArticle(article: ArticleUpdate): Promise<void> {
        const articles = await this.getArticles();

        let article_to_update = articles.find(_article => _article.id == article.id);

        if (!article_to_update) throw new Error('Could not find article with ID ' + article.id);

        article_to_update = {
            ...article_to_update,
            ...article
        }

        await this.setArticle(article_to_update);
    }
}