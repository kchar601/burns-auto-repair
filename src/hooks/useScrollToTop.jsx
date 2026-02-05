import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export const useScrollToTop = (top = 0) => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) return; // let hash scrolling handle it
    window.scrollTo({ top, behavior: "smooth" });
  }, [pathname, hash, top]);
};
