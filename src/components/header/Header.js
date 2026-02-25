"use client";
import React from "react";
import "./header.css";
import Link from "next/link";
import { useLocale, useTranslations } from "next-intl";
import Image from "next/image";
import headerImg from "../../../public/images/header.webp";
export default function Header() {
  const t = useTranslations("header");
  const locale = useLocale();
  return (
    <header className={`header ${locale}`}>
      <Image
        src={headerImg}
        alt="Header"
        fill
        quality={75}
        priority
        style={{ objectFit: "cover", objectPosition: "top" }}
        placeholder="blur"
      />
      <div className="container">
        <div className="header-content">
          <h1 className={`${locale}`}>
            {locale === "en"
              ? "Together, we create change… and give hope to those in need"
              : "معًا نصنع فرقًا… ونمنح الأمل لمن يحتاجه"}
          </h1>
          <p className={` ${locale}`}>
            {locale === "en"
              ? "Nabdah Khair is a comprehensive platform that brings together donors, charitable organizations, and volunteers in one place to support humanitarian cases and transform the lives of thousands of families through a single act of kindness."
              : "نبضة خير هي منصة شاملة تجمع بين المتبرعين، المؤسسات، والمتطوعين في مكان واحد لدعم الحالات الإنسانية وتغيير حياة آلاف الأسر بلمسة خير."}
          </p>
          <div className="header-buttons">
            <Link href={`/${locale}/cases`} className={`btn-1 ${locale}`}>
              {t("btn1")}
            </Link>
            <Link href={`/${locale}/calculate_zakat`} className={`btn-2 ${locale}`}>
              {t("btn2")}
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
