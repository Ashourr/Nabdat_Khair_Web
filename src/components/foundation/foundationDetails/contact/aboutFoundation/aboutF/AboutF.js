"use client";
import { useLocale, useTranslations } from "next-intl";
import React from "react";
import "../aboutFoundation.css";

export default function AboutF() {
  const locale = useLocale();
  const t = useTranslations("foundation-Details");
  return (
    <div>
      <div className="title">
        <h2>{t("aboutUs")}</h2>
        <p>
          {locale === "en"
            ? "A charitable foundation working to serve the community and support the most needy groups through sustainable humanitarian programs and effective initiatives that make a real impact on beneficiaries' lives."
            : "مؤسسة خيرية تعمل على خدمة المجتمع ودعم الفئات الأكثر احتياجاً من خلال برامج إنسانية مستدامة ومبادرات فعالة تُحدث أثراً حقيقياً في حياة المستفيدين."}
        </p>
      </div>
    </div>
  );
}
