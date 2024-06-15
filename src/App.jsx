import Header from './components/Header';
import Footer from './components/Footer';
import Section from './components/Section';
import Badge from './components/Badges/Badge';
import Banner from './components/Banners/Banner';
import Card from './components/Cards/Card';
import Testimonial from './components/Testimonials/Testimonial';
import TestimonialNoPic from './components/Testimonials/TestimonialNoPic';
import Tooltip from './components/Tooltips/Tooltip';

import { badgeColors } from './components/Badges/colors';
import {
  tooltipColors,
  tooltipLightColors,
} from './components/Tooltips/colors';
import { FaCloudArrowUp } from 'react-icons/fa6';
import './App.css';

function App() {
  const badgeColorsArray = Object.keys(badgeColors);
  const tooltipColorsArray = Object.keys(tooltipColors);
  const tooltipLightColorsArray = Object.keys(tooltipLightColors);
  return (
    <>
      <Header />
      <main>
        <div className="container">
          <h1 className="title">React Component Library</h1>

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

          <section id="banners">
            <Section title="Banners">
              <h3>Multi Line</h3>
              <Banner status="success" message="Congratulations!">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae
                architecto ut beatae in sint sequi.
              </Banner>
              <Banner status="warning" message="Attention">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae
                architecto ut beatae in sint sequi.
              </Banner>
              <h3>Single Line</h3>
              <Banner status="error" message="There has been an error"></Banner>
              <Banner status="neutral" message="Update available"></Banner>
            </Section>
          </section>

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

          <section id="testimonials">
            <Section title="Testimonials">
              <h3>With Image</h3>
              <Testimonial name="Sarah Woods" position="Scrimba, CTO">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Corporis mollitia adipisci distinctio tempora eveniet similique
                aliquid.
              </Testimonial>
              <h3>Without Image</h3>
              <TestimonialNoPic name="Sarah Woods" position="Scrimba, CTO">
                &quot;Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Corporis mollitia adipisci distinctio tempora eveniet similique
                aliquid.&quot;
              </TestimonialNoPic>
            </Section>
          </section>

          <section id="tooltips">
            <Section title="Tooltips">
              <div className="tooltips-container">
                {tooltipColorsArray.map((color) => (
                  <Tooltip
                    key={color}
                    header={`${color} tooltip`}
                    color={color}
                  >
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Debitis, dolore.
                  </Tooltip>
                ))}
                {tooltipLightColorsArray.map((color) => (
                  <Tooltip
                    key={color}
                    header={`${color} tooltip`}
                    color={color}
                    theme="light"
                  >
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Debitis, dolore.
                  </Tooltip>
                ))}
              </div>
            </Section>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}

export default App;
