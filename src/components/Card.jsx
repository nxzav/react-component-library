/* eslint-disable react/prop-types */
export default function Card({ children, title }) {
  return (
    <div className="component">
      <h2 className="component-title">{title}</h2>
      {children}
    </div>
  );
}
