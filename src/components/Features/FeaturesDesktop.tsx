import Image from 'next/image';
import { Tab } from '@headlessui/react';
import { Feature, FeatureType } from './RenderFeatures';
import clsx from 'clsx';

type FeatureProps = {
  features: FeatureType[];
};
function FeaturesDesktop({ features }: FeatureProps) {
  return (
    <div className="flex mt-20 justify-between gap-x-10">
      <div className="flex flex-col gap-y-6 ">
        {features.map((feature, featureIndex) => (
          <div className="max-w-md" key={featureIndex}>
            <Feature
              feature={{
                ...feature,
                name: (
                  <div className="[&:not(:focus-visible)]:focus:outline-none">
                    <span className="absolute inset-0" />
                    {feature.name}
                  </div>
                ),
              }}
              className="relative"
            />
          </div>
        ))}
      </div>
      <div className="relative bg-slate-200">
        <div
          className={clsx('px-5 transition duration-500 ease-in-out [&:not(:focus-visible)]:focus:outline-none flex')}
          // style={{ transform: `translateY(-${selectedIndex * 100}%)` }}
        >
          {features.map((feature, featureIndex) => (
            <div className={clsx('rounded-xl bg-white shadow-lg shadow-slate-900/5 ring-1 ring-slate-500/10 -mx-12')}>
              <Image src={feature.image} alt="" height={550} width={280} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default FeaturesDesktop;
