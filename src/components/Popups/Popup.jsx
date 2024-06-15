/* eslint-disable react/prop-types */
import './Popup.css';
import {
  FaCircleCheck,
  FaTriangleExclamation,
  FaCircleXmark,
  FaCircleInfo,
} from 'react-icons/fa6';
import { popupStatuses } from './colors';

function Popup({ children, header = 'Popup header', status = 'neutral' }) {
  const popupIcons = {
    success: <FaCircleCheck />,
    warning: <FaTriangleExclamation />,
    error: <FaCircleXmark />,
    neutral: <FaCircleInfo />,
  };
  const contColor = {
    backgroundColor: popupStatuses[status].bg,
    color: popupStatuses[status].txt,
  };
  const headerColor = {
    color: popupStatuses[status].title,
  };

  return (
    <div style={contColor} className="popup">
      {popupIcons[status]}
      <p style={headerColor} className="popup-header">{header}</p>
      <p>&nbsp;</p>
      <p className="popup-content">{children}</p>
    </div>
  );
}

export default Popup;
