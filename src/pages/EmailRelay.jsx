import { useState } from 'react'
import './EmailRelay.css'

function EmailRelay() {
  const [email, setEmail] = useState({
    from: '',
    to: '',
    subject: '',
    message: ''
  })
  const [status, setStatus] = useState('')
  const [logs, setLogs] = useState([])

  const handleSubmit = (e) => {
    e.preventDefault()
    const timestamp = new Date().toLocaleTimeString()
    
    // Simulate email relay process
    const newLog = {
      time: timestamp,
      from: email.from,
      to: email.to,
      subject: email.subject,
      status: 'Queued'
    }
    
    setLogs([newLog, ...logs])
    setStatus('Email queued successfully!')
    
    // Simulate processing
    setTimeout(() => {
      setLogs(prevLogs => {
        const updated = [...prevLogs]
        if (updated[0]) {
          updated[0].status = 'Sent'
        }
        return updated
      })
      setStatus('Email sent successfully!')
    }, 2000)

    // Reset form
    setEmail({ from: '', to: '', subject: '', message: '' })
  }

  return (
    <div className="email-relay">
      <div className="page-header">
        <h1 className="page-title">📧 Email Relay System</h1>
        <p className="page-description">
          A high-performance email relay system with advanced routing, queue management, 
          and real-time delivery tracking. This demo showcases the core functionality 
          of sending and monitoring email delivery.
        </p>
      </div>

      <div className="content-grid">
        <div className="form-section">
          <h2 className="section-heading">Send Email</h2>
          <form onSubmit={handleSubmit} className="email-form">
            <div className="form-group">
              <label htmlFor="from">From</label>
              <input
                type="email"
                id="from"
                value={email.from}
                onChange={(e) => setEmail({...email, from: e.target.value})}
                placeholder="sender@example.com"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="to">To</label>
              <input
                type="email"
                id="to"
                value={email.to}
                onChange={(e) => setEmail({...email, to: e.target.value})}
                placeholder="recipient@example.com"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="subject">Subject</label>
              <input
                type="text"
                id="subject"
                value={email.subject}
                onChange={(e) => setEmail({...email, subject: e.target.value})}
                placeholder="Email subject"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                value={email.message}
                onChange={(e) => setEmail({...email, message: e.target.value})}
                placeholder="Your message here..."
                rows="6"
                required
              />
            </div>

            <button type="submit" className="submit-button">
              Send Email
            </button>

            {status && (
              <div className="status-message">
                {status}
              </div>
            )}
          </form>
        </div>

        <div className="logs-section">
          <h2 className="section-heading">Delivery Queue</h2>
          <div className="logs-container">
            {logs.length === 0 ? (
              <div className="empty-state">
                <p>No emails in queue</p>
                <p className="empty-subtitle">Send an email to see it here</p>
              </div>
            ) : (
              logs.map((log, index) => (
                <div key={index} className={`log-entry ${log.status.toLowerCase()}`}>
                  <div className="log-header">
                    <span className="log-time">{log.time}</span>
                    <span className={`log-status status-${log.status.toLowerCase()}`}>
                      {log.status}
                    </span>
                  </div>
                  <div className="log-details">
                    <div><strong>From:</strong> {log.from}</div>
                    <div><strong>To:</strong> {log.to}</div>
                    <div><strong>Subject:</strong> {log.subject}</div>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </div>

      <div className="features-section">
        <h2 className="section-heading">Key Features</h2>
        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-icon">⚡</div>
            <h3>High Performance</h3>
            <p>Handles thousands of emails per minute with optimized queue processing</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">🔄</div>
            <h3>Smart Routing</h3>
            <p>Intelligent routing based on domain, priority, and delivery requirements</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">📊</div>
            <h3>Real-time Tracking</h3>
            <p>Monitor delivery status, bounces, and engagement metrics in real-time</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">🔒</div>
            <h3>Secure</h3>
            <p>Industry-standard encryption and authentication protocols</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default EmailRelay
