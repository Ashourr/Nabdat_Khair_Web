"use client";
import React, { useEffect, useMemo, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowLeft,
  faArrowRight,
  faCheck,
  faChevronDown,
  faChevronUp,
  faSearch,
  faSliders,
} from "@fortawesome/free-solid-svg-icons";
import { useLocale, useTranslations } from "next-intl";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import HeaderPage from "@/components/headerPage/HeaderPage";
import "./foundation_page.css"
export default function Foundation_page() {
  const locale = useLocale();
  const t = useTranslations("Organizations");

  const [foundation] = useState([
    {
      id: 1,
      image: "/images/0.png",
      title_ar: "مؤسسة الأمل الخيرية 1",
      title_en: "Al-Amal Charity Foundation",
      description_ar:
        "تعمل على دعم الأسر الأكثر احتياجاً من خلال برامج غذائية وطبية شهرية.",
      description_en:
        "It works to support the most needy families through monthly food and medical programs.",
    },
    {
      id: 2,
      image: "/images/6.png",
      title_ar: "مؤسسة الرحمة 2",
      title_en: "Al-Rahma Foundation",
      description_ar: "مبادرات إنسانية مستدامة لدعم الفئات الضعيفة.",
      description_en:
        "Sustainable humanitarian initiatives to support vulnerable groups.",
    },
    {
      id: 3,
      image: "/images/7.png",
      title_ar: "مؤسسة النور 3",
      title_en: "Al-Noor Foundation",
      description_ar: "مشاريع تعليمية وصحية لخدمة المجتمع.",
      description_en: "Educational and health projects to serve the community.",
    },
    {
      id: 4,
      image: "/images/56.png",
      title_ar: "مؤسسة النور 4",
      title_en: "Al-Noor Foundation",
      description_ar: "مشاريع تعليمية وصحية لخدمة المجتمع.",
      description_en: "Educational and health projects to serve the community.",
    },
    {
      id: 5,
      image: "/images/8.png",
      title_ar: "مؤسسة النور 5",
      title_en: "Al-Noor Foundation",
      description_ar: "مشاريع تعليمية وصحية لخدمة المجتمع.",
      description_en: "Educational and health projects to serve the community.",
    },
    {
      id: 6,
      image: "/images/8.png",
      title_ar: "مؤسسة النور 6",
      title_en: "Al-Noor Foundation",
      description_ar: "مشاريع تعليمية وصحية لخدمة المجتمع.",
      description_en: "Educational and health projects to serve the community.",
    },
  ]);

  const [search, setSearch] = useState("");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const options = useMemo(
    () => [
      { en: "Newest", ar: "الأحدث" },
      { en: "Oldest", ar: "الأقدم" },
    ],
    [],
  );

  const localizedOptions = useMemo(
    () => options.map((o) => o[locale]),
    [locale, options],
  );

  const [selectedOption, setSelectedOption] = useState(localizedOptions[0]);

  // load saved sort
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

  // 🔍 Search filter
  const filteredServices = useMemo(() => {
    if (!search) return foundation;
    const s = search.toLowerCase();

    return foundation.filter((item) => {
      return (
        item.title_en.toLowerCase().includes(s) ||
        item.title_ar.includes(search)
      );
    });
  }, [search, foundation]);

  // ⬇️ Sorting
  const sortedData = useMemo(() => {
    const data = [...filteredServices];
    if (selectedOption === (locale === "en" ? "Newest" : "الأحدث")) {
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

      <div className="foundation-page">
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
            <div className="page-top">
              {/* 🔍 Search */}
              <div className="search">
                <FontAwesomeIcon icon={faSearch} className="icon1" />
                <input
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  type="text"
                  placeholder={
                    locale === "en"
                      ? "Search for Foundation"
                      : "ابحث عن المؤسسة"
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

            {/* Cards */}
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
              sortedData.map((item) => (
                <div className="col-12 col-md-6 col-lg-4" key={item.id}>
                  <div className="organization-box">
                    <div className="box-content">
                      <Image
                        src={item.image}
                        width={120}
                        height={120}
                        alt="Organization Logo"
                      />
                      <h3>{locale === "en" ? item.title_en : item.title_ar}</h3>
                      <p>
                        {locale === "en"
                          ? item.description_en
                          : item.description_ar}
                      </p>
                      <h6>
                        {t("cases")} : <span>+125</span>
                      </h6>
                      <Link href={`/${locale}/foundation/${item.id}`}>
                        {t("View Details")}
                      </Link>
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
