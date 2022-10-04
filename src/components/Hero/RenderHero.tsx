import { useState } from 'react';
import HeroLearnMore from './HeroLearnMore';
import HeroMain from './HeroMain';
import HeroSponsors from './HeroSponsors';
import clsx from 'clsx';

// Helper function to handle slide hero
function SlideContainer() {
  const [showMore, setShowMore] = useState(false);
  const divHeight = showMore ? 'h-[100vh] lg:h-[60vh]' : 'h-[105vh] lg:h-[60vh]';
  return (
    <div className={clsx(divHeight, 'overflow-hidden relative w-full')}>
      <div className={clsx('slide-hero', showMore ? 'translate-x-full' : 'translate-x-0')}>
        <HeroMain setShowMore={setShowMore} />
      </div>
      <div className={clsx('slide-hero', showMore ? 'translate-x-0' : '-translate-x-full')}>
        <HeroLearnMore setShowMore={setShowMore} />
      </div>
    </div>
  );
}

function RenderHero() {
  return (
    <section className="section wrapper">
      <SlideContainer />
      <HeroSponsors />
    </section>
  );
}

export default RenderHero;
