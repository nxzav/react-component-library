import { FaCloudArrowUp } from 'react-icons/fa6';
import Section from './Section';
import Card from './Cards/Card';

function Cards() {
  return (
    <section id="cards">
      <Section title="Cards">
        <Card header="Card and Icon" icon={<FaCloudArrowUp />}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae
          architecto ut beatae in sint sequi, velit numquam. Facilis
          exercitationem magnam ipsa, deserunt a dolores consequatur!
        </Card>
        <Card header="Card no Icon">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae
          architecto ut beatae in sint sequi, velit numquam. Facilis
          exercitationem magnam ipsa, deserunt a dolores consequatur!
        </Card>
      </Section>
    </section>
  );
}

export default Cards;
