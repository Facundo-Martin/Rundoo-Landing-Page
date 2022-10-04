import Image from 'next/image';
import Feature from './Feature';
import { FeatureType } from './RenderFeatures';

type FeaturesMobileProps = {
  features: FeatureType[];
};
function FeaturesMobile({ features }: FeaturesMobileProps) {
  return (
    <div className="-mx-4 mt-20 flex flex-col items-center justify-center gap-y-10 overflow-hidden px-4 sm:-mx-6 sm:px-6 lg:hidden">
      {features.map((feature, featureIndex) => (
        <div key={featureIndex}>
          <Feature
            feature={{
              ...feature,
              name: <div className="text-white">{feature.name}</div>,
            }}
            className="flex flex-col items-center mx-auto max-w-sm mb-5"
            isActive
          />
          <Image src={feature.image} alt="" height={650} width={420} />
        </div>
      ))}
    </div>
  );
}
export default FeaturesMobile;
