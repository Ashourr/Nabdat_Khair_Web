"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBuildingColumns,
  faHandHoldingDollar,
  faMoneyBills,
  faPeopleGroup,
  faStar,
  faMedal,
  faCrown,
  faAward,
  faHeart,
} from "@fortawesome/free-solid-svg-icons";
import "./homeDashboard.css";
import { useLocale } from "next-intl";
import Link from "next/link";
import { useEffect, useState, useMemo } from "react";

export default function HomeDashboard() {
  const locale = useLocale();

  const donationCount = 12;
  const totalPoints = donationCount * 10;

  const levels = [
    { name: "متبرع برونزي", minPoints: 0, icon: faMedal, color: "#cd7f32" },
    { name: "متبرع فضي", minPoints: 50, icon: faAward, color: "#94a3b8" },
    { name: "متبرع ذهبي", minPoints: 100, icon: faCrown, color: "#f59e0b" },
    { name: "سفير الخير", minPoints: 200, icon: faHeart, color: "#7c3aed" },
  ];

  const currentLevel = levels.filter((l) => totalPoints >= l.minPoints).pop();

  const stats = [
    { title: "عدد التبرعات", value: 12, icon: faHandHoldingDollar },
    { title: "إجمالي التبرعات", value: "4,500 ج.م", icon: faMoneyBills },
    { title: "الحالات المدعومة", value: 8, icon: faPeopleGroup },
    { title: "الجمعيات", value: 4, icon: faBuildingColumns },
  ];

  const donations = [
    {
      entity: "جمعية البر",
      type: "مالي",
      amount: "500 ر.س",
      date: "20 أكتوبر 2023",
      status: "مكتمل",
    },
    {
      entity: "إطعام",
      type: "عيني",
      amount: "2 صندوق",
      date: "15 أكتوبر 2023",
      status: "جاري",
    },
    {
      entity: "تكافل",
      type: "مالي",
      amount: "200 ر.س",
      date: "01 أكتوبر 2023",
      status: "مكتمل",
    },
  ];

  const chartData = useMemo(
    () => [
      { label: "مشاريع تعليمية", value: 50, color: "#7c3aed" },
      { label: "إغاثة عاجلة", value: 25, color: "#3b82f6" },
      { label: "أخرى", value: 25, color: "rgb(0 0 0)" },
    ],
    [],
  );

  const [animatedData, setAnimatedData] = useState(
    chartData.map((item) => ({ ...item, value: 0 })),
  );

  useEffect(() => {
    let animationFrame;
    const duration = 2000;
    const startTime = performance.now();
    function animate(time) {
      const progress = Math.min((time - startTime) / duration, 1);
      const newData = chartData.map((item) => ({
        ...item,
        value: Math.floor(item.value * progress),
      }));
      setAnimatedData(newData);
      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    }
    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, [chartData]);

  let cumulative = 0;
  const gradient = animatedData
    .map((item) => {
      const start = cumulative;
      cumulative += item.value;
      return `${item.color} ${start}% ${cumulative}%`;
    })
    .join(", ");

  const total = animatedData.reduce((acc, item) => acc + item.value, 0);

  return (
    <div className="home-dashboard">
      <div className="title">
        <h2>
          {locale === "en" ? "Welcome " : "مرحبا "}
          <span>Ahmed</span> 👋
        </h2>
        <p>
          {locale === "en"
            ? "Thank you for your contribution to changing the lives of others. Here is a summary of your giving."
            : "شكرًا لمساهمتك في تغيير حياة الآخرين، إليك ملخص عطائك."}
        </p>
      </div>

      <div className="stats-grid">
        {stats.map((item, index) => (
          <div className="stat-card" key={index}>
            <div>
              <FontAwesomeIcon icon={item.icon} className="i" />
            </div>
            <p>{item.title}</p>
            <h2>{item.value}</h2>
          </div>
        ))}
      </div>

      <div className="content-grid">
        <div className="card table-card">
          <div className="title">
            <h3>آخر التبرعات</h3>
            <div>
              <Link
                href={`/${locale}/dashboard/user/donations`}
                className="view-all"
              >
                {locale === "en" ? "View All" : "عرض الكل"}
              </Link>
            </div>
          </div>

          <div className="table-wrapper">
            <table className="custom-table">
              <thead>
                <tr>
                  <th>الجهة</th>
                  <th>النوع</th>
                  <th>المبلغ</th>
                  <th>التاريخ</th>
                  <th>الحالة</th>
                  <th>عرض التفاصيل</th>
                </tr>
              </thead>
              <tbody>
                {donations.map((item, index) => (
                  <tr key={index}>
                    <td>{item.entity}</td>
                    <td>
                      <span
                        className={
                          item.type === "مالي"
                            ? "status success"
                            : "status pending"
                        }
                      >
                        {item.type}
                      </span>
                    </td>
                    <td>{item.amount}</td>
                    <td>{item.date}</td>
                    <td>
                      <span
                        className={
                          item.status === "مكتمل"
                            ? "status success"
                            : "status pending"
                        }
                      >
                        {item.status}
                      </span>
                    </td>
                    <td>
                      <Link
                        href={`/${locale}/dashboard/user/donations/${index}`}
                        className="details-link"
                      >
                        {locale === "en" ? "View Details" : "عرض التفاصيل"}
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="card">
          <h3>توزيع التبرعات</h3>
          <div
            className="donut-chart"
            style={{ background: `conic-gradient(${gradient})` }}
          >
            <div className="donut-center">
              <h2>{total}%</h2>
              <span>إجمالي الأثر</span>
            </div>
          </div>

          <div className="chart-info">
            {animatedData.map((item, index) => (
              <div className="chart-info-flex" key={index}>
                <h5>
                  <span
                    className="dot"
                    style={{ background: item.color }}
                  ></span>
                  {item.label}
                </h5>
                <h6 style={{ color: item.color, margin: "0px" }}>
                  {item.value}%
                </h6>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="card points-sidebar-card">
        <div className="points-header">
          <FontAwesomeIcon icon={faStar} className="star-icon-anim" />
          <div>
            <h4>رصيد نقاطك</h4>
            <p>كل تبرع بـ 10 نقاط</p>
          </div>
        </div>

        <div className="points-display">
          <h2>
            {totalPoints} <span>نقطة</span>
          </h2>
          <div
            className="current-level-badge"
            style={{ background: currentLevel?.color }}
          >
            <FontAwesomeIcon icon={currentLevel?.icon} /> {currentLevel?.name}
          </div>
        </div>

        <div className="mini-levels-list">
          {levels.map((lvl, i) => (
            <div
              key={i}
              className={`mini-lvl ${totalPoints >= lvl.minPoints ? "achieved" : ""}`}
            >
              <FontAwesomeIcon icon={lvl.icon} style={{ color: lvl.color }} />
              <span>{lvl.minPoints}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
