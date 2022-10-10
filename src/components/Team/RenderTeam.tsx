import TeamTitle from './TeamTitle';
import DisplayTeam from './DisplayTeam';
import { team } from '../../utils/data';

function RenderTeam() {
  return (
    <section id="team" className="section wrapper py-12 bg-white lg:py-24 tails-selected-element">
      <TeamTitle />
      <DisplayTeam team={team} />
    </section>
  );
}

export default RenderTeam;
