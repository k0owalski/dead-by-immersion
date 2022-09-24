import { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';

import logo from 'assets/images/logo.png';
import mobileMenuButton from 'assets/images/mobile-menu-button.svg';
import langIcon from 'assets/images/language-icon.svg';
import StyledNavbar from "./StyledNavbar";


function Navbar() {
  const [menuClassList, setMenuClassList] = useState('navigation navigation--hidden');

  const toggleMobileMenu = () => {
    setMenuClassList(prev => prev.includes('navigation--hidden') ? 'navigation' : 'navigation navigation--hidden');
  };

  return (
    <StyledNavbar>
      <Link className="brand-link" to="/">
        <img className="brand" src={logo} alt="Dead by immersion logo" />
      </Link>
      <button className="mobile-menu-button" type="button" onClick={toggleMobileMenu}>
        <img className="mobile-menu-button-image" src={mobileMenuButton} alt="Mobile menu button" />
      </button>
      <ul className={menuClassList}>
        <li className="nav-item"><NavLink className={({ isActive }) => isActive ? 'nav-link nav-link--active' : 'nav-link'} to="/our-projects">Our projects</NavLink></li>
        <li className="nav-item"><NavLink className={({ isActive }) => isActive ? 'nav-link nav-link--active' : 'nav-link'} to="/about-us">About us</NavLink></li>
        <li className="nav-item"><NavLink className={({ isActive }) => isActive ? 'nav-link nav-link--active' : 'nav-link'} to="/contact">Contact</NavLink></li>
        <li className="nav-item">
          <button className="nav-lang" type="button">
            <img className="nav-lang-icon" src={langIcon} alt="Choose a language" />
            <span>EN</span>
          </button>
        </li>
      </ul>
    </StyledNavbar>
  );
}

export default Navbar;
