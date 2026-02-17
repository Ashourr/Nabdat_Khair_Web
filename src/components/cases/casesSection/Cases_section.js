"use client";
import React, { useEffect, useState } from "react";
import "./cases.css";
import { useLocale, useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import { faFontAwesome } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Cases_section() {
  const t = useTranslations("cases");
  const locale = useLocale();

  const [startAnim, setStartAnim] = useState(false);

  // البيانات مع إضافة المبالغ المالية
  const casesData = [
    {
      id: 1,
      case_ar: "عاجلة",
      case_en: "Urgent",
      title_ar: "حالة علاج الطفل عمر",
      title_en: "Child treatment condition age",
      description_ar:
        "يعاني عمر من مرض في القلب ويحتاج إلى عملية جراحية عاجلة.",
      description_en:
        "Omar suffers from a heart condition and needs urgent surgery.",
      image: "/images/cases-1.webp",
      image_foundation: "/images/foundation-1.webp",
      name_foundation_ar: "مؤسسة الأمل الخيرية",
      name_foundation_en: "Al-Amal Charity Foundation",
      type_ar: "تعليم",
      type_en: "Education",
      collected: 15000,
      total: 25000,
    },
    {
      id: 2,
      case_ar: "عاجلة",
      case_en: "Urgent",
      title_ar: "حالة علاج الطفل عمر",
      title_en: "Child treatment condition age",
      description_ar:
        "يعاني عمر من مرض في القلب ويحتاج إلى عملية جراحية عاجلة.",
      description_en:
        "Omar suffers from a heart condition and needs urgent surgery.",
      image: "/images/cases-1.webp",
      image_foundation: "/images/foundation-2.webp",
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
      title_ar: "حالة علاج الطفل عمر",
      title_en: "Child treatment condition age",
      description_ar:
        "يعاني عمر من مرض في القلب ويحتاج إلى عملية جراحية عاجلة.",
      description_en:
        "Omar suffers from a heart condition and needs urgent surgery.",
      image: "/images/cases-1.webp",
      image_foundation: "/images/foundation-1.webp",
      name_foundation_ar: "مؤسسة الأمل الخيرية",
      name_foundation_en: "Al-Amal Charity Foundation",
      type_ar: "تعليم",
      type_en: "Education",
      collected: 20000,
      total: 25000,
    },
  ];

  /* مراقبة السكشن لتشغيل الأنيميشن عند التمرير */
  useEffect(() => {
    const section = document.querySelector(".cases-section");
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStartAnim(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 },
    );
    if (section) observer.observe(section);
    return () => observer.disconnect();
  }, []);

  return (
    <div className="cases-section">
      <div className="container">
        <div className="cases-content text-center mb-5">
          <h2>{t("title")}</h2>
          <p>{t("description")}</p>
        </div>

        <div className="row">
          {casesData.map((item) => {
            // حساب النسبة المئوية بناءً على المبالغ
            const calculatedPercent = Math.round(
              (item.collected / item.total) * 100,
            );

            return (
              <div className="col-12 col-md-6 col-lg-4" key={item.id}>
                <div className="cases-box">
                  <div className="img">
                    <Image
                      src={item.image}
                      alt="case"
                      width={400}
                      height={400}
                      style={{ objectFit: "cover" }}
                      loading="lazy"
                      quality={90}
                    />
                    <span className="span-1">
                      {locale === "en" ? item.case_en : item.case_ar}
                    </span>
                  </div>

                  <div className="conten">
                    <h4>{locale === "en" ? item.title_en : item.title_ar}</h4>
                    <p>
                      {locale === "en"
                        ? item.description_en
                        : item.description_ar}
                    </p>
                    <div className="type-foundation">
                      <div className="itme">
                        <Image
                          src={item.image_foundation}
                          alt="heart"
                          width={30}
                          height={30}
                          loading="lazy"
                          quality={90}
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
                        <p>{locale === "en" ? item.type_en : item.type_ar}</p>
                      </div>
                    </div>

                    {/* العداد المئوي */}
                    <span className="percent">
                      {startAnim ? calculatedPercent : 0}%
                    </span>

                    {/* شريط التحميل المستند إلى النسبة المحسوبة */}
                    <div className="progress-bg">
                      <div
                        className="progress-fill"
                        style={{
                          width: startAnim ? `${calculatedPercent}%` : "0%",
                          transition: "width 2s ease-in-out",
                        }}
                      ></div>
                    </div>

                    {/* عرض المبالغ المالية مع حل مشكلة الـ Hydration */}
                    <p className="amount-text">
                      {locale === "en" ? (
                        <>
                          Collected{" "}
                          <b suppressHydrationWarning>
                            {item.collected.toLocaleString("en-US")}
                          </b>{" "}
                          of{" "}
                          <b suppressHydrationWarning>
                            {item.total.toLocaleString("en-US")}
                          </b>{" "}
                          EGP
                        </>
                      ) : (
                        <>
                          تم جمع{" "}
                          <b suppressHydrationWarning>
                            {item.collected.toLocaleString("en-US")}
                          </b>{" "}
                          من أصل{" "}
                          <b suppressHydrationWarning>
                            {item.total.toLocaleString("en-US")}
                          </b>{" "}
                          جنيه
                        </>
                      )}
                    </p>

                    <Link href={`/${locale}/cases/${item.id}`} className="details-link">
                      {locale === "en" ? "View details" : "عرض التفاصيل"}
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="link text-center mt-4">
          <Link href={`/${locale}/cases`}>{t("btn")}</Link>
        </div>
      </div>
    </div>
  );
}
