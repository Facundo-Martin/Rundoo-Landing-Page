import { DetailedHTMLProps, HTMLAttributes, JSXElementConstructor, useId } from 'react';
import clsx from 'clsx';
import RundooBrowseSupplies from '../../images/RundooBrowseSupplies.png';
import RundooOrderStatus from '../../images/RundooOrderStatus.png';
import FeaturesMobile from './FeaturesMobile';
import FeaturesDesktop from './FeaturesDesktop';
import { StaticImageData } from 'next/image';
import { ShoppingCartIcon, Square3Stack3DIcon, TableCellsIcon, WrenchScrewdriverIcon } from '@heroicons/react/24/outline';

export type FeatureType = {
  name: string | JSX.Element;
  summary: string;
  image: StaticImageData;
  icon: (props: React.ComponentProps<'svg'>) => JSX.Element;
};
const features = [
  {
    name: 'Suppliers',
    summary: 'We work with a wide range of suppliers across the Bay Area',
    image: RundooBrowseSupplies,
    icon: Square3Stack3DIcon,
  },
  {
    name: 'Inventory',
    summary: 'Browse hundreds of products and order them with just a few clicks',
    image: RundooOrderStatus,
    icon: WrenchScrewdriverIcon,
  },
  {
    name: 'Tracking',
    summary: 'Track you order status with your team as well as your order history',
    image: RundooOrderStatus,
    icon: ShoppingCartIcon,
  },
];

interface FeatureProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  feature: FeatureType;
  isActive?: boolean;
  className?: string;
}
export function Feature({ feature, isActive, className, ...props }: FeatureProps) {
  const Icon = feature.icon;
  return (
    <div className={clsx(className, 'p-4 rounded-l-lg', isActive ? 'lg:bg-blue-100/60 opacity-100' : 'opacity-75 hover:opacity-100')} {...props}>
      <div className="flex items-center justify-center w-fit bg-neutral-800/40 px-3 py-2 rounded-md">
        <Icon className="w-6 h-6 text-white" />
      </div>
      <h3 className={clsx('mt-2 text-sm font-medium', isActive ? 'text-gray-600' : 'text-white')}>{feature.name}</h3>
      <p className="mt-2 font-display text-xl text-white">{feature.summary}</p>
    </div>
  );
}

function RenderFeatures() {
  return (
    <section id="features" aria-label="Features for simplifying everyday business tasks" className="bg-gradient-to-r from-blue-400 to-blue-500 lg:h-screen">
      <div className="section">
        <div className="mx-auto max-w-2xl md:text-center">
          <h2 className="font-display text-3xl tracking-tight text-white sm:text-4xl">Simplify everyday business tasks.</h2>
          <p className="mt-4 text-lg tracking-tight text-white">
            Because you’d probably be a little confused if we suggested you complicate your everyday business tasks instead.
          </p>
        </div>
        <FeaturesMobile features={features} />
        <FeaturesDesktop features={features} />
      </div>
    </section>
  );
}
export default RenderFeatures;
