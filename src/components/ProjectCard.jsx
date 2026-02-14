import { Link } from 'react-router-dom'
import './ProjectCard.css'

function ProjectCard({ project }) {
  return (
    <Link to={`/project/${project.id}`} className="project-card">
      <div className="card-icon">{project.icon}</div>
      <h3 className="card-title">{project.title}</h3>
      <p className="card-description">{project.description}</p>
      <div className="card-tags">
        {project.tags.map((tag, index) => (
          <span key={index} className="tag">{tag}</span>
        ))}
      </div>
      <div className="card-footer">
        <span className="view-demo">View Details →</span>
      </div>
    </Link>
  )
}

export default ProjectCard
