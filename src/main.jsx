import React from 'react';
import { createRoot } from 'react-dom/client';
import './style.css';

const projects = [
  { title: 'Customer Churn Prediction', tag: 'MACHINE LEARNING', text: 'A practical ML project that analyzes customer behavior and predicts churn using Python, Pandas and Scikit-learn.', tech: 'Python · Pandas · Scikit-learn' },
  { title: 'Revenue Prediction', tag: 'REGRESSION', text: 'A regression project that predicts revenue from business data and turns the model into a usable application.', tech: 'Python · NumPy · Pandas · ML' },
  { title: 'More Projects', tag: 'BUILDING', text: 'New projects are being added as I build deeper into ML, FastAPI and AI engineering.', tech: 'FastAPI · React · AI' }
];

function App(){
  return <main className="feed">
    <section className="reel hero">
      <div className="noise" />
      <div className="content">
        <span className="eyebrow">PORTFOLIO / 01</span>
        <h1>Hi, I'm <em>Nitesh K.</em></h1>
        <h2>Python · ML · AI Developer</h2>
        <p>I build practical software, machine-learning projects and AI-powered applications.</p>
        <div className="actions"><a href="#work">Scroll to explore ↓</a><span>● Available for opportunities</span></div>
      </div>
      <div className="progress"><i /></div>
      <div className="side">01 / 06</div>
    </section>

    <section className="reel about">
      <div className="content split"><div><span className="eyebrow">02 / ABOUT</span><h2>Not just a portfolio.<br/><strong>A build log.</strong></h2></div><p>MCA graduate focused on Python, machine learning, FastAPI and React. This site is designed like a vertical short-form feed: one idea, one screen, one scroll.</p></div>
      <div className="side">SWIPE / SCROLL</div>
    </section>

    <section className="reel skills">
      <div className="content"><span className="eyebrow">03 / STACK</span><h2>Tools I use<br/><strong>to build things.</strong></h2><div className="chips">{['Python','Postgres','React','FastAPI','NumPy','Pandas','Scikit-learn','Git / GitHub','Matplotlib','Seaborn'].map(x=><span key={x}>{x}</span>)}</div></div>
      <div className="side">03 / 06</div>
    </section>

    <section className="reel work" id="work">
      <div className="content"><span className="eyebrow">04 / SELECTED WORK</span><h2>Projects<br/><strong>worth scrolling for.</strong></h2><div className="cards">{projects.map((p,i)=><article className="card" key={p.title}><span>0{i+1}</span><small>{p.tag}</small><h3>{p.title}</h3><p>{p.text}</p><b>{p.tech}</b><a href="#contact">VIEW PROJECT ↗</a></article>)}</div></div>
      <div className="side">04 / 06</div>
    </section>

    <section className="reel journey">
      <div className="content"><span className="eyebrow">05 / CURRENTLY BUILDING</span><h2>From ML basics<br/><strong>to AI engineering.</strong></h2><div className="timeline"><div><b>NOW</b><span>Scikit-learn · EDA · ML projects</span></div><div><b>NEXT</b><span>FastAPI · model APIs · production apps</span></div><div><b>AFTER</b><span>Deep Learning · LLMs · AI systems</span></div></div></div>
      <div className="side">05 / 06</div>
    </section>

    <section className="reel contact" id="contact">
      <div className="content"><span className="eyebrow">06 / LET'S CONNECT</span><h2>Have a project,<br/><strong>role or idea?</strong></h2><p>Let's build something useful.</p><div className="links"><a href="https://github.com/Nitesh-Ray">GitHub ↗</a><a href="https://linkedin.com/niteshkray">LinkedIn ↗</a><a href="mailto:niteshray50495@gmail.com">Email ↗</a></div><p>Ph - +91 6202784861</p> <p>Gmail - niteshray50495@gmail.com</p> <p>from Patna, Bihar</p> <small>© 2026 NI · SCROLL BACK ↑</small></div>
      <div className="side">06 / 06</div>
    </section>
  </main>
}
createRoot(document.getElementById('root')).render(<App />);
