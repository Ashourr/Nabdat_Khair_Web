"use client";
import { faCalendarDays } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "../aboutFoundation.css"
import { useLocale, useTranslations } from "next-intl";

export default function Timeline() {
      const locale = useLocale();
      const t = useTranslations("foundation-Details");
  return (
    <div className="Timeline">
      <h3>{t("timeline-title")}</h3>
      <p>{t("timeline-description")}</p>
      <div>
        <FontAwesomeIcon icon={faCalendarDays} className="i" />
        <h6>
          سنه التاسيس : <span>2022</span>
        </h6>
      </div>
      <div>
        <FontAwesomeIcon icon={faCalendarDays} className="i" />
        <h6>
          أول توسّع : <span>2023</span>
        </h6>
      </div>
      <div>
        <FontAwesomeIcon icon={faCalendarDays} className="i" />
        <h6>
          التحول الرقمي : <span>2025</span>
        </h6>
      </div>
    </div>
  );
}
