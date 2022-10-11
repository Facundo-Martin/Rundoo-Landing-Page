import Image from 'next/image';
// images
import eaglematerials from '../../assets/Sponsors/eaglematerials.png';
import granite from '../../assets/Sponsors/granite.png';
import martinmarietta from '../../assets/Sponsors/martinmarietta.png';
import quanta from '../../assets/Sponsors/quanta.png';
import vulcan from '../../assets/Sponsors/vulcan.png';
import Section from '../Section';

function HeroSponsors() {
  return (
    <Section>
      <h4 className="text-center text-2xl text-gray-500/90 font-medium mb-8">We work with</h4>
      <div className="grid grid-cols-2 gap-8 md:grid-cols-6 lg:grid-cols-5">
        <div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
          <Image src={eaglematerials} alt="Eagle Materials" width={140} height={50} />
        </div>
        <div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
          <Image src={martinmarietta} alt="Martin Marietta " width={140} height={50} />
        </div>
        <div className="col-span-1 flex items-center justify-center md:col-span-2 lg:col-span-1">
          <Image src={granite} alt="Granite" width={150} height={30} />
        </div>
        <div className="col-span-1 flex justify-center md:col-span-3 lg:col-span-1">
          <Image src={quanta} alt="Quanta services" width={140} height={50} />
        </div>
        <div className="col-span-2 flex justify-center md:col-span-3 lg:col-span-1">
          <Image src={vulcan} alt="Vulcan Materials Company" width={140} height={50} />
        </div>
      </div>
    </Section>
  );
}

export default HeroSponsors;
