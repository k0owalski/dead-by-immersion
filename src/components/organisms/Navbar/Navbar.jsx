import { useRef, useState } from 'react';
import { NavLink, Link } from 'react-router-dom';

import Hamburger from 'components/atoms/Hamburger/Hamburger';

import logo from 'assets/images/logo.png';
import langIcon from 'assets/images/language-icon.svg';

import StyledNavbar from "./StyledNavbar";


const Navbar = () => {
  const navRef = useRef();
  const [isHamburgerActive, setIsHamburgerActive] = useState(false);

  const handleNavToggle = () => {
    navRef.current.classList.toggle('is-active');
    setIsHamburgerActive(prev => !prev);
  };

  const handleNavLinkClick = () => navRef.current.classList.contains('is-active') && handleNavToggle();

  return (
    <StyledNavbar>
      <div className="nav-inner-wrapper">
        <Link className="brand-link" to="/" onClick={handleNavLinkClick}>
          <img className="brand" src={logo} alt="Dead by immersion logo" />
        </Link>
        <Hamburger handleClick={handleNavToggle} isActive={isHamburgerActive} />
        <ul ref={navRef} className="navigation">
          <li className="nav-item"><NavLink className={({ isActive }) => isActive ? 'nav-link nav-link--active' : 'nav-link'} to="/our-projects" onClick={handleNavLinkClick}>Our projects</NavLink></li>
          <li className="nav-item"><NavLink className={({ isActive }) => isActive ? 'nav-link nav-link--active' : 'nav-link'} to="/about-us" onClick={handleNavLinkClick}>About us</NavLink></li>
          <li className="nav-item"><NavLink className={({ isActive }) => isActive ? 'nav-link nav-link--active' : 'nav-link'} to="/contact" onClick={handleNavLinkClick}>Contact</NavLink></li>
          <li className="nav-item">
            <button className="nav-lang" type="button">
              <img className="nav-lang-icon" src={langIcon} alt="Choose a language" />
              <span>EN</span>
            </button>
          </li>
        </ul>
      </div>
    </StyledNavbar>
  );
}

export default Navbar;
