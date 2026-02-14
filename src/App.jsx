import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import EmailRelay from './pages/EmailRelay'
import LLMFileSearch from './pages/LLMFileSearch'
import Navigation from './components/Navigation'

function App() {
  return (
    <Router>
      <div className="app">
        <Navigation />
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/email-relay" element={<EmailRelay />} />
            <Route path="/llm-search" element={<LLMFileSearch />} />
          </Routes>
        </div>
      </div>
    </Router>
  )
}

export default App
