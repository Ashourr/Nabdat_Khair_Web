"use client";
import React from "react";
import "./foundation_section.css";
import { useLocale, useTranslations } from "next-intl";
import Link from "next/link";
import Image from "next/image";

export default function Organizations_section() {
  const locale = useLocale();
  const t = useTranslations("Organizations");

  const data = [
    {
      id: 1,
      image: "/images/0.png",
      title_ar: "مؤسسة الأمل الخيرية",
      title_en: "Al-Amal Charity Foundation",
      description_ar:
        "تعمل على دعم الأسر الأكثر احتياجاً من خلال برامج غذائية وطبية شهرية.",
      description_en:
        "It works to support the most needy families through monthly food and medical programs.",
    },
    {
      id: 2,
      image: "/images/foundation-1.webp",
      title_ar: "مؤسسة الأمل الخيرية",
      title_en: "Al-Amal Charity Foundation",
      description_ar:
        "تعمل على دعم الأسر الأكثر احتياجاً من خلال برامج غذائية وطبية شهرية.",
      description_en:
        "It works to support the most needy families through monthly food and medical programs.",
    },
    {
      id: 3,
      image: "/images/foundation-2.webp",
      title_ar: "مؤسسة الأمل الخيرية",
      title_en: "Al-Amal Charity Foundation",
      description_ar:
        "تعمل على دعم الأسر الأكثر احتياجاً من خلال برامج غذائية وطبية شهرية.",
      description_en:
        "It works to support the most needy families through monthly food and medical programs.",
    },
    {
      id: 4,
      image: "/images/foundation-1.webp",
      title_ar: "مؤسسة الأمل الخيرية",
      title_en: "Al-Amal Charity Foundation",
      description_ar:
        "تعمل على دعم الأسر الأكثر احتياجاً من خلال برامج غذائية وطبية شهرية.",
      description_en:
        "It works to support the most needy families through monthly food and medical programs.",
    },
    {
      id: 5,
      image: "/images/foundation-2.webp",
      title_ar: "مؤسسة الأمل الخيرية",
      title_en: "Al-Amal Charity Foundation",
      description_ar:
        "تعمل على دعم الأسر الأكثر احتياجاً من خلال برامج غذائية وطبية شهرية.",
      description_en:
        "It works to support the most needy families through monthly food and medical programs.",
    },
    {
      id: 6,
      image: "/images/foundation-1.webp",
      title_ar: "مؤسسة الأمل الخيرية",
      title_en: "Al-Amal Charity Foundation",
      description_ar:
        "تعمل على دعم الأسر الأكثر احتياجاً من خلال برامج غذائية وطبية شهرية.",
      description_en:
        "It works to support the most needy families through monthly food and medical programs.",
    },
  ];
  return (
    <section className="organizations-section">
      <div className="container">
        <div className="row">
          <div className="section-title">
            <h2>{t("title")}</h2>
            <p>{t("decrption")}</p>
          </div>

          {data.map((item, index) => (
            <div className="col-12 col-md-6 col-lg-4" key={item.id}>
              <div className="organization-box">
                <div className="box-content">
                  <Image
                    src={item.image}
                    width={100}
                    height={100}
                    quality={85}
                    loading="lazy"
                    alt="Organization Logo"
                    style={{ marginBottom: "10px" }}
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
                  <Link href={`/${locale}/foundation/${item.id}`}>{t("View Details")}</Link>
                </div>
              </div>
            </div>
          ))}
          <div className="link">
            <Link href={`/${locale}/foundation`} className="btn-view-all">
              {t("btn")}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
