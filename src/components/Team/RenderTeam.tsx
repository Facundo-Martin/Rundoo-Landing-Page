import React from 'react';
import TeamCard from './TeamCard';

const team = [
  {
    name: 'John Doe',
    avatar: 'https://cdn.devdojo.com/images/june2021/headshot2.jpg',
    role: 'CEO and Founder',
    since: 2015,
    socials: { twitter: 'twitter', github: 'github', linkedin: 'linkedin' },
  },
  {
    name: 'Mike Smith',
    avatar: 'https://cdn.devdojo.com/images/june2021/headshotguy.jpg',
    role: 'CTO and Co-Founder',
    since: 2015,
    socials: { twitter: 'twitter', github: 'github', linkedin: 'linkedin' },
  },
  {
    name: 'Kelly Rogers',
    avatar: 'https://cdn.devdojo.com/images/june2021/headshot-female.jpg',
    role: 'Designer',
    since: 2018,
    socials: { twitter: 'twitter', github: 'github', linkedin: 'linkedin' },
  },
];
function RenderTeam() {
  return (
    <section className="w-full py-12 bg-white lg:py-24 tails-selected-element">
      <div className="max-w-6xl px-12 mx-auto text-center">
        <div className="space-y-12 md:text-center">
          <div className="max-w-3xl mb-20 space-y-5 sm:mx-auto sm:space-y-4">
            <h2 className="relative text-4xl font-extrabold tracking-tight sm:text-5xl">Our Awesome Team</h2>
            <p className="text-xl text-gray-500">
              We take pride in the people we work with. This is because we all collectively help each other become more awesome every day.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {team.concat(team, team).map((teammate) => (
            <TeamCard teammate={teammate} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default RenderTeam;
