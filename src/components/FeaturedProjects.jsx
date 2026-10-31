
import "./FeaturedProjects.css";

function FeaturedProjects() {
  const projects = [
    {
      number: "01",
      category: "Front-end",
      title: "Bite Me Restaurant",
      description:
        "A modern and elegant restaurant website featuring a beautiful menu, product cards, favorites, and a responsive design.",
      technologies: ["HTML", "CSS"],
      theme: "BITE",
      preview: "BITE ME",
      subtitle: " RESTAURANT",
      link: "https://bite-me-iota.vercel.app/",
    },
    {
      number: "02",
      category: "FULL-STACK DEVELOPMENT",
      title: "North Africa AI Travel",
      description:
        "An AI-powered travel planning platform designed to help users discover destinations and create personalized travel itineraries.",
      technologies: ["React", "Laravel", "PHP", "MySQL"],
      theme: "travel",
      preview: "NORTH AFRICA",
      subtitle: "AI TRAVEL PLANNER",
      link: "https://ai-travel-dun.vercel.app/",
    },
        {
      number: "03",
      category: "WEB DEVELOPMENT",
      title: "MÜZE Café",
      description:
        "A modern and elegant café website featuring a beautiful menu, product cards, favorites, and a responsive design.",
      technologies: ["React", "CSS", "JavaScript"],
      theme: "muze",
      preview: "MÜZE",
      subtitle: "CAFE & RESTAURANT",
      link: "https://muse-cafe-beta.vercel.app/",
    },
  ];

  return (
    <section className="featured-section" id="projects">
      <div className="featured-heading">
        <div>
          <span className="section-label">MY PORTFOLIO</span>
          <h2>Featured Projects</h2>
          <p>
            A selection of projects I've built while exploring
            design, development and creative problem-solving.
          </p>
        </div>

        <span className="featured-count">03 PROJECTS</span>
      </div>

      <div className="featured-grid">
        {projects.map((project) => (
          <article className="project-card" key={project.number}>
            <div className={`project-preview ${project.theme}`}>
              <span className="project-number">{project.number}</span>

              <div className="preview-content">
                <h3>{project.preview}</h3>
                <span>{project.subtitle}</span>
              </div>

              <div className="preview-circle"></div>
              <div className="preview-small-circle"></div>
            </div>

            <div className="project-info">
              <span className="project-category">
                {project.category}
              </span>

              <h3>{project.title}</h3>

              <p>{project.description}</p>

              <div className="project-tech">
                {project.technologies.map((tech) => (
                  <span key={tech}>{tech}</span>
                ))}
              </div>

              <div className="project-bottom">
                <span> Project</span>

                {project.link && (
                  <a
                    href={project.link}
                    className="project-arrow"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`View ${project.title}`}
                  >
                    ↗
                  </a>
                )}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default FeaturedProjects;
