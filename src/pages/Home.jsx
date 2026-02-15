import ProjectCard from '../components/ProjectCard'
import { useProjects } from '../context/ProjectsContext'
import './Home.css'

const skillCategories = [
  {
    title: 'Frontend Development',
    skills: ['React', 'TypeScript', 'JavaScript', 'HTML5', 'CSS3', 'Next.js', 'Responsive Design'],
  },
  {
    title: 'Backend Development',
    skills: ['Node.js', 'Python', 'REST APIs', 'GraphQL', 'PostgreSQL', 'MongoDB', 'Redis'],
  },
  {
    title: 'DevOps & Cloud',
    skills: ['AWS', 'Docker', 'CI/CD', 'GitHub Actions', 'Linux', 'Terraform', 'Kubernetes'],
  },
  {
    title: 'Tools & Practices',
    skills: ['Git', 'Agile/Scrum', 'TDD', 'System Design', 'Performance Optimization', 'Technical Leadership'],
  },
]

const resumeUrl = `${import.meta.env.BASE_URL}Robert_Resume.pdf`

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

      <section className="skills-section">
        <h2 className="section-title">Skills &amp; Expertise</h2>
        <p className="skills-intro">
          I bring a versatile, full-stack skill set refined through years of building
          production-grade applications. From crafting pixel-perfect user interfaces to
          architecting resilient backend systems and automating cloud infrastructure,
          I deliver end-to-end solutions that scale.
        </p>
        <div className="skills-grid">
          {skillCategories.map((category) => (
            <div key={category.title} className="skill-category">
              <h3 className="skill-category-title">{category.title}</h3>
              <ul className="skill-list">
                {category.skills.map((skill) => (
                  <li key={skill} className="skill-tag">{skill}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className="resume-section">
        <h2 className="section-title">Resume</h2>
        <div className="resume-content">
          <p>
            Want to learn more about my professional experience, education, and
            accomplishments? Download my resume for the full picture.
          </p>
          <a
            href={resumeUrl}
            download="Robert_Resume.pdf"
            className="resume-download-btn"
          >
            Download Resume (PDF)
          </a>
        </div>
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
