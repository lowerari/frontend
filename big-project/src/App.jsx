import { createBrowserRouter, RouterProvider } from 'react-router-dom'

//pages
import Root from './pages/Root'
import Home from './pages/Home'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      {
        path: '/',
        element: <Home />
      }
    ],
  }
])

function App() {

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
