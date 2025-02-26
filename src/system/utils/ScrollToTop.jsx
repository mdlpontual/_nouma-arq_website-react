import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    const savedScrollY = sessionStorage.getItem(`scrollPosition-${pathname}`);

    if (savedScrollY !== null) {
      window.scrollTo(0, parseInt(savedScrollY, 10));
    } else {
      window.scrollTo(0, 0); 
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
