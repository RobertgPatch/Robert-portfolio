/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useState } from 'react'
import projectsData from '../data/projects.json'

const ProjectsContext = createContext()

export function ProjectsProvider({ children }) {
  const [projects, setProjects] = useState(() => {
    // Initialize state from localStorage or default data
    const savedProjects = localStorage.getItem('portfolio-projects')
    if (savedProjects) {
      return JSON.parse(savedProjects)
    } else {
      localStorage.setItem('portfolio-projects', JSON.stringify(projectsData))
      return projectsData
    }
  })

  const addProject = (project) => {
    const newProject = {
      ...project,
      id: project.title.toLowerCase().replace(/\s+/g, '-'),
      featured: false
    }
    const updatedProjects = [...projects, newProject]
    setProjects(updatedProjects)
    localStorage.setItem('portfolio-projects', JSON.stringify(updatedProjects))
  }

  const updateProject = (id, updates) => {
    const updatedProjects = projects.map(p => 
      p.id === id ? { ...p, ...updates } : p
    )
    setProjects(updatedProjects)
    localStorage.setItem('portfolio-projects', JSON.stringify(updatedProjects))
  }

  const deleteProject = (id) => {
    const updatedProjects = projects.filter(p => p.id !== id)
    setProjects(updatedProjects)
    localStorage.setItem('portfolio-projects', JSON.stringify(updatedProjects))
  }

  const getFeaturedProjects = () => {
    return projects.filter(p => p.featured)
  }

  const getProjectById = (id) => {
    return projects.find(p => p.id === id)
  }

  return (
    <ProjectsContext.Provider value={{
      projects,
      addProject,
      updateProject,
      deleteProject,
      getFeaturedProjects,
      getProjectById
    }}>
      {children}
    </ProjectsContext.Provider>
  )
}

export function useProjects() {
  const context = useContext(ProjectsContext)
  if (!context) {
    throw new Error('useProjects must be used within ProjectsProvider')
  }
  return context
}
