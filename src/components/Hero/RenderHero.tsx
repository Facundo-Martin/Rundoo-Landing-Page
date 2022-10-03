import clsx from 'clsx';
import React, { useState } from 'react';
import HeroLearnMore from './HeroLearnMore';
import HeroMain from './HeroMain';
import HeroSponsors from './HeroSponsors';

function RenderHero() {
  const [showMore, setShowMore] = useState(false);
  const slideHero = 'absolute top-0 left-0 right-0 flex items-center justify-center transition-all ease-in-out duration-1000 transform';
  const divHeight = showMore ? 'h-[100vh] lg:h-[60vh]' : 'h-[105vh] lg:h-[60vh]';
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
