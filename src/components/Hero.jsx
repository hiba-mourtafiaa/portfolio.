
import "./Hero.css";

function Hero() {
  return (
    <section className="hero" id="home">

      <div className="hero-content">
        <span className="greeting">HELLO, I'M</span>

        <h1>Hiba Mourtafiaa</h1>

        <h2>Frontend Designer</h2>

        <p className="description">
          Web Developer crafting modern, responsive, and user-friendly digital experiences. Passionate about clean design, creative problem-solving, and turning ideas into functional websites.
        </p>

        <div className="hero-buttons">
          <a href="#projects" className="primary-btn">
            View My Work <span>↗</span>
          </a>

          <a href="./cv eng.pdf" download className="secondary-btn">
            Download CV <span>⇩</span>
          </a>
        </div>

      </div>

      <div className="hero-visual">

        <div className="visual-glow"></div>

        <div className="visual-circle circle-one"></div>
        <div className="visual-circle circle-two"></div>

        <div className="main-art">
          <span className="art-label">CREATIVE DIRECTION / 2026</span>

          <div className="art-title">
            <span>DESIGN</span>
            <span className="art-title-second">WITH</span>
            <span>PURPOSE<span className="purple-dot">.</span></span>
          </div>

          <div className="art-bottom">
            <span>Ideas into experiences.</span>
            <span className="art-star">✳</span>
          </div>

          <div className="art-decoration"></div>
        </div>

        <div className="floating-card experience-card">
          <span className="card-icon">✳</span>
          <strong>2+</strong>
          <span>Years of Experience</span>
        </div>

        <div className="floating-card impact-card">
          <span>Design Impact</span>
          <strong>+120%</strong>

          <svg viewBox="0 0 180 45">
            <path
              d="M3 35 L25 27 L42 32 L65 19 L83 24 L105 12 L123 18 L143 8 L160 13 L177 1"
              fill="none"
              stroke="#a18af5"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>

        <div className="floating-card colors-card">
          <span>COLOR PALETTE</span>
          <div className="color-dots">
            <i></i>
            <i></i>
            <i></i>
            <i></i>
            <i></i>
          </div>
        </div>

        <div className="floating-star">✧</div>

      </div>
    </section>
  );
}

export default Hero;
