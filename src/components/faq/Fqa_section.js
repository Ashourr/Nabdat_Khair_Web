"use client";
import React from "react";
import "./fqa.css";
import {
  faAngleUp,
  faArrowLeft,
  faArrowRight,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useLocale, useTranslations } from "next-intl";
import { usePathname, useRouter } from "next/navigation";
import HeaderPage from "../headerPage/HeaderPage";
import Image from "next/image";
import imgFaq from "../../../public/images/faq.webp";
export default function Fqa_section() {
  const t = useTranslations("fqa");
  const locale = useLocale();

  const pathname = usePathname();
  const router = useRouter();
  const isHomePage =
    pathname === "/ar" || pathname === "/en" || pathname === "/";

  return (
    <>
      {!isHomePage && (
        <>
          <HeaderPage
            bgImg="/images/b1.jpeg"
            title={t("title-page")}
            link={t("link-page")}
            suptitle={t("suptitle-page")}
          />
        </>
      )}
      <div className="faq-section">
        <div className="container">
          {isHomePage && (
            <div className="title">
              <h3>{t("title")}</h3>
              <p>{t("decrption")}</p>
            </div>
          )}
          {!isHomePage && (
            <button onClick={() => router.back()} className="back-btn">
              <FontAwesomeIcon
                icon={locale === "en" ? faArrowLeft : faArrowRight}
                className={`back ${locale}`}
              />
              {locale === "en" ? "Back" : "رجوع"}
            </button>
          )}
          <div className="row">
            <div className="col-12 col-lg-6" style={{ padding: "25px" }}>
              <div className="fqas">
                <div className="accordion" id="accordionPanelsStayOpenExample">
                  <div className="accordion-item">
                    <h2
                      className="accordion-header"
                      id="panelsStayOpen-headingOne"
                    >
                      <button
                        className="accordion-button"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#panelsStayOpen-collapseOne"
                        aria-expanded="true"
                        aria-controls="panelsStayOpen-collapseOne"
                      >
                        {locale === "en"
                          ? "What is a pulse of goodness?"
                          : " ما هي نبضة خير؟"}
                        <FontAwesomeIcon
                          icon={faAngleUp}
                          className={`icon-button ${locale}`}
                        />
                      </button>
                    </h2>
                    <div
                      id="panelsStayOpen-collapseOne"
                      className="accordion-collapse collapse show"
                      aria-labelledby="panelsStayOpen-headingOne"
                    >
                      <div className="accordion-body">
                        {locale === "en"
                          ? "Pulse of goodness is the main platform for volunteering, and I feel that my efforts have a real impact."
                          : "نابدات خير هي منصة خيرية تهدف إلى تسهيل عملية التبرع وتتبع الحالات والخدمات الإنسانية التي تقدمها المنظمات الخيرية."}
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2
                      className="accordion-header"
                      id="panelsStayOpen-headingTwo"
                    >
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#panelsStayOpen-collapseTwo"
                        aria-expanded="false"
                        aria-controls="panelsStayOpen-collapseTwo"
                      >
                        {locale === "en"
                          ? "What is a pulse of goodness?"
                          : " ما هي نبضة خير؟"}
                        <FontAwesomeIcon
                          icon={faAngleUp}
                          className={`icon-button ${locale}`}
                        />
                      </button>
                    </h2>
                    <div
                      id="panelsStayOpen-collapseTwo"
                      className="accordion-collapse collapse"
                      aria-labelledby="panelsStayOpen-headingTwo"
                    >
                      <div className="accordion-body">
                        {locale === "en"
                          ? "Pulse of goodness is the main platform for volunteering, and I feel that my efforts have a real impact."
                          : "نابدات خير هي منصة خيرية تهدف إلى تسهيل عملية التبرع وتتبع الحالات والخدمات الإنسانية التي تقدمها المنظمات الخيرية."}
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2
                      className="accordion-header"
                      id="panelsStayOpen-headingThree"
                    >
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#panelsStayOpen-collapseThree"
                        aria-expanded="false"
                        aria-controls="panelsStayOpen-collapseThree"
                      >
                        {locale === "en"
                          ? "What is a pulse of goodness?"
                          : " ما هي نبضة خير؟"}
                        <FontAwesomeIcon
                          icon={faAngleUp}
                          className={`icon-button ${locale}`}
                        />
                      </button>
                    </h2>
                    <div
                      id="panelsStayOpen-collapseThree"
                      className="accordion-collapse collapse"
                      aria-labelledby="panelsStayOpen-headingThree"
                    >
                      <div className="accordion-body">
                        {locale === "en"
                          ? "Pulse of goodness is the main platform for volunteering, and I feel that my efforts have a real impact."
                          : "نابدات خير هي منصة خيرية تهدف إلى تسهيل عملية التبرع وتتبع الحالات والخدمات الإنسانية التي تقدمها المنظمات الخيرية."}
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2
                      className="accordion-header"
                      id="panelsStayOpen-heading4"
                    >
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#panelsStayOpen-collapse4"
                        aria-expanded="false"
                        aria-controls="panelsStayOpen-collapse4"
                      >
                        {locale === "en"
                          ? "What is a pulse of goodness?"
                          : " ما هي نبضة خير؟"}
                        <FontAwesomeIcon
                          icon={faAngleUp}
                          className={`icon-button ${locale}`}
                        />
                      </button>
                    </h2>
                    <div
                      id="panelsStayOpen-collapse4"
                      className="accordion-collapse collapse"
                      aria-labelledby="panelsStayOpen-heading4"
                    >
                      <div className="accordion-body">
                        {locale === "en"
                          ? "Pulse of goodness is the main platform for volunteering, and I feel that my efforts have a real impact."
                          : "نابدات خير هي منصة خيرية تهدف إلى تسهيل عملية التبرع وتتبع الحالات والخدمات الإنسانية التي تقدمها المنظمات الخيرية."}
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2
                      className="accordion-header"
                      id="panelsStayOpen-heading5"
                    >
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#panelsStayOpen-collapse5"
                        aria-expanded="false"
                        aria-controls="panelsStayOpen-collapse5"
                      >
                        {locale === "en"
                          ? "What is a pulse of goodness?"
                          : " ما هي نبضة خير؟"}
                        <FontAwesomeIcon
                          icon={faAngleUp}
                          className={`icon-button ${locale}`}
                        />
                      </button>
                    </h2>
                    <div
                      id="panelsStayOpen-collapse5"
                      className="accordion-collapse collapse"
                      aria-labelledby="panelsStayOpen-heading4"
                    >
                      <div className="accordion-body">
                        {locale === "en"
                          ? "Pulse of goodness is the main platform for volunteering, and I feel that my efforts have a real impact."
                          : "نابدات خير هي منصة خيرية تهدف إلى تسهيل عملية التبرع وتتبع الحالات والخدمات الإنسانية التي تقدمها المنظمات الخيرية."}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-lg-6">
              <div className="image-section">
                <div className={`image ${locale}`}>
                  <Image
                    src={imgFaq}
                    alt="background shape"
                    fill
                    style={{
                      objectFit: "cover",
                      objectPosition: "center",
                      zIndex: -1,
                    }}
                    quality={85}
                    loading="lazy"
                  />
                  <h5 className={`${locale}`}>{t("text")}</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
