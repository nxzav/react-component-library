/* eslint-disable react/prop-types */
import { badgeColors } from '../colors';
import './Badge.css';

export default function Badge({ children, color = 'gray', form = 'square' }) {
  form === 'pill' ? 'pill' : 'square';
  const style = {
    color: badgeColors[color].txt,
    backgroundColor: badgeColors[color].bg,
  };

  return (
    <p style={style} className={`badge ${form}`}>
      {children}
    </p>
  );
}
