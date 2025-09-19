import React from "react";
import { useNavigate } from "react-router-dom"; // ✅ import useNavigate
import "./Projects.css";

import compostImg from "../assets/compost.jpg";
import coffeeImg from "../assets/coffee.png";
import flutterImg from "../assets/flutter.jpg";
import figmaImg from "../assets/figma.jpg";
import mitImg from "../assets/mit.jpeg";
import zoneImg from "../assets/zone.jpeg";
import petproject1 from "../assets/petproject1.png";
import petproject2 from "../assets/petproject2.png";

export const projectData = [
  {
    id: 1,
    title: "Rapid Compost Maker",
    description:
      "First-year hardware group project: Making compost within 24 hours. Used ESP32, DHT22, DS18B20, Load cell, MQ CH4 sensor.",
    image: compostImg,
    technologies: ["ESP32", "DHT22", "DS18B20", "Load cell", "MQ CH4 sensor"],
    purpose: " This project highlights creativity, design thinking, and attention to detail in digital product design. Its impact is in demonstrating how clear design prototypes can guide developers, improve teamwork, and create products that are both functional and visually engaging.",
  },
  {
    id: 2,
    title: "Coffee Shop Website",
    description:
      "Website project for a coffee shop (second semester module). Built using HTML, PHP, CSS, and JavaScript.",
    image: coffeeImg,
    technologies: ["HTML", "CSS", "JavaScript", "PHP"],
    purpose: "The project demonstrates how small businesses can enhance their reach through digital platforms. It provides customers with convenience and builds brand identity online. The impact is in showing how web development skills can directly support entrepreneurship and customer engagement.",
  },
  {
    id: 3,
    title: "Mobile App with Flutter",
    description: "Creating mobile applications using the Flutter framework.",
    image: flutterImg,
    technologies: ["Flutter", "Dart"],
    purpose: "This project demonstrates the fundamentals of mobile application development without requiring advanced coding. Its impact lies in empowering beginners to create functional apps and fostering problem-solving and creativity in a visual programming environment.",
  },
  {
    id: 4,
    title: "App Design with Figma",
    description: "Designing app interfaces and UX using Figma.",
    image: figmaImg,
    technologies: ["Figma"],
    purpose: "This project highlights creativity, design thinking, and attention to detail in digital product design. Its impact is in demonstrating how clear design prototypes can guide developers, improve teamwork, and create products that are both functional and visually engaging.",
  },
  {
    id: 5,
    title: "App with MIT App Inventor",
    description: "Building functional apps using the MIT App Inventor platform.",
    image: mitImg,
    technologies: ["MIT App Inventor"],
    purpose: "To quickly prototype and build apps without coding.",
  },
  {
    id: 6,
    title: "Team Visit to Zone 24x7",
    description:
      "Guided my team in a management module project to visit Zone 24x7. We studied the company management, submitted a report, and presented findings.",
    image: zoneImg,
    technologies: ["Research", "Management", "Presentation"],
    purpose: "This project emphasized the importance of connecting academic learning with industry practices. The impact was in gaining real-world understanding of how IT professionals handle challenges, manage teams, and deliver value-driven solutions, inspiring the team to align skills with industry expectations.",
  },
  {
    id: 7,
    title: "Pet Shop Website",
    description:
      "Developed a responsive website for a pet shop. Features product listings, categories, and basic shopping flow.",
    image: petproject1,
    technologies: ["HTML", "CSS", "JavaScript","MongoDB","Node.js"],
    purpose: "This project demonstrates the role of e-commerce websites in expanding small businesses. The impact is in providing a convenient platform for customers to browse and purchase products, while also showing practical skills in building online retail solutions.",
  },
  {
    id: 8,
    title: "Digital Devices Website",
    description:
      "Created a modern website to showcase digital devices. Focused on clean UI, product cards, and interactive elements.",
    image: petproject2,
    technologies: ["React", "CSS","JavaScript","HTML","Node.js","Express","MongoDB"],
    purpose: "The project emphasizes the ability to create structured, content-rich websites that inform and engage users. Its impact lies in enhancing digital literacy by providing consumers with detailed information about devices, assisting in decision-making, and demonstrating effective web development practices.",
  },
];

export default function Projects() {
  const navigate = useNavigate(); // ✅ define navigate inside component

  return (
    <div className="projects-container">
      <h1>My Projects</h1>
      <div className="projects-grid">
        {projectData.map((project) => (
          <div className="project-card" key={project.id}>
            <div className="project-image">
              <img src={project.image} alt={project.title} />
              <div className="overlay">
                <p>{project.description}</p>
              </div>
            </div>
            <h3>{project.title}</h3>
            <button className="details btn"

              onClick={() => navigate(`/project/${project.id}`)} // ✅ pass project.id
            >
              View Details
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
