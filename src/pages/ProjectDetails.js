import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { projectData } from "./Projects"; 
import "./Details.css";

export default function ProjectDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [expanded, setExpanded] = useState(null);

  // Find the selected project
  const project = projectData.find((p) => p.id === parseInt(id));

  // Scroll to highlighted project on mount
  useEffect(() => {
    if (project) {
      const el = document.getElementById(`project-${project.id}`);
      if (el) el.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  }, [project]);

  if (!project) {
    return (
      <div className="detail-sectors-page">
        <h2>Project not found</h2>
        <button className="back-button" onClick={() => navigate(-1)}>
          ← Back
        </button>
      </div>
    );
  }

  // Sections for cards
  const sections = [
    {
      key: "overview",
      title: "Overview",
      summary: project.description,
      details: `This project is titled "${project.title}". It was created with the goal of ${project.purpose.toLowerCase()}.`,
    },
    {
      key: "technologies",
      title: "Technologies Used",
      summary: `Key tools: ${project.technologies.slice(0, 2).join(", ")}...`,
      details: `Full stack/tools: ${project.technologies.join(", ")}.`,
    },
    {
      key: "purpose",
      title: "Purpose & Impact",
      summary: project.purpose,
      details:
        project.notes ||
        "This project demonstrates practical application of learned concepts and problem-solving for real-world needs.",
    },
  ];

  return (
    <div className="detail-sectors-page">
      <div className="detail-header">
        <button className="btn" onClick={() => navigate(-1)}>
          ← Back
        </button>
        <h1>{project.title}</h1>
        <p className="subtitle">Explore details of this project below</p>
      </div>

      <div className="sectors-grid">
        {sections.map((s) => {
          const isActive = project && s.key === "overview"; // highlight overview
          return (
            <article
              className={`sector-card ${isActive ? "sector-active" : ""}`}
              id={`project-${project.id}-${s.key}`}
              key={s.key}
            >
              <header className="sector-header">
                <h2>{s.title}</h2>
                {isActive && <span className="badge">Highlighted</span>}
              </header>

              <p className="sector-summary">{s.summary}</p>

              {expanded === s.key ? (
                <div className="sector-details">
                  <p>{s.details}</p>
                  <button
                    className="btn"
                    onClick={() => setExpanded(null)}
                    aria-expanded="true"
                  >
                    Show less
                  </button>
                </div>
              ) : (
                <div className="sector-actions">
                  <button
                    className="btn"
                    onClick={() => setExpanded(s.key)}
                    aria-expanded="false"
                  >
                    Learn more
                  </button>
                </div>
              )}
            </article>
          );
        })}
      </div>

      <div className="detail-footer-note">
        <p>
          Tip: Use <em>Learn more</em> to expand project sections. The overview is highlighted by
          default.
        </p>
      </div>
    </div>
  );
}
