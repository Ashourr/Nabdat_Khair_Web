"use client";
import React from "react";
import Image from "next/image";
import "./modelShara.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSquareFacebook,
  faSquareWhatsapp,
  faTelegram,
} from "@fortawesome/free-brands-svg-icons";
import { faLink } from "@fortawesome/free-solid-svg-icons";
import toast from "react-hot-toast";
import { useLocale, useTranslations } from "next-intl";
export default function ModelShare({
  isOpen,
  onClose,
  name,
  image,
  shareLinks,
  copyLink,
}) {
  
  const t = useTranslations("foundation-Details");
  const locale = useLocale();
  if (!isOpen) return null;

  return (
    <div className="share-overlay" onClick={onClose}>
      <div className="share-popup" onClick={(e) => e.stopPropagation()}>
        {/* Header Info */}
        <div className="share-header-info">
          {image && (
            <Image
              src={image}
              alt={name}
              width={60}
              height={60}
              className="share-img-preview"
            />
          )}
          <h5>{name}</h5>
        </div>

        <h4>{t("Share-with")}:</h4>

        <div className="share-links">
          <a href={shareLinks.facebook} target="_blank" rel="noreferrer">
            <FontAwesomeIcon
              icon={faSquareFacebook}
              className="facebook-icon i"
            />
            {t("Facebook")}
          </a>
          <a href={shareLinks.whatsapp} target="_blank" rel="noreferrer">
            <FontAwesomeIcon
              icon={faSquareWhatsapp}
              className="whatsapp-icon i"
            />
            {t("WhatsApp")}
          </a>
          <a href={shareLinks.telegram} target="_blank" rel="noreferrer">
            <FontAwesomeIcon icon={faTelegram} className="telegram-icon i" />
            {t("Telegram")}
          </a>
          <button
            onClick={() => {
              copyLink();
              toast.success(
                locale === "en" ? "Link Copied ✅" : "تم نسخ الرابط ✅",
              );
            }}
            className="copy-link"
          >
            <FontAwesomeIcon icon={faLink} className="link-icon i" />
            {t("Copy-Link")}
          </button>
        </div>

        <button className="close-btn" onClick={onClose}>
          {t("Close")}
        </button>
      </div>
    </div>
  );
}
