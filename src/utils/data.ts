import { SVGProps } from 'react';
import AndrewBeckman from '../assets/Team/AndrewBeckman.jpeg';
import DennisWanjiru from '../assets/Team/DennisWanjiru.jpeg';
import GeorgeYounger from '../assets/Team/GeorgeYounger.jpeg';
import JoeBosetti from '../assets/Team/JoeBosetti.jpeg';
import KelvinKariuki from '../assets/Team/KelvinKariuki.jpeg';
import NahomMarie from '../assets/Team/NahomMarie.jpeg';
import NickHershey from '../assets/Team/NickHershey.jpeg';
import SantiagoAguilar from '../assets/Team/SantiagoAguilar.jpeg';
import ShlokaReddy from '../assets/Team/ShlokaReddy.jpeg';
import UmerSiddiqui from '../assets/Team/UmerSiddiqui.jpeg';
import ZacharyIsaac from '../assets/Team/ZacharyIsaac.jpeg';
import { GithubIcon, InstagramIcon, LinkedInIcon, TwitterIcon } from '../components/UI/SocialIcons';

export const team = [
  {
    name: 'Nick Hershey',
    avatar: NickHershey,
    role: 'Co-Founder & CEO',
    since: 2021,
    socials: { twitter: '', github: '', linkedin: 'https://www.linkedin.com/in/hershey-nick/' },
  },
  {
    name: 'Andrew Beckman',
    avatar: AndrewBeckman,
    role: 'Co-Founder & CTO',
    since: 2021,
    socials: { twitter: '', github: '', linkedin: 'https://www.linkedin.com/in/beckman-andrew/' },
  },
  {
    name: 'George Younger',
    avatar: GeorgeYounger,
    role: 'Software Engineer',
    since: 2021,
    socials: { twitter: '', github: '', linkedin: 'https://www.linkedin.com/in/george-younger/' },
  },
  {
    name: 'Zachary Isaac',
    avatar: ZacharyIsaac,
    role: 'Product Designer',
    since: 2021,
    socials: { twitter: '', github: '', linkedin: 'https://www.linkedin.com/in/zachisaac/' },
  },
  {
    name: 'Joe Bosetti',
    avatar: JoeBosetti,
    role: 'Client Success Lead',
    since: 2022,
    socials: { twitter: '', github: '', linkedin: 'https://www.linkedin.com/in/josephbosetti1869a/' },
  },
  {
    name: 'Kelvin Kariuki',
    avatar: KelvinKariuki,
    role: 'Software Engineer',
    since: 2022,
    socials: { twitter: '', github: '', linkedin: 'https://www.linkedin.com/in/dotnesh/' },
  },
  {
    name: 'Umer Siddiqui',
    avatar: UmerSiddiqui,
    role: 'Software Engineer',
    since: 2022,
    socials: { twitter: '', github: '', linkedin: 'https://www.linkedin.com/in/umerhsiddiqui/' },
  },
  {
    name: 'Dennis Wanjiru',
    avatar: DennisWanjiru,
    role: 'Software Engineer',
    since: 2022,
    socials: { twitter: '', github: '', linkedin: 'https://www.linkedin.com/in/denniswanjiru/' },
  },
  {
    name: 'Shloka Reddy',
    avatar: ShlokaReddy,
    role: 'Software Engineer',
    since: 2022,
    socials: { twitter: '', github: '', linkedin: 'https://www.linkedin.com/in/shloka-reddy/' },
  },
  {
    name: 'Nahom Marie',
    avatar: NahomMarie,
    role: 'Software Engineer',
    since: 2022,
    socials: { twitter: '', github: '', linkedin: 'https://www.linkedin.com/in/nahommarie/' },
  },
  {
    name: 'Santiago Aguilar',
    avatar: SantiagoAguilar,
    role: 'Software Engineer',
    since: 2022,
    socials: { twitter: '', github: '', linkedin: 'https://www.linkedin.com/in/aguilar-santiago/' },
  },
];

export const faqs = [
  {
    question: 'What is Rundoo?',
    answer:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rem, inventore. Molestiae pariatur aut nihil suscipit, inventore esse doloremque odit necessitatibus',
  },
  {
    question: 'How does it work?',
    answer:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rem, inventore. Molestiae pariatur aut nihil suscipit, inventore esse doloremque odit necessitatibus',
  },
  {
    question: 'What features are included?',
    answer:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rem, inventore. Molestiae pariatur aut nihil suscipit, inventore esse doloremque odit necessitatibus',
  },
  {
    question: 'How do I sign up?',
    answer:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rem, inventore. Molestiae pariatur aut nihil suscipit, inventore esse doloremque odit necessitatibus',
  },
];

export const footerNavigation = {
  solutions: [
    { name: 'Marketing', href: '#' },
    { name: 'Analytics', href: '#' },
    { name: 'Commerce', href: '#' },
    { name: 'Insights', href: '#' },
  ],
  support: [
    { name: 'Pricing', href: '#' },
    { name: 'Documentation', href: '#' },
    { name: 'Guides', href: '#' },
  ],
  company: [
    { name: 'About', href: 'https://www.linkedin.com/company/rundoo/' },
    { name: 'Careers', href: 'https://jobs.ashbyhq.com/rundoo' },
  ],
  legal: [
    { name: 'Privacy', href: 'https://www.getrundoo.com/privacy-policy' },
    { name: 'Terms', href: 'https://www.getrundoo.com/privacy-policy' },
  ],
  social: [
    {
      name: 'Instagram',
      href: 'https://www.linkedin.com/company/rundoo/',
      icon: InstagramIcon,
    },
    {
      name: 'Twitter',
      href: 'https://www.linkedin.com/company/rundoo/',
      icon: TwitterIcon,
    },
    {
      name: 'GitHub',
      href: 'https://www.linkedin.com/company/rundoo/',
      icon: GithubIcon,
    },
    {
      name: 'LinkedIn',
      href: 'https://www.linkedin.com/company/rundoo/',
      icon: LinkedInIcon,
    },
  ],
};
