"use client";
import React from "react";
import "./about.css";
import { useLocale, useTranslations } from "next-intl";
import { useRouter } from "next/navigation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";

export default function AboutHome() {
  const locale = useLocale();
  const t = useTranslations("about");

  const router = useRouter();
  return (
    <div className="about">
      <div className="container">
        <button onClick={() => router.back()} className="back-btn">
          <FontAwesomeIcon
            icon={locale === "en" ? faArrowLeft : faArrowRight}
            className={`back ${locale}`}
          />
          {locale === "en" ? "Back" : "رجوع"}
        </button>
        <div className="row">
          {/* ===== Content ===== */}
          <div className="col-12 col-md-6">
            <div className="about-content">
              <h2>{t("title")}</h2>
              <p>
                {locale === "en"
                  ? "Nabdah Khair is a digital platform that brings together donors, charitable organizations, and volunteers in one place, aiming to simplify access to humanitarian cases and support those in need with the highest level of transparency and trust."
                  : "نبضة خير هي منصة رقمية تجمع المتبرعين، المؤسسات الخيرية، والمتطوعين في مكان واحد، بهدف تسهيل الوصول إلى الحالات الإنسانية ودعم المحتاجين بأعلى مستوى من الشفافية والموثوقية."}
              </p>
              <p>
                {locale === "en"
                  ? "We believe that الخير يبدأ بنبضة — goodness starts with a heartbeat, and that every contribution, no matter how small, can make a real difference in the lives of others"
                  : "نؤمن أن الخير يبدأ بنبضة، وأن كل مساهمة مهما كانت صغيرة قادرة على إحداث فرق حقيقي في حياة الآخرين."}
              </p>
            </div>
          </div>

          {/* ===== Video ===== */}
          <div className="col-12 col-md-6">
            <div className="about-video">
              <div className="video-video">
                <iframe
                  src="https://www.youtube.com/embed/80YjMBYprc4"
                  title="YouTube video player"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
