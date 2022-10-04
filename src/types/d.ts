import { StaticImageData } from 'next/image';
import { SVGProps } from 'react';

export type HeroFeature = {
  name: string;
  description: string;
  icon: (props: SVGProps<SVGSVGElement>) => JSX.Element;
  hoverIcon: (props: SVGProps<SVGSVGElement>) => JSX.Element;
};

export type PrimaryFeature = {
  name: string | JSX.Element;
  summary: string;
  image: StaticImageData;
  icon: (props: React.ComponentProps<'svg'>) => JSX.Element;
};
