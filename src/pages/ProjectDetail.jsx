import { useParams, Link } from 'react-router-dom'
import { useProjects } from '../context/ProjectsContext'
import './ProjectDetail.css'

function ProjectDetail() {
  const { id } = useParams()
  const { getProjectById } = useProjects()
  const project = getProjectById(id)

  if (!project) {
    return (
      <div className="project-detail">
        <div className="not-found">
          <h1>Project Not Found</h1>
          <p>The project you're looking for doesn't exist.</p>
          <Link to="/" className="back-link">← Back to Home</Link>
        </div>
      </div>
    )
  }

  return (
    <div className="project-detail">
      <Link to="/" className="back-link">← Back to Home</Link>
      
      <div className="project-header">
        <div className="project-icon-large">{project.icon}</div>
        <div className="project-header-content">
          <h1 className="project-title">{project.title}</h1>
          <div className="project-tags">
            {project.tags.map((tag, index) => (
              <span key={index} className="tag">{tag}</span>
            ))}
          </div>
          <p className="project-status">Status: <span className="status-badge">{project.status}</span></p>
        </div>
      </div>

      <div className="project-links">
        {project.liveUrl && (
          <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="project-link-button primary">
            🌐 View Live Demo
          </a>
        )}
        {project.githubUrl && (
          <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="project-link-button secondary">
            💻 View on GitHub
          </a>
        )}
      </div>

      <section className="project-section">
        <h2>Overview</h2>
        <p>{project.details.overview}</p>
      </section>

      <section className="project-section">
        <h2>Key Features</h2>
        <ul className="features-list">
          {project.details.keyFeatures.map((feature, index) => (
            <li key={index}>{feature}</li>
          ))}
        </ul>
      </section>

      <section className="project-section">
        <h2>Technologies Used</h2>
        <div className="technologies">
          {project.details.technologies.map((tech, index) => (
            <span key={index} className="technology">{tech}</span>
          ))}
        </div>
      </section>

      {project.details.challenges && (
        <section className="project-section">
          <h2>Challenges & Solutions</h2>
          <p>{project.details.challenges}</p>
        </section>
      )}
    </div>
  )
}

export default ProjectDetail
