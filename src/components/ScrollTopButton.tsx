import { Divide } from 'hamburger-react';
import { useState } from 'react';

const ScrollTopButton = () => {
  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300) {
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
    <button onClick={scrollToTop} className="sticky bottom-0 right-0">
      Button
    </button>
  );
};

export default ScrollTopButton;
