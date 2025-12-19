import * as React from 'react'
import ProjectCard from '../components/ProjectCard'

export default function Home() {
  return (
    <section className="home">
      {/* HERO */}
      <div className="hero">
        <h1>
          Harshit Saroha
          <span className="neon-dot">.</span>
        </h1>

        <h2 className="subtitle">
          Full-Stack × AI × IoT Engineer
        </h2>

        <p className="tagline">
          Jack of all trades — master of none (yet).
          <br />
          But this jack builds things that work.
        </p>

        <p className="fun-line">
          Exploring ML models, computer vision, IoT pipelines…
          <br />
          <span>job mil jaye sim sim ✨</span>
        </p>
      </div>

      {/* INTRO */}
      <div className="intro">
        <p>
          I’m an engineering student who enjoys building <strong>real-time intelligent systems</strong> —
          from training ML models and deploying computer-vision pipelines to integrating hardware
          and shipping full-stack applications.
        </p>

        <p>
          I may not be a master yet, but I learn fast, experiment relentlessly,
          and love turning ideas into working systems.
        </p>
      </div>

      {/* PROJECTS */}
      <div className="spotlight">
        <h3>Featured Projects</h3>

        <div className="grid">
          <ProjectCard
            title="Adaptive Matrix LED Headlights"
            desc="Real-time vehicle detection using YOLO with dynamic LED control on Raspberry Pi."
            url="#"
          />

          <ProjectCard
            title="Real-Time Violence Detection System"
            desc="Live camera feed analysis using a deep learning model with a full-stack dashboard."
            url="#"
          />

          <ProjectCard
            title="SmartStayAI"
            desc="ML-powered pricing and decision-support system built with a full-stack architecture."
            url="#"
          />
        </div>
      </div>
    </section>
  )
}
