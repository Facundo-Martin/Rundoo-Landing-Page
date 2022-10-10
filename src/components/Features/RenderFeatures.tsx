import FeaturesTitle from './FeaturesTitle';
import FeaturesMobile from './FeaturesMobile';
import FeaturesDesktop from './FeaturesDesktop';
import RundooBrowseSupplies from '../../images/RundooBrowseSupplies.png';
import RundooExplore from '../../images/RundooExplore.png';
import RundooOrderTracking from '../../images/RundooOrderTracking.png';
import { ShoppingCartIcon, Square3Stack3DIcon, WrenchScrewdriverIcon } from '@heroicons/react/24/outline';

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
    <section id="features" aria-label="Features for simplifying everyday business tasks" className="bg-gradient-to-r from-blue-400 to-blue-500 lg:min-h-screen">
      <div className="section wrapper">
        <FeaturesTitle />
        <FeaturesMobile features={features} />
        <FeaturesDesktop features={features} />
      </div>
    </section>
  );
}
export default RenderFeatures;
