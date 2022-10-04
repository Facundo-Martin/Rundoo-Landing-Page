import { SVGProps } from 'react';

export type HeroFeature = {
  name: string;
  description: string;
  icon: (props: SVGProps<SVGSVGElement>) => JSX.Element;
  hoverIcon: (props: SVGProps<SVGSVGElement>) => JSX.Element;
};
