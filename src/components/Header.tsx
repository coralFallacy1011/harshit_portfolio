import { NavLink } from 'react-router-dom'

export default function Header() {
  return (
    <header className="header">
      <div className="nav-container">
        <div className="logo">
          Harshit<span className="neon-dot">.</span>
        </div>

        <nav className="nav-links">
          <NavLink to="/" end>
            Home
          </NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/projects">Projects</NavLink>
          <NavLink to="/contact">Contact</NavLink>
          <NavLink to="/links">Links</NavLink>
        </nav>
      </div>
    </header>
  )
}
