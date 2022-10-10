import TeamTitle from './TeamTitle';
import DisplayTeam from './DisplayTeam';
import Section from '../Section';
import { team } from '../../utils/data';

function RenderTeam() {
  return (
    <Section id="team">
      <TeamTitle />
      <DisplayTeam team={team} />
    </Section>
  );
}

export default RenderTeam;
