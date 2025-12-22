import * as React from 'react'
import { Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Projects from './pages/Projects'
import Contact from './pages/Contact'
import Links from './pages/Links'
import SmartBeamX from './pages/projects/SmartBeamX'
import ViolenceDetection from './pages/projects/ViolenceDetection'
import LeetCodeHelper from './pages/projects/LeetCodeHelper'
import './styles/global.css'

export default function App() {
  return (
    <div className="app-root">
      <Header />
      <main className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/links" element={<Links />} />
          <Route path="/projects/smartbeamx" element={<SmartBeamX />} />
          <Route path="/projects/violence-detection" element={<ViolenceDetection />} />
          <Route path="/projects/leetcode-helper" element={<LeetCodeHelper />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}
