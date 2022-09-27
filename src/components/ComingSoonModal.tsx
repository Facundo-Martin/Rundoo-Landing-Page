import React, { JSXElementConstructor, useState } from 'react';
import { Dialog } from '@headlessui/react';
import { XMarkIcon } from '@heroicons/react/24/outline';

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
          <Dialog.Panel className="mx-auto w-full max-w-xl h-60 rounded bg-stone-100 relative">
            <Dialog.Title className="text-center my-3 text-3xl font-medium">Coming Soon!</Dialog.Title>
            <div>etc </div>
            <button className="absolute right-[6px] top-[6px] text-sm ">
              <XMarkIcon className="w-5" onClick={() => setIsOpen(false)} />
            </button>

            {/* ... */}
          </Dialog.Panel>
        </div>
      </Dialog>
    </>
  );
}

export default ComingSoonModal;
