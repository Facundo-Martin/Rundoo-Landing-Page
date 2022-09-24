import { Divide } from 'hamburger-react';
import Image from 'next/image';
import React from 'react';
import { GithubIcon, LinkedInIcon, TwitterIcon } from '../UI/SocialIcons';

type SocialLinkProps = {
  href?: string;
  children: React.ReactNode;
};
function SocialLink({ href, children }: SocialLinkProps) {
  const socialStyle = 'flex-1 block p-5 text-center text-gray-300 transition duration-200 ease-out hover:bg-gray-100 hover:text-gray-500';
  if (href) {
    return (
      <a href={href} className={socialStyle}>
        {children}
      </a>
    );
  } else {
    return <div className={socialStyle}>{children}</div>;
  }
}
function TeamCard({ member }) {
  const avatarURL = member.avatar ? member.avatar : null;
  return (
    <div className="w-full max-w-sm border border-gray-200 rounded-lg shadow-sm">
      <div className="flex flex-col items-center justify-center p-10">
        <div className="w-20 h-20 rounded-full">
          {avatarURL ? <Image src={avatarURL} width={150} height={150} layout="responsive" className="rounded-full" /> : <div>No image</div>}
        </div>
        <h2 className="text-lg font-medium">{member.name}</h2>
        <p className="font-medium text-blue-500">{member.role}</p>
        <p className="text-gray-400">Team member as of {member.since}</p>
      </div>

      <div className="flex border-t border-gray-200 divide-x divide-gray-200">
        <SocialLink href={member.socials.twitter ? member.socials.twitter : null}>
          <TwitterIcon />
        </SocialLink>
        <SocialLink href={member.socials.github ? member.socials.github : null}>
          <GithubIcon />
        </SocialLink>
        <SocialLink href={member.socials.linkedin ? member.socials.linkedin : null}>
          <LinkedInIcon />
        </SocialLink>
      </div>
    </div>
  );
}

export default TeamCard;
