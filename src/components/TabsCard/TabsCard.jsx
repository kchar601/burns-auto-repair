import { useRef, useEffect, useLayoutEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import styles from "./TabsCard.module.css";

function TabsCard({ tabs, title }) {
  const [searchParams, setSearchParams] = useSearchParams();
  const [contentHeight, setContentHeight] = useState("auto");
  const contentRef = useRef(null);

  const tabParam = searchParams.get("tab");

  const activeTabIndex = tabs.findIndex((tab) => tab.slug === tabParam);

  const activeTab = activeTabIndex !== -1 ? activeTabIndex : 0;

  // Initialize height on mount with delay to ensure DOM is ready
  useEffect(() => {
    const timer = setTimeout(() => {
      const element = contentRef.current;
      if (element) {
        const initialHeight = element.scrollHeight;
        setContentHeight(initialHeight + "px");
      }
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  // Update height when tab changes (useLayoutEffect for smooth transitions)
  useLayoutEffect(() => {
    const element = contentRef.current;
    if (element) {
      // Measure the true content height by temporarily removing height constraint
      const previousHeight = element.style.height;
      element.style.height = "auto";
      const trueHeight = element.scrollHeight;
      element.style.height = previousHeight;

      // Use setTimeout to allow the height change to be set on next frame
      setTimeout(() => {
        setContentHeight(trueHeight + "px");
      }, 0);
    }
  }, [activeTab]);

  const handleTabClick = (slug) => {
    setSearchParams({ tab: slug });
  };

  const handleSelectChange = (e) => {
    setSearchParams({ tab: e.target.value });
  };

  return (
    <>
      {title && <h3>${title}</h3>}
      <div className={styles.container}>
        <div className={styles.tabsContainer}>
          {tabs.map((tab, index) => (
            <Tab
              key={tab.slug}
              title={tab.title}
              isActive={index === activeTab}
              onClick={() => handleTabClick(tab.slug)}
            />
          ))}
        </div>

        <select
          className={styles.tabsSelect}
          value={tabs[activeTab].slug}
          onChange={handleSelectChange}
        >
          {tabs.map((tab) => (
            <option key={tab.slug} value={tab.slug}>
              {tab.title}
              <i className="fa-solid fa-chevron-down"></i>
            </option>
          ))}
        </select>

        <div
          className={styles.content}
          ref={contentRef}
          style={{ height: contentHeight }}
        >
          {tabs[activeTab].content}
        </div>
      </div>
    </>
  );
}

export default TabsCard;

function Tab({ key, title, onClick, isActive }) {
  return (
    <button
      key={key}
      onClick={onClick}
      className={`${styles.tab} ${isActive ? styles.activeTab : ""}`}
    >
      {title}
    </button>
  );
}
