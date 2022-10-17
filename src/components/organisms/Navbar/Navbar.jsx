import { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';

import Hamburger from 'components/atoms/Hamburger/Hamburger';

import logo from 'assets/images/logo.png';
import langIcon from 'assets/images/language-icon.svg';

import StyledNavbar from "./StyledNavbar";


function Navbar() {
  const [isNavActive, setIsNavActive] = useState(window.screen.width > 1024);

  const toggleMobileMenu = () => setIsNavActive(prev => !prev);

  return (
    <StyledNavbar>
      <Link className="brand-link" to="/">
        <img className="brand" src={logo} alt="Dead by immersion logo" />
      </Link>
      <Hamburger handleClick={toggleMobileMenu} isActive={isNavActive} />
      <ul className={`navigation ${!isNavActive && 'is-hidden'}`}>
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
