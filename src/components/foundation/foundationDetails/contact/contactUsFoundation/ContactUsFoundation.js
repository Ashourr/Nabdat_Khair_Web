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
import "./contactUsFoundation.css";
import Map from "./Map.jsx";
import { useLocale, useTranslations } from "next-intl";
import { usePathname, useRouter } from "next/navigation";

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
      <div className={`contact`}>
        <div className="">
            <div className="mb-3  form-box">
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
            <div className="col-12 mb-3">
              <div className="info-box">
                <h5 className="mb-3">{t("infoTitle")}</h5>

                <div className="cont-item mb-3">
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

                <div className="cont-item mb-3">
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
          {/* <div className="row"> */}
            <div className="col-12 mb-3">
              <div className="OurBranches">
                <h3 className="mb-3">{t("title-ourBranches")}</h3>
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
            <div className="col-12 mb-3">
              <div className="map">
                <Map />
              </div>
            </div>
          {/* </div> */}
        {/* </div> */}
      </div>
  );
}
