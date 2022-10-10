import { DetailedHTMLProps, HTMLAttributes } from 'react';
import { PrimaryFeature } from '../../interfaces';
import clsx from 'clsx';

interface FeatureProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  feature: PrimaryFeature;
  isActive?: boolean;
  className?: string;
}
function Feature({ feature, isActive, className, ...props }: FeatureProps) {
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

export default Feature;
