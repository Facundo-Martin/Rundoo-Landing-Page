/* This example requires Tailwind CSS v2.0+ */
import { ArrowSmallLeftIcon, BoltIcon, ChatBubbleBottomCenterTextIcon, GlobeAltIcon, ScaleIcon } from '@heroicons/react/24/outline';

const features = [
  {
    name: 'Wide range of materials',
    description:
      'We work with a large amount of suppliers to make sure our marketplace has everything you need for your job site. If you need it, Rundoo has it! ',
    icon: GlobeAltIcon,
  },
  {
    name: 'Fast checkout process',
    description: 'Buying supplies has never been easier. Within a couple of clicks you can select your supplier, materials, amount and checkout!',
    icon: ScaleIcon,
  },
  {
    name: 'Schedule pickup & delivery',
    description:
      'Flexibility is one of the most important aspects of building. You can order immediately or schedule for later. You can choose to pick up your materials, or get them delivered.',
    icon: BoltIcon,
  },
  {
    name: 'Order tracking & status',
    description: 'Stay up to date with your order. Rundoo allows your whole team to track the order and be notified of any changes to the order status.',
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
