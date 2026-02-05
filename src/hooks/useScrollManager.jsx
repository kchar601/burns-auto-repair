import { useEffect, useMemo, useRef } from "react";
import { useLocation } from "react-router-dom";

export function useScrollManager({
  offset = 32,
  tabsAnchorId = "services-tabs",
  tabSlugs = [],
  behavior = "smooth",
} = {}) {
  const { pathname, hash } = useLocation();
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

    const targetId = tabSet.has(slug) ? "services-tabs" : slug;
    document
      .getElementById(targetId)
      ?.scrollIntoView({ behavior: "smooth", block: "start" });

    let tries = 0;
    const maxTries = 15;

    const tryScroll = () => {
      const el = document.getElementById(targetId);

      if (el) {
        el.scrollIntoView({ behavior, block: "start" });
        // compensate for sticky header
        window.scrollBy({ top: -offset, left: 0, behavior: "instant" });
        return;
      }

      tries += 1;
      if (tries < maxTries) requestAnimationFrame(tryScroll);
    };

    setTimeout(() => requestAnimationFrame(tryScroll), 0);
  }, [pathname, hash, offset, tabsAnchorId, tabSet, behavior]);
}
