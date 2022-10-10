import { ArrowUpIcon } from '@heroicons/react/24/outline';
import Section from './Section';

function ScrollTopButton() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };
  return (
    <Section className="py-0 mt-8 lg:my-8 w-full flex justify-end px-10 xl:px-2">
      <button onClick={scrollToTop}>
        <div className="flex flex-col items-center group">
          <ArrowUpIcon className="w-5 group-hover:-translate-y-2 transition-all duration-700" />
          <p> Back to Top</p>
        </div>
      </button>
    </Section>
  );
}

export default ScrollTopButton;
