import Header from './components/Header';
import Footer from './components/Footer';
import Section from './components/Section';
import Badge from './components/Badges/Badge';
import Banner from './components/Banners/Banner';
import Card from './components/Cards/Card';
import { badgeColors } from './components/Badges/colors';
import { FaCloudArrowUp } from 'react-icons/fa6';
import './App.css';

function App() {
  const badgeColorsArray = Object.keys(badgeColors);
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
        </div>
      </main>
      <Footer />
    </>
  );
}

export default App;
