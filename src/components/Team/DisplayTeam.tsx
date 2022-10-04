import React from 'react';
import TeamCard from './TeamCard';

type DisplayTeamProps = {
  team: TeamMember[];
};
function DisplayTeam({ team }) {
  return (
    <div className="grid grid-cols-1 place-items-center gap-10 xl:gap-x-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
      {team.map((member) => (
        <TeamCard key={member.name} member={member} />
      ))}
    </div>
  );
}

export default DisplayTeam;
