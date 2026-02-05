import { useEffect, useMemo, useRef } from "react";
import { useLocation as useRouterLocation } from "react-router-dom";

export function useScrollManager({
  offset = 32,
  tabsAnchorId = "services-tabs",
  tabSlugs = [],
  behavior = "smooth",
} = {}) {
  const { pathname, hash } = useRouterLocation();
  const tabSet = useMemo(() => new Set(tabSlugs), [tabSlugs]);
  const prevPathRef = useRef(pathname);

  useEffect(() => {
    const pathChanged = prevPathRef.current !== pathname;
    prevPathRef.current = pathname;

    if (pathChanged && !hash) {
      window.scrollTo({ top: 0, behavior });
      return;
    }

    if (!hash) return;

    const slug = hash.replace("#", "").trim();
    if (!slug) return;

    const targetId = tabSet.has(slug) ? tabsAnchorId : slug;

    let tries = 0;
    const maxTries = 15;

    const tryScroll = () => {
      const el = document.getElementById(targetId);

      if (el) {
        const top = Math.max(el.getBoundingClientRect().top + window.scrollY - offset, 0);
        window.scrollTo({ top, behavior });
        return;
      }

      tries += 1;
      if (tries < maxTries) requestAnimationFrame(tryScroll);
    };

    setTimeout(() => requestAnimationFrame(tryScroll), 0);
  }, [pathname, hash, offset, tabsAnchorId, tabSet, behavior]);
}
