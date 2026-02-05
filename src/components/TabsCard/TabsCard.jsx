import { useEffect, useLayoutEffect, useMemo, useRef, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import styles from "./TabsCard.module.css";

function TabsCard({ tabs, title, id = "services-tabs" }) {
  const contentRef = useRef(null);
  const [activeTab, setActiveTab] = useState(0);
  const [contentHeight, setContentHeight] = useState("auto");

  const { hash } = useLocation();
  const navigate = useNavigate();

  const slugToIndex = useMemo(() => {
    const map = new Map();
    tabs.forEach((t, i) => map.set(t.slug, i));
    return map;
  }, [tabs]);

  // ✅ Sync tab from React Router hash
  useEffect(() => {
    const slug = (hash || "").replace("#", "").trim();
    const idx = slugToIndex.get(slug);
    setActiveTab(typeof idx === "number" ? idx : 0);
  }, [hash, slugToIndex]);

  // Set initial height
  useEffect(() => {
    const el = contentRef.current;
    if (!el) return;
    setContentHeight(el.scrollHeight + "px");
  }, []);

  // Animate height on change
  useLayoutEffect(() => {
    const el = contentRef.current;
    if (!el) return;
    el.style.height = "auto";
    setContentHeight(el.scrollHeight + "px");
  }, [activeTab, tabs]);

  const setHash = (slug) => {
    // ✅ Update hash THROUGH react-router (no lint issues, consistent behavior)
    navigate({ hash: `#${slug}` });

    // Scroll TabsCard into view so tab change feels responsive
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
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
              onClick={() => setHash(tab.slug)}
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
            {tabs[activeTab]?.content}
          </div>
        </div>
      </section>
    </>
  );
}

export default TabsCard;
