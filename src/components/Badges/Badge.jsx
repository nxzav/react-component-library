/* eslint-disable react/prop-types */
import { badgeColors } from './colors';
import './Badge.css';

function Badge({ children, color = 'gray', shape = 'square' }) {
  shape === 'pill' ? 'pill' : 'square';
  const style = {
    color: badgeColors[color].txt,
    backgroundColor: badgeColors[color].bg,
  };

  return (
    <p style={style} className={"badge " + shape}>
      {children}
    </p>
  );
}

export default Badge;
