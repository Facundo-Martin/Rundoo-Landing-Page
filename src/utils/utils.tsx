import { StaticImageData } from 'next/image';
import AndrewBeckman from '../images/Team/AndrewBeckman.jpeg';
import DennisWanjiru from '../images/Team/DennisWanjiru.jpeg';
import GeorgeYounger from '../images/Team/GeorgeYounger.jpeg';
import JoeBosetti from '../images/Team/JoeBosetti.jpeg';
import KelvinKariuki from '../images/Team/KelvinKariuki.jpeg';
import NahomMarie from '../images/Team/NahomMarie.jpeg';
import NickHershey from '../images/Team/NickHershey.jpeg';
import SantiagoAguilar from '../images/Team/SantiagoAguilar.jpeg';
import ShlokaReddy from '../images/Team/ShlokaReddy.jpeg';
import UmerSiddiqui from '../images/Team/UmerSiddiqui.jpeg';
import ZacharyIsaac from '../images/Team/ZacharyIsaac.jpeg';

export interface Person {
  name: string;
  avatar: StaticImageData;
  role: string;
  since: number;
  socials: { twitter?: string; github?: string; linkedin: string };
}
export const team: Person[] = [
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
