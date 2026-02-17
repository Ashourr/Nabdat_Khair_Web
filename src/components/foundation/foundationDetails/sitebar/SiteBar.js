"use client";
import React, { useEffect, useState } from "react";
import "./sitebar.css";
import { useLocale, useTranslations } from "next-intl";

import ModelShare from "./modelShara/ModelShara";
import ModelDonate from "./modelDonate/ModelDonate";

export default function SiteBar({ name, image }) {
  const locale = useLocale();
  const t = useTranslations("foundation-Details");
  const [openShare, setOpenShare] = useState(false);
  const [openDonate, setOpenDonate] = useState(false);
  const [url, setUrl] = useState("");

  useEffect(() => {
    if (typeof window !== "undefined") {
      setUrl(window.location.origin + window.location.pathname);
    }
  }, []);

  const title =
    locale === "en"
      ? `Check this foundation: ${name}`
      : `شوف المؤسسة دي: ${name}`;

  const shareLinks = {
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}&quote=${encodeURIComponent(title)}`,
    whatsapp: `https://api.whatsapp.com/send?text=${encodeURIComponent(title + " " + url)}`,
    twitter: `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(title)}`,
    telegram: `https://t.me/share/url?url=${encodeURIComponent(url)}&text=${encodeURIComponent(title)}`,
  };

  const copyLink = async () => {
    await navigator.clipboard.writeText(url);
  };

  return (
    <div className="sitebar-foundation">
      <div className="contact-sitebar">
        {/* Buttons Section */}
        <div className="shara">
          <div className="btn-1">
            <button className="shara" onClick={() => setOpenShare(true)}>
              {t("share")}
            </button>
          </div>
          <div className="btn-2">
            <button className="donate" onClick={() => setOpenDonate(true)}>
              {t("donate")}
            </button>
          </div>
        </div>

        {/* Authority Info Section */}
        <div className="Authority">
          <h6>
            {t("License-Number")} : <br /> <span>12345678</span>
          </h6>
          <h6>
            {t("Supervisory-Authority")} : <br />
            <span>
              {locale === "en"
                ? "Ministry of Social Solidarity"
                : "وزارة التضامن الاجتماعي"}
            </span>
          </h6>
          <h6>
            {t("Legal-Authority")} : <br />
            <span>{locale === "en" ? "Certified ✅" : "معتمدة ✅"}</span>
          </h6>
        </div>
      </div>
      {/* Modal Component */}
      <ModelShare
        isOpen={openShare}
        onClose={() => setOpenShare(false)}
        name={name}
        image={image}
        shareLinks={shareLinks}
        copyLink={copyLink}
        locale={locale}
      />
      <ModelDonate isOpen={openDonate} onClose={() => setOpenDonate(false)} />
    </div>
  );
}
