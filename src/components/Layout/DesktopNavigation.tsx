import React from 'react';
import NavLink from '../UI/NavLink';

function DesktopNavigation() {
  return (
    <div className="hidden md:flex space-x-6 lg:space-x-8  font-medium">
      <NavLink href="#features">Features</NavLink>
      <NavLink href="#team">Team</NavLink>
      <NavLink href="#FAQs">FAQs</NavLink>
      <NavLink href="#contact">Contact</NavLink>
      <span className="w-1 border-l border-gray-200 h-5 md:ml-6 lg:ml-10"></span>
    </div>
  );
}

export default DesktopNavigation;
