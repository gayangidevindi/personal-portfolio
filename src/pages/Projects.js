import React from 'react';
import './Projects.css';


import compostImg from '../assets/compost.jpg';
import coffeeImg from '../assets/coffee.png';
import flutterImg from '../assets/flutter.jpg';
import figmaImg from '../assets/figma.jpg';
import mitImg from '../assets/mit.jpeg';
import zoneImg from '../assets/zone.jpeg';

export default function Projects() {
  const projects = [
    {
      title: 'Rapid Compost Maker',
      description: 'First-year hardware group project: Making compost within 24 hours. Use ESP32 DHT22,Ds18B20,Load cell,MQ Ch4 sensor',
      image: compostImg
    },
    {
      title: 'Coffee Shop Website',
      description: 'Website project for a coffee shop for second semester module. Ude HTML,PHP,CSS,JS',
      image: coffeeImg
    },
    {
      title: 'Mobile App with Flutter',
      description: 'Creating mobile applications using Flutter framework.',
      image: flutterImg
    },
    {
      title: 'App Design with Figma',
      description: 'Designing app interfaces and UX using Figma.',
      image: figmaImg
    },
    {
      title: 'App with MIT App Inventor',
      description: 'Building functional apps using MIT App Inventor platform.',
      image: mitImg
    },
    {
      title: 'Team Visit to Zone 24x7',
      description: 'Guiding my team as a management module project to visit Zone 24x7.We have to study about the company management and submit a repote and also do a presentation ',
      image: zoneImg
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
  )
}
