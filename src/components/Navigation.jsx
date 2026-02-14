import { Link, useLocation } from 'react-router-dom'
import './Navigation.css'

function Navigation() {
  const location = useLocation()

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
            to="/email-relay" 
            className={`nav-link ${location.pathname === '/email-relay' ? 'active' : ''}`}
          >
            Email Relay
          </Link>
          <Link 
            to="/llm-search" 
            className={`nav-link ${location.pathname === '/llm-search' ? 'active' : ''}`}
          >
            LLM Search
          </Link>
        </div>
      </div>
    </nav>
  )
}

export default Navigation
