"use client";
import React from "react";
import "./video.css";
import Link from "next/link";
import { useLocale, useTranslations } from "next-intl";
export default function Video() {
  const locale = useLocale();
  const t = useTranslations("video");
  return (
    <div className="video">
      <div className="video-aitm">
        <video autoPlay muted loop width={"100%"}>
          <source src={"/images/education.mp4"} type="video/mp4" />
        </video>
      </div>
      <div className="content">
        <div className="cont">
          <h2>{t("title")}</h2>
          <p className="p1">{t("description")}</p>
          <p className="p2">{t("supported")}</p>
          <div className="links-btn">
            <Link href="#" className="btn-1">
              {t("btn-1")}
            </Link>
            <Link href="#" className="btn-2">
              {t("btn-2")}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
