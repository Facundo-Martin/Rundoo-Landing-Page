import { ArrowUpIcon } from '@heroicons/react/24/outline';
import { useState } from 'react';

const ScrollTopButton = () => {
  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    console.log('running scroll');
    if (scrolled > 1400) {
      setVisible(true);
    } else if (scrolled <= 300) {
      setVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  window.addEventListener('scroll', toggleVisible);

  return (
    <section className="wrapper w-full flex justify-end">
      {visible && (
        <button onClick={scrollToTop}>
          <div className="flex flex-col items-center group">
            <ArrowUpIcon className="w-5 group-hover:-translate-y-2 transition-all duration-700" />
            <p> Back to Top</p>
          </div>
        </button>
      )}
    </section>
  );
};

export default ScrollTopButton;
