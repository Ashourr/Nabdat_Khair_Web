"use client";
import React from "react";
import "./slider.css";
import { useLocale, useTranslations } from "next-intl";
export default function Slider() {
  const locale = useLocale();
  const t = useTranslations("slider");
  return (
    <div className={`slider`}>
      <div className="mycustom-marque">
        <div className="scrolling-wrap">
          <div className={`comm ${locale}`}>
            <div className={`cmn-textslide ${locale}`}>
              <h3 className={`${locale}`}>{t("title1")}</h3>
            </div>
            <div className={`cmn-textslide ${locale}`}>
              <h3 className={`${locale}`}>{t("title2")}</h3>
            </div>
            <div className={`cmn-textslide ${locale}`}>
              <h3 className={`${locale}`}>{t("title3")}</h3>
            </div>
            <div className={`cmn-textslide ${locale}`}>
              <h3 className={`${locale}`}>{t("title1")}</h3>
            </div>
          </div>
          <div className={`comm ${locale}`}>
            <div className={`cmn-textslide ${locale}`}>
              <h3 className={`${locale}`}>{t("title1")}</h3>
            </div>
            <div className={`cmn-textslide ${locale}`}>
              <h3 className={`${locale}`}>{t("title2")}</h3>
            </div>
            <div className={`cmn-textslide ${locale}`}>
              <h3 className={`${locale}`}>{t("title3")}</h3>
            </div>
            <div className={`cmn-textslide ${locale}`}>
              <h3 className={`${locale}`}>{t("title1")}</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
