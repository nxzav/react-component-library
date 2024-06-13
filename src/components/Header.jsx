import reactLogo from '../assets/react.svg';

export default function Card() {
  return (
    <header>
      <div className="header container">
        <img src={reactLogo} alt="react logo" />
        <h1 className="logo-text">Components</h1>
      </div>
    </header>
  );
}
