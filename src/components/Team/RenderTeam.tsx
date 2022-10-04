import TeamTitle from './TeamTitle';
import DisplayTeam from './DisplayTeam';
import { team } from '../../utils/utils';

function RenderTeam() {
  return (
    <section id="team" className="w-full py-12 bg-white lg:py-24 tails-selected-element">
      <div className="max-w-6xl px-12 mx-auto text-center">
        <TeamTitle />
        <DisplayTeam team={team} />
      </div>
    </section>
  );
}

export default RenderTeam;
