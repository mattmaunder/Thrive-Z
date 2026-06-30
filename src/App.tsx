import { Navigate, Route, Routes } from 'react-router-dom'
import { AppLayout } from './components/AppLayout'
import { AccountsPage } from './pages/AccountsPage'
import { DashboardPage } from './pages/DashboardPage'
import { GoalsPage } from './pages/GoalsPage'
import { HomePage } from './pages/HomePage'
import { LoginPage } from './pages/LoginPage'
import { ThriveZHomePage } from './pages/ThriveZHomePage'
import { RoadmapPage } from './pages/RoadmapPage'
import { VisionMapPage } from './pages/VisionMapPage'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<ThriveZHomePage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route element={<AppLayout />}>
        <Route path="/home" element={<HomePage />} />
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/vision-map" element={<VisionMapPage />} />
        <Route path="/goals" element={<GoalsPage />} />
        <Route path="/roadmap" element={<RoadmapPage />} />
        <Route path="/accounts" element={<AccountsPage />} />
      </Route>
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  )
}
