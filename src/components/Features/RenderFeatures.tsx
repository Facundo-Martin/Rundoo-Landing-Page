import FeaturesTitle from './FeaturesTitle';
import FeaturesMobile from './FeaturesMobile';
import FeaturesDesktop from './FeaturesDesktop';
import RundooBrowseSupplies from '../../assets/RundooBrowseSupplies.png';
import RundooExplore from '../../assets/RundooExplore.png';
import RundooOrderTracking from '../../assets/RundooOrderTracking.png';
import { ShoppingCartIcon, Square3Stack3DIcon, WrenchScrewdriverIcon } from '@heroicons/react/24/outline';
import Section from '../Section';

const features = [
  {
    name: 'Suppliers',
    summary: 'We work with a wide range of suppliers across the Bay Area',
    image: RundooBrowseSupplies,
    icon: Square3Stack3DIcon,
  },
  {
    name: 'Inventory',
    summary: 'Browse hundreds of products and order them with just a few clicks',
    image: RundooExplore,
    icon: WrenchScrewdriverIcon,
  },
  {
    name: 'Tracking',
    summary: 'Track you order status with your team as well as your order history',
    image: RundooOrderTracking,
    icon: ShoppingCartIcon,
  },
];

function RenderFeatures() {
  return (
    <Section
      id="features"
      aria-label="Features for simplifying everyday business tasks"
      className="max-w-none bg-gradient-to-r from-blue-400 to-blue-500 lg:min-h-screen"
    >
      <div className="section wrapper">
        <FeaturesTitle />
        <FeaturesMobile features={features} />
        <FeaturesDesktop features={features} />
      </div>
    </Section>
  );
}
export default RenderFeatures;
