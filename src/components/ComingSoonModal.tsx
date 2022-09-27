import React, { JSXElementConstructor, useState } from 'react';
import { Dialog } from '@headlessui/react';

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
          <Dialog.Panel className="mx-auto w-full max-w-xl h-60 rounded bg-gray-300">
            <Dialog.Title className="text-center my-2 text-3xl">Coming Soon!</Dialog.Title>

            {/* ... */}
          </Dialog.Panel>
        </div>
      </Dialog>
    </>
  );
}

export default ComingSoonModal;
