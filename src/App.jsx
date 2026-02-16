import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import { ProjectsProvider } from './context/ProjectsContext'
import { AuthProvider } from './context/AuthContext'
import { ThemeProvider } from './context/ThemeContext'
import Home from './pages/Home'
import ProjectDetail from './pages/ProjectDetail'
import Admin from './pages/Admin'
import Login from './pages/Login'
import Navigation from './components/Navigation'
import ProtectedRoute from './components/ProtectedRoute'

function App() {
  return (
    <ThemeProvider>
      <AuthProvider>
        <ProjectsProvider>
          <Router basename="/Robert-portfolio">
            <div className="app">
              <Navigation />
              <div className="content">
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/project/:id" element={<ProjectDetail />} />
                  <Route path="/login" element={<Login />} />
                  <Route path="/admin" element={<Admin />} />
                </Routes>
              </div>
            </div>
          </Router>
        </ProjectsProvider>
      </AuthProvider>
    </ThemeProvider>
  )
}

export default App
