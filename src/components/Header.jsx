import reactLogo from '../assets/react.svg';

export default function Header() {
  return (
    <header>
      <nav className="container">
        <a href="#top" className="logo">
          <img className="logo-icon" src={reactLogo} alt="react logo" />
          <h1 className="logo-text">Components</h1>
        </a>
        <ul className="navbar">
          <li>
            <a href="#badges">BADGES</a>
          </li>
          <li>
            <a href="#banners">BANNERS</a>
          </li>
          <li>
            <a href="#cards">CARDS</a>
          </li>
          <li>
            <a href="#testimonials">TESTIMONIALS</a>
          </li>
          <li>
            <a href="#tooltips">TOOLTIPS</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
