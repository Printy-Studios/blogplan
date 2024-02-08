// Types
import { Section } from './Section'

export type Article = {
    id: number
    title: string
    published: boolean
    archived: boolean
}

export type ArticleCreate = {
    title: string,
    published?: boolean
}

export type ArticleUpdate = Partial<Article> & {
    id: number
}