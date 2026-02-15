import { Link, useLocation } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'
import './Navigation.css'

function Navigation() {
  const location = useLocation()
  const { isAuthenticated } = useAuth()

  return (
    <nav className="navigation">
      <div className="nav-container">
        <Link to="/" className="nav-logo">
          <span className="logo-text">Robert's Portfolio</span>
        </Link>
        <div className="nav-links">
          <Link 
            to="/" 
            className={`nav-link ${location.pathname === '/' ? 'active' : ''}`}
          >
            Home
          </Link>
          <Link 
            to="/admin" 
            className={`nav-link ${location.pathname === '/admin' ? 'active' : ''}`}
          >
            {isAuthenticated ? 'Manage Projects' : 'View Projects'}
          </Link>
        </div>
      </div>
    </nav>
  )
}

export default Navigation
