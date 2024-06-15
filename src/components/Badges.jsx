import Badge from './Badges/Badge';
import Section from './Section';
import { badgeColors } from './Badges/colors';

function Badges() {
  const badgeColorsArray = Object.keys(badgeColors);

  return (
    <section id="badges">
      <Section title="Badges">
        <h3>Squares</h3>
        <div className="badges">
          {badgeColorsArray.map((color) => (
            <Badge key={color} color={color} shape="square">
              Badge
            </Badge>
          ))}
        </div>
        <h3>Pills</h3>
        <div className="badges">
          {badgeColorsArray.map((color) => (
            <Badge key={color} color={color} shape="pill">
              Badge
            </Badge>
          ))}
        </div>
      </Section>
    </section>
  );
}

export default Badges;
