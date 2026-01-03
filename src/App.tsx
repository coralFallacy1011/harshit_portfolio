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
import AtmosphericWater from './pages/projects/AtmosphericWater'
import JobMilJayeSimSim from './pages/projects/jmss'
import IoTGeyserProtection from './pages/projects/dryrunprotection'
import AutismRiskScreening from './pages/projects/AutismRiskScreening'
import V2VChargingCommunication from './pages/projects/V2VChargingCommunication'
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
          <Route path="/projects/atmospheric-water-generator" element={<AtmosphericWater />} />
          <Route path="/projects/job-mil-jaye-simsim" element={<JobMilJayeSimSim />} />
          <Route path="/projects/iot-geyser-protection" element={<IoTGeyserProtection />} />
          <Route path="/projects/autism-risk-screening" element={<AutismRiskScreening />} />
          <Route path="/projects/v2v-charging-communication" element={<V2VChargingCommunication />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}
