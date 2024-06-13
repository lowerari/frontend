import { createBrowserRouter, RouterProvider } from 'react-router-dom'

//pages
import Root from './pages/Root'
import Home from './pages/Home'
import SignUp from './pages/SignUp'
import Login from './pages/Login'
import Profile from './pages/Profile'
import DiaryOverview from './pages/DiaryOverview'
import MindfulnessCourse from './pages/MindfulnessCourse'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/login',
        element: <Login />
      },
      {
        path: '/signup',
        element: <SignUp />
      },
      {
        path: '/profile',
        element: <Profile />
      },
      {
        path: '/diary_overview',
        element: <DiaryOverview />
      },
      {
        path: '/course/mindfulness',
        element: <MindfulnessCourse />
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
