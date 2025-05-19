import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    const isRefresh = performance.navigation.type === 1;

    if (isRefresh) {
      // Full page refresh detected: clear saved scroll positions
      sessionStorage.clear();
      window.scrollTo(0, 0);
    } else {
      // Normal navigation
      window.scrollTo({ top: 0, left: 0, behavior: "instant" }); // <-- force instantly top
      sessionStorage.removeItem('projectAnimationsStarted'); // <-- clean animation session key
    }

    const handleScroll = () => {
      sessionStorage.setItem(`scrollPosition-${pathname}`, window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [pathname]);

  return null;
};

export default ScrollToTop;
