export type Article = {
    id: number
    title: string
    published: boolean
    outline: string[]
}

export type ArticleCreate = {
    title: string,
    published?: boolean
}