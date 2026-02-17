"use client"; // مهم جداً في Next.js لأننا نستخدم hooks
import React, { useState, useEffect } from "react";
import "./sitebarCasesDetails.css";
import { faStopwatch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ModelShare from "@/components/foundation/foundationDetails/sitebar/modelShara/ModelShara";
import ModelDonate from "@/components/foundation/foundationDetails/sitebar/modelDonate/ModelDonate";
import { useLocale, useTranslations } from "next-intl";
import Image from "next/image";
export default function SitebarCasesDetails() {
  const [progress, setProgress] = useState(0); // نبدأ من الصفر
  const targetPercent = 50; // النسبة المستهدفة

  useEffect(() => {
    const timer = setTimeout(() => {
      setProgress(targetPercent);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  const locale = useLocale();
  // const t = useTranslations("foundation-Details");
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
      ? `Check this foundation: ${"Al-Amal Charity Foundation"}`
      : `شوف المؤسسة دي: ${"مؤسسة الأمل الخيرية"}`;

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
    <div className="sitebar-cases-details">
      <div className="content-menu">
        {/* عرض النسبة فوق البار */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginBottom: "5px",
          }}
        >
          <span
            className="percent"
            style={{ fontWeight: "bold", color: "#1b8bc0" }}
          >
            {progress}%
          </span>
        </div>

        <div className="progress-bg">
          <div
            className="progress-fill"
            style={{
              width: `${progress}%`,
            }}
          ></div>
        </div>

        <div className="money">
          <div className="money-1">
            <p>{locale === "en" ? "Collected" : "تم جمع"}</p>
            <h5>{locale === "en" ? "15000 EPG" : "15000 ج.م"}</h5>
          </div>
          <div className="money-2">
            <p>{locale === "en" ? "Required" : "مطلوب"}</p>
            <h5>{locale === "en" ? "15000 EPG" : "15000 ج.م"}</h5>
          </div>
        </div>

        <div className="Status-data">
          <div className="Status-data-1">
            <div>
              <FontAwesomeIcon icon={faStopwatch} className="i" />
            </div>
            <div>
              <h6>{locale === "en" ? "7 days left" : "متبقي 7 ايام"}</h6>
              <p>{locale === "en" ? "Ends on 12/6" : "ينتهي في 12/6"}</p>
            </div>
          </div>
          <div className="Status-data-2">
            <p>{locale === "en" ? "Ends on 10-6" : "تاريخ الانتهاء 10-6"}</p>
          </div>
        </div>

        <div className="shara">
          <div className="btn-1">
            <button className="shara" onClick={() => setOpenShare(true)}>
              {locale === "en" ? "Share" : "شارك"}
            </button>
          </div>
          <div className="btn-2">
            <button className="donate" onClick={() => setOpenDonate(true)}>
              {locale === "en" ? "Donate" : "تبرع"}
            </button>
          </div>
        </div>
      </div>
      {/* <div className="content-share"></div> */}
      <div className="Donors">
        <div className="title">
          <h6>{locale === "en" ? "Donors" : "المتبرعين"}</h6>
          <p>{locale === "en" ? "125 Donors" : "125 متبرع"}</p>
        </div>
        <div className="itmes">
          <div className="itme">
            <div className="info">
              <div>
                <Image
                  src={"/images/team-0.webp"}
                  alt="avatar"
                  width={50}
                  style={{ borderRadius: "50%" }}
                  height={50}
                />
              </div>
              <div>
                <h5>{locale === "en" ? "Donor name" : "اسم المتبرع"}</h5>
                <p>{locale === "en" ? "1 hour ago" : "منذ ساعه"}</p>
              </div>
            </div>
            <h6>{locale === "en" ? "1200 EGP" : "1200 ج.م"}</h6>
          </div>
          <div className="itme">
            <div className="info">
              <div>
                <Image
                  src={"/images/team-0.webp"}
                  alt="avatar"
                  width={50}
                  style={{ borderRadius: "50%" }}
                  height={50}
                />
              </div>
              <div>
                <h5>{locale === "en" ? "Donor name" : "اسم المتبرع"}</h5>
                <p>{locale === "en" ? "1 hour ago" : "منذ ساعه"}</p>
              </div>
            </div>
            <h6>{locale === "en" ? "1200 EGP" : "1200 ج.م"}</h6>
          </div>
          <div className="itme">
            <div className="info">
              <div>
                <Image
                  src={"/images/team-0.webp"}
                  alt="avatar"
                  width={50}
                  style={{ borderRadius: "50%" }}
                  height={50}
                />
              </div>
              <div>
                <h5>{locale === "en" ? "Donor name" : "اسم المتبرع"}</h5>
                <p>{locale === "en" ? "1 hour ago" : "منذ ساعه"}</p>
              </div>
            </div>
            <h6>{locale === "en" ? "1200 EGP" : "1200 ج.م"}</h6>
          </div>
          <div className="itme">
            <div className="info">
              <div>
                <Image
                  src={"/images/team-0.webp"}
                  alt="avatar"
                  width={50}
                  style={{ borderRadius: "50%" }}
                  height={50}
                />
              </div>
              <div>
                <h5>{locale === "en" ? "Donor name" : "اسم المتبرع"}</h5>
                <p>{locale === "en" ? "1 hour ago" : "منذ ساعه"}</p>
              </div>
            </div>
            <h6>{locale === "en" ? "1200 EGP" : "1200 ج.م"}</h6>
          </div>
          <div className="itme">
            <div className="info">
              <div>
                <Image
                  src={"/images/team-0.webp"}
                  alt="avatar"
                  width={50}
                  style={{ borderRadius: "50%" }}
                  height={50}
                />
              </div>
              <div>
                <h5>{locale === "en" ? "Donor name" : "اسم المتبرع"}</h5>
                <p>{locale === "en" ? "1 hour ago" : "منذ ساعه"}</p>
              </div>
            </div>
            <h6>{locale === "en" ? "1200 EGP" : "1200 ج.م"}</h6>
          </div>
        </div>
      </div>

      <ModelShare
        isOpen={openShare}
        onClose={() => setOpenShare(false)}
        name={"اسم المؤسسة"}
        image={""}
        shareLinks={shareLinks}
        copyLink={copyLink}
        locale={locale}
      />
      <ModelDonate isOpen={openDonate} onClose={() => setOpenDonate(false)} />
    </div>
  );
}
