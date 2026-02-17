"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "./page_links.css";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper/modules";
import { useLocale, useTranslations } from "next-intl";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse } from "@fortawesome/free-solid-svg-icons";
export default function Page_links() {
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
  ];
  return (
    <div className="pages-links">
      <section className="page-content">
        <div className="pages-links-content">
          <h2>{t("title")}</h2>
          <p>{t("decrption")}</p>
        </div>
        <div className="relative-container">
          <div className="swiper-button-prev custom-arrow"></div>
          <div className="swiper-button-next custom-arrow"></div>
          <Swiper
            effect="coverflow"
            centeredSlides={true}
            slidesPerView={1}
            spaceBetween={2}
            loop={true}
            pagination={{
              clickable: true,
            }}
            navigation={{
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
            }}
            breakpoints={{
              1024: { slidesPerView: 5 },
              768: { slidesPerView: 3 },
              640: { slidesPerView: 1 },
              0: {
                slidesPerView: 1.2,
                spaceBetween: 2,
                centeredSlides: true,
              },
            }}
            modules={[Pagination, Navigation]}
            className="mySwiper"
          >
            {data.map((item) => (
              <SwiperSlide key={item.id}>
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
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="link">
            <Link href={`/${locale}/Quick_Links`}>
              {t("btn")}
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
