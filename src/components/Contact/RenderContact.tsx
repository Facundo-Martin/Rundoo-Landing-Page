import React from 'react';
import ContactDetails from './ContactDetails';
import ContactMap from './ContactMap';

function RenderContact() {
  return (
    <section id="contact" className="section wrapper">
      <h2 className="text-center text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-10">Contact Us</h2>
      <div className="flex flex-col gap-6 xl:flex-row items-center justify-between lg:gap-x-8">
        <ContactMap />
        <ContactDetails />
      </div>
    </section>
  );
}

export default RenderContact;
