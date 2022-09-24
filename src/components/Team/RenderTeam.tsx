import React from 'react';
import TeamCard from './TeamCard';
import {team} from '../../utils/utils'

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
          {team.map((member) => (
            <TeamCard member={member} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default RenderTeam;
