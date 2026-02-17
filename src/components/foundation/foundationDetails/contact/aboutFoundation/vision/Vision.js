"use client";
import { useLocale, useTranslations } from "next-intl";
import React from "react";
import "../aboutFoundation.css"
export default function Vision() {
  const locale = useLocale();
  const t = useTranslations("foundation-Details");
  return (
    <div className="row mb-5">
      <h3>{t("vision-title")}</h3>
      <div className="col-12 col-md-4">
        <div className="vision-itme">
          <h5>{t("Vision")}</h5>
          <p>
            {locale === "en"
              ? "A humanitarian future based on justice and social solidarity."
              : "مستقبل إنساني قائم على العدالة والتكافل الاجتماعي."}
          </p>
        </div>
      </div>
      <div className="col-12 col-md-4">
        <div className="vision-itme">
          <h5>{t("message")}</h5>
          <p>
            {locale === "en"
              ? "We work to provide effective humanitarian solutions that meet the needs of society and support the most vulnerable groups."
              : "نعمل على تقديم حلول إنسانية فعالة تلبّي احتياجات المجتمع وتدعم الفئات الأكثر ضعفاً."}
          </p>
        </div>
      </div>
      <div className="col-12 col-md-4">
        <div className="vision-itme">
          <h5>{t("CoreTask")}</h5>
          <p>
            {locale === "en"
              ? "We aim to manage resources and donations efficiently to ensure support reaches those who deserve it and achieves tangible results."
              : "نهدف إلى إدارة الموارد والتبرعات بكفاءة لضمان وصول الدعم لمستحقيه وتحقيق نتائج ملموسة."}
          </p>
        </div>
      </div>
    </div>
  );
}
