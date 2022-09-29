import clsx from 'clsx';
import React, { useState } from 'react';
import HeroLearnMore from './HeroLearnMore';
import HeroMain from './HeroMain';
import HeroSponsors from './HeroSponsors';

function RenderHero() {
  const [showMore, setShowMore] = useState(false);
  const slideHero = 'absolute inset-0 flex items-center justify-center transition-all ease-in-out duration-1000 transform';
  const divHeight = showMore ? 'h-[120vh] lg:h-[80vh]' : 'h-[100vh] lg:h-[80vh]';
  return (
    <section className="section">
      <div className={clsx(divHeight, 'overflow-hidden relative w-full')}>
        <div className={clsx(slideHero, showMore ? 'translate-x-0' : '-translate-x-full')}>
          <HeroLearnMore setShowMore={setShowMore} />
        </div>
        <div className={clsx(slideHero, showMore ? 'translate-x-full' : 'translate-x-0')}>
          <HeroMain setShowMore={setShowMore} />
        </div>
      </div>
      <HeroSponsors />
    </section>
  );
}

export default RenderHero;
