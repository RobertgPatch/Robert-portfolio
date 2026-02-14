import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import { ProjectsProvider } from './context/ProjectsContext'
import Home from './pages/Home'
import ProjectDetail from './pages/ProjectDetail'
import Admin from './pages/Admin'
import Navigation from './components/Navigation'

function App() {
  return (
    <ProjectsProvider>
      <Router>
        <div className="app">
          <Navigation />
          <div className="content">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/project/:id" element={<ProjectDetail />} />
              <Route path="/admin" element={<Admin />} />
            </Routes>
          </div>
        </div>
      </Router>
    </ProjectsProvider>
  )
}

export default App
