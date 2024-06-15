import Section from './Section';
import Testimonial from './Testimonials/Testimonial';
import TestimonialNoPic from './Testimonials/TestimonialNoPic';

function Testimonials() {
  return (
    <section id="testimonials">
      <Section title="Testimonials">
        <h3>With Image</h3>
        <Testimonial name="Sarah Woods" position="Scrimba, CTO">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis
          mollitia adipisci distinctio tempora eveniet similique aliquid.
        </Testimonial>
        <h3>Without Image</h3>
        <TestimonialNoPic name="Sarah Woods" position="Scrimba, CTO">
          &quot;Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Corporis mollitia adipisci distinctio tempora eveniet similique
          aliquid.&quot;
        </TestimonialNoPic>
      </Section>
    </section>
  );
}

export default Testimonials;
