"use client";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircle,
  faEye,
  faClock,
  faCheckCircle,
  faTimesCircle,
  faSpinner
} from "@fortawesome/free-solid-svg-icons";
import "./myTasks.css";
import { useLocale } from "next-intl";
import Link from "next/link";

export default function MyTasks() {
  const locale = useLocale();
  const [activeTab, setActiveTab] = useState("all");

  // بيانات المهام (مثال)
  const tasks = [
    { id: 1, org: "مؤسسة مجدي يعقوب", type: "طبي", date: "25 فبراير 2026", status: "accepted", statusText: "مقبولة" },
    { id: 2, org: "بنك الطعام المصري", type: "إطعام", date: "01 مارس 2026", status: "pending", statusText: "قيد المراجعة" },
    { id: 3, org: "جمعية رسالة", type: "ميداني", date: "10 يناير 2026", status: "completed", statusText: "مكتملة" },
    { id: 4, org: "مؤسسة التضامن", type: "تعليمي", date: "05 فبراير 2026", status: "cancelled", statusText: "ملغاة" },
  ];

  // تصفية المهام بناءً على التبويب المختار
  const filteredTasks = activeTab === "all" 
    ? tasks 
    : tasks.filter(task => task.status === activeTab);

  const tabs = [
    { id: "all", label: "الكل", icon: null },
    { id: "accepted", label: "مقبولة", icon: faCheckCircle, color: "#10b981" },
    { id: "pending", label: "قيد المراجعة", icon: faSpinner, color: "#f59e0b" },
    { id: "completed", label: "مكتملة", icon: faCheckCircle, color: "#3b82f6" },
    { id: "cancelled", label: "ملغاة", icon: faTimesCircle, color: "#ef4444" },
  ];

  return (
    <div className="my-tasks-container">
      <div className="page-header">
        <h2>🗓️ مهامي التطوعية</h2>
        <p>تابع حالة طلبات الانضمام والمهام التي تم تكليفك بها.</p>
      </div>

      {/* شريط التبويبات (Tabs) */}
      <div className="tabs-bar">
        {tabs.map(tab => (
          <button 
            key={tab.id}
            className={`tab-btn ${activeTab === tab.id ? "active" : ""}`}
            onClick={() => setActiveTab(tab.id)}
          >
            {tab.icon && <FontAwesomeIcon icon={tab.icon} style={{ marginLeft: '8px', color: activeTab === tab.id ? '#fff' : tab.color }} />}
            {tab.label}
          </button>
        ))}
      </div>

      {/* قائمة المهام */}
      <div className="tasks-list-grid">
        {filteredTasks.length > 0 ? (
          filteredTasks.map(task => (
            <div className={`task-status-card ${task.status}`} key={task.id}>
              <div className="task-card-body">
                <div className="task-main-info">
                  <span className="org-badge">{task.org}</span>
                  <h3>نوع النشاط: {task.type}</h3>
                  <div className="task-date">
                    <FontAwesomeIcon icon={faClock} /> {task.date}
                  </div>
                </div>
                
                <div className="task-status-info">
                  <div className={`status-indicator ${task.status}`}>
                    <FontAwesomeIcon icon={faCircle} className="dot" />
                    {task.statusText}
                  </div>
                  <Link href={`/${locale}/dashboard/volunteer/myTasks/${task.id}`} className="details-btn">
                    <FontAwesomeIcon icon={faEye} /> عرض التفاصيل
                  </Link>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="empty-state">
            <p>لا يوجد مهام في هذا القسم حالياً.</p>
          </div>
        )}
      </div>
    </div>
  );
}