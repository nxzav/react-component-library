import Banner from './Banners/Banner';
import Section from './Section';

function Banners() {
  return (
    <section id="banners">
      <Section title="Banners">
        <h3>Multi Line</h3>
        <Banner status="success" header="Congratulations!">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae
          architecto ut beatae in sint sequi.
        </Banner>
        <Banner status="warning" header="Attention">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae
          architecto ut beatae in sint sequi.
        </Banner>
        <h3>Single Line</h3>
        <Banner status="error" header="There has been an error"></Banner>
        <Banner status="neutral" header="Update available"></Banner>
      </Section>
    </section>
  );
}

export default Banners;
