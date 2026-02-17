"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./servicesSection.css";
import { Pagination, Navigation } from "swiper/modules";
import { useLocale, useTranslations } from "next-intl";
import Link from "next/link";
import Image from "next/image";
export default function Services_section() {
  const locale = useLocale();
  const t = useTranslations("services");

  const data = [
    {
      id: 1,
      img: "/images/serivces-1.webp",
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
      id: 2,
      img: "/images/serivces-1.webp",
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
      img: "/images/serivces-1.webp",
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
      img: "/images/serivces-1.webp",
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
      id: 5,
      img: "/images/serivces-1.webp",
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
      id: 6,
      img: "/images/serivces-1.webp",
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
  ];
  return (
    <div className="services-section">
      <section className="services-content">
        <div className="services-title">
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
            spaceBetween={5}
            loop={true}
            pagination={{
              clickable: true,
            }}
            navigation={{
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
            }}
            breakpoints={{
              1024: { slidesPerView: 3 },
              768: { slidesPerView: 2 },
              640: { slidesPerView: 2 },
              0: {
                slidesPerView: 1.2,
                spaceBetween: 10,
                centeredSlides: true,
              },
            }}
            modules={[Pagination, Navigation]}
            className="mySwiper"
          >
            {data.map((item) => (
              <SwiperSlide key={item.id}>
                <div className="services-box">
                  <div className="img">
                    <Image
                      src={item.img}
                      width={400}
                      height={400}
                      loading="lazy"
                      quality={85}
                      alt="Service Image"
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
                    <span>{locale === "en" ? item.type_en : item.type_ar}</span>
                  </h6>
                  <div>
                    <Link href={`/${locale}/services/cases${item.id}`}>
                      {t("SupportNow")}
                    </Link>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          <div className="link">
            <Link href={`/${locale}/services`}>{t("btn")}</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
