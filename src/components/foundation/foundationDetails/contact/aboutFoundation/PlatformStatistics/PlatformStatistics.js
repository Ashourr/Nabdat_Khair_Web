"use client";
import { useLocale, useTranslations } from "next-intl";
import React from "react";
import "./platformStatistics.css";
export default function PlatformStatistics() {
  const locale = useLocale();
  const t = useTranslations("foundation-Details");
  return (
    <div className="Platform-Statistics">
      <div className="title">
        <h3>{t("PlatformStatistics")}</h3>
        <p>{t("PlatformStatistics-description")}</p>
      </div>
      <div className="row">
        <div className="col-12 col-sm-6 col-md-3">
          <div className="itme ">
            <h4>+125</h4>
            <h6>{t("TotalCases")}</h6>
          </div>
        </div>
        <div className="col-12 col-sm-6 col-md-3">
          <div className="itme ">
            <h4>+125</h4>
            <h6>{t("TotalCampaigns")}</h6>
          </div>
        </div>
        <div className="col-12 col-sm-6 col-md-3">
          <div className="itme ">
            <h4>+125</h4>
            <h6>{t("TotalVolunteers")}</h6>
          </div>
        </div>
        <div className="col-12 col-sm-6 col-md-3">
          <div className="itme ">
            <h4>+125</h4>
            <h6>{t("TotalDonations")}</h6>
          </div>
        </div>
      </div>
    </div>
  );
}
