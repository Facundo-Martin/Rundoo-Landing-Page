export interface Person {
    name: string,
    avatar: string,
    role: string,
    since: number,
    socials: { twitter?: string, github?: string, linkedin: string },
}
export const team: Person[] = [
    {
      name: 'John Doe',
      avatar: 'https://cdn.devdojo.com/images/june2021/headshot2.jpg',
      role: 'CEO and Founder',
      since: 2015,
      socials: { twitter: 'twitter', github: 'github', linkedin: 'linkedin' },
    },
    {
      name: 'Mike Smith',
      avatar: 'https://cdn.devdojo.com/images/june2021/headshotguy.jpg',
      role: 'CTO and Co-Founder',
      since: 2015,
      socials: { twitter: 'twitter', github: 'github', linkedin: 'linkedin' },
    },
    {
      name: 'Kelly Rogers',
      avatar: 'https://cdn.devdojo.com/images/june2021/headshot-female.jpg',
      role: 'Designer',
      since: 2018,
      socials: { twitter: 'twitter', github: 'github', linkedin: 'linkedin' },
    },
  ];