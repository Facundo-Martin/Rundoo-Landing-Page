import Image from 'next/image';
import React from 'react';
import eaglematerials from '../../images/Sponsors/eaglematerials.png';
import granite from '../../images/Sponsors/granite.png';
import martinmarrieta from '../../images/Sponsors/martinmarrieta.png';
import quanta from '../../images/Sponsors/quanta.webp';
import vulcan from '../../images/Sponsors/vulcan.png';

function HeroSponsors() {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-6 lg:grid-cols-3">
          <div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
            <Image src={eaglematerials} alt="" width={200} height={200} />
          </div>
          <div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
            <div className="w-60 h-20">
              <Image src={martinmarrieta} alt="" width={200} height={200} layout="responsive" />
            </div>
          </div>
          <div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
            <div className="w-32">
              <Image src={quanta} alt="" width={200} height={200} layout="responsive" />
            </div>
          </div>
          <div className="col-span-1 flex justify-center md:col-span-3 lg:col-span-1">
            <div className="w-20">
              <Image src={quanta} alt="" width={200} height={200} layout="responsive" />
            </div>
          </div>
          <div className="col-span-2 flex justify-center md:col-span-3 lg:col-span-1">
            <div className="w-20">
              <Image src={quanta} alt="" width={200} height={200} layout="responsive" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroSponsors;
