import { useEffect } from "react";

function useFadeInOut(thresholdValue = 0) {
  useEffect(() => {
    const elements = document.querySelectorAll(".fade-in-target, .fade-out-target");

    elements.forEach((el, index) => {
      el.dataset.index = index;
    });

    const observer = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (entry.target.classList.contains("fade-out-target")) {
              entry.target.classList.add("fade-out-filter");
            } else {
              entry.target.classList.add("fade-in-up");
            }
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: thresholdValue,
      }
    );

    elements.forEach((el) => observer.observe(el));

    return () => {
      elements.forEach((el) => observer.unobserve(el));
      observer.disconnect(); // clean up observer too
    };
  }, [thresholdValue]);
}

export default useFadeInOut;
