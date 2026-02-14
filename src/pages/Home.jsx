import ProjectCard from '../components/ProjectCard'
import './Home.css'

function Home() {
  const projects = [
    {
      title: 'Email Relay System',
      description: 'A robust and scalable email relay system that handles high-volume email traffic with advanced routing, queuing, and delivery tracking capabilities.',
      icon: '📧',
      path: '/email-relay',
      tags: ['Email', 'Backend', 'Real-time', 'Scalable']
    },
    {
      title: 'Private LLM File Search',
      description: 'An intelligent file search interface powered by Large Language Models, enabling natural language queries across your private document collections with advanced context understanding.',
      icon: '🔍',
      path: '/llm-search',
      tags: ['AI', 'LLM', 'Search', 'Privacy']
    }
  ]

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
          Explore demo versions of my recent projects showcasing modern web technologies, 
          scalable architectures, and innovative solutions.
        </p>
      </section>

      <section className="projects-section">
        <h2 className="section-title">Featured Projects</h2>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </section>

      <section className="about-section">
        <h2 className="section-title">About</h2>
        <div className="about-content">
          <p>
            I'm a passionate software engineer with expertise in building scalable, 
            user-friendly applications. This portfolio showcases demo versions of my 
            recent work, highlighting my skills in modern web development, system design, 
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
