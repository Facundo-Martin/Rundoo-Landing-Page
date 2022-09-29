import Image from 'next/image';
import React from 'react';
import eaglematerials from '../../images/Sponsors/eaglematerials.png';
import granite from '../../images/Sponsors/granite.png';
import martinmarietta from '../../images/Sponsors/martinmarietta.png';
import quanta from '../../images/Sponsors/quanta.png';
import vulcan from '../../images/Sponsors/vulcan.png';

function HeroSponsors() {
  const imageContainer = 'w-32';
  return (
    <div className="section">
      <h4 className="text-center text-2xl text-gray-500/90 font-medium mb-6">We work with</h4>
      <div className="grid grid-cols-2 gap-8 md:grid-cols-6 lg:grid-cols-5">
        <div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
          <div className={imageContainer}>
            <Image src={eaglematerials} alt="" width={180} height={80} layout="responsive" />
          </div>
        </div>
        <div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
          <div className={imageContainer}>
            <Image src={martinmarietta} alt="" width={180} height={80} layout="responsive" />
          </div>
        </div>
        <div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
          <div className={imageContainer}>
            <Image src={granite} alt="" width={180} height={80} layout="responsive" />
          </div>
        </div>
        <div className="col-span-1 flex justify-center md:col-span-3 lg:col-span-1">
          <div className={imageContainer}>
            <Image src={quanta} alt="" width={180} height={80} layout="responsive" />
          </div>
        </div>
        <div className="col-span-2 flex justify-center md:col-span-3 lg:col-span-1">
          <div className={imageContainer}>
            <Image src={vulcan} alt="" width={180} height={80} layout="responsive" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroSponsors;
