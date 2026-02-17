"use client";
import React from "react";
import "./pageLinks.css";
import { useLocale, useTranslations } from "next-intl";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAddressCard,
  faArrowLeft,
  faArrowRight,
  faHouse,
} from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import { useRouter } from "next/navigation";
import HeaderPage from "@/components/headerPage/HeaderPage";

export default function PageLinks() {
  const locale = useLocale();
  const t = useTranslations("pageLinks");

  const data = [
    {
      id: 1,
      icon: faHouse,
      title_ar: "الصفحة الرئيسية",
      title_en: "Home Page",
      decrption_ar: "اكتشف الحالات الاكثر احتياجا وابداء بالتقديم من الان",
      decrption_en: "Discover the most needed cases and start applying now.",
      link: "/",
      but_ar: "اذهب الي الصفحه",
      but_en: "go to Page",
    },
    {
      id: 2,
      icon: faAddressCard,
      title_ar: "الصفحة الرئيسية",
      title_en: "Home Page",
      decrption_ar: "اكتشف الحالات الاكثر احتياجا وابداء بالتقديم من الان",
      decrption_en: "Discover the most needed cases and start applying now.",
      link: "/",
      but_ar: "اذهب الي الصفحه",
      but_en: "go to Page",
    },
    {
      id: 3,
      icon: faHouse,
      title_ar: "الصفحة الرئيسية",
      title_en: "Home Page",
      decrption_ar: "اكتشف الحالات الاكثر احتياجا وابداء بالتقديم من الان",
      decrption_en: "Discover the most needed cases and start applying now.",
      link: "/",
      but_ar: "اذهب الي الصفحه",
      but_en: "go to Page",
    },
    {
      id: 4,
      icon: faHouse,
      title_ar: "الصفحة الرئيسية",
      title_en: "Home Page",
      decrption_ar: "اكتشف الحالات الاكثر احتياجا وابداء بالتقديم من الان",
      decrption_en: "Discover the most needed cases and start applying now.",
      link: "/",
      but_ar: "اذهب الي الصفحه",
      but_en: "go to Page",
    },
    {
      id: 5,
      icon: faHouse,
      title_ar: "الصفحة الرئيسية",
      title_en: "Home Page",
      decrption_ar: "اكتشف الحالات الاكثر احتياجا وابداء بالتقديم من الان",
      decrption_en: "Discover the most needed cases and start applying now.",
      link: "/",
      but_ar: "اذهب الي الصفحه",
      but_en: "go to Page",
    },
    {
      id: 6,
      icon: faHouse,
      title_ar: "الصفحة الرئيسية",
      title_en: "Home Page",
      decrption_ar: "اكتشف الحالات الاكثر احتياجا وابداء بالتقديم من الان",
      decrption_en: "Discover the most needed cases and start applying now.",
      link: "/",
      but_ar: "اذهب الي الصفحه",
      but_en: "go to Page",
    },
    {
      id: 7,
      icon: faHouse,
      title_ar: "الصفحة الرئيسية",
      title_en: "Home Page",
      decrption_ar: "اكتشف الحالات الاكثر احتياجا وابداء بالتقديم من الان",
      decrption_en: "Discover the most needed cases and start applying now.",
      link: "/",
      but_ar: "اذهب الي الصفحه",
      but_en: "go to Page",
    },
    {
      id: 8,
      icon: faHouse,
      title_ar: "الصفحة الرئيسية",
      title_en: "Home Page",
      decrption_ar: "اكتشف الحالات الاكثر احتياجا وابداء بالتقديم من الان",
      decrption_en: "Discover the most needed cases and start applying now.",
      link: "/",
      but_ar: "اذهب الي الصفحه",
      but_en: "go to Page",
    },
    {
      id: 9,
      icon: faHouse,
      title_ar: "الصفحة الرئيسية",
      title_en: "Home Page",
      decrption_ar: "اكتشف الحالات الاكثر احتياجا وابداء بالتقديم من الان",
      decrption_en: "Discover the most needed cases and start applying now.",
      link: "/",
      but_ar: "اذهب الي الصفحه",
      but_en: "go to Page",
    },
    {
      id: 10,
      icon: faHouse,
      title_ar: "الصفحة الرئيسية",
      title_en: "Home Page",
      decrption_ar: "اكتشف الحالات الاكثر احتياجا وابداء بالتقديم من الان",
      decrption_en: "Discover the most needed cases and start applying now.",
      link: "/",
      but_ar: "اذهب الي الصفحه",
      but_en: "go to Page",
    },
    {
      id: 11,
      icon: faHouse,
      title_ar: "الصفحة الرئيسية",
      title_en: "Home Page",
      decrption_ar: "اكتشف الحالات الاكثر احتياجا وابداء بالتقديم من الان",
      decrption_en: "Discover the most needed cases and start applying now.",
      link: "/",
      but_ar: "اذهب الي الصفحه",
      but_en: "go to Page",
    },
    {
      id: 12,
      icon: faHouse,
      title_ar: "الصفحة الرئيسية",
      title_en: "Home Page",
      decrption_ar: "اكتشف الحالات الاكثر احتياجا وابداء بالتقديم من الان",
      decrption_en: "Discover the most needed cases and start applying now.",
      link: "/",
      but_ar: "اذهب الي الصفحه",
      but_en: "go to Page",
    },
  ];

  const router = useRouter();

  return (
    <>
      <HeaderPage
        bgImg="/images/b1.jpeg"
        title={t("title-page")}
        link={t("link-page")}
        suptitle={t("suptitle-page")}
      />
      <div className="pagelink">
        <div className="container">
          <button onClick={() => router.back()} className="back-btn">
            <FontAwesomeIcon
              icon={locale === "en" ? faArrowLeft : faArrowRight}
              className={`back ${locale}`}
            />
            {locale === "en" ? "Back" : "رجوع"}
          </button>
          <div className="row">
            {data.map((item) => (
              <div key={item.id} className="col-12 col-md-6 col-lg-3">
                <div className="link-box">
                  <div className="icon">
                    <FontAwesomeIcon icon={item.icon} className="i" />
                  </div>
                  <h4>{locale === "en" ? item.title_en : item.title_ar}</h4>
                  <p>
                    {locale === "en" ? item.decrption_en : item.decrption_ar}
                  </p>
                  <div>
                    <Link href={`/${locale}/${item.link}`}>
                      {locale === "en" ? item.but_en : item.but_ar}
                    </Link>
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
