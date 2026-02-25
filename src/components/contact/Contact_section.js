"use client";
import React, { useState } from "react";
import Select from "react-select";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowLeft,
  faArrowRight,
  faClock,
  faEnvelope,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import "./Contact.css";
import Map from "./Map.jsx";
import { useLocale, useTranslations } from "next-intl";
import { usePathname, useRouter } from "next/navigation";
import HeaderPage from "../headerPage/HeaderPage";

export default function ContactUI() {
  const t = useTranslations("contact");
  const locale = useLocale();
  const [count, setCount] = useState(0);

  const [selectedOption, setSelectedOption] = useState(null);

  const optionsByLocale = (locale) => [
    { value: "", label: locale === "en" ? "Subject" : "الموضوع" },
    { value: "general", label: locale === "en" ? "General" : "عام" },
    { value: "help", label: locale === "en" ? "Help" : "مساعدة" },
    { value: "donation", label: locale === "en" ? "Inquiry" : "استفسار" },
    { value: "complaint", label: locale === "en" ? "Complaint" : "شكوي" },
    { value: "suggestion", label: locale === "en" ? "Suggestion" : "اقتراح" },
  ];

  const pathname = usePathname();
  const router = useRouter();
  const isHomePage =
    pathname === "/ar" || pathname === "/en" || pathname === "/";

    
  return (
    <>
      {!isHomePage && (
        <>
          <HeaderPage
            bgImg="/images/b1.jpeg"
            title={t("title-page")}
            link={t("link-page")}
            suptitle={t("suptitle-page")}
          />
        </>
      )}
      <div className={`contact`}>
        <div className="container">
          {isHomePage && (
            <div className="title">
              <h3>{t("title")}</h3>
              <p>{t("decrption")}</p>
            </div>
          )}
          {!isHomePage && (
            <button onClick={() => router.back()} className="back-btn">
              <FontAwesomeIcon
                icon={locale === "en" ? faArrowLeft : faArrowRight}
                className={`back ${locale}`}
              />
              {locale === "en" ? "Back" : "رجوع"}
            </button>
          )}
          <div className="row">
            <div className="col-12 col-lg-8  form-box">
              <form>
                <h5>{t("formTitle")}</h5>

                <div className="row-inputs">
                  <div style={{ flex: "1" }}>
                    <label>{t("username")} :</label>
                    <input type="text" placeholder={t("usernamePlaceholder")} />
                  </div>

                  <div style={{ flex: "1" }}>
                    <label>{t("email")} :</label>
                    <input type="email" placeholder="example@email.com" />
                  </div>
                </div>

                {/* الموضوع dropdown */}

                <label>{t("subject")} :</label>
                <div style={{ margin: "10px 0" }}>
                  <Select
                    instanceId="contact-subject-select" // تثبيت الـ ID لتجنب mismatch
                    value={selectedOption}
                    onChange={setSelectedOption}
                    options={optionsByLocale(locale)}
                    placeholder={locale === "en" ? "Subject" : "الموضوع"}
                    isClearable
                    className="my-select-container"
                    classNamePrefix="my-select"
                  />
                </div>

                {/* الرسالة */}
                <label>{t("message")} :</label>
                <textarea
                  maxLength={250}
                  onChange={(e) => setCount(e.target.value.length)}
                  placeholder={t("messagePlaceholder")}
                ></textarea>

                <div className="counter">{count}/250</div>

                {/* الزر */}
                <button type="button">{t("send")}</button>
              </form>
            </div>
            {/* Info */}
            <div className="col-12 col-lg-4">
              <div className="info-box">
                <h5>{t("infoTitle")}</h5>

                <div className="cont-item">
                  <div>
                    <FontAwesomeIcon icon={faPhone} />
                    <h6>{t("phone")} :</h6>
                  </div>
                  <a
                    href={"tel:+201095348649"}
                    target="_blank"
                    className="link"
                  >
                    +965*******
                  </a>
                </div>

                <div className="cont-item">
                  <div>
                    <FontAwesomeIcon icon={faEnvelope} />
                    <h6>{t("email")} :</h6>
                  </div>
                  <a
                    href={"mailto:info@email.com"}
                    target="_blank"
                    className="link"
                  >
                    info@email.com
                  </a>
                </div>
                <div className="cont-item">
                  <div>
                    <FontAwesomeIcon icon={faClock} />
                    <h6>{t("hours")}:</h6>
                  </div>
                  <a href={"#"} target="_blank" className="link">
                    {locale === "en"
                      ? "Mon - Fri: 9:00 AM - 5:00 PM"
                      : "الاثنين - السبت: 9:00 ص - 5:00 م"}
                  </a>
                </div>
              </div>
            </div>
          </div>
          {/* Map */}
          <div className="row">
            <div className="col-12 col-lg-4 mt-5 mb-5">
              <div className="OurBranches">
                <h3>{t("title-ourBranches")}</h3>
                <p>{t("decrption-ourBranches")}</p>
                <div className="itme">
                  <h4>فرع القاهرة</h4>
                  <h6>
                    العنوان : <span>القاهرة – مدينة نصر</span>
                  </h6>
                  <h6>
                    الهاتف : <span>+20 100 111 2222</span>
                  </h6>
                </div>
                <div className="itme">
                  <h4>فرع القاهرة</h4>
                  <h6>
                    العنوان : <span>القاهرة – مدينة نصر</span>
                  </h6>
                  <h6>
                    الهاتف : <span>+20 100 111 2222</span>
                  </h6>
                </div>
              </div>
            </div>
            <div className="col-12 col-lg-8 mt-5 mb-5">
              <div className="map">
                <Map />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
