import { useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import axios from "axios";

function Menu() {
    const [isActive, setIsActive] = useState(false);
  
    const activateMenu = () => {
      setIsActive(!isActive);
    };

    const token = localStorage.getItem('token');

    const handleLogout = async () => {
      try {
        const response = await axios.post('http://127.0.0.1:8000/logout', {}, {
          headers: {
            'Authorization': `Token ${token}`
          }
        });

        console.log('Logged out:', response.status);

        localStorage.removeItem('token');

      } catch (error) {
        console.error(error);
      }
            
    }
  
    return (
      <div className="menu">
        <div className={`burger-menu ${isActive ? 'active' : ''}`} onClick={activateMenu}>
          <span className="menu-global menu-top"></span>
          <span className="menu-global menu-middle"></span>
          <span className="menu-global menu-bottom"></span>
          {isActive && (
            <div className={`menu-links ${isActive ? 'active' : ''}`}>
              <Link to="/">Home</Link>
              {!token && <Link to="/login">Log In</Link>}
              {!token && <Link to="/signup">Sign Up</Link>}
              {token && <Link to="/profile">My Profile</Link>}
              {token && <Link to="/" onClick={handleLogout}>Log Out</Link>}
              {/* Add more links as needed */}
            </div>
          )}
        </div>
      </div>
    );
}

export default function Root() {
  return (
    <div className="root-page">
      <header>
        <Link to="/">
          <div className="logo">
            <img src="/DBTJourneyLogo.png" alt="Logo" />
            <div className="logo-text">
              My<span className='D'>D</span><span className='B'>B</span><span className='T'>T</span>Journey
            </div>
          </div>
        </Link>
        <Menu />
        <div className="desktop-menu">
          <Link to="/profile">
            <div className="profile-link">
              My Profile
            </div>
          </Link>
          <Link to="/login">
            <div className="login-link">
              Log In
            </div>
          </Link>
          <Link to="/signup">
            <div className="signup-link">
              Sign Up
            </div>
          </Link>
        </div>
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
          <p>MyDBTJourney</p>
          <p>&copy; Arianne Lowery 2024</p>
        </div>
      </footer>
    </div>
  )
}