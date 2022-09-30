import { DetailedHTMLProps, HTMLAttributes, JSXElementConstructor, useId } from 'react';
import clsx from 'clsx';
import RundooBrowseSupplies from '../../images/RundooBrowseSupplies.png';
import RundooOrderStatus from '../../images/RundooOrderStatus.png';
import FeaturesMobile from './FeaturesMobile';
import FeaturesDesktop from './FeaturesDesktop';
import { StaticImageData } from 'next/image';

export type FeatureType = {
  name: string | JSX.Element;
  summary: string;
  image: StaticImageData;
  icon: () => JSX.Element;
};
const features = [
  {
    name: 'Reporting',
    summary: 'Stay on top of things with always up-to-date reporting features.',
    image: RundooBrowseSupplies,
    icon: function ReportingIcon() {
      let id = useId();
      return (
        <>
          <defs>
            <linearGradient id={id} x1="11.5" y1={18} x2={36} y2="15.5" gradientUnits="userSpaceOnUse">
              <stop offset=".194" stopColor="#fff" />
              <stop offset={1} stopColor="#6692F1" />
            </linearGradient>
          </defs>
          <path d="m30 15-4 5-4-11-4 18-4-11-4 7-4-5" stroke={`url(#${id})`} strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
        </>
      );
    },
  },
  {
    name: 'Inventory',
    summary: 'Never lose track of what’s in stock with accurate inventory tracking.',
    image: RundooOrderStatus,
    icon: function InventoryIcon() {
      return (
        <>
          <path opacity=".5" d="M8 17a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H9a1 1 0 0 1-1-1v-2Z" fill="#fff" />
          <path opacity=".3" d="M8 24a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H9a1 1 0 0 1-1-1v-2Z" fill="#fff" />
          <path d="M8 10a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H9a1 1 0 0 1-1-1v-2Z" fill="#fff" />
        </>
      );
    },
  },
  {
    name: 'Contacts',
    summary: 'Organize all of your contacts, service providers, and invoices in one place.',
    image: RundooOrderStatus,
    icon: function ContactsIcon() {
      return (
        <>
          <path
            opacity=".5"
            d="M25.778 25.778c.39.39 1.027.393 1.384-.028A11.952 11.952 0 0 0 30 18c0-6.627-5.373-12-12-12S6 11.373 6 18c0 2.954 1.067 5.659 2.838 7.75.357.421.993.419 1.384.028.39-.39.386-1.02.036-1.448A9.959 9.959 0 0 1 8 18c0-5.523 4.477-10 10-10s10 4.477 10 10a9.959 9.959 0 0 1-2.258 6.33c-.35.427-.354 1.058.036 1.448Z"
            fill="#fff"
          />
          <path
            d="M12 28.395V28a6 6 0 0 1 12 0v.395A11.945 11.945 0 0 1 18 30c-2.186 0-4.235-.584-6-1.605ZM21 16.5c0-1.933-.5-3.5-3-3.5s-3 1.567-3 3.5 1.343 3.5 3 3.5 3-1.567 3-3.5Z"
            fill="#fff"
          />
        </>
      );
    },
  },
];

interface FeatureProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  feature: FeatureType;
  isActive?: boolean;
  className?: string;
}
export function Feature({ feature, isActive, className, ...props }: FeatureProps) {
  return (
    <div className={clsx(className, 'p-4 rounded-l-lg', isActive ? 'lg:bg-blue-100/60' : 'opacity-75 hover:opacity-100')} {...props}>
      <div className={clsx('w-9 rounded-lg', isActive ? 'bg-blue-600' : 'bg-slate-500')}>
        <svg aria-hidden="true" className="h-9 w-9" fill="none">
          <feature.icon />
        </svg>
      </div>
      <h3 className={clsx('mt-2 text-sm font-medium', isActive ? 'text-blue-600' : 'text-slate-600')}>{feature.name}</h3>
      <p className="mt-2 font-display text-xl text-slate-900">{feature.summary}</p>
    </div>
  );
}

function RenderFeatures() {
  return (
    <section id="features" aria-label="Features for simplifying everyday business tasks" className="bg-gradient-to-r from-blue-400 to-blue-500 lg:h-screen">
      <div className="section wrapper">
        <div className="mx-auto max-w-2xl md:text-center">
          <h2 className="font-display text-3xl tracking-tight text-slate-900 sm:text-4xl">Simplify everyday business tasks.</h2>
          <p className="mt-4 text-lg tracking-tight text-slate-700">
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
