"use client";
import React from "react";
import "./headerFoundation.css";
import Image from "next/image";
import { useLocale, useTranslations } from "next-intl";
export default function Header() {
  const locale = useLocale();

  return (
    <div className="headerFoundation">
      <div className="img-ba"></div>
      <div className="img-logo">
        <div>
          <Image src="/images/0.png" alt="fba" width={100} height={100} />
        </div>
        <h3>
          {locale === "en"
            ? "Mosses Yaqoub Foundation for the Heart"
            : "مؤسسة مجدي يعقوب للقلب"}
        </h3>
      </div>
    </div>
  );
}
