import { useState } from 'react'
import './LLMFileSearch.css'

function LLMFileSearch() {
  const [query, setQuery] = useState('')
  const [results, setResults] = useState([])
  const [isSearching, setIsSearching] = useState(false)

  // Sample file database
  const sampleFiles = [
    {
      name: 'project-proposal.pdf',
      content: 'Comprehensive project proposal for Q1 2024 initiatives including budget allocation and timeline',
      type: 'PDF',
      date: '2024-01-15',
      size: '2.4 MB'
    },
    {
      name: 'meeting-notes.md',
      content: 'Team meeting notes discussing architecture decisions for microservices implementation',
      type: 'Markdown',
      date: '2024-02-10',
      size: '45 KB'
    },
    {
      name: 'financial-report.xlsx',
      content: 'Annual financial report with revenue projections and expense breakdowns',
      type: 'Excel',
      date: '2024-01-20',
      size: '1.8 MB'
    },
    {
      name: 'api-documentation.md',
      content: 'REST API documentation with endpoint specifications and authentication methods',
      type: 'Markdown',
      date: '2024-02-05',
      size: '128 KB'
    },
    {
      name: 'user-research.pdf',
      content: 'User research findings from customer interviews and usability testing sessions',
      type: 'PDF',
      date: '2024-01-28',
      size: '3.2 MB'
    }
  ]

  const handleSearch = (e) => {
    e.preventDefault()
    if (!query.trim()) return

    setIsSearching(true)
    
    // Simulate LLM processing with intelligent search
    setTimeout(() => {
      const searchResults = sampleFiles.filter(file => {
        const queryLower = query.toLowerCase()
        return (
          file.name.toLowerCase().includes(queryLower) ||
          file.content.toLowerCase().includes(queryLower) ||
          file.type.toLowerCase().includes(queryLower)
        )
      }).map(file => ({
        ...file,
        relevance: Math.floor(Math.random() * 30) + 70 // Simulate relevance score
      }))

      setResults(searchResults.sort((a, b) => b.relevance - a.relevance))
      setIsSearching(false)
    }, 1500)
  }

  return (
    <div className="llm-search">
      <div className="page-header">
        <h1 className="page-title">🔍 Private LLM File Search</h1>
        <p className="page-description">
          An intelligent file search interface powered by Large Language Models. 
          Search through your private documents using natural language queries 
          with advanced context understanding and semantic search capabilities.
        </p>
      </div>

      <div className="search-section">
        <form onSubmit={handleSearch} className="search-form">
          <div className="search-input-wrapper">
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Ask anything about your files... (e.g., 'project proposals from January' or 'documents about API')"
              className="search-input"
            />
            <button 
              type="submit" 
              className="search-button"
              disabled={isSearching}
            >
              {isSearching ? 'Searching...' : 'Search'}
            </button>
          </div>
        </form>

        {isSearching && (
          <div className="searching-indicator">
            <div className="spinner"></div>
            <p>Analyzing your query with AI...</p>
          </div>
        )}

        {!isSearching && results.length > 0 && (
          <div className="results-section">
            <div className="results-header">
              <h2>Found {results.length} relevant {results.length === 1 ? 'result' : 'results'}</h2>
            </div>
            <div className="results-list">
              {results.map((result, index) => (
                <div key={index} className="result-card">
                  <div className="result-header">
                    <div className="result-info">
                      <h3 className="result-title">{result.name}</h3>
                      <div className="result-meta">
                        <span className="result-type">{result.type}</span>
                        <span className="result-date">{result.date}</span>
                        <span className="result-size">{result.size}</span>
                      </div>
                    </div>
                    <div className="relevance-badge">
                      {result.relevance}% match
                    </div>
                  </div>
                  <p className="result-content">{result.content}</p>
                  <div className="result-actions">
                    <button className="action-button">Open</button>
                    <button className="action-button secondary">Preview</button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {!isSearching && results.length === 0 && query && (
          <div className="no-results">
            <div className="no-results-icon">🔍</div>
            <h3>No results found</h3>
            <p>Try a different search query or check your spelling</p>
          </div>
        )}
      </div>

      <div className="features-section">
        <h2 className="section-heading">Key Features</h2>
        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-icon">🤖</div>
            <h3>AI-Powered</h3>
            <p>Uses advanced LLM technology to understand natural language queries</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">🔒</div>
            <h3>Private & Secure</h3>
            <p>All data stays private with local processing and encryption</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">🎯</div>
            <h3>Semantic Search</h3>
            <p>Finds relevant content based on meaning, not just keywords</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">⚡</div>
            <h3>Fast Results</h3>
            <p>Optimized indexing for instant search across large document collections</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LLMFileSearch
