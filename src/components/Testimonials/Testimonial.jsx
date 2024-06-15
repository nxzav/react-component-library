/* eslint-disable react/prop-types */
import { FaQuoteLeft } from 'react-icons/fa6';
import './Testimonial.css';

function Testimonial({ children, name, position }) {
  return (
    <div className="testimonial">
      <img
        className="testimonial-image"
        src="https://images.unsplash.com/photo-1630939687530-241d630735df?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGdpcmwlMjBvZmZpY2V8ZW58MHx8MHx8fDA%3D"
        alt="Girl smiling"
      />
      <div className="testimonial-content">
        <div className="testimonial-icon">
          <FaQuoteLeft />
        </div>
        <p>{children}</p>
        <p className="testimonial-content-name">{name}</p>
        {position && <p className="testimonial-content-position">{position}</p>}
      </div>
    </div>
  );
}

export default Testimonial;
