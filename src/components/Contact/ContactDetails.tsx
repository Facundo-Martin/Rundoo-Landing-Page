/* This example requires Tailwind CSS v2.0+ */
import { EnvelopeIcon, PhoneIcon } from '@heroicons/react/24/outline';

export default function ContactDetails() {
  return (
    <div className="mx-auto max-w-lg space-y-8">
      <div className="mt-12 sm:mt-16 md:mt-0">
        <h2 className="text-2xl font-bold text-gray-900 sm:text-3xl sm:tracking-tight">Technical Support</h2>
        <div className="mt-3">
          <p className="text-lg text-gray-500">
            Hi there. I did not know what to write here so you&apos;re just gonna have to deal with this instead of a lorem ipsum. Anyways, have a great day!
          </p>
        </div>
        <div className="mt-9 flex flex-col lg:flex-row lg:items-center gap-8">
          <div className="flex">
            <div className="flex-shrink-0">
              <PhoneIcon className="h-6 w-6 text-gray-400" aria-hidden="true" />
            </div>
            <div className="ml-3 text-base text-gray-500">
              <p>(650) 362-8483</p>
            </div>
          </div>
          <div className="flex">
            <div className="flex-shrink-0">
              <EnvelopeIcon className="h-6 w-6 text-gray-400" aria-hidden="true" />
            </div>
            <div className="ml-3 text-base text-gray-500">
              <p>support@rundoo.com</p>
            </div>
          </div>
        </div>
      </div>
      <div>
        <h2 className="text-2xl font-bold text-gray-900 sm:text-3xl sm:tracking-tight">Sales Support</h2>
        <div className="mt-3">
          <p className="text-lg text-gray-500">
            Hi there. I did not know what to write here so you&apos;re just gonna have to deal with this instead of a lorem ipsum. Anyways, have a great day!
          </p>
        </div>
        <div className="mt-9 flex flex-col lg:flex-row lg:items-center gap-8">
          <div className="flex">
            <div className="flex-shrink-0">
              <PhoneIcon className="h-6 w-6 text-gray-400" aria-hidden="true" />
            </div>
            <div className="ml-3 text-base text-gray-500">
              <p>(650) 362-8483</p>
            </div>
          </div>
          <div className="flex">
            <div className="flex-shrink-0">
              <EnvelopeIcon className="h-6 w-6 text-gray-400" aria-hidden="true" />
            </div>
            <div className="ml-3 text-base text-gray-500">
              <p>sales@rundoo.com</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
