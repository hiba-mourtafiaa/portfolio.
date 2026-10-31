
import "./DesignProcess.css";

const steps = [
  {
    number: "01",
    title: "Discover",
    description: "Understanding user needs and project goals.",
    icon: "search",
  },
  {
    number: "02",
    title: "Define",
    description: "Research, analyze and define the problem.",
    icon: "target",
  },
  {
    number: "03",
    title: "Ideate",
    description: "Brainstorm and create wireframes and concepts.",
    icon: "lightbulb",
  },
  {
    number: "04",
    title: "Design",
    description: "Crafting clean, intuitive and engaging user interfaces.",
    icon: "design",
  },
  {
    number: "05",
    title: "Test & Iterate",
    description: "Testing with users and refining for the best experience.",
    icon: "check",
  },
];

function ProcessIcon({ type }) {
  const paths = {
    search: (
      <>
        <circle cx="10.5" cy="10.5" r="6.5" />
        <path d="m15.5 15.5 4 4" />
      </>
    ),
    target: (
      <>
        <circle cx="12" cy="12" r="9" />
        <circle cx="12" cy="12" r="5" />
        <circle cx="12" cy="12" r="1.5" />
      </>
    ),
    lightbulb: (
      <>
        <path d="M9 18h6M10 21h4" />
        <path d="M8.5 14.5A7 7 0 1 1 15.5 14.5c-.9.7-1.2 1.7-1.2 2.5h-5c0-.8-.3-1.8-.8-2.5Z" />
      </>
    ),
    design: (
      <>
        <path d="m14 6 4 4M4 20l4-.8L19 8a2.1 2.1 0 0 0-3-3L5 16l-1 4Z" />
        <path d="m4 20 4-.8" />
      </>
    ),
    check: (
      <>
        <path d="M12 3 20 6v5c0 5-3.5 8-8 10-4.5-2-8-5-8-10V6l8-3Z" />
        <path d="m8.5 12 2.3 2.3 4.7-5" />
      </>
    ),
  };

  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {paths[type]}
    </svg>
  );
}

function DesignProcess() {
  return (
    <section id="process" className="process-section">
      <span className="section-label">MY PROCESS</span>
      <h2>Design Process I Follow</h2>

      <div className="process-grid">
        {steps.map((step, index) => (
          <div className="process-card" key={step.number}>
            <div className="process-top">
              <div className="process-icon">
                <ProcessIcon type={step.icon} />
              </div>

              <span className="process-number">{step.number}</span>
            </div>

            <div className="process-content">
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </div>

            {index !== steps.length - 1 && (
              <div className="process-connector">
                <span></span>
                <span></span>
                <span></span>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

export default DesignProcess;
