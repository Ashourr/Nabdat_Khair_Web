"use client";
import {
  faBridge,
  faCalendarPlus,
  faCircle,
  faCircleChevronDown,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import React from "react";
import "./headerCasesDetails.css";
import { useLocale } from "next-intl";

export default function HeaderCasesDetails() {
  const locale = useLocale();
  return (
    <div className="header-cases-details-contact">
      <div className="header-cases-details">
        <div className="image">
          <Image
            src="/images/cases-1.webp"
            alt="...."
            fill
            loading="lazy"
            quality={90}
            style={{ objectFit: "cover", objectPosition: "center", zIndex: 1 }}
          />
          <div className="status">
            <span className="span-1">
              <FontAwesomeIcon icon={faCircle} />
              {locale === "en" ? "Active" : "نشط"}
            </span>
            <span className="span-2">
              <FontAwesomeIcon icon={faCircleChevronDown} />
              {locale === "en" ? "Verified" : " موثق"}
            </span>
          </div>
        </div>
        <h2>
          {locale === "en"
            ? "Child treatment status Amr"
            : "حالة علاج الطفل عمر"}
        </h2>
        <div className="info">
          <h6>
            <FontAwesomeIcon icon={faLocationDot} className="i" />
            <span>
              {locale === "en" ? "Egypt - Mansoura" : "القاهره - المنصورة"}
            </span>
          </h6>
          <h6>
            <FontAwesomeIcon icon={faCalendarPlus} className="i" />
            <span>{locale === "en" ? "status medical" : "حاله طبية"}</span>
          </h6>
          <h6>
            <FontAwesomeIcon icon={faBridge} className="i" />
            <span>
              {locale === "en"
                ? "Amel Charity Foundation"
                : "موسسه الامل الخيريه"}
            </span>
          </h6>
        </div>
      </div>
    </div>
  );
}
