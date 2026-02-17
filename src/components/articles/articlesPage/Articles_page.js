"use client";
import {
  faArrowLeft,
  faArrowRight,
  faCheck,
  faChevronDown,
  faChevronUp,
  faEye,
  faSearch,
  faSliders,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useLocale, useTranslations } from "next-intl";
import Link from "next/link";
import React, { useEffect, useMemo, useState } from "react";
import "./atliclesPage.css";
import { useRouter } from "next/navigation";
import HeaderPage from "@/components/headerPage/HeaderPage";

export default function Articles_page() {
  const t = useTranslations("Articles");
  const locale = useLocale();

  const [articles, setArticles] = useState([
    {
      id: 1,
      title_ar: "كيف تصنع تبرعاتك فرقًا حقيقيًا؟",
      title_en: "How to make your donations a real force?",
      type_ar: "خبار",
      type_en: "News",
      description_ar:
        " من اختيار الحالة إلى وصول الدعم، تعرف على أثر مساهمتك خطوة بخطوة",
      description_en:
        " By choosing the situation to go to and receiving support, you understand the impact of your situation",
      date: "24/10/2023",
    },
    {
      id: 2,
      title_ar: "كيف تصنع تبرعاتك فرقًا حقيقيًا؟",
      title_en: "How to make your donations a real force?",
      type_ar: "مقال",
      type_en: "Article",
      description_ar:
        " من اختيار الحالة إلى وصول الدعم، تعرف على أثر مساهمتك خطوة بخطوة",
      description_en:
        " By choosing the situation to go to and receiving support, you understand the impact of your situation",
      date: "25/10/2023",
    },
    {
      id: 3,
      title_ar: "كيف تصنع تبرعاتك فرقًا حقيقيًا؟",
      title_en: "How to make your donations a real force?",
      type_ar: "مقال",
      type_en: "Article",
      description_ar:
        " من اختيار الحالة إلى وصول الدعم، تعرف على أثر مساهمتك خطوة بخطوة",
      description_en:
        " By choosing the situation to go to and receiving support, you understand the impact of your situation",
      date: "26/10/2023",
    },
    {
      id: 4,
      title_ar: "كيف تصنع تبرعاتك فرقًا حقيقيًا؟",
      title_en: "How to make your donations a real force?",
      type_ar: "مقال",
      type_en: "Article",
      description_ar:
        " من اختيار الحالة إلى وصول الدعم، تعرف على أثر مساهمتك خطوة بخطوة",
      description_en:
        " By choosing the situation to go to and receiving support, you understand the impact of your situation",
      date: "27/10/2023",
    },
    {
      id: 5,
      title_ar: "كيف تصنع تبرعاتك فرقًا حقيقيًا؟",
      title_en: "How to make your donations a real force?",
      type_ar: "مقال",
      type_en: "Article",
      description_ar:
        " من اختيار الحالة إلى وصول الدعم، تعرف على أثر مساهمتك خطوة بخطوة",
      description_en:
        " By choosing the situation to go to and receiving support, you understand the impact of your situation",
      date: "28/10/2023",
    },
    {
      id: 6,
      title_ar: "كيف تصنع تبرعاتك فرقًا حقيقيًا؟",
      title_en: "How to make your donations a real force?",
      type_ar: "مقال",
      type_en: "Article",
      description_ar:
        " من اختيار الحالة إلى وصول الدعم، تعرف على أثر مساهمتك خطوة بخطوة",
      description_en:
        " By choosing the situation to go to and receiving support, you understand the impact of your situation",
      date: "30/10/2023",
    },
  ]);

  const [search, setSearch] = useState("");
  const [selectedType, setSelectedType] = useState(
    locale === "en" ? "All" : "الكل",
  );
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  // 2. نقلنا الخيارات لـ useMemo
  const options = useMemo(
    () => [
      { en: "Newest", ar: "الأحدث" },
      { en: "Oldest", ar: "الأقدم" },
    ],
    [],
  );

  const localizedOptions = useMemo(
    () => options.map((o) => o[locale]),
    [locale, options], // أضفنا options هنا للإصلاح
  );

  const [selectedOption, setSelectedOption] = useState(localizedOptions[0]);

  useEffect(() => {
    const saved = localStorage.getItem("selectedSortOption");
    if (saved && localizedOptions.includes(saved)) {
      setSelectedOption(saved);
    }
  }, [localizedOptions]);

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setIsDropdownOpen(false);
    localStorage.setItem("selectedSortOption", option);
  };

  // 🔍 الفلترة
  const filteredServices = useMemo(() => {
    let data = [...articles];

    if (search) {
      const s = search.toLowerCase();
      data = data.filter(
        (item) =>
          item.title_en.toLowerCase().includes(s) ||
          item.title_ar.includes(search),
      );
    }

    const allLabel = locale === "en" ? "All" : "الكل";
    if (selectedType !== allLabel) {
      data = data.filter((item) =>
        locale === "en"
          ? item.type_en === selectedType
          : item.type_ar === selectedType,
      );
    }

    return data;
  }, [search, selectedType, locale, articles]);

  // أنواع الخدمات الديناميكية
  const dynamicServiceTypes = useMemo(() => {
    const types = [{ en: "All", ar: "الكل" }];

    articles.forEach((item) => {
      if (!types.some((t) => t.ar === item.type_ar)) {
        types.push({ en: item.type_en, ar: item.type_ar });
      }
    });

    return types;
  }, [articles]);

  const sortedData = useMemo(() => {
    const data = [...filteredServices];

    const newestLabel = locale === "en" ? "Newest" : "الأحدث";

    if (selectedOption === newestLabel) {
      return data.sort((a, b) => b.id - a.id);
    } else {
      return data.sort((a, b) => a.id - b.id);
    }
  }, [filteredServices, selectedOption, locale]);

  const router = useRouter();
  return (
    <>
      <HeaderPage
        bgImg="/images/b1.jpeg"
        title={t("title-page")}
        link={t("link-page")}
        suptitle={t("suptitle-page")}
      />

      <div className="art-page">
        <div className="container">
          <div className="row">
            {/* Top Bar */}
            <button onClick={() => router.back()} className="back-btn">
              <FontAwesomeIcon
                icon={locale === "en" ? faArrowLeft : faArrowRight}
                className={`back ${locale}`}
              />
              {locale === "en" ? "Back" : "رجوع"}
            </button>
            {/* 🎯 Filter by Type */}
            <div className="type-filters">
              {dynamicServiceTypes.map((type) => {
                const label = locale === "en" ? type.en : type.ar;
                return (
                  <button
                    key={label}
                    onClick={() => setSelectedType(label)}
                    className={`type-btn ${selectedType === label ? "active" : ""}`}
                  >
                    {label}
                  </button>
                );
              })}
            </div>

            <div className="page-top">
              {/* 🔍 Search */}
              <div className="search">
                <FontAwesomeIcon icon={faSearch} className="icon1" />
                <input
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  type="text"
                  placeholder={
                    locale === "en" ? "Search for a service" : "ابحث عن خدمه"
                  }
                />
                <FontAwesomeIcon icon={faSliders} className="icon2" />
              </div>

              {/* ⬇️ Sorting */}
              <div className="sorting-dropdown">
                <button
                  className="selected-option"
                  onClick={() => setIsDropdownOpen((p) => !p)}
                >
                  <span className="dropdown-arrow">
                    <FontAwesomeIcon icon={faChevronUp} />
                    <FontAwesomeIcon icon={faChevronDown} />
                  </span>
                  {selectedOption}
                </button>

                {isDropdownOpen && (
                  <ul className="options-list">
                    {localizedOptions.map((option) => (
                      <li
                        key={option}
                        className={`option-item ${
                          selectedOption === option ? "active" : ""
                        }`}
                        onClick={() => handleOptionClick(option)}
                      >
                        {option}
                        {selectedOption === option && (
                          <span className="checkmark">
                            <FontAwesomeIcon icon={faCheck} />
                          </span>
                        )}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>

            {sortedData.length === 0 ? (
              <div
                style={{
                  textAlign: "center",
                  width: "100%",
                  marginTop: "50px",
                }}
              >
                {locale === "en" ? "No results found" : "لا توجد نتائج"}
              </div>
            ) : (
              sortedData.map((article, index) => (
                <div className="col-12 col-md-6 col-lg-4" key={article.id}>
                  <div className={`articles-box`}>
                    <FontAwesomeIcon icon={faEye} className="icon-aye" />
                    <div className={`spans ${locale}`}>
                      <span>
                        {locale === "en" ? article.type_en : article.type_ar}
                        {article.id}
                      </span>
                      <span>{article.date}</span>
                    </div>
                    <div className="content">
                      <h5>
                        {locale === "en" ? article.title_en : article.title_ar}
                      </h5>
                      <p>
                        {locale === "en"
                          ? article.description_en
                          : article.description_ar}
                      </p>
                      <div>
                        <Link href={`/${locale}/articles/article${article.id}`}>
                          <FontAwesomeIcon
                            icon={faArrowLeft}
                            className={`i ${locale}`}
                          />
                          {t("btn-itme")}
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </>
  );
}
