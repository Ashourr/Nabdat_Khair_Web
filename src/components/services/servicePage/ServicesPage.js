"use client";
import { useLocale, useTranslations } from "next-intl";
import React, { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import "./servicesPage.css";
import { useRouter } from "next/navigation";
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
import HeaderPage from "@/components/headerPage/HeaderPage";
export default function ServicesPage() {
  const locale = useLocale();
  const t = useTranslations("services");

  const [services, setServices] = useState([
    {
      id: 1,
      img: "/images/s65a68856b814ba2a3c37714c_01-12-p-1080.jpg",
      title_ar: "حملة دعم العمليات الجراحية 1",
      title_en: "Surgical Support Campaign",
      description_ar:
        "إحدى الحملات الأكثر شعبية للمساعدة للحالات الصحية الأمراض الجراحية",
      description_en:
        "One of the most populous help campaigns for medical illnesses",
      link: "/surgical-support-campaign",
      type_ar: "طعام",
      type_en: "Food",
    },
    {
      id: 2,
      img: "/images/s65a68856b814ba2a3c37714c_01-12-p-1080.jpg",
      title_ar: "حملة دعم العمليات الجراحية",
      title_en: "Surgical Support Campaign",
      description_ar:
        "إحدى الحملات الأكثر شعبية للمساعدة للحالات الصحية الأمراض الجراحية",
      description_en:
        "One of the most populous help campaigns for medical illnesses",
      link: "/surgical-support-campaign",
      type_ar: "طعام",
      type_en: "Food",
    },
    {
      id: 3,
      img: "/images/s65a68856b814ba2a3c37714c_01-12-p-1080.jpg",
      title_ar: "حملة دعم العمليات الجراحية",
      title_en: "Surgical Support Campaign",
      description_ar:
        "إحدى الحملات الأكثر شعبية للمساعدة للحالات الصحية الأمراض الجراحية",
      description_en:
        "One of the most populous help campaigns for medical illnesses",
      link: "/surgical-support-campaign",
      type_ar: "طعام",
      type_en: "Food",
    },
    {
      id: 4,
      img: "/images/s65a68856b814ba2a3c37714c_01-12-p-1080.jpg",
      title_ar: "حملة دعم العمليات الجراحية",
      title_en: "Surgical Support Campaign",
      description_ar:
        "إحدى الحملات الأكثر شعبية للمساعدة للحالات الصحية الأمراض الجراحية",
      description_en:
        "One of the most populous help campaigns for medical illnesses",
      link: "/surgical-support-campaign",
      type_ar: "صحة",
      type_en: "Food",
    },
    {
      id: 5,
      img: "/images/s65a68856b814ba2a3c37714c_01-12-p-1080.jpg",
      title_ar: "حملة دعم العمليات الجراحية",
      title_en: "Surgical Support Campaign",
      description_ar:
        "إحدى الحملات الأكثر شعبية للمساعدة للحالات الصحية الأمراض الجراحية",
      description_en:
        "One of the most populous help campaigns for medical illnesses",
      link: "/surgical-support-campaign",
      type_ar: "تعليم",
      type_en: "Food",
    },
    {
      id: 6,
      img: "/images/s65a68856b814ba2a3c37714c_01-12-p-1080.jpg",
      title_ar: "حملة دعم العمليات الجراحية",
      title_en: "Surgical Support Campaign",
      description_ar:
        "إحدى الحملات الأكثر شعبية للمساعدة للحالات الصحية الأمراض الجراحية",
      description_en:
        "One of the most populous help campaigns for medical illnesses",
      link: "/surgical-support-campaign",
      type_ar: "طب",
      type_en: "Food",
    },
  ]);

  const [search, setSearch] = useState("");
  const [selectedType, setSelectedType] = useState(
    locale === "en" ? "All" : "الكل",
  );
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
  const [isTypeDropdownOpen, setIsTypeDropdownOpen] = useState(false);

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
    let data = services;

    // 🔍 Search filter
    if (search) {
      const s = search.toLowerCase();
      data = data.filter((item) => {
        return (
          item.title_en.toLowerCase().includes(s) ||
          item.title_ar.includes(search)
        );
      });
    }

    // 🎯 Type filter
    if (selectedType !== (locale === "en" ? "All" : "الكل")) {
      data = data.filter((item) =>
        locale === "en"
          ? item.type_en === selectedType
          : item.type_ar === selectedType,
      );
    }

    return data;
  }, [search, services, selectedType, locale]);

  // ⬇️ Sorting
  const sortedData = useMemo(() => {
    const data = [...filteredServices];
    if (selectedOption === (locale === "en" ? "Newest" : "الأحدث")) {
      return data.sort((a, b) => b.id - a.id);
    } else {
      return data.sort((a, b) => a.id - b.id);
    }
  }, [filteredServices, selectedOption, locale]);

  const dynamicServiceTypes = useMemo(() => {
    const types = [{ en: "All", ar: "الكل" }];
    services.forEach((item) => {
      if (!types.some((t) => t.ar === item.type_ar)) {
        types.push({ en: item.type_en, ar: item.type_ar });
      }
    });

    return types;
  }, [services]);

  const router = useRouter();
  return (
    <div className="services-page">
      <HeaderPage
        bgImg="/images/b1.jpeg"
        title={t("title-page")}
        link={t("link-page")}
        suptitle={t("suptitle-page")}
      />
      <div className="mb-5 mt-5">
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
                    locale === "en" ? "Search for a service" : "ابحث عن خدمه"
                  }
                />
                <FontAwesomeIcon icon={faSliders} className="icon2" />
              </div>

              {/* ⬇️ Sorting */}
              <div className="list-dropdown">
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

                <div className="sorting-dropdown type-dropdown my-3">
                  <button
                    className="selected-option"
                    onClick={() => setIsTypeDropdownOpen((prev) => !prev)}
                  >
                    <span className="dropdown-arrow">
                      <FontAwesomeIcon
                        icon={isTypeDropdownOpen ? faChevronUp : faChevronDown}
                      />
                    </span>
                    {selectedType}
                  </button>

                  {isTypeDropdownOpen && (
                    <ul className="options-list">
                      {dynamicServiceTypes.map((type) => {
                        const label = locale === "en" ? type.en : type.ar;
                        return (
                          <li
                            key={label}
                            className={`option-item ${selectedType === label ? "active" : ""}`}
                            onClick={() => {
                              setSelectedType(label);
                              setIsTypeDropdownOpen(false);
                            }}
                          >
                            {label}
                            {selectedType === label && (
                              <span className="checkmark">
                                <FontAwesomeIcon icon={faCheck} />
                              </span>
                            )}
                          </li>
                        );
                      })}
                    </ul>
                  )}
                </div>
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
              sortedData.map((item) => (
                <div className="col-12 col-md-6 col-lg-4" key={item.id}>
                  <div className="services-box">
                    <div className="img">
                      <Image
                        src={item.img}
                        width={300}
                        height={300}
                        style={{ objectFit: "cover" }}
                        quality={100}
                        alt={locale === "en" ? item.title_en : item.title_ar}
                      />
                    </div>
                    <h4>{locale === "en" ? item.title_en : item.title_ar}</h4>
                    <p>
                      {locale === "en"
                        ? item.description_en
                        : item.description_ar}
                    </p>
                    <h6>
                      {t("Campaign")} :{" "}
                      <span>
                        {locale === "en" ? item.type_en : item.type_ar}
                      </span>
                    </h6>
                    <div>
                      <Link href={`/${locale}/services/${item.id}`}>
                        {t("SupportNow")}
                      </Link>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
