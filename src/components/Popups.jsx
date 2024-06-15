import Popup from './Popups/Popup';
import Section from './Section';

function Popups() {
  return (
    <section id="popups">
      <Section title="Popups">
        <div className="popups-container">
          <Popup status="success" header="Success popup">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus, ad
            similique.
          </Popup>
          <Popup status="warning" header="Warning popup">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus, ad
            similique.
          </Popup>
          <Popup status="error" header="Error popup">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus, ad
            similique.
          </Popup>
          <Popup status="neutral" header="Neutral popup">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus, ad
            similique.
          </Popup>
        </div>
      </Section>
    </section>
  );
}

export default Popups;
