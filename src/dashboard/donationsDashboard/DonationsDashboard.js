"use client";
import { useState, useMemo } from "react";
import "./donationsDashboard.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHandHoldingHeart,
  faHistory,
  faArrowUpRightDots,
  faSearch,
  faSliders,
} from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import { useLocale } from "next-intl";
import Select from "react-select";

const DONATIONS_DATA = [
  {
    id: 1,
    entity: "جمعية البر",
    type: "مالي",
    amount: "500 ر.س",
    date: "20 أكتوبر 2023",
    status: "مكتمل",
  },
  {
    id: 2,
    entity: "إطعام",
    type: "عيني",
    amount: "2 صندوق",
    date: "15 أكتوبر 2023",
    status: "جاري",
  },
  {
    id: 3,
    entity: "تكافل",
    type: "مالي",
    amount: "200 ر.س",
    date: "01 أكتوبر 2023",
    status: "مكتمل",
  },
];

export default function DonationsDashboard() {
  const locale = useLocale();
  const [search, setSearch] = useState("");

  const typeOptionsByLocale = useMemo(
    () => [
      { value: "all", label: locale === "en" ? "All Types" : "كل الأنواع" },
      { value: "مالي", label: locale === "en" ? "Financial" : "مالي" },
      { value: "عيني", label: locale === "en" ? "In-kind" : "عيني" },
    ],
    [locale],
  );

  const uniqueDates = useMemo(
    () => [...new Set(DONATIONS_DATA.map((item) => item.date))],
    [],
  );

  const dateOptionsByLocale = useMemo(
    () => [
      { value: "all", label: locale === "en" ? "All Dates" : "كل التواريخ" },
      ...uniqueDates.map((date) => ({ value: date, label: date })),
    ],
    [locale, uniqueDates],
  );

  const [selectedType, setSelectedType] = useState(typeOptionsByLocale[0]);
  const [selectedDate, setSelectedDate] = useState(dateOptionsByLocale[0]);

  const filteredDonations = useMemo(() => {
    return DONATIONS_DATA.filter((item) => {
      const matchesSearch = item.entity
        .toLowerCase()
        .includes(search.toLowerCase());
      const matchesType =
        !selectedType ||
        selectedType.value === "all" ||
        item.type === selectedType.value;
      const matchesDate =
        !selectedDate ||
        selectedDate.value === "all" ||
        item.date === selectedDate.value;
      return matchesSearch && matchesType && matchesDate;
    });
  }, [search, selectedType, selectedDate]);

  const stats = [
    {
      title: "إجمالي التبرعات",
      value: "15,450 ج.م",
      note: "+12% عن الشهر الماضي",
      icon: faHandHoldingHeart,
      color: "#7c3aed",
    },
    {
      title: "عدد العمليات",
      value: "24 عملية",
      note: "آخر تبرع منذ يومين",
      icon: faHistory,
      color: "#10b981",
    },
    {
      title: "أكبر تبرع",
      value: "5,000 ج.م",
      note: "لجمعية رعاية الأيتام",
      icon: faArrowUpRightDots,
      color: "#0ea5e9",
    },
  ];

  return (
    <div className="donations-dashboard">
      <header className="page-header">
        <div className="header-text">
          <h1>{locale === "en" ? "Donations Record" : "سجل التبرعات"}</h1>
          <p>
            {locale === "en"
              ? "View and manage all your past donations"
              : "عرض وإدارة جميع تبرعاتك السابقة وتقاريرك المالية"}
          </p>
        </div>
      </header>

      <section className="stats-grid">
        {stats.map((stat, index) => (
          <div
            className="stat-card"
            key={index}
            style={{ "--card-clr": stat.color }}
          >
            <div className="stat-icon">
              <FontAwesomeIcon icon={stat.icon} />
            </div>
            <div className="stat-info">
              <h4>{stat.title}</h4>
              <h2>{stat.value}</h2>
              <p>{stat.note}</p>
            </div>
          </div>
        ))}
      </section>

      <section className="filters-section">
        <div className="filters-grid">
          <div className="search">
            <FontAwesomeIcon icon={faSearch} className="icon1" />
            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              type="text"
              className="search-input"
              placeholder={
                locale === "en" ? "Search for an entity" : "ابحث عن جهة التبرع"
              }
            />
            <FontAwesomeIcon icon={faSliders} className="icon2" />
          </div>

          <div className="filters">
            <Select
              instanceId="type-select"
              value={selectedType}
              onChange={setSelectedType}
              options={typeOptionsByLocale}
              isRtl={locale === "ar"}
              className="my-select-container"
              classNamePrefix="my-select"
            />
            <Select
              instanceId="date-select"
              value={selectedDate}
              onChange={setSelectedDate}
              options={dateOptionsByLocale}
              isRtl={locale === "ar"}
              className="my-select-container"
              classNamePrefix="my-select"
            />
          </div>
        </div>
      </section>

      <div className="content-grid">
        <div className="card table-card">
          <div className="table-wrapper">
            <table className="custom-table">
              <thead>
                <tr>
                  <th>{locale === "en" ? "Entity" : "الجهة"}</th>
                  <th>{locale === "en" ? "Type" : "النوع"}</th>
                  <th>{locale === "en" ? "Amount" : "المبلغ"}</th>
                  <th>{locale === "en" ? "Date" : "التاريخ"}</th>
                  <th>{locale === "en" ? "Status" : "الحالة"}</th>
                  <th>{locale === "en" ? "Details" : "عرض التفاصيل"}</th>
                </tr>
              </thead>
              <tbody>
                {DONATIONS_DATA.length === 0 ? (
                  <tr>
                    <td colSpan="6" className="no-data">
                      <div className="empty-state">
                        <p>
                          {locale === "en"
                            ? "No donations yet"
                            : "ليس لديك أي تبرعات حالياً"}
                        </p>
                        <Link href="/donate" className="btn-primary">
                          تبرع الآن
                        </Link>
                      </div>
                    </td>
                  </tr>
                ) : filteredDonations.length === 0 ? (
                  <tr>
                    <td colSpan="6" className="no-results">
                      <div className="empty-state">
                        <p>
                          {locale === "en"
                            ? "No matches found"
                            : "لا توجد نتائج تطابق بحثك"}
                        </p>
                        <button
                          onClick={() => {
                            setSearch("");
                            setSelectedType(typeOptionsByLocale[0]);
                            setSelectedDate(dateOptionsByLocale[0]);
                          }}
                          className="reset-btn"
                        >
                          {locale === "en"
                            ? "Clear Filters"
                            : "إعادة ضبط الفلاتر"}
                        </button>
                      </div>
                    </td>
                  </tr>
                ) : (
                  filteredDonations.map((item) => (
                    <tr key={item.id}>
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
                          href={`/${locale}/dashboard/user/donations/${item.id}`}
                          className="details-link"
                        >
                          {locale === "en" ? "View Details" : "عرض التفاصيل"}
                        </Link>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
