"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCheckDouble,
  faClock,
  faHandshakeAngle,
  faStar,
  faBriefcase,
  faTrophy,
} from "@fortawesome/free-solid-svg-icons";
import "./homeVolunteer.css";
import { useLocale } from "next-intl";
import Link from "next/link";
import { useEffect, useState, useMemo } from "react";

export default function HomeVolunteer() {
  const locale = useLocale();

  // ✅ 1. إحصائيات ثابتة (لا تحتاج تغيير)
  const stats = [
    { title: "مهام مكتملة", value: 24, icon: faCheckDouble, color: "purple" },
    { title: "ساعات تطوعية", value: "120 ساعة", icon: faClock, color: "blue" },
    { title: "مؤسسات", value: 6, icon: faHandshakeAngle, color: "green" },
    { title: "التقييم العام", value: "4.9/5", icon: faStar, color: "orange" },
  ];

  const opportunities = [
    { id: 1, title: "قافلة إطعام - حي الأسمرات", org: "بنك الطعام المصري", loc: "القاهرة" },
    { id: 2, title: "تصميم جرافيك للمنصة", org: "مؤسسة نبضة خير", loc: "عن بعد" },
  ];

  const notifications = [
    { id: 1, msg: "تم قبول طلب انضمامك لمهمة 'تعليم طفل'", time: "منذ ساعتين" },
    { id: 2, msg: "تذكير: مهمة تنظيف الشاطئ تبدأ غداً", time: "منذ 5 ساعات" },
  ];

  const tasks = [
    { org: "جمعية رسالة", taskName: "قافلة طبية - الجيزة", date: "25 فبراير", status: "مؤكد" },
    { org: "مؤسسة مجدي يعقوب", taskName: "دعم لوجستي", date: "01 مارس", status: "جاري" },
  ];

  // ✅ 2. استخدام useMemo لتثبيت بيانات الرسم البياني (حل مشكلة التحذير)
  const chartData = useMemo(() => [
    { label: "مساعدات طبية", value: 40, color: "#7c3aed" },
    { label: "تعليم وتدريب", value: 35, color: "#0ea5e9" },
    { label: "إطعام وتنظيم", value: 25, color: "#10b981" },
  ], []);

  const [animatedData, setAnimatedData] = useState(
    chartData.map((i) => ({ ...i, value: 0 }))
  );

  // ✅ 3. إضافة chartData لمصفوفة التبعيات بأمان
  useEffect(() => {
    let animationFrame;
    const duration = 2000;
    const startTime = performance.now();

    function animate(time) {
      const progress = Math.min((time - startTime) / duration, 1);
      
      setAnimatedData(
        chartData.map((item) => ({
          ...item,
          value: Math.floor(item.value * progress),
        }))
      );

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    }

    animationFrame = requestAnimationFrame(animate);

    // تنظيف الأنيميشن عند مغادرة الصفحة
    return () => cancelAnimationFrame(animationFrame);
  }, [chartData]); // الآن التحذير سيختفي ولن يحدث infinite loop

  // حساب التدرج اللوني للدائرة
  let cumulative = 0;
  const gradient = animatedData
    .map((item) => {
      const start = cumulative;
      cumulative += item.value;
      return `${item.color} ${start}% ${cumulative}%`;
    })
    .join(", ");

  return (
    <div className="volunteer-dashboard">
      <div className="title">
        <h2>
          {locale === "en" ? "Welcome Back, " : "أهلاً بك مجدداً، "}{" "}
          <span>أحمد</span> 👋
        </h2>
        <p>إليك نظرة سريعة على نشاطك التطوعي وأحدث الفرص المتاحة لخدمة المجتمع.</p>
      </div>

      {/* 📊 الإحصائيات العلوية */}
      <div className="stats-grid">
        {stats.map((item, index) => (
          <div className="stat-card" key={index}>
            <div className={`icon-wrapper ${item.color}`}>
              <FontAwesomeIcon icon={item.icon} />
            </div>
            <p>{item.title}</p>
            <h2>{item.value}</h2>
          </div>
        ))}
      </div>

      <div className="content-grid">
        {/* 🚀 العمود الرئيسي */}
        <div className="main-col">
          <div className="card">
            <div className="card-header">
              <h3>🆕 أحدث فرص التطوع</h3>
              <Link href={`/${locale}/dashboard/volunteer/opportunities`} className="view-all">
                استكشاف المزيد
              </Link>
            </div>
            <div className="opp-list">
              {opportunities.map((opp) => (
                <div className="opp-card" key={opp.id}>
                  <div className="opp-info">
                    <FontAwesomeIcon icon={faBriefcase} className="opp-icon" />
                    <div>
                      <h4>{opp.title}</h4>
                      <span>{opp.org} • {opp.loc}</span>
                    </div>
                  </div>
                  <Link href={`/${locale}/dashboard/volunteer/opportunities/${opp.id}`} className="btn-apply">
                    تقديم الآن
                  </Link>
                </div>
              ))}
            </div>
          </div>

          <div className="card">
            <div className="card-header">
              <h3>📅 مهامي التطوعية </h3>
              <Link href={`/${locale}/dashboard/volunteer/myTasks`} className="view-all">
                عرض الكل
              </Link>
            </div>
            <div className="table-wrapper">
              <table className="custom-table">
                <thead>
                  <tr>
                    <th>المؤسسة</th>
                    <th>المهمة</th>
                    <th>التاريخ</th>
                    <th>الحالة</th>
                    <th>التفاصيل</th>
                  </tr>
                </thead>
                <tbody>
                  {tasks.map((task, index) => (
                    <tr key={index}>
                      <td>{task.org}</td>
                      <td className="task-name">{task.taskName}</td>
                      <td>{task.date}</td>
                      <td>
                        <span className={`status-badge ${task.status === "مؤكد" ? "success" : "pending"}`}>
                          {task.status}
                        </span>
                      </td>
                      <td>
                        <Link href={`/${locale}/dashboard/volunteer/myTasks/${task.taskName}`}>
                          التفاصيل
                        </Link>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* 🏆 العمود الجانبي */}
        <div className="side-col">
          <div className="card level-card">
            <div className="level-header">
              <div className="points-badge">
                <FontAwesomeIcon icon={faTrophy} className="trophy-icon" />
                <div className="points-info">
                  <span>🏆 نقاطك</span>
                  <h3>480 نقطة</h3>
                </div>
              </div>
              <div className="rank-tag">نشط 💪</div>
            </div>
            <div className="progress-container">
              <div className="progress-labels">
                <span>متميز ⭐</span>
                <span>باقي 20 ساعة</span>
              </div>
              <div className="p-bar-bg">
                <div className="p-bar-fill" style={{ width: "65%" }}></div>
              </div>
            </div>
          </div>

          <div className="card chart-card">
            <div className="card-header">
              <h3>📊 توزيع الساعات</h3>
            </div>
            <div className="donut-wrapper">
              <div
                className="main-donut"
                style={{ background: `conic-gradient(${gradient})` }}
              >
                <div className="donut-hole">
                  <div className="hole-content">
                    <span className="total-num">120</span>
                    <span className="total-text">ساعة</span>
                  </div>
                </div>
              </div>
              <div className="chart-labels-grid">
                {animatedData.map((item, index) => (
                  <div className="label-row" key={index}>
                    <div className="label-main">
                      <span className="color-dot" style={{ backgroundColor: item.color }}></span>
                      <span className="label-name">{item.label}</span>
                    </div>
                    <span className="label-perc">{item.value}%</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}