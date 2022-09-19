import React, { useState } from 'react';
import HeroLearnMore from './HeroLearnMore';
import HeroMain from './HeroMain';

function RenderHero() {
  const [isSigningUp, setIsSigningUp] = useState(false);
  const slideHero = 'absolute inset-0 flex items-center justify-center transition-all ease-in-out duration-1000 transform';
  return (
    <div className="section wrapper relative w-full h-screen lg:h-[80vh]">
      <div className={`${slideHero} ${isSigningUp ? 'translate-x-0' : '-translate-x-full'} `}>
        <HeroLearnMore isSigningUp={isSigningUp} setIsSigningUp={setIsSigningUp} />
      </div>
      <div className={`${slideHero} ${isSigningUp ? 'translate-x-full' : 'translate-x-0'} `}>
        <HeroMain isSigningUp={isSigningUp} setIsSigningUp={setIsSigningUp} />
      </div>
    </div>
  );
}

export default RenderHero;
