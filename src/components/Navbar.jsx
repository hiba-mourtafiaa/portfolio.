
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="brand">
        <div className="brand-logo">H</div>
        <div>
          <h3>Hiba Mourtafiaa</h3>
          <span>Frontend Designer</span>
        </div>
      </div>

      <div className="nav-links">
        <a className="active" href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#technologies">Skills</a>
        <a href="#projects">Work</a>
        <a href="#process">Process</a>
        <a href="#contact">Contact</a>
      </div>

      <a href="#contact" className="talk-btn">
        Let's Talk <span>↗</span>
      </a>
    </nav>
  );
}

export default Navbar;
