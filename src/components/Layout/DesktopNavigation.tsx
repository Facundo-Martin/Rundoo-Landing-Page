import React from 'react';
import NavLink from '../UI/NavLink';

function DesktopNavigation() {
  return (
    <div className="hidden md:flex md:gap-x-6">
      <NavLink href="#features">Features</NavLink>
      <NavLink href="#team">Team</NavLink>
      <NavLink href="#FAQs">FAQs</NavLink>
      <NavLink href="#contact">Contact</NavLink>
    </div>
  );
}

export default DesktopNavigation;
