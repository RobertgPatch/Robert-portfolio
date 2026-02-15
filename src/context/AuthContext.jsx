import { createContext, useState, useContext } from 'react'

const AuthContext = createContext()

// Admin password - uses environment variable if available, falls back to default
// IMPORTANT: This is CLIENT-SIDE authentication only, suitable for personal portfolios
// For production apps with sensitive data, implement proper server-side authentication
const ADMIN_PASSWORD = import.meta.env.VITE_ADMIN_PASSWORD || 'admin123'

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
