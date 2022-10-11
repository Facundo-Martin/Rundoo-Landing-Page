import { useState } from 'react';
import HeroLearnMore from './HeroLearnMore';
import HeroMain from './HeroMain';
import HeroSponsors from './HeroSponsors';
import clsx from 'clsx';
import Section from '../Section';

function SlideContainer() {
  const [learnMore, setLearnMore] = useState(false);
  const divHeight = learnMore ? 'h-[120vh] lg:h-[70vh]' : 'h-[105vh] lg:h-[70vh]';
  return (
    <div className={clsx(divHeight, 'overflow-hidden relative w-full')}>
      <div className={clsx('slide-hero', learnMore ? 'translate-x-full' : 'translate-x-0')}>
        <HeroMain setLearnMore={setLearnMore} />
      </div>
      <div className={clsx('slide-hero', learnMore ? 'translate-x-0' : '-translate-x-full')}>
        <HeroLearnMore setLearnMore={setLearnMore} />
      </div>
    </div>
  );
}

function RenderHero() {
  return (
    <Section>
      <SlideContainer />
      <HeroSponsors />
    </Section>
  );
}

export default RenderHero;
