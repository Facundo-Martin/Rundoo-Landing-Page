import React from 'react';
import TeamCard from './TeamCard';
import { team } from '../../utils/utils';

function RenderTeam() {
  return (
    <section id="team" className="w-full py-12 bg-white lg:py-24 tails-selected-element">
      <div className="max-w-6xl px-12 mx-auto text-center">
        <div className="space-y-12 md:text-center">
          <div className="max-w-3xl mb-20 space-y-5 sm:mx-auto sm:space-y-4">
            <h2 className="relative text-4xl font-extrabold tracking-tight sm:text-5xl">Our Awesome Team</h2>
            <p className="text-xl text-gray-500">
              We have a diverse team of exceptional people working together to provide world-class service in the construction and building materials industry
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 place-items-center gap-10 xl:gap-x-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
          {team.map((member) => (
            <TeamCard key={member.name} member={member} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default RenderTeam;
