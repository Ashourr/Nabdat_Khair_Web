"use client";
import React from "react";
import "./headerPage.css";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { useLocale, useTranslations } from "next-intl";
import Image from "next/image";

export default function HeaderPage({ title, link, suptitle, bgImg }) {
  const locale = useLocale();
  const t = useTranslations("cases");

  return (
    <div className="headerPage">
      <Image
        src={bgImg}
        alt={title}
        fill
        priority
        style={{ objectFit: "cover", objectPosition: "center" , zIndex: -1 }}
        quality={80}
      />
      <div>
        <h2>{title}</h2>
        <div className="link">
          <Link href="/" aria-label={link}>
            <span>{link}</span>
            <FontAwesomeIcon className={`i ${locale}`} icon={faArrowRight} />
          </Link>
          <h6>{suptitle}</h6>
        </div>
      </div>
    </div>
  );
}
