import { RouterProvider, createBrowserRouter, redirect } from 'react-router-dom'
import './style.css'
import DashboardPage from './pages/app/dashboard'
import routes from './constants/routes'
import dashboardLoader from './pages/app/dashboardLoader'
import articleLoader from './pages/app/articleLoader'
import ArticlePage from './pages/app/article'

console.log(routes.article('[article_id]'));

const router = createBrowserRouter([
  {
    path: '/',
    loader: async () => {
      return redirect(routes.dashboard)
    }
  },
  {
    path: routes.dashboard,
    loader: dashboardLoader,
    element: <DashboardPage />
  },
  {
    path: routes.article(':article_id'),
    loader: articleLoader,
    element: <ArticlePage />
  }
])

function App() {

  return (
    <RouterProvider router={router} />
  )
}

export default App
