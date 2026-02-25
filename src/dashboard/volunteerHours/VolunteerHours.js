"use client";
import { useState, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faClock,
  faFilePdf,
  faBuilding,
  faHistory,
  faChartPie,
  faCheckCircle,
  faAward,
  faPrint
} from "@fortawesome/free-solid-svg-icons";
import { useReactToPrint } from "react-to-print";
import "./volunteerHours.css";
import Swal from "sweetalert2";

export default function VolunteerHours() {
  const componentRef = useRef();

  const hourLogs = [
    { id: 1, task: "تعليم حاسوب", org: "مؤسسة العلم نور", hours: 20, date: "15 فبراير 2026", color: "#7c3aed" },
    { id: 2, task: "قافلة طبية", org: "جمعية رسالة", hours: 12, date: "10 فبراير 2026", color: "#3b82f6" },
    { id: 3, task: "توزيع وجبات إفطار", org: "بنك الطعام", hours: 8, date: "01 فبراير 2026", color: "#10b981" },
  ];

  const totalHours = hourLogs.reduce((sum, log) => sum + log.hours, 0);

  const handlePrint = useReactToPrint({
    contentRef: componentRef,
    documentTitle: `سجل_ساعات_تطوع_${new Date().toLocaleDateString()}`,
    onAfterPrint: () => Swal.fire("تم بنجاح", "تم استخراج سجل الساعات بصيغة PDF", "success"),
  });

  return (
    <div className="hours-container" dir="rtl">
      {/* الهيدر العلوي */}
      <div className="hours-header-main">
        <div className="welcome-text">
          <h2><FontAwesomeIcon icon={faAward} className="text-purple" /> سجل الساعات التطوعية</h2>
          <p>أداء رائع! لقد ساهمت في تغيير حياة الكثيرين.</p>
        </div>
        <button className="print-action-btn" onClick={handlePrint}>
          <FontAwesomeIcon icon={faPrint} /> استخراج الكشف الرسمي
        </button>
      </div>

      {/* كروت الإحصائيات */}
      <div className="hours-stats-grid">
        <div className="stat-card-modern primary-gradient">
          <div className="stat-content">
            <span>إجمالي الساعات المعتمدة</span>
            <h3>{totalHours} <span>ساعة</span></h3>
          </div>
          <FontAwesomeIcon icon={faClock} className="stat-bg-icon" />
        </div>
        <div className="stat-card-modern secondary-white">
          <div className="stat-content">
            <span>المؤسسات الشريكة</span>
            <h3>{new Set(hourLogs.map(l => l.org)).size} <span>مؤسسات</span></h3>
          </div>
          <FontAwesomeIcon icon={faBuilding} className="stat-bg-icon" />
        </div>
      </div>

      <div className="hours-content-layout">
        {/* --- سجل الأنشطة (الذي سيتم طباعته) --- */}
        {/* --- المنطقة التي ستطبع (مخفي منها الهيدر والفوتر في الشاشة) --- */}
      <div className="history-section-wrapper" ref={componentRef} dir="rtl">
        
        {/* ✅ هيدر الطباعة (يظهر في الـ PDF فقط) */}
        <div className="print-only-header">
          <div className="print-header-top">
            <div className="print-logo">نـبـضـة خـيـر</div>
            <div className="print-meta">
              <span>الرقم المرجعي: #VOL-2026-{totalHours}</span>
              <span>تاريخ الإصدار: {new Date().toLocaleDateString('ar-EG')}</span>
            </div>
          </div>
          <div className="print-title-box">
            <h1>بيان مساهمات العمل التطوعي</h1>
            <p>شهادة رسمية بالساعات المعتمدة للمتطوع عبر المنصة</p>
          </div>
        </div>

{/* --- سجل الأنشطة (الذي سيتم طباعته) --- */}
<div className="history-section-wrapper" ref={componentRef} dir="rtl">
  
  {/* هيدر الطباعة كما هو ... */}
  
  <div className="card-inner-header">
    <h3><FontAwesomeIcon icon={faHistory} /> سجل الأنشطة التفصيلي</h3>
  </div>

  {/* الحاوية الجديدة للسكرول */}
  <div className="table-scroll-area">
    <table className="hours-custom-table">
      <thead>
        <tr>
          <th>النشاط</th>
          <th>المؤسسة</th>
          <th>التاريخ</th>
          <th>الساعات</th>
        </tr>
      </thead>
      <tbody>
        {hourLogs.map((log) => (
          <tr key={log.id}>
            <td className="task-title-cell">{log.task}</td>
            <td>{log.org}</td>
            <td>{log.date}</td>
            <td className="hour-count">{log.hours} ساعة</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>

  {/* فوتر الطباعة كما هو ... */}
</div>
        {/* ✅ فوتر الطباعة (يظهر في الـ PDF فقط) */}
        <div className="print-only-footer">
          <div className="print-summary-box">
            <p>نشهد بأن المتطوع المذكور أعلاه قد أتم <strong>{totalHours} ساعة عمل تطوعي</strong> معتمدة لدى المؤسسات المسجلة بالمنصة.</p>
          </div>
          <div className="signature-grid">
            <div className="sig-block">
              <span>ختم المنصة الرسمي</span>
              <div className="seal-placeholder"></div>
            </div>
            <div className="sig-block">
              <span>توقيع المدير التنفيذي</span>
              <div className="sign-line"></div>
            </div>
          </div>
        </div>
        </div>

        {/* --- العمود الجانبي: توزيع المجهود --- */}
        <div className="distribution-sidebar">
          <div className="sidebar-header">
            <FontAwesomeIcon icon={faChartPie} />
            <h3>توزيع مجهودك</h3>
          </div>
          <div className="dist-list">
            {hourLogs.map((log, index) => {
               const percentage = Math.round((log.hours / totalHours) * 100);
               return (
                <div className="dist-card" key={index}>
                  <div className="dist-info">
                    <span className="org-name">{log.org}</span>
                    <span className="org-perc" style={{color: log.color}}>{percentage}%</span>
                  </div>
                  <div className="progress-track">
                    <div 
                      className="progress-fill" 
                      style={{ width: `${percentage}%`, backgroundColor: log.color }}
                    ></div>
                  </div>
                </div>
               );
            })}
          </div>
          <div className="impact-box">
            <FontAwesomeIcon icon={faCheckCircle} />
            <p>مجهودك يمثل <strong>{totalHours * 10} نقطة</strong> تأثير مجتمعي</p>
          </div>
        </div>
      </div>
    </div>
  );
}