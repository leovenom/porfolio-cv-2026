import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { LiquidBackdrop } from './components/LiquidBackdrop'
import { useRouteFocus } from './lib/a11y'
import { NotFound } from './pages/NotFound'
import { PortfolioPage } from './pages/PortfolioPage'
import { ProjectPage } from './pages/ProjectPage'

function RouteFocusHandler() {
  useRouteFocus()
  return null
}

function App() {
  return (
    <>
      <LiquidBackdrop />
      <BrowserRouter>
        <RouteFocusHandler />
        <Routes>
          <Route path="/" element={<PortfolioPage />} />
          <Route path="/projects/:projectId" element={<ProjectPage />} />
          <Route path="/design" element={<PortfolioPage />} />
          <Route path="/design/projects/:projectId" element={<ProjectPage />} />
          <Route path="/front-end" element={<PortfolioPage />} />
          <Route path="/front-end/projects/:projectId" element={<ProjectPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
