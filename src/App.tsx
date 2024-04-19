// Core
import { RouterProvider, createBrowserRouter, redirect } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'

// Style
import './style.css'

// Constants
import routes from './constants/routes'

// Util
import { toastAction } from './util/toast'

// Pages
import DashboardPage from './pages/app/dashboard'
import dashboardLoader from './pages/app/dashboardLoader'
import articleLoader from './pages/app/articleLoader'
import ArticlePage from './pages/app/article'

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

  
//
  return (
    <>
      <RouterProvider router={router} />
      <Toaster />
    </>
    
  )
}

export default App
