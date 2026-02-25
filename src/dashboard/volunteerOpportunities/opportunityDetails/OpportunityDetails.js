"use client";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMapMarkerAlt,
  faClock,
  faUsers,
  faCalendarAlt,
  faCheckCircle,
  faShareAlt,
  faArrowRight,
  faLightbulb,
  faTasks,
} from "@fortawesome/free-solid-svg-icons";
import "./oppDetails.css";
import Link from "next/link";
import { useLocale } from "next-intl";
import Swal from "sweetalert2";

export default function OpportunityDetails() {
  const locale = useLocale();
  const [copied, setCopied] = useState(false);
  const [isApplied, setIsApplied] = useState(false);

  // بيانات الفرصة
  const opportunity = {
    title: "تعليم أساسيات الحاسوب للأطفال",
    org: "مؤسسة العلم نور",
    fullDescription:
      "تهدف هذه المبادرة إلى تمكين الأطفال في المناطق الأكثر احتياجاً من امتلاك المهارات الرقمية الأساسية. ستقوم من خلال تطوعك بمساعدتنا في سد الفجوة الرقمية وبناء جيل قادر على التعامل مع تكنولوجيا العصر.",
    tasks: [
      "شرح مبادئ نظام التشغيل Windows.",
      "تعليم استخدام برامج الكتابة (Word).",
      "تدريب الأطفال على البحث الآمن في الإنترنت.",
      "تنظيم ورشة عمل صغيرة لنهاية الدورة.",
    ],
    skills: [
      "معرفة جيدة بالحاسوب",
      "الصبر والقدرة على التعامل مع الأطفال",
      "مهارات التواصل",
    ],
    hours: 20,
    location: "القاهرة - حي الأسمرات",
    startDate: "01 مارس 2026",
    endDate: "15 مارس 2026",
    totalVolunteers: 10,
    remainingSpots: 3,
  };

  // 1. وظيفة التقديم باستخدام SweetAlert2
  const handleApplyClick = () => {
    Swal.fire({
      title: "تأكيد التقديم",
      text: `هل أنت متأكد من رغبتك في الانضمام إلى "${opportunity.title}"؟`,
      icon: "question",
      showCancelButton: true,
      confirmButtonColor: "#7c3aed",
      cancelButtonColor: "#94a3b8",
      confirmButtonText: "تأكيد التقديم",
      cancelButtonText: "إلغاء",
      reverseButtons: true,
    }).then((result) => {
      if (result.isConfirmed) {
        // هنا يتم استدعاء الـ API مستقبلاً
        setIsApplied(true);
        
        Swal.fire({
          title: "تم بنجاح! 🎉",
          text: "لقد تم إرسال طلبك للمؤسسة بنجاح. تابع قائمة مهامك لمعرفة التحديثات.",
          icon: "success",
          confirmButtonColor: "#7c3aed",
          confirmButtonText: "حسناً",
        });
      }
    });
  };

  // 2. وظيفة مشاركة الرابط
  const handleShare = () => {
    const pageUrl = window.location.href;
    navigator.clipboard.writeText(pageUrl);
    setCopied(true);
    
    // إظهار تنبيه Toast صغير عند النسخ
    const Toast = Swal.mixin({
      toast: true,
      position: 'top-end',
      showConfirmButton: false,
      timer: 2000,
      timerProgressBar: true,
      didOpen: (toast) => {
        toast.addEventListener('mouseenter', Swal.stopTimer)
        toast.addEventListener('mouseleave', Swal.resumeTimer)
      }
    });

    Toast.fire({
      icon: 'success',
      title: 'تم نسخ رابط المهمة بنجاح'
    });

    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="details-container">
      {/* Back Button */}
      <Link href={`/${locale}/dashboard/volunteer/opportunities`} className="back-link">
        <FontAwesomeIcon icon={faArrowRight} /> العودة للفرص
      </Link>

      <div className="details-grid">
        {/* Main Content (Left) */}
        <div className="details-main">
          <div className="header-section">
            <h1>{opportunity.title}</h1>
            <p className="org-name-detail">{opportunity.org}</p>
          </div>

          <section className="info-section">
            <h3>
              <FontAwesomeIcon icon={faLightbulb} className="section-icon" /> عن الفرصة
            </h3>
            <p>{opportunity.fullDescription}</p>
          </section>

          <section className="info-section">
            <h3>
              <FontAwesomeIcon icon={faTasks} className="section-icon" /> المهام المطلوبة
            </h3>
            <ul className="tasks-list">
              {opportunity.tasks.map((task, index) => (
                <li key={index}>
                  <FontAwesomeIcon icon={faCheckCircle} /> {task}
                </li>
              ))}
            </ul>
          </section>

          <section className="info-section">
            <h3>المتطلبات والمهارات</h3>
            <div className="skills-tags">
              {opportunity.skills.map((skill, index) => (
                <span key={index} className="skill-tag">
                  {skill}
                </span>
              ))}
            </div>
          </section>
        </div>

        {/* Sidebar Info Card (Right) */}
        <div className="details-sidebar">
          <div className="sticky-card">
            <div className="sidebar-stat">
              <span className="stat-label">
                <FontAwesomeIcon icon={faMapMarkerAlt} /> الموقع
              </span>
              <span className="stat-value">{opportunity.location}</span>
            </div>
            
            <div className="sidebar-stat">
              <span className="stat-label">
                <FontAwesomeIcon icon={faClock} /> عدد الساعات
              </span>
              <span className="stat-value">{opportunity.hours} ساعة</span>
            </div>

            <div className="sidebar-stat">
              <span className="stat-label">
                <FontAwesomeIcon icon={faCalendarAlt} /> الفترة
              </span>
              <span className="stat-value">
                {opportunity.startDate} - {opportunity.endDate}
              </span>
            </div>

            <div className="sidebar-stat">
              <span className="stat-label">
                <FontAwesomeIcon icon={faUsers} /> المقاعد المتبقية
              </span>
              <span className="stat-value highlight">
                {opportunity.remainingSpots} من {opportunity.totalVolunteers}
              </span>
            </div>

            <div className="action-buttons">
              <button 
                className={isApplied ? "btn-applied-success" : "btn-primary-apply"}
                onClick={handleApplyClick}
                disabled={isApplied}
              >
                {isApplied ? "تم التقديم بنجاح" : "التقديم على المهمة"}
              </button>

              <button
                className={`btn-secondary-share ${copied ? "copied" : ""}`}
                onClick={handleShare}
              >
                <FontAwesomeIcon icon={faShareAlt} />
                {" "} {copied ? "تم النسخ!" : "مشاركة المهمة"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}