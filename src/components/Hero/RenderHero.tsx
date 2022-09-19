import React, { useState } from 'react';
import HeroLearnMore from './HeroLearnMore';
import HeroMain from './HeroMain';

function RenderHero() {
  const [showMore, setShowMore] = useState(false);
  const slideHero = 'absolute inset-0 flex items-center justify-center transition-all ease-in-out duration-1000 transform';
  return (
    <div className="section wrapper overflow-hidden relative w-full h-screen lg:h-[80vh]">
      <div className={`${slideHero} ${showMore ? 'translate-x-0' : '-translate-x-full'} `}>
        <HeroLearnMore setShowMore={setShowMore} />
      </div>
      <div className={`${slideHero} ${showMore ? 'translate-x-full' : 'translate-x-0'} `}>
        <HeroMain setShowMore={setShowMore} />
      </div>
    </div>
  );
}

export default RenderHero;
