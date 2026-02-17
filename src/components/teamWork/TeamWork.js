"use client";
import React from "react";
import HeaderPage from "../headerPage/HeaderPage";
import { useLocale, useTranslations } from "next-intl";
import "./teamWork.css";
import { useRouter } from "next/navigation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
export default function TeamWork() {
  const locale = useLocale();
  const t = useTranslations("about");
  const router = useRouter();

  const dataTeam = [
    {
      img: "/images/team.webp",
      name_ar: "محمد عاشور",
      name_en: "Mohamed Ashour",
      role_ar: "مدير التطبيق",
      role_en: "Application Manager",
    },
    {
      img: "/images/team.webp",
      name_ar: "محمد عاشور",
      name_en: "Mohamed Ashour",
      role_ar: "مدير التطبيق",
      role_en: "Application Manager",
    },
    {
      img: "/images/team.webp",
      name_ar: "محمد عاشور",
      name_en: "Mohamed Ashour",
      role_ar: "مدير التطبيق",
      role_en: "Application Manager",
    },
    {
      img: "/images/team.webp",
      name_ar: "محمد عاشور",
      name_en: "Mohamed Ashour",
      role_ar: "مدير التطبيق",
      role_en: "Application Manager",
    },
    {
      img: "/images/team.webp",
      name_ar: "محمد عاشور",
      name_en: "Mohamed Ashour",
      role_ar: "مدير التطبيق",
      role_en: "Application Manager",
    },
    {
      img: "/images/team.webp",
      name_ar: "محمد عاشور",
      name_en: "Mohamed Ashour",
      role_ar: "مدير التطبيق",
      role_en: "Application Manager",
    },
    {
      img: "/images/team.webp",
      name_ar: "محمد عاشور",
      name_en: "Mohamed Ashour",
      role_ar: "مدير التطبيق",
      role_en: "Application Manager",
    },
    {
      img: "/images/team.webp",
      name_ar: "محمد عاشور",
      name_en: "Mohamed Ashour",
      role_ar: "مدير التطبيق",
      role_en: "Application Manager",
    },
    {
      img: "/images/team.webp",
      name_ar: "محمد عاشور",
      name_en: "Mohamed Ashour",
      role_ar: "مدير التطبيق",
      role_en: "Application Manager",
    },
    {
      img: "/images/team.webp",
      name_ar: "محمد عاشور",
      name_en: "Mohamed Ashour",
      role_ar: "مدير التطبيق",
      role_en: "Application Manager",
    },
    {
      img: "/images/team.webp",
      name_ar: "محمد عاشور",
      name_en: "Mohamed Ashour",
      role_ar: "مدير التطبيق",
      role_en: "Application Manager",
    },
    {
      img: "/images/team.webp",
      name_ar: "محمد عاشور",
      name_en: "Mohamed Ashour",
      role_ar: "مدير التطبيق",
      role_en: "Application Manager",
    },
  ];
  return (
    <>
      <HeaderPage
        bgImg="/images/b1.jpeg"
        title={t("title-team")}
        link={t("link-page")}
        suptitle={t("title-team")}
      />
      <div className="container">
        <div className="teamWork">
          <button
            onClick={() => router.back()}
            className="back-btn"
            aria-label={
              locale === "en"
                ? "Go back to previous page"
                : "العودة للصفحة السابقة"
            }
          >
            <FontAwesomeIcon
              icon={locale === "en" ? faArrowLeft : faArrowRight}
              className={`back ${locale}`}
            />
            {locale === "en" ? "Back" : "رجوع"}
          </button>
          <div className="row">
            {dataTeam.map((item, index) => (
              <div className="col-12 col-md-6 col-lg-3" key={index}>
                <div className="team-itme">
                  <div
                    style={{
                      position: "relative",
                      width: "100%",
                      height: "300px",
                    }}
                  >
                    <Image
                      src={item.img}
                      alt={item.name_ar}
                      fill
                      style={{ objectFit: "cover"}}
                      quality={90}
                      loading="lazy"
                    />
                  </div>
                  <div className="contact">
                    <h5>{locale === "en" ? item.name_en : item.name_ar}</h5>
                    <h6>{locale === "en" ? item.role_en : item.role_ar}</h6>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
