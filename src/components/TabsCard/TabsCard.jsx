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

  // Animate height on tab/content change and keep it in sync for late layout shifts
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
    // ✅ Update hash THROUGH react-router (no lint issues, consistent behavior)
    navigate({ hash: `#${slug}` });

    // Scroll TabsCard into view so tab change feels responsive
    if (scroll) {
      console.log(scroll);
      document.getElementById(id)?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <>
      {title && <h3>{title}</h3>}
      <div id="services-tabs" className={styles.anchor} />
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
              <i className="fa-solid fa-chevron-down" />
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
