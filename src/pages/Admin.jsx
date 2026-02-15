import { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { useProjects } from '../context/ProjectsContext'
import { useAuth } from '../context/AuthContext'
import './Admin.css'

function Admin() {
  const { projects, addProject, updateProject, deleteProject } = useProjects()
  const { isAuthenticated, logout } = useAuth()
  const navigate = useNavigate()
  const [isAdding, setIsAdding] = useState(false)
  const [editingId, setEditingId] = useState(null)
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    icon: '📦',
    tags: '',
    liveUrl: '',
    githubUrl: '',
    status: 'in-progress',
    featured: false,
    details: {
      overview: '',
      keyFeatures: '',
      technologies: '',
      challenges: ''
    }
  })

  const resetForm = () => {
    setFormData({
      title: '',
      description: '',
      icon: '📦',
      tags: '',
      liveUrl: '',
      githubUrl: '',
      status: 'in-progress',
      featured: false,
      details: {
        overview: '',
        keyFeatures: '',
        technologies: '',
        challenges: ''
      }
    })
    setIsAdding(false)
    setEditingId(null)
  }

  const handleEdit = (project) => {
    setFormData({
      title: project.title,
      description: project.description,
      icon: project.icon,
      tags: project.tags.join(', '),
      liveUrl: project.liveUrl || '',
      githubUrl: project.githubUrl || '',
      status: project.status,
      featured: project.featured,
      details: {
        overview: project.details.overview,
        keyFeatures: project.details.keyFeatures.join('\n'),
        technologies: project.details.technologies.join(', '),
        challenges: project.details.challenges || ''
      }
    })
    setEditingId(project.id)
    setIsAdding(true)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    
    const projectData = {
      title: formData.title,
      description: formData.description,
      icon: formData.icon,
      tags: formData.tags.split(',').map(t => t.trim()).filter(t => t),
      liveUrl: formData.liveUrl,
      githubUrl: formData.githubUrl,
      status: formData.status,
      featured: formData.featured,
      details: {
        overview: formData.details.overview,
        keyFeatures: formData.details.keyFeatures.split('\n').filter(f => f.trim()),
        technologies: formData.details.technologies.split(',').map(t => t.trim()).filter(t => t),
        challenges: formData.details.challenges
      }
    }

    if (editingId) {
      updateProject(editingId, projectData)
    } else {
      addProject(projectData)
    }
    
    resetForm()
  }

  const handleDelete = (id) => {
    if (window.confirm('Are you sure you want to delete this project?')) {
      deleteProject(id)
    }
  }

  const handleLogout = () => {
    logout()
    navigate('/')
  }

  return (
    <div className="admin">
      <div className="admin-header">
        <div>
          <h1>{isAuthenticated ? 'Manage Projects' : 'Projects'}</h1>
          <p className="admin-description">
            {isAuthenticated 
              ? 'Add, edit, or remove projects from your portfolio' 
              : 'View all portfolio projects (read-only)'}
          </p>
        </div>
        <div className="admin-header-actions">
          {isAuthenticated ? (
            <button className="btn btn-logout" onClick={handleLogout}>
              Logout
            </button>
          ) : (
            <button className="btn btn-primary" onClick={() => navigate('/login')}>
              Login to Edit
            </button>
          )}
        </div>
      </div>

      {isAuthenticated && (
        <>
          {!isAdding && (
            <button className="add-project-btn" onClick={() => setIsAdding(true)}>
              + Add New Project
            </button>
          )}

          {isAdding && (
            <div className="project-form-container">
              <h2>{editingId ? 'Edit Project' : 'Add New Project'}</h2>
              <form onSubmit={handleSubmit} className="project-form">
                <div className="form-grid">
                  <div className="form-group">
                    <label>Title *</label>
                    <input
                      type="text"
                      value={formData.title}
                      onChange={(e) => setFormData({...formData, title: e.target.value})}
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label>Icon (Emoji)</label>
                    <input
                      type="text"
                      value={formData.icon}
                      onChange={(e) => setFormData({...formData, icon: e.target.value})}
                      placeholder="📦"
                    />
                  </div>

                  <div className="form-group full-width">
                    <label>Description *</label>
                    <textarea
                      value={formData.description}
                      onChange={(e) => setFormData({...formData, description: e.target.value})}
                      rows="3"
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label>Tags (comma-separated)</label>
                    <input
                      type="text"
                      value={formData.tags}
                      onChange={(e) => setFormData({...formData, tags: e.target.value})}
                      placeholder="React, Node.js, API"
                    />
                  </div>

                  <div className="form-group">
                    <label>Status</label>
                    <select
                      value={formData.status}
                      onChange={(e) => setFormData({...formData, status: e.target.value})}
                    >
                      <option value="in-progress">In Progress</option>
                      <option value="completed">Completed</option>
                      <option value="archived">Archived</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label>Live URL</label>
                    <input
                      type="url"
                      value={formData.liveUrl}
                      onChange={(e) => setFormData({...formData, liveUrl: e.target.value})}
                      placeholder="https://example.com"
                    />
                  </div>

                  <div className="form-group">
                    <label>GitHub URL</label>
                    <input
                      type="url"
                      value={formData.githubUrl}
                      onChange={(e) => setFormData({...formData, githubUrl: e.target.value})}
                      placeholder="https://github.com/..."
                    />
                  </div>

                  <div className="form-group full-width">
                    <label className="checkbox-label">
                      <input
                        type="checkbox"
                        checked={formData.featured}
                        onChange={(e) => setFormData({...formData, featured: e.target.checked})}
                      />
                      Featured Project
                    </label>
                  </div>

                  <div className="form-group full-width">
                    <label>Overview *</label>
                    <textarea
                      value={formData.details.overview}
                      onChange={(e) => setFormData({
                        ...formData, 
                        details: {...formData.details, overview: e.target.value}
                      })}
                      rows="4"
                      required
                    />
                  </div>

                  <div className="form-group full-width">
                    <label>Key Features (one per line) *</label>
                    <textarea
                      value={formData.details.keyFeatures}
                      onChange={(e) => setFormData({
                        ...formData, 
                        details: {...formData.details, keyFeatures: e.target.value}
                      })}
                      rows="5"
                      placeholder="Feature 1&#10;Feature 2&#10;Feature 3"
                      required
                    />
                  </div>

                  <div className="form-group full-width">
                    <label>Technologies (comma-separated) *</label>
                    <input
                      type="text"
                      value={formData.details.technologies}
                      onChange={(e) => setFormData({
                        ...formData, 
                        details: {...formData.details, technologies: e.target.value}
                      })}
                      placeholder="React, Node.js, MongoDB"
                      required
                    />
                  </div>

                  <div className="form-group full-width">
                    <label>Challenges & Solutions</label>
                    <textarea
                      value={formData.details.challenges}
                      onChange={(e) => setFormData({
                        ...formData, 
                        details: {...formData.details, challenges: e.target.value}
                      })}
                      rows="3"
                    />
                  </div>
                </div>

                <div className="form-actions">
                  <button type="submit" className="btn btn-primary">
                    {editingId ? 'Update Project' : 'Add Project'}
                  </button>
                  <button type="button" className="btn btn-secondary" onClick={resetForm}>
                    Cancel
                  </button>
                </div>
              </form>
            </div>
          )}
        </>
      )}

      <div className="projects-list">
        <h2>Your Projects ({projects.length})</h2>
        {projects.length === 0 ? (
          <div className="empty-state">
            <p>No projects yet. Click "Add New Project" to get started!</p>
          </div>
        ) : (
          projects.map((project) => (
            <div key={project.id} className="project-item">
              <div className="project-item-header">
                <Link to={`/project/${project.id}`} className="project-item-link">
                  <div className="project-item-info">
                    <span className="project-item-icon">{project.icon}</span>
                    <div>
                      <h3>{project.title}</h3>
                      <p className="project-item-desc">{project.description}</p>
                      <div className="project-item-meta">
                        <span className={`status-badge ${project.status}`}>{project.status}</span>
                        {project.featured && <span className="featured-badge">Featured</span>}
                      </div>
                    </div>
                  </div>
                </Link>
                {isAuthenticated && (
                  <div className="project-item-actions">
                    <button className="btn-icon" onClick={() => handleEdit(project)}>✏️</button>
                    <button className="btn-icon" onClick={() => handleDelete(project.id)}>🗑️</button>
                  </div>
                )}
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  )
}

export default Admin
