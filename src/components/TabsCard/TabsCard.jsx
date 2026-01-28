import { useSearchParams } from "react-router-dom";
import styles from "./TabsCard.module.css";

function TabsCard({ tabs }) {
  const [searchParams, setSearchParams] = useSearchParams();

  const tabParam = searchParams.get("tab");

  const activeTabIndex = tabs.findIndex((tab) => tab.slug === tabParam);

  const activeTab = activeTabIndex !== -1 ? activeTabIndex : 0;

  const handleTabClick = (slug) => {
    setSearchParams({ tab: slug });
  };

  const handleSelectChange = (e) => {
    setSearchParams({ tab: e.target.value });
  };

  return (
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

      <div className={styles.content}>{tabs[activeTab].content}</div>
    </div>
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
