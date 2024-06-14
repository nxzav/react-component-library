/* eslint-disable react/prop-types */
import './Card.css';

function Card({ children, header, icon }) {
  const cardStyle = {
    marginTop: icon ? '1.5rem' : '0',
  };
  return (
    <div className="card">
      {icon && <div className="card-icon">{icon}</div>}
      <p style={cardStyle} className="card-header">
        {header}
      </p>
      <p className="card-body">{children}</p>
    </div>
  );
}

export default Card;
