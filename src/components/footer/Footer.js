"use client";
import React from "react";
import "./footer.css";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faClock,
  faEnvelope,
  faLocationDot,
  faPhone,
  faRightLong,
} from "@fortawesome/free-solid-svg-icons";
import { useLocale, useTranslations } from "next-intl";
import { usePathname, useRouter } from "next/navigation";
export default function Footer() {
  const locale = useLocale();
  const t = useTranslations("footer");

  const pathname = usePathname();
  const isDashboardPage =
    pathname.startsWith("/dashboard") ||
    pathname.startsWith("/ar/dashboard") ||
    pathname.startsWith("/en/dashboard");
  return (
    <>
      {!isDashboardPage && (
        <div className="footer">
          <div className="container">
            <div className="row">
              <div className="col-12 col-md-6 col-lg-3">
                <div className="content">
                  <h4 className={`${locale}`}>{t("title")}</h4>
                  <p>{t("decrption")}</p>
                  <Link href={"#"} className="all">
                    {t("btn1")}
                    <FontAwesomeIcon icon={faRightLong} className="i" />
                  </Link>
                </div>
              </div>
              <div className="col-12 col-md-6 col-lg-3">
                <div className="pages-link">
                  <h4 className={`${locale}`}>{t("title2")}</h4>
                  <div>
                    <Link href={"#"}>{t("link1")}</Link>
                  </div>
                  <div>
                    <Link href={"#"}>{t("link2")}</Link>
                  </div>
                  <div>
                    <Link href={"#"}>{t("link3")}</Link>
                  </div>
                  <div>
                    <Link href={"#"}>{t("link4")}</Link>
                  </div>
                  <div>
                    <Link href={"#"}>{t("link5")}</Link>
                  </div>
                  <Link href={"#"} className="all">
                    {t("btn2")}
                    <FontAwesomeIcon icon={faRightLong} className="i" />
                  </Link>
                </div>
              </div>
              <div className="col-12 col-md-6 col-lg-3">
                <div className="services-link">
                  <h4 className={`${locale}`}>{t("title3")}</h4>
                  <div>
                    <Link href={"#"}>{t("link6")}</Link>
                  </div>
                  <div>
                    <Link href={"#"}>{t("link7")}</Link>
                  </div>
                  <div>
                    <Link href={"#"}>{t("link8")}</Link>
                  </div>
                  <div>
                    <Link href={"#"}>{t("link9")}</Link>
                  </div>
                  <Link href={"#"} className="all">
                    {t("btn3")}
                    <FontAwesomeIcon icon={faRightLong} className="i" />
                  </Link>
                </div>
              </div>
              <div className="col-12 col-md-6 col-lg-3">
                <h4 className={`${locale}`}>{t("title4")}</h4>
                <div>
                  <a
                    href={"tel:+201095348649"}
                    target="_blank"
                    className="link"
                  >
                    <FontAwesomeIcon icon={faPhone} />
                    +965*******
                  </a>
                </div>
                <div>
                  <a
                    href={"mailto:info@email.com"}
                    target="_blank"
                    className="link"
                  >
                    <FontAwesomeIcon icon={faEnvelope} />
                    info@email.com
                  </a>
                </div>
                <div>
                  <a href={"#"} target="_blank" className="link">
                    <FontAwesomeIcon icon={faLocationDot} />
                    شارع الثورة، القاهرة، مصر
                  </a>
                </div>
                <div>
                  <a href={"#"} target="_blank" className="link">
                    <FontAwesomeIcon icon={faClock} />
                    من السبت إلى الخميس: 9 صباحًا – 5 مساءً
                  </a>
                </div>
                <Link href={"#"} className="all">
                  {t("btn4")}
                  <FontAwesomeIcon icon={faRightLong} className="i" />
                </Link>
              </div>
              <div className="footer-bottom">
                <p className="copy">
                  {locale === "ar" ? (
                    <>
                      جميع الحقوق محفوظة &copy; {new Date().getFullYear()} —{" "}
                      <span>Nabdat Kheir</span>
                    </>
                  ) : (
                    <>
                      Copyright &copy; {new Date().getFullYear()} —{" "}
                      <span>Nabdat Kheir.</span> All Rights Reserved
                    </>
                  )}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
