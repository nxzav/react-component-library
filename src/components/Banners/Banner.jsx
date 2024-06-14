/* eslint-disable react/prop-types */
import { bannerStatuses } from './colors';
import {
  FaCircleCheck,
  FaTriangleExclamation,
  FaCircleXmark,
  FaCircleInfo,
} from 'react-icons/fa6';
import './Banner.css';

function Banner({ children, message = 'Banner title', status = 'neutral' }) {
  const bannerIcons = {
    success: <FaCircleCheck />,
    warning: <FaTriangleExclamation />,
    error: <FaCircleXmark />,
    neutral: <FaCircleInfo />,
  };
  const contColor = {
    backgroundColor: bannerStatuses[status].bg,
    color: bannerStatuses[status].txt,
  };
  const titleColor = {
    color: bannerStatuses[status].title,
  };

  return (
    <div style={contColor} className="banner">
      {bannerIcons[status]}
      <p style={titleColor} className="banner-header">
        {message}
      </p>
      {children && (
        <>
          <p>&nbsp;</p>
          {children}
        </>
      )}
    </div>
  );
}

export default Banner;
