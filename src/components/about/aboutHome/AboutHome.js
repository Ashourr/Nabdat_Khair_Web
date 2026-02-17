"use client";
import React, { useState } from "react";
import "./about.css";
import Link from "next/link";
import { useLocale, useTranslations } from "next-intl";
import Image from "next/image";
import imgbg from "../../../../public/images/bg-about-viodes.webp";

export default function AboutHome() {
  const locale = useLocale();
  const t = useTranslations("about");

  const [mouse, setMouse] = useState({ x: 0, y: 0 });
  return (
    <div
      className="about-home"
      style={{
        "--mouse-x": `${mouse.x}px`,
        "--mouse-y": `${mouse.y}px`,
      }}
      onMouseMove={(e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        setMouse({
          x: e.clientX - rect.left,
          y: e.clientY - rect.top,
        });
      }}
    >
      <div className="container">
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
              <Link href={`/${locale}/about`} className="btn-about">
                {t("btn")}
              </Link>
            </div>
          </div>

          {/* ===== Video ===== */}
          <div className="col-12 col-md-6">
            <div className="about-video">
              <div className="bg-animation-wrapper">
                <Image
                  src={imgbg}
                  alt="background shape"
                  fill
                  quality={85}
                  loading="lazy"
                  className="rotating-bg"
                />
              </div>
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
