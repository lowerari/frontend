import { createBrowserRouter, RouterProvider } from 'react-router-dom'

//pages
import Root from './pages/Root'
import Home from './pages/Home'
import SignUp from './pages/SignUp'
import Login from './pages/Login'
import Profile from './pages/Profile'
import DiaryOverview from './pages/DiaryOverview'
import MindfulnessCourse from './pages/MindfulnessCourse'
import DistressToleranceCourse from './pages/DistressToleranceCourse'
import EmotionRegulationCourse from './pages/EmotionRegulationCourse'
import InterpersonalEffectivenessCourse from './pages/InterpersonalEffectivenessCourse'
import MindfulnessPractice from './pages/MindfulnessPractice'
import DistressTolerancePractice from './pages/DistressTolerancePractice'
import EmotionRegulationPractice from './pages/EmotionRegulationPractice'
import InterpersonalEffectivenessPractice from './pages/InterpersonalEffectivenessPractice'

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
      },
      {
        path: '/course/distress_tolerance',
        element: <DistressToleranceCourse />
      },
      {
        path: '/course/emotion_regulation',
        element: <EmotionRegulationCourse />
      },
      {
        path: '/course/interpersonal_effectiveness',
        element: <InterpersonalEffectivenessCourse />
      },
      {
        path: '/practice/mindfulness',
        element: <MindfulnessPractice />
      },
      {
        path: '/practice/distress_tolerance',
        element: <DistressTolerancePractice />
      },
      {
        path: '/practice/emotion_regulation',
        element: <EmotionRegulationPractice />
      },
      {
        path: '/practice/interpersonal_effectiveness',
        element: <InterpersonalEffectivenessPractice />
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
