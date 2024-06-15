import Section from './Section';
import Tooltip from './Tooltips/Tooltip';
import { tooltipColors, tooltipLightColors } from './Tooltips/colors';

function Tooltips() {
  const tooltipColorsArray = Object.keys(tooltipColors);
  const tooltipLightColorsArray = Object.keys(tooltipLightColors);
  return (
    <section id="tooltips">
      <Section title="Tooltips">
        <h3>Dark</h3>
        <div className="tooltips-container">
          {tooltipColorsArray.map((color) => (
            <Tooltip key={color} header={`Tooltip ${color}`} color={color}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis,
              dolore.
            </Tooltip>
          ))}
        </div>
        <h3>Light</h3>
        <div className="tooltips-container">
          {tooltipLightColorsArray.map((color) => (
            <Tooltip
              key={color}
              header={`Tooltip ${color}`}
              color={color}
              theme="light"
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis,
              dolore.
            </Tooltip>
          ))}
        </div>
      </Section>
    </section>
  );
}

export default Tooltips;
