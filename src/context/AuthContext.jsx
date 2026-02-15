import { createContext, useState, useContext } from 'react'

const AuthContext = createContext()

// Admin password - in production, this should be an environment variable
const ADMIN_PASSWORD = 'admin123'

// eslint-disable-next-line react-refresh/only-export-components
export const useAuth = () => {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider')
  }
  return context
}

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(() => {
    // Initialize state from localStorage
    const authStatus = localStorage.getItem('portfolio-auth')
    return authStatus === 'true'
  })

  const login = (password) => {
    if (password === ADMIN_PASSWORD) {
      setIsAuthenticated(true)
      localStorage.setItem('portfolio-auth', 'true')
      return true
    }
    return false
  }

  const logout = () => {
    setIsAuthenticated(false)
    localStorage.removeItem('portfolio-auth')
  }

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  )
}
