const routes = {
    dashboard: '/app/dashboard',
    article: (article_id: number | string) => `/app/articles/${article_id}`
}

export default routes;