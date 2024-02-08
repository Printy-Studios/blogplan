// Types
import { Article, ArticleCreate, ArticleUpdate } from '@/types/Article';
import { Section, SectionCreate } from '@/types/Section';

// Constants
import storage_keys, { StorageKeyName } from '@/constants/storage_keys';

// Util
import storage from '@/util/storage';

// Classes
import DB from './DB';

type ResourceName = 'article' | 'section';

type ResourceMap = Record<ResourceName, string>

type BaseResource = {
    id: number
}

/**
 * Resource name to storage key name mapping
 */
const keys: ResourceMap = {
    article: storage_keys.articles,
    section: storage_keys.sections
}


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

    async getArticles(filter?: Partial<Article>): Promise<Article[]> {

        return await this.getAll('article', filter);

    }
    
    async createArticle(article: ArticleCreate): Promise<number> {
        const articles = await this.getArticles();

        const id = this.getMaxID(storage_keys.articles);

        storage.set(storage_keys.articles, [
            ...articles,
            {
                ...article,
                archived: false,
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

    async deleteArticle(article_id: number): Promise<void> {
        return await this.delete('article', article_id);    
    }
    
    //-- Sections --//

    async createSection(section: SectionCreate): Promise<number> {
        return await this.create<SectionCreate>('section', section);
    }

    async deleteSection(section_id: number): Promise<void> {
        return await this.delete('section', section_id);    
    }

    async getSections(article_id: number): Promise<Section[]> {
        const all = await this.getAll<Section>('section');

        return await all.filter(section => section.article_id == article_id);
    }

    //-- Abstract CRUD methods --//

    /**
     * Create a resource
     * @param resource_name name of resource
     * @param resource resource object
     * @returns ID of newly created resource
     */
    private async create<Resource>(resource_name: ResourceName, resource: Resource): Promise<number> {

        const key = keys[resource_name] as StorageKeyName;

        const all = await this.getAll<Resource>(resource_name);

        const id = this.getMaxID(storage_keys[key]);

        storage.set(key, [
            ...all,
            {
                ...resource,
                id
            }
        ])

        return id;
    }

    /**
     * Delete a resource
     * @param resource_name name of resource
     * @param resource_id ID of resource to delete
     */
    private async delete<Resource extends BaseResource>(resource_name: ResourceName, resource_id: number): Promise<void> {
        const all = await this.getAll<Resource>(resource_name);

        const index = all.findIndex(_resource => _resource.id == resource_id);

        if (index == -1) throw new Error('Could not find resource ' + resource_name + ' with ID ' + resource_id);

        all.splice(index, 1);

        this.setAll(resource_name, all);
    }

    /**
     * Get all resources of specified resource type
     * @param resource_name name of resource
     * @returns Array of resources
     */
    private async getAll<Resource>(resource_name: ResourceName, filter?: Partial<Resource>): Promise<Resource[]> {

        const key = keys[resource_name] as StorageKeyName;

        let all = storage.get(key) as Resource[];

        if(!all) {
            this.setAll(resource_name, []);
            return [];
        }

        if(filter) {
            all = all.filter(resource => {
                return Object.entries(filter).every(([key, filter_property]) => {
                    return resource[key as keyof Resource] == filter_property
                })
            })
        }
        

        return all;
    }

    /**
     * Set all resources to a new array
     * @param resource_name name of resource
     * @param all the new array of resources
     */
    private async setAll<Resource>(resource_name: ResourceName, all: Resource[]): Promise<void> {
        storage.set(storage_keys[keys[resource_name] as StorageKeyName], all);
    }


}