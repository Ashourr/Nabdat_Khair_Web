"use client";
import { useLocale, useTranslations } from "next-intl";
import React from "react";
import "../aboutFoundation.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleUp } from "@fortawesome/free-solid-svg-icons";
export default function FaqFoundation() {
      const locale = useLocale();
      const t = useTranslations("foundation-Details");
  return (
    <div className="faq-foundation">
      <div className="title-team">
        <h3>الأسئلة الشائعة</h3>
        <p>
          إليك أبرز الأسئلة التي تردنا كثيرًا، مع إجابات واضحة لتسهيل تجربتك
          معنا. إذا لم تجد سؤالك هنا، يمكنك التواصل معنا مباشرة.
        </p>
      </div>

      <div style={{ display: "flex", justifyContent: "center" }}>
        <div
          style={{ width: "600px" }}
          className="accordion"
          id="accordionPanelsStayOpenExample"
        >
          <div className="accordion-item">
            <h2 className="accordion-header" id="panelsStayOpen-headingOne">
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
            <h2 className="accordion-header" id="panelsStayOpen-headingTwo">
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
            <h2 className="accordion-header" id="panelsStayOpen-headingThree">
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
            <h2 className="accordion-header" id="panelsStayOpen-heading4">
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
            <h2 className="accordion-header" id="panelsStayOpen-heading5">
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
  );
}
