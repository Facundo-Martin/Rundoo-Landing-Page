import Image from 'next/image';
import { Tab } from '@headlessui/react';
import { Feature, FeatureType } from './RenderFeatures';
import clsx from 'clsx';
import { useState } from 'react';
import RundooBrowseSupplies from '../../images/RundooBrowseSupplies.png';
import RundooOrderStatus from '../../images/RundooOrderStatus.png';

type FeatureProps = {
  features: FeatureType[];
};
function FeaturesDesktop({ features }: FeatureProps) {
  const [isActive, setIsActive] = useState(0);
  const bringForward = 'z-50 transform scale-110 duration-700';
  const imageStyle = 'rounded-xl -mx-12';
  console.log('isActive', isActive);
  return (
    <div className="flex mt-20 justify-between gap-x-10">
      <div className="flex flex-col gap-y-6 ">
        {features.map((feature, featureIndex) => (
          <button className="max-w-md text-left" key={featureIndex} onClick={() => setIsActive(featureIndex)}>
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
              className={clsx(isActive == featureIndex ? 'bg-blue-100 transform duration-300' : '')}
            />
          </button>
        ))}
      </div>
      <div className="relative">
        <div
          className={clsx('px-5 transition duration-500 ease-in-out [&:not(:focus-visible)]:focus:outline-none flex')}
          // style={{ transform: `translateY(-${selectedIndex * 100}%)` }}
        >
          <div className={clsx(isActive == 0 ? bringForward : 'scale-100 duration-700', imageStyle)}>
            <Image src={RundooBrowseSupplies} alt="" height={550} width={280} />
          </div>
          <div className={clsx(isActive == 1 ? bringForward : 'scale-100 duration-700', imageStyle, 'z-10')}>
            <Image src={RundooBrowseSupplies} alt="" height={550} width={280} />
          </div>
          <div className={clsx(isActive == 2 ? bringForward : 'scale-100 duration-700', imageStyle)}>
            <Image src={RundooBrowseSupplies} alt="" height={550} width={280} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default FeaturesDesktop;
