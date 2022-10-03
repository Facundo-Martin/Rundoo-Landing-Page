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
    <div className="flex mt-20 justify-between  items-center gap-x-14">
      <div className="flex flex-col ">
        {features.map((feature, featureIndex) => (
          <button className="relative max-w-md text-left" onClick={() => setIsActive(featureIndex)}>
            <Feature
              feature={{
                ...feature,
                name: <div>{feature.name}</div>,
              }}
              className={
                isActive == featureIndex ? 'bg-neutral-800/10 transform duration-300 opacity-100' : 'hover:opacity-100 hover:bg-neutral-800/5 duration-500'
              }
            />
          </button>
        ))}
      </div>
      <div className="relative">
        <div className="px-5 flex">
          <div className={clsx(isActive == 0 ? bringForward : 'scale-100 duration-700', imageStyle)}>
            <Image src={RundooBrowseSupplies} alt="" height={520} width={320} />
          </div>
          <div className={clsx(isActive == 1 ? bringForward : 'scale-100 duration-700', imageStyle, 'z-10')}>
            <Image src={RundooBrowseSupplies} alt="" height={520} width={320} />
          </div>
          <div className={clsx(isActive == 2 ? bringForward : 'scale-100 duration-700', imageStyle)}>
            <Image src={RundooBrowseSupplies} alt="" height={520} width={320} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default FeaturesDesktop;
