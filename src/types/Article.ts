export type Article = {
    id: number
    title: string
    published: boolean
}

export type ArticleCreate = {
    title: string,
    published?: boolean
}