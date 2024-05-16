import { useState } from 'react';
import { Outlet } from 'react-router-dom';

function Menu() {
    const [isActive, setIsActive] = useState(false);
  
    const activateMenu = () => {
      setIsActive(!isActive);
    };
  
    return (
      <div className="menu">
        <div className={`burger-menu ${isActive ? 'active' : ''}`} onClick={activateMenu}>
          <span className="menu-global menu-top"></span>
          <span className="menu-global menu-middle"></span>
          <span className="menu-global menu-bottom"></span>
          {isActive && (
            <div className={`menu-links ${isActive ? 'active' : ''}`}>
              <a href="/home">Home</a>
              <a href="/about">About</a>
              <a href="/contact">Contact</a>
              {/* Add more links as needed */}
            </div>
          )}
        </div>
      </div>
    );
}

export default function Home() {
  return (
    <div className="root-page">
      <header>
        <div className="logo">
          <img src="src/pictures/DBTJourney Logo.png" alt="Logo" />
        </div>
        <Menu />
      </header>
      <Outlet />
      <footer>
        <div className="footer-links">
          <div className="footer-link">Link 1</div>
          <div className="footer-link">Link 2</div>
          <div className="footer-link">Link 3</div>
          <div className="footer-link">Link 4</div>
        </div>
        <div className="copyright">
          <p>&copy; Arianne Lowery 2024</p>
        </div>
      </footer>
    </div>
  )
}