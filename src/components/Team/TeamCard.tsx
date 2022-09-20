import React from 'react';
import { GithubIcon, LinkedInIcon, TwitterIcon } from '../UI/SocialIcons';

type SocialLinkProps = {
  href?: string;
  children: React.ReactNode;
};
function SocialLink({ href, children }: SocialLinkProps) {
  if (href) {
    return (
      <a href={href} className="flex-1 block p-5 text-center text-gray-300 transition duration-200 ease-out hover:bg-gray-100 hover:text-gray-500">
        {children}
      </a>
    );
  } else {
    return <div className="flex-1 block p-5 text-center text-gray-300 transition duration-200 ease-out hover:bg-gray-100 hover:text-gray-500">{children}</div>;
  }
}
function TeamCard({ teammate }) {
  return (
    <div className="w-full border border-gray-200 rounded-lg shadow-sm">
      <div className="flex flex-col items-center justify-center p-10">
        <img className="w-32 h-32 mb-6 rounded-full" src="https://cdn.devdojo.com/images/june2021/headshot2.jpg" />
        <h2 className="text-lg font-medium">John Doe</h2>
        <p className="font-medium text-blue-500">CEO and Founder</p>
        <p className="text-gray-400">Team member as of 2015</p>
      </div>

      <div className="flex border-t border-gray-200 divide-x divide-gray-200">
        <SocialLink>
          <TwitterIcon />
        </SocialLink>
        <SocialLink>
          <GithubIcon />
        </SocialLink>
        <SocialLink>
          <LinkedInIcon />
        </SocialLink>
      </div>
    </div>
  );
}

export default TeamCard;
