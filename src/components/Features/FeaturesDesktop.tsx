import { useState } from 'react';
import Image from 'next/image';
import clsx from 'clsx';
import Feature from './Feature';
// types
import { PrimaryFeature } from '../../types/d';
// images
import RundooBrowseSupplies from '../../images/RundooBrowseSupplies.png';
import RundooExplore from '../../images/RundooExplore.png';
import RundooOrderTracking from '../../images/RundooOrderTracking.png';

type FeatureProps = {
  features: PrimaryFeature[];
};
function FeaturesDesktop({ features }: FeatureProps) {
  const [isActive, setIsActive] = useState(0);
  const bringForward = 'z-50 transform scale-110 duration-700';
  const imageStyle = 'rounded-xl -mx-12';
  return (
    <div className="hidden mt-20  lg:flex justify-between items-center gap-x-14">
      <div className="flex flex-col ">
        {features.map((feature, featureIndex) => (
          <button key={featureIndex} className="relative max-w-md text-left" onClick={() => setIsActive(featureIndex)}>
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
        <div className="px-5 flex items-center">
          <div className={clsx(isActive == 0 ? bringForward : 'scale-100 duration-700', imageStyle)}>
            <Image src={RundooBrowseSupplies} alt="" height={500} width={320} />
          </div>
          <div className={clsx(isActive == 1 ? bringForward : 'scale-100 duration-700', imageStyle, 'z-10')}>
            <Image src={RundooExplore} alt="" height={520} width={320} />
          </div>
          <div className={clsx(isActive == 2 ? bringForward : 'scale-100 duration-700', imageStyle)}>
            <Image src={RundooOrderTracking} alt="" height={520} width={320} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default FeaturesDesktop;
