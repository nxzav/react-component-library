/* eslint-disable react/prop-types */
export default function Section({ children, title }) {
  return (
    <div className="component">
      <h2 className="component-title">{title}</h2>
      {children}
    </div>
  );
}
