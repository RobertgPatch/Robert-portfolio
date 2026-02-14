import ProjectCard from '../components/ProjectCard'
import { useProjects } from '../context/ProjectsContext'
import './Home.css'

function Home() {
  const { getFeaturedProjects, projects } = useProjects()
  const featuredProjects = getFeaturedProjects()
  const displayProjects = featuredProjects.length > 0 ? featuredProjects : projects

  return (
    <div className="home">
      <section className="hero">
        <h1 className="hero-title">
          Welcome to My Portfolio
        </h1>
        <p className="hero-subtitle">
          Software Engineer | Full-Stack Developer
        </p>
        <p className="hero-description">
          Explore my recent projects showcasing modern web technologies, 
          scalable architectures, and innovative solutions.
        </p>
      </section>

      <section className="projects-section">
        <h2 className="section-title">Featured Projects</h2>
        {displayProjects.length > 0 ? (
          <div className="projects-grid">
            {displayProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        ) : (
          <div className="empty-state">
            <p>No projects yet. Use the Manage Projects page to add your first project!</p>
          </div>
        )}
      </section>

      <section className="about-section">
        <h2 className="section-title">About</h2>
        <div className="about-content">
          <p>
            I'm a passionate software engineer with expertise in building scalable, 
            user-friendly applications. This portfolio showcases my recent work, 
            highlighting my skills in modern web development, system design, 
            and innovative problem-solving.
          </p>
          <p>
            Each project demonstrates different aspects of my technical capabilities, 
            from backend system architecture to AI-powered user interfaces.
          </p>
        </div>
      </section>
    </div>
  )
}

export default Home
