"use client";
import React, { useEffect, useMemo, useState } from "react";
import "./CasesFoundation.css";
import { useLocale, useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import {
  faArrowLeft,
  faArrowRight,
  faCheck,
  faChevronDown,
  faChevronUp,
  faFontAwesome,
  faSearch,
  faSliders,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRouter } from "next/navigation";

export default function CasesFoundation({ setActiveTab }) {
  const t = useTranslations("cases");
  const locale = useLocale();
  const router = useRouter();

  const [startAnim, setStartAnim] = useState(false);
  const [search, setSearch] = useState("");
  const [selectedType, setSelectedType] = useState(
    locale === "en" ? "All" : "الكل",
  );
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isTypeOpen, setIsTypeOpen] = useState(false);
  // البيانات
  const casesData = useMemo(
    () => [
      {
        id: 1,
        case_ar: "عاجلة",
        case_en: "Urgent",
        title_ar: "حالة علاج الطفل عمر 1",
        title_en: "Child treatment condition age 1",
        description_ar:
          "يعاني عمر من مرض في القلب ويحتاج إلى عملية جراحية عاجلة.",
        description_en:
          "Omar suffers from a heart condition and needs urgent surgery.",
        image: "/images/Image (عمليات القلب للأطفال).png",
        image_foundation: "/images/0.png",
        name_foundation_ar: "مؤسسة الأمل الخيرية",
        name_foundation_en: "Al-Amal Charity Foundation",
        type_ar: "طب",
        type_en: "Medical",
        collected: 15000,
        total: 25000,
      },
      {
        id: 2,
        case_ar: "عاجلة",
        case_en: "Urgent",
        title_ar: "حالة علاج الطفل عمر 2",
        title_en: "Child treatment condition age 2",
        description_ar:
          "يعاني عمر من مرض في القلب ويحتاج إلى عملية جراحية عاجلة.",
        description_en:
          "Omar suffers from a heart condition and needs urgent surgery.",
        image: "/images/Image (عمليات القلب للأطفال).png",
        image_foundation: "/images/0.png",
        name_foundation_ar: "مؤسسة الأمل الخيرية",
        name_foundation_en: "Al-Amal Charity Foundation",
        type_ar: "تعليم",
        type_en: "Education",
        collected: 5000,
        total: 25000,
      },
      {
        id: 3,
        case_ar: "عاجلة",
        case_en: "Urgent",
        title_ar: "حالة علاج الطفل عمر 3",
        title_en: "Child treatment condition age 3",
        description_ar:
          "يعاني عمر من مرض في القلب ويحتاج إلى عملية جراحية عاجلة.",
        description_en:
          "Omar suffers from a heart condition and needs urgent surgery.",
        image: "/images/Image (عمليات القلب للأطفال).png",
        image_foundation: "/images/0.png",
        name_foundation_ar: "مؤسسة الارومال الخيرية",
        name_foundation_en: "Al-Amal Charity Foundation",
        type_ar: "تعليم",
        type_en: "Education",
        collected: 20000,
        total: 25000,
      },
    ],
    [],
  );

  // تفعيل الأنيميشن
  useEffect(() => {
    setStartAnim(true);
  }, []);

  const options = useMemo(
    () => [
      { en: "Newest", ar: "الأحدث" },
      { en: "Oldest", ar: "الأقدم" },
      { en: "Most Popular", ar: "الأكثر شعبية" },
      { en: "Least Popular", ar: "الأقل شعبية" },
    ],
    [],
  );

  const localizedOptions = useMemo(
    () => options.map((o) => o[locale]),
    [locale, options],
  );
  const [selectedOption, setSelectedOption] = useState(localizedOptions[0]);

  // التحميل من التخزين المحلي
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

  const [selectedFoundation, setSelectedFoundation] = useState(
    locale === "en" ? "All Foundations" : "كل المؤسسات",
  );
  const [isFoundationOpen, setIsFoundationOpen] = useState(false);
  const dynamicFoundations = useMemo(() => {
    const foundations = [{ en: "All Foundations", ar: "كل المؤسسات" }];
    casesData.forEach((item) => {
      if (!foundations.some((f) => f.ar === item.name_foundation_ar)) {
        foundations.push({
          en: item.name_foundation_en,
          ar: item.name_foundation_ar,
        });
      }
    });
    return foundations;
  }, [casesData]);

  // 🔍 البحث والفلترة
  const filteredCases = useMemo(() => {
    let data = [...casesData];

    // 🔍 البحث بالنص
    if (search) {
      const s = search.toLowerCase();
      data = data.filter(
        (item) =>
          item.title_en.toLowerCase().includes(s) ||
          item.title_ar.includes(search),
      );
    }

    // 🎯 فلتر النوع
    const allTypeLabel = locale === "en" ? "All" : "الكل";
    if (selectedType !== allTypeLabel) {
      data = data.filter((item) =>
        locale === "en"
          ? item.type_en === selectedType
          : item.type_ar === selectedType,
      );
    }

    // 🏢 فلتر المؤسسة (الإضافة الجديدة)
    const allFoundationsLabel =
      locale === "en" ? "All Foundations" : "كل المؤسسات";
    if (selectedFoundation !== allFoundationsLabel) {
      data = data.filter((item) =>
        locale === "en"
          ? item.name_foundation_en === selectedFoundation
          : item.name_foundation_ar === selectedFoundation,
      );
    }

    return data;
  }, [search, selectedType, selectedFoundation, locale, casesData]);

  // ⬇️ الترتيب المنطقي
  const sortedData = useMemo(() => {
    const data = [...filteredCases];
    const newestLabel = locale === "en" ? "Newest" : "الأحدث";
    const oldestLabel = locale === "en" ? "Oldest" : "الأقدم";
    const mostPopular = locale === "en" ? "Most Popular" : "الأكثر شعبية";

    if (selectedOption === newestLabel) {
      return data.sort((a, b) => b.id - a.id);
    } else if (selectedOption === oldestLabel) {
      return data.sort((a, b) => a.id - b.id);
    } else if (selectedOption === mostPopular) {
      // ترتيب حسب أعلى نسبة تم جمعها
      return data.sort((a, b) => b.collected / b.total - a.collected / a.total);
    } else {
      // الأقل شعبية
      return data.sort((a, b) => a.collected / a.total - b.collected / b.total);
    }
  }, [filteredCases, selectedOption, locale]);

  const dynamicServiceTypes = useMemo(() => {
    const types = [{ en: "All", ar: "الكل" }];
    casesData.forEach((item) => {
      if (!types.some((t) => t.ar === item.type_ar)) {
        types.push({ en: item.type_en, ar: item.type_ar });
      }
    });
    return types;
  }, [casesData]);

  return (
    <div className="cases-page">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="page-top">
              <div className="search">
                <FontAwesomeIcon icon={faSearch} className="icon1" />
                <input
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  type="text"
                  placeholder={
                    locale === "en" ? "Search for a service" : "ابحث عن خدمة"
                  }
                />
                <FontAwesomeIcon icon={faSliders} className="icon2" />
              </div>

              <div className="list-dropdown">
                <div className="sorting-dropdown">
                  <button
                    className="selected-option"
                    onClick={() => setIsDropdownOpen((p) => !p)}
                  >
                    <span className="dropdown-arrow">
                      <FontAwesomeIcon
                        icon={isDropdownOpen ? faChevronUp : faChevronDown}
                      />
                    </span>
                    {selectedOption}
                  </button>

                  {isDropdownOpen && (
                    <ul className="options-list">
                      {localizedOptions.map((option) => (
                        <li
                          key={option}
                          className={`option-item ${selectedOption === option ? "active" : ""}`}
                          onClick={() => handleOptionClick(option)}
                        >
                          {option}
                          {selectedOption === option && (
                            <FontAwesomeIcon
                              icon={faCheck}
                              className="checkmark"
                            />
                          )}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>

                <div className="sorting-dropdown type-dropdown my-3">
                  {/* الزر الرئيسي الذي يعرض الخيار المحدد */}
                  <button
                    className="selected-option"
                    onClick={() => setIsTypeOpen((p) => !p)}
                  >
                    <span className="dropdown-arrow">
                      <FontAwesomeIcon
                        icon={isTypeOpen ? faChevronUp : faChevronDown}
                      />
                    </span>
                    {/* عرض النوع المختار حالياً */}
                    {selectedType}
                  </button>

                  {/* القائمة المنسدلة */}
                  {isTypeOpen && (
                    <ul className="options-list">
                      {dynamicServiceTypes.map((type) => {
                        const label = locale === "en" ? type.en : type.ar;
                        return (
                          <li
                            key={label}
                            className={`option-item ${selectedType === label ? "active" : ""}`}
                            onClick={() => {
                              setSelectedType(label);
                              setIsTypeOpen(false); // إغلاق القائمة بعد الاختيار
                            }}
                          >
                            {label}
                            {selectedType === label && (
                              <FontAwesomeIcon
                                icon={faCheck}
                                className="checkmark"
                              />
                            )}
                          </li>
                        );
                      })}
                    </ul>
                  )}
                </div>
              </div>
            </div>

            <div className="row mt-4">
              {sortedData.length === 0 ? (
                <div className="text-center w-100 py-5">
                  <h3>
                    {locale === "en" ? "No results found" : "لا توجد نتائج"}
                  </h3>
                </div>
              ) : (
                sortedData.map((item) => {
                  const calculatedPercent = Math.round(
                    (item.collected / item.total) * 100,
                  );
                  return (
                    <div className="col-12 col-md-6 mb-4" key={item.id}>
                      <div className="cases-box">
                        <div className="img">
                          <Image
                            src={item.image}
                            alt="case"
                            width={400}
                            height={300}
                            quality={90}
                          />
                          <span className="span-1">
                            {locale === "en" ? item.case_en : item.case_ar}
                          </span>
                        </div>

                        <div className="conten">
                          <h4>
                            {locale === "en" ? item.title_en : item.title_ar}
                          </h4>
                          <p>
                            {locale === "en"
                              ? item.description_en
                              : item.description_ar}
                          </p>
                          <div className="type-foundation">
                            <div className="itme">
                              <Image
                                src={item.image_foundation}
                                alt="foundation"
                                width={20}
                                height={20}
                              />
                              <p>
                                {locale === "en"
                                  ? item.name_foundation_en
                                  : item.name_foundation_ar}
                              </p>
                            </div>
                            <div className="itme">
                              <FontAwesomeIcon
                                icon={faFontAwesome}
                                className="icon-type"
                              />
                              <p>
                                {locale === "en" ? item.type_en : item.type_ar}
                              </p>
                            </div>
                          </div>
                          <span className="percent">
                            {startAnim ? calculatedPercent : 0}%
                          </span>
                          <div className="progress-bg">
                            <div
                              className="progress-fill"
                              style={{
                                width: startAnim
                                  ? `${calculatedPercent}%`
                                  : "0%",
                                transition: "width 2s ease-in-out",
                              }}
                            ></div>
                          </div>
                          <p className="amount-text">
                            {locale === "en" ? (
                              <>
                                Collected{" "}
                                <b suppressHydrationWarning>
                                  {item.collected.toLocaleString()}
                                </b>{" "}
                                of{" "}
                                <b suppressHydrationWarning>
                                  {item.total.toLocaleString()}
                                </b>{" "}
                                EGP
                              </>
                            ) : (
                              <>
                                تم جمع{" "}
                                <b suppressHydrationWarning>
                                  {item.collected.toLocaleString()}
                                </b>{" "}
                                من أصل{" "}
                                <b suppressHydrationWarning>
                                  {item.total.toLocaleString()}
                                </b>{" "}
                                جنيه
                              </>
                            )}
                          </p>
                          <div
                            className="details-link"
                            onClick={() => {
                              const name =
                                locale === "en" ? item.title_en : item.title_ar;
                              setActiveTab("casesDetails", name, item.id);
                              window.scrollTo({ top: 0, behavior: "smooth" });
                            }}
                          >
                            <a>
                              {locale === "en"
                                ? "View details"
                                : "عرض التفاصيل"}
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
