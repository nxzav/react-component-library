/* eslint-disable react/prop-types */
import './TestimonialNoPic.css';
import companyLogo from '/logo.png';

function TestimonialNoPic({ children, name, position }) {
  return (
    <div className="testimonial-no-pic">
      <div className="testimonial-no-pic-content">
        <img
          className="testimonial-no-pic-logo"
          src={companyLogo}
          alt="Company logo"
        />
        <p className="testimonial-no-pic-quote">{children}</p>
        <p className="testimonial-no-pic-name">
          {name}{' '}
          <span className="line-break">
            <br />
          </span>
          <span className="divider">/ </span>
          <span className="testimonial-no-pic-position">{position}</span>
        </p>
      </div>
      <div className="testimonial-background"></div>
    </div>
  );
}

export default TestimonialNoPic;
