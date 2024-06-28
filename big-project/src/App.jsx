import { createBrowserRouter, RouterProvider } from 'react-router-dom'

//pages
import Root from './pages/Root'
import Home from './pages/home/Home'
import SignUp from './pages/registration/SignUp'
import Login from './pages/registration/Login'
import Profile from './pages/profile/Profile'
import DiaryOverview from './pages/diary/DiaryOverview'
import MindfulnessCourse from './pages/courses/MindfulnessCourse'
import DistressToleranceCourse from './pages/courses/DistressToleranceCourse'
import EmotionRegulationCourse from './pages/courses/EmotionRegulationCourse'
import InterpersonalEffectivenessCourse from './pages/courses/InterpersonalEffectivenessCourse'
import MindfulnessPractice from './pages/skills/mindfulness/MindfulnessPractice'
import DistressTolerancePractice from './pages/skills/distress-tolerance/DistressTolerancePractice'
import EmotionRegulationPractice from './pages/skills/emotion-regulation/EmotionRegulationPractice'
import InterpersonalEffectivenessPractice from './pages/skills/interpersonal/InterpersonalEffectivenessPractice'
import OrientationBehaviorAnalysisPage from './pages/skills/mindfulness/OrientationBehaviorAnalysisPage'
import CoreMindfulnessSkillsPage from './pages/skills/mindfulness/CoreMindfulnessSkillsPage'
import OtherPerspectivesMindfulnessPage from './pages/skills/mindfulness/OtherPerspectivesMindfulnessPage'
import CrisisSurvivalPage from './pages/skills/distress-tolerance/CrisisSurvivalPage'
import RealityAcceptancePage from './pages/skills/distress-tolerance/RealityAcceptancePage'
import WhenCrisisAddictionPage from './pages/skills/distress-tolerance/WhenCrisisAddictionPage'
import UnderstandingEmotionsPage from './pages/skills/emotion-regulation/UnderstandingEmotionsPage'
import ChangingResponsesPage from './pages/skills/emotion-regulation/ChangingResponsesPage'
import ReducingVulnerabilityPage from './pages/skills/emotion-regulation/ReducingVulnerabilityPage'
import ManagingEmotionsPage from './pages/skills/emotion-regulation/ManagingEmotionsPage'
import GoalsPage from './pages/skills/interpersonal/GoalsPage'
import ObtainingObjectivesPage from './pages/skills/interpersonal/ObtainingObjectivesPage'
import BuildingRelationshipsPage from './pages/skills/interpersonal/BuildingRelationshipsPage'
import MiddlePathPage from './pages/skills/interpersonal/MiddlePathPage'

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
      },
      {
        path: '/practice/mindfulness/orientation_behavior_analysis',
        element: <OrientationBehaviorAnalysisPage />
      },
      {
        path: '/practice/mindfulness/core_mindfulness_skills',
        element: <CoreMindfulnessSkillsPage />
      },
      {
        path: '/practice/mindfulness/other_perspectives',
        element: <OtherPerspectivesMindfulnessPage />
      },
      {
        path: '/practice/distress_tolerance/crisis_survival',
        element: <CrisisSurvivalPage />
      },
      {
        path: '/practice/distress_tolerance/reality_acceptance',
        element: <RealityAcceptancePage />
      },
      {
        path: '/practice/distress_tolerance/when_crisis_is_addiction',
        element: <WhenCrisisAddictionPage />
      },
      {
        path: '/practice/emotion_regulation/understanding_emotions',
        element: <UnderstandingEmotionsPage />
      },
      {
        path: '/practice/emotion_regulation/changing_responses',
        element: <ChangingResponsesPage />
      },
      {
        path: '/practice/emotion_regulation/reducing_vulnerability',
        element: <ReducingVulnerabilityPage />
      },
      {
        path: '/practice/emotion_regulation/managing_emotions',
        element: <ManagingEmotionsPage />
      },
      {
        path: '/practice/interpersonal_effectiveness/goals_and_factors',
        element: <GoalsPage />
      },
      {
        path: '/practice/interpersonal_effectiveness/obtaining_objectives',
        element: <ObtainingObjectivesPage />
      },
      {
        path: '/practice/interpersonal_effectiveness/building_relationships',
        element: <BuildingRelationshipsPage />
      },
      {
        path: '/practice/interpersonal_effectiveness/walking_the_middle_path',
        element: <MiddlePathPage />
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
