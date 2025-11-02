// Navbar.jsx
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <img src="/logo.png" alt="CG Infinity Logo" className="logo-image" />
      <ul className="navbar-links">
        <li><a href="#about">About Us</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#quote">Request a Quote</a></li>
        <li><a href="#contact">Contact Us</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;


