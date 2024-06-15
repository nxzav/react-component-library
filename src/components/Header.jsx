/* eslint-disable react/prop-types */
import reactLogo from '../assets/react.svg';
import menuIcon from '../assets/menu.svg';
import { useState } from 'react';

function CustomLink({ link, text }) {
  return (
    <li>
      <a href={link}>{text}</a>
    </li>
  );
}

export default function Header() {
  const [showMenu, setShowMenu] = useState(false);

  const menuClass = showMenu ? 'active' : '';

  function toggleMenu() {
    setShowMenu((prev) => !prev);
  }

  return (
    <header>
      <nav className="container">
        <a href="#top" className="logo">
          <img className="logo-icon" src={reactLogo} alt="react logo" />
          <h1 className="logo-text">Components</h1>
        </a>
        <div onClick={toggleMenu} className="navbtn">
          <img src={menuIcon} alt="Menu Icon" />
        </div>
        <div onClick={toggleMenu} className={`navbar-backdrop ${menuClass}`}>
          <ul className="navbar">
            <CustomLink link="#badges" text="Badges" />
            <CustomLink link="#banners" text="Banners" />
            <CustomLink link="#cards" text="Cards" />
            <CustomLink link="#testimonials" text="Testimonials" />
            <CustomLink link="#tooltips" text="Tooltips" />
            <CustomLink link="#popups" text="Popups" />
          </ul>
        </div>
      </nav>
    </header>
  );
}
