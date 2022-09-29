/* This example requires Tailwind CSS v2.0+ */
import { ArrowSmallLeftIcon, BoltIcon, ChatBubbleBottomCenterTextIcon, GlobeAltIcon, ScaleIcon } from '@heroicons/react/24/outline';

const features = [
  {
    name: 'Competitive exchange rates',
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
    icon: GlobeAltIcon,
  },
  {
    name: 'No hidden fees',
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
    icon: ScaleIcon,
  },
  {
    name: 'Transfers are instant',
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
    icon: BoltIcon,
  },
  {
    name: 'Mobile notifications',
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
    icon: ChatBubbleBottomCenterTextIcon,
  },
];

export default function Example({ setShowMore }: { setShowMore: (showMore: boolean) => void }) {
  return (
    <div className="section bg-slate-50/70 py-12">
      <button onClick={() => setShowMore(false)} className="mb-4">
        <div className="flex items-center gap-2 group">
          <ArrowSmallLeftIcon className="w-7 group-hover:-translate-x-[6px] transition-all ease-in-out duration-700 transform" />
          <p className="text-lg ">Go Back</p>
        </div>
      </button>
      <div className="lg:text-center">
        <h2 className="text-lg font-semibold text-indigo-600">Rundoo Marketplace</h2>
        <p className="mt-2 text-3xl font-bold leading-8 tracking-tight text-gray-900 sm:text-4xl">A better way to buy materials</p>
        <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
          Rundoo is designed for both contractors and suppliers, with the purpose of making construction more affordable and safer.
        </p>
      </div>

      <div className="mt-10">
        <dl className="space-y-10 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10 md:space-y-0">
          {features.map((feature) => (
            <div key={feature.name} className="relative">
              <dt>
                <div className="absolute flex h-12 w-12 items-center justify-center rounded-md bg-indigo-500 text-white">
                  <feature.icon className="h-6 w-6" aria-hidden="true" />
                </div>
                <p className="ml-16 text-lg font-medium leading-6 text-gray-900">{feature.name}</p>
              </dt>
              <dd className="mt-2 ml-16 text-base text-gray-500">{feature.description}</dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
  );
}

//    <div className="overflow-hidden section bg-gray-50">
// <div className="">
