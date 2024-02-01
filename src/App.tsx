import { RouterProvider, createBrowserRouter, redirect } from 'react-router-dom'
import './style.css'
import DashboardPage from './pages/app/dashboard'
import routes from './constants/routes'


const router = createBrowserRouter([
  {
    path: '/',
    loader: async () => {
      return redirect(routes.dashboard)
    }
  },
  {
    path: routes.dashboard,
    element: <DashboardPage />
  }
])

function App() {

  return (
    <RouterProvider router={router} />
  )
}

export default App
