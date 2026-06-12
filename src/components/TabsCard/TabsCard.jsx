import { useLayoutEffect, useMemo, useRef, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import styles from "./TabsCard.module.css";

function TabsCard({ tabs, title, id = "services-tabs" }) {
  const contentRef = useRef(null);
  const contentInnerRef = useRef(null);
  const [contentHeight, setContentHeight] = useState("auto");

  const { hash } = useLocation();
  const navigate = useNavigate();

  const slugToIndex = useMemo(() => {
    const map = new Map();
    tabs.forEach((t, i) => map.set(t.slug, i));
    return map;
  }, [tabs]);

  const activeTab = useMemo(() => {
    const slug = (hash || "").replace("#", "").trim();
    const idx = slugToIndex.get(slug);
    return typeof idx === "number" ? idx : 0;
  }, [hash, slugToIndex]);

  const syncContentHeight = () => {
    const content = contentRef.current;
    const inner = contentInnerRef.current;
    if (!content || !inner) return;

    content.style.height = "auto";
    setContentHeight(`${inner.getBoundingClientRect().height}px`);
  };

  useLayoutEffect(() => {
    syncContentHeight();

    const inner = contentInnerRef.current;
    if (!inner) return;

    const observer = new ResizeObserver(() => {
      syncContentHeight();
    });

    observer.observe(inner);
    window.addEventListener("resize", syncContentHeight);

    return () => {
      observer.disconnect();
      window.removeEventListener("resize", syncContentHeight);
    };
  }, [activeTab, tabs]);

  const setHash = (slug, scroll = true) => {
    navigate({ hash: `#${slug}` }, { replace: true });

    if (scroll) {
      document.getElementById(id)?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <>
      {title && <h3>{title}</h3>}
      <div id={id} className={styles.anchor} />
      <section className={styles.container}>
        <div className={styles.tabsContainer}>
          {tabs.map((tab, index) => (
            <button
              key={tab.slug}
              type="button"
              onClick={() => setHash(tab.slug, false)}
              className={`${styles.tab} ${index === activeTab ? styles.activeTab : ""}`}
            >
              {tab.title}
            </button>
          ))}
        </div>

        <div className={styles.rightColumn}>
          <div className={styles.selectWrap}>
            <select
              aria-label="Select a service category"
              className={styles.tabsSelect}
              value={tabs[activeTab]?.slug ?? tabs[0]?.slug}
              onChange={(e) => setHash(e.target.value)}
            >
              {tabs.map((tab) => (
                <option key={tab.slug} value={tab.slug}>
                  {tab.title}
                </option>
              ))}
            </select>

            <span className={styles.selectIcon} aria-hidden="true">
              <svg aria-hidden="true" focusable="false" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" className="icon-svg"><path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"/></svg>
            </span>
          </div>

          <div
            className={styles.content}
            ref={contentRef}
            style={{ height: contentHeight }}
          >
            <div ref={contentInnerRef}>{tabs[activeTab]?.content}</div>
          </div>
        </div>
      </section>
    </>
  );
}

export default TabsCard;
