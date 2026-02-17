"use client";
import { useLocale, useTranslations } from "next-intl";
import React from "react";
import "../aboutFoundation.css"
export default function OurGoals() {
  const locale = useLocale();
  const t = useTranslations("foundation-Details");
  return (
    <div className="row mb-5">
      <h3>{locale === "en" ? "Our Goals" : "أهدافنا"}</h3>
      <div className="col-12 col-md-6">
        <div className="vision-itme ">
          <h5>
            {locale === "en"
              ? " Supporting the Most Needy Groups"
              : " دعم الفئات الأكثر احتياجاً"}
          </h5>
          <p>
            {locale === "en"
              ? "Providing basic aid to the most vulnerable groups in society."
              : " تقديم المساعدات الأساسية للفئات الأكثر ضعفاً في المجتمع."}
          </p>
        </div>
      </div>
      <div className="col-12 col-md-6">
        <div className="vision-itme ">
          <h5>
            {locale === "en"
              ? "Supporting the Most Needy Groups"
              : " دعم الفئات الأكثر احتياجاً"}
          </h5>
          <p>
            {locale === "en"
              ? "Providing basic aid to the most vulnerable groups in society."
              : " تقديم المساعدات الأساسية للفئات الأكثر ضعفاً في المجتمع."}
          </p>
        </div>
      </div>
      <div className="col-12 col-md-6 ">
        <div className="vision-itme ">
          <h5>
            {locale === "en"
              ? "Supporting the Most Needy Groups"
              : " دعم الفئات الأكثر احتياجاً"}
          </h5>
          <p>
            {locale === "en"
              ? "Providing basic aid to the most vulnerable groups in society."
              : " تقديم المساعدات الأساسية للفئات الأكثر ضعفاً في المجتمع."}
          </p>
        </div>
      </div>
      <div className="col-12 col-md-6">
        <div className="vision-itme ">
          <h5>
            {locale === "en"
              ? "Supporting the Most Needy Groups"
              : " دعم الفئات الأكثر احتياجاً"}
          </h5>
          <p>
            {locale === "en"
              ? "Providing basic aid to the most vulnerable groups in society."
              : " تقديم المساعدات الأساسية للفئات الأكثر ضعفاً في المجتمع."}
          </p>
        </div>
      </div>
    </div>
  );
}
