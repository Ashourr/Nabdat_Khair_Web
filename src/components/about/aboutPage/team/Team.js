"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "./team.css";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper/modules";
import { useLocale, useTranslations } from "next-intl";

import Image from "next/image";
export default function Team() {
  const locale = useLocale();
  const t = useTranslations("about");

  const dataTeam = [
    {
      img: "/images/PicsArt_12-29-02.05.43.jpg",
      name_ar: "محمد عاشور",
      name_en: "Mohamed Ashour",
      role_ar: "مدير التطبيق",
      role_en: "Application Manager",
    },
    {
      img: "/images/PicsArt_12-29-02.05.43.jpg",
      name_ar: "محمد عاشور",
      name_en: "Mohamed Ashour",
      role_ar: "مدير التطبيق",
      role_en: "Application Manager",
    },
    {
      img: "/images/PicsArt_12-29-02.05.43.jpg",
      name_ar: "محمد عاشور",
      name_en: "Mohamed Ashour",
      role_ar: "مدير التطبيق",
      role_en: "Application Manager",
    },
    {
      img: "/images/PicsArt_12-29-02.05.43.jpg",
      name_ar: "محمد عاشور",
      name_en: "Mohamed Ashour",
      role_ar: "مدير التطبيق",
      role_en: "Application Manager",
    },
    {
      img: "/images/PicsArt_12-29-02.05.43.jpg",
      name_ar: "محمد عاشور",
      name_en: "Mohamed Ashour",
      role_ar: "مدير التطبيق",
      role_en: "Application Manager",
    },
    {
      img: "/images/PicsArt_12-29-02.05.43.jpg",
      name_ar: "محمد عاشور",
      name_en: "Mohamed Ashour",
      role_ar: "مدير التطبيق",
      role_en: "Application Manager",
    },
    {
      img: "/images/PicsArt_12-29-02.05.43.jpg",
      name_ar: "محمد عاشور",
      name_en: "Mohamed Ashour",
      role_ar: "مدير التطبيق",
      role_en: "Application Manager",
    },
    {
      img: "/images/PicsArt_12-29-02.05.43.jpg",
      name_ar: "محمد عاشور",
      name_en: "Mohamed Ashour",
      role_ar: "مدير التطبيق",
      role_en: "Application Manager",
    },
    {
      img: "/images/PicsArt_12-29-02.05.43.jpg",
      name_ar: "محمد عاشور",
      name_en: "Mohamed Ashour",
      role_ar: "مدير التطبيق",
      role_en: "Application Manager",
    },
    {
      img: "/images/PicsArt_12-29-02.05.43.jpg",
      name_ar: "محمد عاشور",
      name_en: "Mohamed Ashour",
      role_ar: "مدير التطبيق",
      role_en: "Application Manager",
    },
    {
      img: "/images/PicsArt_12-29-02.05.43.jpg",
      name_ar: "محمد عاشور",
      name_en: "Mohamed Ashour",
      role_ar: "مدير التطبيق",
      role_en: "Application Manager",
    },
    {
      img: "/images/PicsArt_12-29-02.05.43.jpg",
      name_ar: "محمد عاشور",
      name_en: "Mohamed Ashour",
      role_ar: "مدير التطبيق",
      role_en: "Application Manager",
    },
  ];
  return (
    <div className={`team ${locale}`}>
      <section className="team-content">
        <div className="team-links-content">
          <h2>{t("title-team")}</h2>
          <p>{t("decrption-team")}</p>
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
            navigation={{
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
            }}
            breakpoints={{
              1024: { slidesPerView: 5 },
              768: { slidesPerView: 3 },
              640: { slidesPerView: 3 },
              500: { slidesPerView: 2 },
              0: {
                slidesPerView: 1.4,
                // spaceBetween: 2,
                // centeredSlides: true,
              },
            }}
            modules={[Pagination, Navigation]}
            className="mySwiper"
          >
            {dataTeam.map((item, index) => (
              <SwiperSlide key={index}>
                <div className="team-box">
                  <div className="img">
                    <Image
                      src={item.img}
                      alt=""
                      loading="lazy"
                      width={500}
                      height={500}
                      quality={100}
                    />
                  </div>
                  <div style={{ padding: "10px 5px" , textAlign:"center" }}>
                    <h3>{locale === "en" ? item.name_en : item.name_ar}</h3>
                    <p>{locale === "en" ? item.role_en : item.role_ar}</p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
            {/* <SwiperSlide>
              <div className="team-box">
                <div className="img">
                  <Image
                    src="/images/PicsArt_12-29-02.05.43.jpg"
                    alt=""
                    width={100}
                    height={100}
                    quality={100}
                  />
                </div>
                <h3>محمد عاشور 1</h3>
                <p>مدير التنظيم</p>
              </div>
            </SwiperSlide> */}
          </Swiper>
        </div>
      </section>
    </div>
  );
}
