import React, { JSXElementConstructor, useState } from 'react';
import { Dialog } from '@headlessui/react';
import { XMarkIcon } from '@heroicons/react/24/outline';
import Image from 'next/image';
import RundooLogo from '../assets/RundooLogo.png';

type ComingSoonModalProps = {
  button: JSX.Element;
};
function ComingSoonModal({ button }: ComingSoonModalProps) {
  let [isOpen, setIsOpen] = useState(false);

  if (!isOpen) {
    return <button onClick={() => setIsOpen(true)}>{button}</button>;
  }

  return (
    <>
      <button onClick={() => setIsOpen(true)}>{button}</button>
      <Dialog open={isOpen} onClose={() => setIsOpen(false)} className="relative z-50">
        {/* The backdrop, rendered as a fixed sibling to the panel container */}
        <div className="fixed inset-0 bg-black/30" aria-hidden="true" />

        {/* Full-screen container to center the panel */}
        <div className="fixed inset-0 flex items-center justify-center p-4">
          {/* The actual dialog panel  */}
          <Dialog.Panel className="mx-auto w-full max-w-xl h-80 rounded bg-stone-100 relative px-4 py-4">
            <button className="absolute right-[6px] top-[6px] text-sm ">
              <XMarkIcon className="w-5" onClick={() => setIsOpen(false)} />
            </button>
            <Dialog.Title className="text-center mb-4 text-3xl font-medium">Coming Soon!</Dialog.Title>
            <div className="grid h-44 place-items-center">
              <div className="flex items-center justify-center gap-2">
                <Image src={RundooLogo} width={50} height={50} />
                <div className="max-w-xs">Our team is currently working on this feature.</div>
              </div>
            </div>
            <button
              className="w-40 mx-auto py-[10px] bg-gray-900 hover:bg-gray-800 text-white rounded-xl flex items-center justify-center"
              onClick={() => setIsOpen(false)}
            >
              Close
            </button>

            {/* ... */}
          </Dialog.Panel>
        </div>
      </Dialog>
    </>
  );
}

export default ComingSoonModal;
