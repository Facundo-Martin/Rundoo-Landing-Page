import { Disclosure } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/24/outline';
import Image from 'next/image';
import team from '../../images/team.jpg';

const faqs = [
  {
    question: 'What is Rundoo?',
    answer:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rem, inventore. Molestiae pariatur aut nihil suscipit, inventore esse doloremque odit necessitatibus',
  },
  {
    question: 'How does it work?',
    answer:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rem, inventore. Molestiae pariatur aut nihil suscipit, inventore esse doloremque odit necessitatibus',
  },
  {
    question: 'What features are included?',
    answer:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rem, inventore. Molestiae pariatur aut nihil suscipit, inventore esse doloremque odit necessitatibus',
  },
  {
    question: 'How do I sign up?',
    answer:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rem, inventore. Molestiae pariatur aut nihil suscipit, inventore esse doloremque odit necessitatibus',
  },

  // More questions...
];
function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}
function RenderFAQs() {
  return (
    <section id="FAQs" className="wrapper section h-[80vh]">
      <div className="mx-auto max-w-7xl py-12 px-4 sm:py-16 sm:px-6 lg:px-8">
        <div className="mx-auto  divide-gray-200">
          <h2 className="text-center text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Frequently asked questions</h2>

          <div className="xl:flex flex-row items-start justify-between gap-x-10 mt-20">
            <div className="hidden xl:block flex-[0.7]">
              <Image src={team} alt="Rundoo team" width={180} height={120} layout="responsive" className="rounded-md" />
            </div>
            <dl className="flex-1 max-w-xl mx-auto mt-3 space-y-6 divide-y divide-gray-200">
              {faqs.map((faq, i) => (
                <Disclosure as="div" key={faq.question} className={i !== 0 ? 'pt-6' : ''}>
                  {({ open }) => (
                    <>
                      <dt className="text-lg">
                        <Disclosure.Button className="flex w-full items-start justify-between text-left text-gray-400">
                          <span className="font-medium text-gray-900">{faq.question}</span>
                          <span className="ml-6 flex h-7 items-center">
                            <ChevronDownIcon className={classNames(open ? '-rotate-180' : 'rotate-0', 'h-6 w-6 transform')} aria-hidden="true" />
                          </span>
                        </Disclosure.Button>
                      </dt>
                      <Disclosure.Panel as="dd" className="mt-2 pr-12">
                        <p className="text-base text-gray-500">{faq.answer}</p>
                      </Disclosure.Panel>
                    </>
                  )}
                </Disclosure>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
}

export default RenderFAQs;
