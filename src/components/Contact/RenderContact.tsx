import React from 'react';
import Section from '../Section';
import ContactDetails from './ContactDetails';
import ContactHero from './ContactHero';
import ContactMap from './ContactMap';

function Container({ children }: { children: React.ReactNode }) {
  return <div className="flex flex-col gap-y-6 xl:flex-row items-center justify-between lg:gap-x-8">{children}</div>;
}
function RenderContact() {
  return (
    <Section id="contact">
      <ContactHero />
      <Container>
        <ContactMap />
        <ContactDetails />
      </Container>
    </Section>
  );
}

export default RenderContact;
