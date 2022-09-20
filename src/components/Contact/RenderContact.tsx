import React from 'react';
import ContactDetails from './ContactDetails';
import ContactLocation from './ContactLocation';

function RenderContact() {
  return (
    <section id="contact" className="wrapper section">
      <div className="flex flex-col gap-6 lg:flex-row items-center justify-between lg:gap-x-8">
        <ContactLocation />
        <ContactDetails />
      </div>
    </section>
  );
}

export default RenderContact;
