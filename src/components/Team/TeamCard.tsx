import Image from 'next/image';
import { TeamMember } from '../../interfaces';
import { GithubIcon, LinkedInIcon, TwitterIcon } from '../UI/SocialIcons';

function SocialLink({ href, children }: { href?: string; children: React.ReactNode }) {
  const socialStyle = 'flex-1 block p-5 text-center text-gray-300 transition duration-200 ease-out hover:bg-gray-100 hover:text-gray-500';
  if (href) {
    return (
      <a href={href} rel="noreferrer" target="_blank" className={socialStyle}>
        {children}
      </a>
    );
  }
  return <div className={socialStyle}>{children}</div>;
}

function TeamCard({ member }: { member: TeamMember }) {
  const avatarURL = member.avatar ? member.avatar : null;
  const memberprefix = member.role.includes('Co-Founder') ? 'Founding' : 'Team';
  return (
    <div className="w-full max-w-sm border border-gray-200 rounded-lg shadow-sm hover:shadow-md hover:-translate-y-2 transform duration-700">
      <div className="flex flex-col items-center justify-center p-10">
        <div className="w-24 h-24 rounded-full mb-4 overflow-hidden">
          {avatarURL ? (
            <Image src={avatarURL} width={150} height={150} layout="responsive" className="rounded-full  hover:scale-110 duration-700" />
          ) : (
            <div className="w-24 h-24 rounded-full mb-4 overflow-hidden bg-gray-300"></div>
          )}
        </div>
        <h2 className="text-lg font-medium">{member.name}</h2>
        <p className="font-medium text-blue-500">{member.role}</p>
        <p className="text-gray-400">
          {memberprefix} member as of {member.since}
        </p>
      </div>

      <div className="flex border-t border-gray-200 divide-x divide-gray-200">
        <SocialLink href={member.socials.twitter ? member.socials.twitter : ''}>
          <TwitterIcon />
        </SocialLink>
        <SocialLink href={member.socials.github ? member.socials.github : ''}>
          <GithubIcon />
        </SocialLink>
        <SocialLink href={member.socials.linkedin ? member.socials.linkedin : ''}>
          <LinkedInIcon />
        </SocialLink>
      </div>
    </div>
  );
}

export default TeamCard;
