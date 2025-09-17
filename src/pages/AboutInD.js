import React from "react";
import "./AboutIncss.css";
import profileImg1 from "../assets/f5.jpg";
import travelImg1 from "../assets/f7.jpg";
import travelImg2 from "../assets/f6.jpg";
import friendsImg1 from "../assets/f1.jpg";
import friendsImg2 from "../assets/f4.jpg";
import codeImg1 from "../assets/background.jpg";
import codeImg2 from "../assets/f8.jpg";
import profileImg2 from "../assets/f2.jpg";
import profileImg3 from "../assets/f3.jpg";
import profileImg4 from "../assets/m7.jpg";

export default function AboutInD() {
  return (
    <section className="about-section" id="about">
      <div className="about-container glass-card">

        {/* Profile Info */}
        <div className="about-header">
          <img src={profileImg1} alt="Profile" className="about-pic" />
          <div className="about-intro">
            <h2>About Me</h2>
            <p>
              I’m <span className="highlight">Gayangi Devindi</span>, an aspiring
              IT undergraduate at the{" "}
              <span className="highlight2">University of Moratuwa</span>.  
              My journey from school to university has shaped my passion for{" "}
              <strong>technology, problem solving, and creativity</strong>.
            </p>
          </div>
        </div>

        {/* Timeline */}
        <div className="timeline">
          <h3 className="section-title">   Education Journey</h3>

            <div className="timeline-item">
            <div className="timeline-dot"></div>
            <div className="timeline-content">
              <h4>Schoolaship Examination</h4>
              <p>168(160) - Pass</p>
            </div>
          </div>

          <div className="timeline-item">
            <div className="timeline-dot"></div>
            <div className="timeline-content">
              <h4>Mahinda Rajapaksa College</h4>
              <p>From Grade 6 to A/L</p>
            </div>
          </div>

           <div className="timeline-item">
            <div className="timeline-dot"></div>
            <div className="timeline-content">
              <h4>O/L Results</h4>
              <p>9A s and select Maths Stream for A/L</p>
            </div>
          </div>

          <div className="timeline-item">
            <div className="timeline-dot"></div>
            <div className="timeline-content">
              <h4>A/L Results – Maths Stream</h4>
              <p>AAB (District Rank: 150 | Island Rank: 1652)</p>
              <p>Z-Score: 1.7792</p>
            </div>
          </div>

          <div className="timeline-item">
            <div className="timeline-dot"></div>
            <div className="timeline-content">
              <h4>University of Moratuwa</h4>
              <p>Faculty of Information Technology (Undergraduate)</p>
            </div>
          </div>
        </div>

        {/* Hobbies */}
        <div className="hobbies">
          <h3 className="section-title">✨ Hobbies & Interests</h3>
          <div className="hobby-cards">

            <div className="hobby-card">
              <div className="hobby-img">
                <img src={travelImg1} alt="Travel" />
              </div>
              <h4>Traveling</h4>
              <p>I love exploring new places and adventures with friends.</p>
            </div>

            <div className="hobby-card">
              <div className="hobby-img">
                <img src={friendsImg1} alt="Friends" />
              </div>
              <h4>Friendship</h4>
              <p>Spending quality time with friends makes life meaningful.</p>
            </div>

            <div className="hobby-card">
              <div className="hobby-img">
                <img src={codeImg1} alt="Coding" />
              </div>
              <h4>Coding & Innovation</h4>
              <p>Turning ideas into reality through programming excites me.</p>
            </div>

          </div>
        </div>

        {/* Photo Gallery */}
        <div className="photo-gallery">
          <h3 className="section-title">📸 Memories</h3>
          <div className="gallery-container">
            <img src={travelImg1} alt="Travel 1" />
            <img src={travelImg2} alt="Travel 2" />
            <img src={friendsImg1} alt="Friends 1" />
            <img src={friendsImg2} alt="Friends 2" />
            <img src={codeImg2} alt="Coding Project" />
             <img src={profileImg2} alt="Friends 2" />
              <img src={profileImg3} alt="Friends 2" />
                  <img src={profileImg4} alt="Friends 2" />
          </div>
        </div>

<br/><br/><br/>
        
 <div className="timeline">
          <h3 className="section-title">   Memberships</h3>

            <div className="timeline-item">
            <div className="timeline-dot"></div>
            <div className="timeline-content">
              <h4>Member of the IEEE SB of University of Moratuwa</h4>
              <p>As a volunteer join for many<br/> events held by IEEE SB.<br/>Such as Open week 2025, <br/>MERCon 2025,<br/>Rise Up Mora 2025 etc..</p>
            </div>
          </div>

          <div className="timeline-item">
            <div className="timeline-dot"></div>
            <div className="timeline-content">
              <h4>Member of the Rotract Club</h4>
              <p>I am an active member of the Rotaract Club <br/>at the University of Moratuwa, <br/>where I participate in community service projects<br/> and leadership activities that enhance my teamwork<br/> and organizational skills.</p>
            </div>
          </div>
        </div>
        

      </div>
    </section>
  );
}
