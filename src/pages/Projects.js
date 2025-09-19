import React from 'react';
import './Projects.css';

import compostImg from '../assets/compost.jpg';
import coffeeImg from '../assets/coffee.png';
import flutterImg from '../assets/flutter.jpg';
import figmaImg from '../assets/figma.jpg';
import mitImg from '../assets/mit.jpeg';
import zoneImg from '../assets/zone.jpeg';
import petproject1 from '../assets/petproject1.png';
import petproject2 from '../assets/petproject2.png';

export default function Projects() {
  const projects = [
    {
      title: 'Rapid Compost Maker',
      description:
        'First-year hardware group project: Making compost within 24 hours. Used ESP32, DHT22, DS18B20, Load cell, MQ CH4 sensor.',
      image: compostImg,
    },
    {
      title: 'Coffee Shop Website',
      description:
        'Website project for a coffee shop (second semester module). Built using HTML, PHP, CSS, and JavaScript.',
      image: coffeeImg,
    },
    {
      title: 'Mobile App with Flutter',
      description: 'Creating mobile applications using the Flutter framework.',
      image: flutterImg,
    },
    {
      title: 'App Design with Figma',
      description: 'Designing app interfaces and UX using Figma.',
      image: figmaImg,
    },
    {
      title: 'App with MIT App Inventor',
      description:
        'Building functional apps using the MIT App Inventor platform.',
      image: mitImg,
    },
    {
      title: 'Team Visit to Zone 24x7',
      description:
        'Guided my team in a management module project to visit Zone 24x7. We studied the company management, submitted a report, and presented findings.',
      image: zoneImg,
    },
    {
      title: 'Pet Shop Website',
      description:
        'Developed a responsive website for a pet shop. Features product listings, categories, and basic shopping flow.',
      image: petproject1,
    },
    {
      title: 'Digital Devices Website',
      description:
        'Created a modern website to showcase digital devices. Focused on clean UI, product cards, and interactive elements.',
      image: petproject2,
    },
  ];

  return (
    <div className="projects-container">
      <h1>My Projects</h1>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <div className="project-image">
              <img src={project.image} alt={project.title} />
              <div className="overlay">
                <p>{project.description}</p>
              </div>
            </div>
            <h3>{project.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}
