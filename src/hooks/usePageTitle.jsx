import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export function usePageTitle(getTitle) {
  const location = useLocation();

  useEffect(() => {
    const title =
      typeof getTitle === "function" ? getTitle(location) : getTitle;
    if (title) document.title = title;
  }, [location, getTitle]);
}
