/* This example requires Tailwind CSS v2.0+ */
import { BoltIcon, ChatBubbleBottomCenterTextIcon, EnvelopeIcon, GlobeAltIcon, ScaleIcon } from '@heroicons/react/24/outline';

const transferFeatures = [
  {
    id: 1,
    name: 'Competitive exchange rates',
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
    icon: GlobeAltIcon,
  },
  {
    id: 2,
    name: 'No hidden fees',
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
    icon: ScaleIcon,
  },
  {
    id: 3,
    name: 'Transfers are instant',
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
    icon: BoltIcon,
  },
];

type HeroLearnMoreProps = {
  setShowMore: (show: false) => void;
};
export default function HeroLearnMore({ setShowMore }: HeroLearnMoreProps) {
  return (
    <div className="overflow-hidden section bg-gray-50">
      <div className="">
        <button onClick={() => setShowMore(false)}>Go Back</button>
        <div className="relative mt-12 lg:grid lg:grid-cols-2 lg:items-center lg:gap-8">
          <div className="relative">
            <h3 className="hidden lg:block text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">Transfer funds world-wide</h3>
            <p className="hidden lg:block mt-3 text-lg text-gray-500">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur minima sequi recusandae, porro maiores officia assumenda aliquam laborum ab
              aliquid veritatis impedit odit adipisci optio iste blanditiis facere. Totam, velit.
            </p>

            <dl className="mt-10 space-y-10">
              {transferFeatures.map((item) => (
                <div key={item.id} className="relative">
                  <dt>
                    <div className="absolute flex h-12 w-12 items-center justify-center rounded-md bg-indigo-500 text-white">
                      <item.icon className="h-6 w-6" aria-hidden="true" />
                    </div>
                    <p className="ml-16 text-lg font-medium leading-6 text-gray-900">{item.name}</p>
                  </dt>
                  <dd className="mt-2 ml-16 text-base text-gray-500">{item.description}</dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="relative -mx-4 mt-10 lg:mt-0" aria-hidden="true">
            <img className="relative mx-auto" width={490} src="https://tailwindui.com/img/features/feature-example-1.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}
