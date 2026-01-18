import { useState } from "react";
import styles from "./SmartStatus.module.css";

const parseTime = (timeStr) => {
  const [hours, minutes] = timeStr.split(":").map(Number);
  return hours * 60 + minutes;
};

const isWithinRange = (now, start, end) => {
  return now >= start && now <= end;
};

const HOURS = {
  mechanics: {
    weekday: { open: "8:00", close: "17:00" },
    saturday: { open: "7:00", close: "12:00" },
    sunday: null,
  },
  gas: {
    weekday: { open: "7:00", close: "20:00" },
    saturday: { open: "7:00", close: "17:00" },
    sunday: { open: "8:00", close: "16:00" },
  },
};

const formatTo12Hour = (timeStr) => {
  const [hours, minutes] = timeStr.split(":").map(Number);
  const period = hours >= 12 ? "pm" : "am";
  const displayHours = hours % 12 || 12;
  return `${displayHours}:${minutes.toString().padStart(2, "0")}${period}`;
};

const getDayType = (day) => {
  if (day >= 1 && day <= 5) return "weekday";
  if (day === 6) return "saturday";
  return "sunday";
};

const getStatus = (schedule) => {
  const now = new Date();
  const minutesNow = now.getHours() * 60 + now.getMinutes();
  const dayType = getDayType(now.getDay());

  const today = schedule[dayType];
  if (!today) {
    return { open: false, message: "Closed today" };
  }

  const openTime = parseTime(today.open);
  const closeTime = parseTime(today.close);

  const open = isWithinRange(minutesNow, openTime, closeTime);

  if (dayType === "saturday" && !open) {
    return { open: false, message: "Closed until Monday" };
  }

  return {
    open,
    message: open
      ? `Open (closes ${formatTo12Hour(today.close)})`
      : `Closed (opens ${formatTo12Hour(today.open)})`,
  };
};

export default function SmartStatus() {
  const [showHours, setShowHours] = useState(false);

  const gasStatus = getStatus(HOURS.gas);
  const mechStatus = getStatus(HOURS.mechanics);

  return (
    <div className={styles.container}>
      <div className={styles.row}>
        <span
          className={styles.dot}
          style={{ backgroundColor: mechStatus.open ? "#00B44B" : "#ca0202" }}
        />
        <span>Auto Repair</span>
        <span className={styles.statusMessage}>{mechStatus.message}</span>
      </div>

      <div className={styles.row}>
        <span
          className={styles.dot}
          style={{ backgroundColor: gasStatus.open ? "#00B44B" : "#ca0202" }}
        />
        <span>Gas & Pickup</span>
        <span className={styles.statusMessage}>{gasStatus.message}</span>
      </div>

      <button
        onClick={() => setShowHours(!showHours)}
        className={styles.toggle}
      >
        View Full Hours {showHours ? "▲" : "▼"}
      </button>

      {showHours && (
        <div className={styles.hours}>
          <span>Mon – Fri</span>
          <p>Auto Repair: 8:00am – 5:00pm</p>
          <p>Gas: 7:00am – 8:00pm</p>
          <span>Saturday</span>
          <p>Auto Repair: 7:00am – 12:00pm</p>
          <p>Gas: 7:00am – 5:00pm</p>
          <span>Sunday</span>
          <p>Auto Repair: Closed</p>
          <p>Gas: 8:00am – 4:00pm</p>
        </div>
      )}
    </div>
  );
}
