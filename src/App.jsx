import React, { useState } from "react";
import {
  ArrowUpRight, Github, Linkedin, Mail, Download, Menu, X,
  Code2, Database, Layers3, Bug, ExternalLink, MapPin, GraduationCap
} from "lucide-react";

const github = "https://github.com/Anusha241205";
const projects = [
  {
    number: "01",
    title: "Employee Management System",
    type: "Full Stack · CRUD Application",
    description: "A REST-based employee management application with create, read, update and delete operations, built with Spring Boot and MySQL.",
    stack: ["Java", "Spring Boot", "MySQL", "React", "Axios"],
    link: `${github}/EmployeeCrudApplication`,
    outcome: "Designed REST endpoints and connected them to a React interface."
  },
  {
    number: "02",
    title: "Movie Recommendation App",
    type: "Machine Learning · Web Application",
    description: "A movie recommendation application that uses content similarity to suggest movies based on a selected title.",
    stack: ["Python", "Flask", "Pandas", "Scikit-learn"],
    link: "https://movie-recommendation-app-2-yv1r.onrender.com/",
    outcome: "Implemented cosine-similarity-based recommendations."
  },
  {
    number: "03",
    title: "DriveSense",
    type: "Computer Vision · Safety Application",
    description: "A driver-monitoring prototype that detects signs of drowsiness and unsafe driving behaviour using computer vision.",
    stack: ["Python", "OpenCV", "MediaPipe"],
    link: github,
    outcome: "Explored facial landmarks, eye-aspect ratio and alert logic."
  },
  {
    number: "04",
    title: "Diabetes Prediction",
    type: "Machine Learning · Classification",
    description: "A machine learning project that predicts diabetes risk from health-related input features using a classification model.",
    stack: ["Python", "Pandas", "Scikit-learn", "Random Forest"],
    link: github,
    outcome: "Built a classification workflow and evaluated model predictions."
  }
];

const skillGroups = [
  { icon: Code2, title: "Programming", skills: ["Java", "SQL", "Python", "JavaScript", "OOP", "Data Structures"] },
  { icon: Layers3, title: "Backend & Full Stack", skills: ["Spring Boot", "REST APIs", "JDBC", "Hibernate / JPA", "React", "HTML & CSS"] },
  { icon: Database, title: "Database & Tools", skills: ["MySQL", "Oracle", "Git", "GitHub", "Maven", "Postman"] },
  { icon: Bug, title: "Testing", skills: ["Selenium WebDriver", "TestNG", "JUnit", "Manual Testing", "API Testing", "Test Cases"] }
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);
  const navItems = ["About", "Skills", "Projects", "Education", "Contact"];

  return (
    <div className="site-shell">
      <header className="header">
        <a className="brand" href="#home" onClick={closeMenu}><span className="brand-mark">A.</span><span>ANUSHA<span className="brand-dot">.</span></span></a>
        <button className="menu-toggle" aria-label="Toggle navigation" onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X /> : <Menu />}</button>
        <nav className={menuOpen ? "nav nav-open" : "nav"}>
          {navItems.map(item => <a key={item} href={`#${item.toLowerCase()}`} onClick={closeMenu}>{item}</a>)}
          <a className="nav-cta" href="#contact" onClick={closeMenu}>Let's talk <ArrowUpRight size={15}/></a>
        </nav>
      </header>

      <main>
        <section className="hero section" id="home">
          <div className="hero-copy">
            <div className="eyebrow"><span className="status-dot"/> OPEN TO ENTRY-LEVEL OPPORTUNITIES</div>
            <p className="hero-kicker">HELLO, I'M ANUSHA</p>
            <h1>I build things<br/><span>for the web.</span></h1>
            <p className="hero-description">A Computer Science graduate focused on Java full-stack development, backend engineering and building useful, reliable applications.</p>
            <div className="hero-actions">
              <a className="button button-primary" href="#projects">Explore my work <ArrowUpRight size={17}/></a>
              <a className="button button-secondary" href="#contact">Get in touch</a>
            </div>
            <div className="hero-socials">
              <a href={github} target="_blank" rel="noreferrer"><Github size={17}/> GitHub</a>
              <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer"><Linkedin size={17}/> LinkedIn <span className="tiny-note">(add your profile URL)</span></a>
            </div>
          </div>
          <div className="hero-visual" aria-label="Developer profile graphic">
            <div className="orbit orbit-one"/><div className="orbit orbit-two"/>
            <div className="code-window">
              <div className="window-bar"><div className="window-dots"><i/><i/><i/></div><span>developer.java</span><span className="window-more">•••</span></div>
              <div className="code-content">
                <div><span className="line-no">01</span><span className="code-purple">public class</span> <span className="code-yellow">Developer</span> {"{"}</div>
                <div><span className="line-no">02</span>  <span className="code-purple">String</span> role = <span className="code-green">"Java Developer"</span>;</div>
                <div><span className="line-no">03</span>  <span className="code-purple">String</span> focus = <span className="code-green">"Backend"</span>;</div>
                <div><span className="line-no">04</span>  <span className="code-purple">boolean</span> learning = <span className="code-orange">true</span>;</div>
                <div><span className="line-no">05</span></div>
                <div><span className="line-no">06</span>  <span className="code-purple">void</span> <span className="code-blue">build</span>() {"{"}</div>
                <div><span className="line-no">07</span>    solveProblems();</div>
                <div><span className="line-no">08</span>    createValue();</div>
                <div><span className="line-no">09</span>  {"}"}</div>
                <div><span className="line-no">10</span>{"}"}</div>
              </div>
              <div className="window-footer"><span><i/> Java</span><span>UTF-8&nbsp;&nbsp; Spaces: 2</span></div>
            </div>
            <div className="floating-chip chip-java"><span>☕</span> Java</div>
            <div className="floating-chip chip-spring"><span>✳</span> Spring Boot</div>
            <div className="floating-chip chip-react"><span>⚛</span> React</div>
            <div className="hero-glow"/>
          </div>
          <a className="scroll-cue" href="#about"><span/> SCROLL TO EXPLORE</a>
        </section>

        <section className="section about-section" id="about">
          <div className="section-label">01 / ABOUT ME</div>
          <div className="about-grid">
            <div><h2>Curious by nature.<br/><span>Developer by choice.</span></h2></div>
            <div className="about-text">
              <p>I recently completed my B.Tech in Computer Science and Engineering from CBIT, with a focus on Artificial Intelligence and Machine Learning. I enjoy turning ideas into working software and understanding how applications function behind the scenes.</p>
              <p>My current focus is strengthening my Java, Spring Boot, SQL and React skills while improving the way I design, test and debug applications. I value clean code, continuous learning and practical problem-solving.</p>
              <div className="quick-facts">
                <div><strong>9.11</strong><span>CGPA through 3-2 semester</span></div>
                <div><strong>Java</strong><span>Primary development stack</span></div>
                <div><strong>CBIT</strong><span>B.Tech · CSE (AI & ML)</span></div>
              </div>
            </div>
          </div>
        </section>

        <section className="section skills-section" id="skills">
          <div className="section-label">02 / TOOLKIT</div>
          <div className="section-heading"><h2>Skills & technologies</h2><p>Tools I use to build, test and improve applications.</p></div>
          <div className="skills-grid">
            {skillGroups.map(({icon: Icon, title, skills}) => <article className="skill-card" key={title}><div className="skill-icon"><Icon size={21}/></div><h3>{title}</h3><div className="skill-tags">{skills.map(skill => <span key={skill}>{skill}</span>)}</div></article>)}
          </div>
        </section>

        <section className="section projects-section" id="projects">
          <div className="section-label">03 / SELECTED WORK</div>
          <div className="section-heading projects-heading"><div><h2>Projects that<br/><span>solve problems.</span></h2></div><p>A selection of academic and personal projects. Each one helped me turn concepts into practical implementation.</p></div>
          <div className="projects-list">
            {projects.map(project => <article className="project-card" key={project.number}>
              <div className="project-number">{project.number}</div>
              <div className="project-main"><p className="project-type">{project.type}</p><h3>{project.title}</h3><p className="project-description">{project.description}</p><div className="project-tags">{project.stack.map(item => <span key={item}>{item}</span>)}</div><p className="project-outcome"><span>FOCUS</span> {project.outcome}</p></div>
              <a className="project-link" href={project.link} target="_blank" rel="noreferrer" aria-label={`Open ${project.title}`}><ArrowUpRight size={21}/></a>
            </article>)}
          </div>
          <a className="text-link" href={github} target="_blank" rel="noreferrer">Explore more on GitHub <ArrowUpRight size={16}/></a>
        </section>

        <section className="section education-section" id="education">
          <div className="section-label">04 / EDUCATION</div>
          <div className="education-card">
            <div className="education-icon"><GraduationCap size={27}/></div>
            <div className="education-details"><p className="project-type">2022 — 2026</p><h3>Bachelor of Technology</h3><p>Computer Science and Engineering · Artificial Intelligence & Machine Learning</p><span>CBIT, Proddatur</span></div>
            <div className="education-score"><strong>9.11</strong><span>CGPA through 3-2 semester</span></div>
          </div>
        </section>

        <section className="section contact-section" id="contact">
          <div className="section-label">05 / CONTACT</div>
          <div className="contact-panel">
            <p className="hero-kicker">HAVE AN OPPORTUNITY?</p>
            <h2>Let's build<br/><span>something useful.</span></h2>
            <p className="contact-copy">I'm looking for entry-level opportunities in Java development, backend engineering and full-stack development. If my profile matches your requirement, let's connect.</p>
            <div className="contact-actions">
              <a className="button button-primary" href="mailto:YOUR_EMAIL@example.com"><Mail size={17}/> Email me <ArrowUpRight size={16}/></a>
              <a className="button button-secondary" href={github} target="_blank" rel="noreferrer"><Github size={17}/> GitHub</a>
              <a className="button button-secondary" href="https://www.linkedin.com/" target="_blank" rel="noreferrer"><Linkedin size={17}/> LinkedIn</a>
            </div>
            <div className="contact-location"><MapPin size={15}/> India · Open to suitable opportunities</div>
          </div>
        </section>
      </main>

      <footer className="footer"><a className="brand" href="#home"><span className="brand-mark">A.</span><span>ANUSHA<span className="brand-dot">.</span></span></a><p>Designed & built with React and CSS.</p><a href="#home" className="back-top">BACK TO TOP ↑</a></footer>
    </div>
  );
}

export default App;
