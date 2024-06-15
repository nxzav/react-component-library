/* eslint-disable react/prop-types */
import { FaBoxOpen } from 'react-icons/fa6';
import { tooltipColors, tooltipLightColors } from './colors';
import './Tooltip.css';

function Tooltip({ children, header, color = 'black', theme = 'dark' }) {
  let tooltipStyle = {
    backgroundColor: tooltipColors[color],
    color: theme === 'light' ? '#000000' : '#ffffff',
  };

  if (theme === 'light') {
    tooltipStyle = {
      backgroundColor: tooltipLightColors[color].bg,
      color: tooltipLightColors[color].txt,
    };
  }

  return (
    <div style={tooltipStyle} className="tooltip">
      <div className="tooltip-icon">
        <FaBoxOpen />
      </div>
      <p className="tooltip-header">{header}</p>
      <p>&nbsp;</p>
      <p className="tooltip-body">{children}</p>
      <div style={tooltipStyle} className="tooltip-shape"></div>
    </div>
  );
}

export default Tooltip;
