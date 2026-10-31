
import "./About.css";

function About() {
  const services = [
    {
      icon: "▣",
      color: "orange",
      title: "Frontend Development",
      description:
        "Building modern, responsive and interactive interfaces for websites and web applications.",
    },
    {
      icon: "▢",
      color: "purple",
      title: "UI Implementation",
      description:
        "Transforming creative designs into clean, attractive and functional web experiences.",
    },
    {
      icon: "▤",
      color: "blue",
      title: "Full-Stack Development",
      description:
        "Developing complete web applications using frontend and backend technologies.",
    },
    {
      icon: "⌘",
      color: "cyan",
      title: "Database & APIs",
      description:
        "Creating database structures and integrating APIs for dynamic applications.",
    },
  ];

  return (
    <section className="about-services" id="about">

      <div className="about-box">

        <div className="about-left">
          <span className="section-label">ABOUT ME</span>

          <h2>
            Creating Digital Experiences
            <br />
            With Purpose
          </h2>

          <div className="about-stats">
            <div className="stat">
              <span className="stat-icon">⌘</span>
              <h3>3+</h3>
              <p>Projects Built</p>
            </div>

            <div className="stat">
              <span className="stat-icon">▣</span>
              <h3>5+</h3>
              <p>Technologies</p>
            </div>

            <div className="stat">
              <span className="stat-icon">✧</span>
              <h3>100%</h3>
              <p>Passion to Learn</p>
            </div>
          </div>
        </div>

        <div className="about-right">
          <p>
            I'm a Junior Web Developer passionate about creating
            modern, responsive and user-friendly websites.
            I enjoy combining creativity with technology to
            transform ideas into functional digital experiences.
          </p>

        </div>

      </div>

      <div className="services-section" id="services">
        <span className="section-label">WHAT I DO</span>
        <h2>Services I Offer</h2>

        <div className="services-grid">
          {services.map((service, index) => (
            <div className="service-card" key={index}>

              <div className={`service-icon ${service.color}`}>
                {service.icon}
              </div>

              <h3>{service.title}</h3>
              <p>{service.description}</p>


            </div>
          ))}
        </div>
      </div>

      <div className="about-decoration"></div>

    </section>
  );
}

export default About;
