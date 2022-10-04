import React from 'react';
import ContactDetails from './ContactDetails';
import ContactMap from './ContactMap';

function Container({ children }: { children: React.ReactNode }) {
  return <div className="flex flex-col gap-y-6 xl:flex-row items-center justify-between lg:gap-x-8">{children}</div>;
}
function RenderContact() {
  return (
    <section id="contact" className="section wrapper">
      <h2 className="text-center text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-10">Contact Us</h2>
      <Container>
        <ContactMap />
        <ContactDetails />
      </Container>
    </section>
  );
}

export default RenderContact;
