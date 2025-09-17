import React from "react";
import {Link} from 'react-router-dom'
import './About.css';
import profileImg1 from '../assets/me.jpg'
import profileImg2 from '../assets/m1.jpg'
import profileImg3 from '../assets/m2.jpg'
import profileImg4 from '../assets/m3.jpg'
import profileImg5 from '../assets/m4.jpg'
import profileImg6 from '../assets/m5.jpg'
import profileImg7 from '../assets/m6.jpg'
import profileImg8 from '../assets/m7.jpg'
import profileImg9 from '../assets/m8.jpg'

function About() {
  return (
    <main>
      <br/> <br/>
        <div className='img'>
                    <img src={profileImg1} alt='profile'/>
              </div>
            <br/> <br/>

               {/* About Section */}
      <section className="about">
        <h2>About Me</h2>
        <p>
          I’m an undergraduate at the University of Moratuwa
          Faculty of Information Technology
          with interests in IoT, web, and mobile development. 
          I enjoy creating innovative projects that bridge software.
        </p>
        <Link to="/aboutind" className="btn">About Me</Link>
      </section>
      <br/> <br/>


      <div className='img2'>
                    <img src={profileImg2} alt='profile'/>
                    <img src={profileImg3} alt='profile'/>
                    <img src={profileImg6} alt='profile'/>
                    <img src={profileImg8} alt='profile'/>
                   
                    <img src={profileImg4} alt='profile'/>
                    <img src={profileImg5} alt='profile'/>
                    <img src={profileImg7} alt='profile'/>
                    <img src={profileImg9} alt='profile'/>
                    
              </div>

             <br/> <br/>

              {/*volunteer section*/}
        <section className="volunteer">
            <h2>volunteering</h2>
            <p>
                I have been actively involved in volunteering through the IEEE 
                Student Branch of the University of Moratuwa and the Rotaract Club
                 of University of Moratuwa. My contributions include serving as a
                  Logistics Committee Member for Open Week 2025 and Robotic Day 2025,
                   working as a Company Coordinator for Rise Up Mora 2025, and being part 
                   of the organizing team for MERCon 2025. Additionally, as a member of
                    the Rotaract Club, I engage in community service and leadership activities
                     that allow me to give back to society while growing personally and professionally.
            </p>
        </section>

        <br/> <br/>

      {/* Projects Section */}
      <section className="projects">
        <h2>Featured Projects</h2>
        {/* Example Project Cards */}
        <div className="project-cards1">
          
          <div className="project-card1">
            <h3>Flutter Mobile App</h3>
            <p>A mobile app to control IoT devices and monitor sensors.</p>
          </div>
          <div className="project-card1">
            <h3>Website for a coffee shope</h3>
            <p>Use HTML for the frontend and PHP for the backend</p>
          </div>
          <div className="project-card1">
            <h3>Compost Monitoring System</h3>
            <p>ESP32 + React dashboard for real-time compost monitoring.</p>
          </div>
        </div><br/>
        <Link to="/projects" className="btn">See All Projects</Link>
      </section>
     <br/> <br/>

      {/* Skills Section */}
      <section className="skills">
        <h2>Skills</h2>
        <ul>
            <li>Java</li>
            <li>C/C++</li>
            <li>JavaScript</li>
             <li>PHP</li>
               <li>HTML</li>
          <li>React</li>
          <li>Flutter</li>
          <li>Firebase</li>
        </ul>
      </section>
      <br/> <br/>

      {/* Contact CTA Section */}
      <section className="contact-cta">
        <h2>Let’s Connect</h2>
        <p>Interested in working with me or learning more?</p>
        <Link to="/contact" className="btn">Contact Me</Link>
      </section>
    </main>
  );
}

export default About;
