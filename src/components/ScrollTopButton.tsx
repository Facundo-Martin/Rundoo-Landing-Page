import { ArrowUpIcon } from '@heroicons/react/24/outline';

const ScrollTopButton = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <section className="wrapper w-full flex justify-end px-10 xl:px-2">
      <button onClick={scrollToTop}>
        <div className="flex flex-col items-center group">
          <ArrowUpIcon className="w-5 group-hover:-translate-y-2 transition-all duration-700" />
          <p> Back to Top</p>
        </div>
      </button>
    </section>
  );
};

export default ScrollTopButton;
