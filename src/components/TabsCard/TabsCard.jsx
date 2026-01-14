import { useState } from "react";
import styles from "./TabsCard.module.css";

function TabsCard({ tabs }) {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className={styles.container}>
      <div className={styles.tabsContainer}>
        {tabs.map((tab, index) => (
          <Tab
            key={tab.title}
            title={tab.title}
            isActive={activeTab === index}
            onClick={() => setActiveTab(index)}
          />
        ))}
      </div>
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
