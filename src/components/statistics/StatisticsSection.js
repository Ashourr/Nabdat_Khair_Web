"use client";

import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import "./statisticsSection.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useLocale, useTranslations } from "next-intl";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import imgbg from "../../../public/images/Statistic-section.webp";

/* ------------------ Count Hook ------------------ */
function useCountUp(end, duration = 10000, startCounting) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!startCounting) return;

    let start = 0;
    const increment = end / (duration / 16);

    const counter = setInterval(() => {
      start += increment;

      if (start >= end) {
        setCount(end);
        clearInterval(counter);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(counter);
  }, [end, duration, startCounting]);

  return count;
}

/* ------------------ Component ------------------ */
export default function StatisticsSection() {
  const t = useTranslations("Statistic-section");
  const locale = useLocale();

  const sectionRef = useRef(null);
  const [start, setStart] = useState(false);

  /* ---------- Intersection Observer ---------- */
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStart(true);
          observer.disconnect(); // يشتغل مرة واحدة بس
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  /* ---------- Counters ---------- */
  const count1 = useCountUp(42500, 2000, start);
  const count2 = useCountUp(234, 2000, start);
  const count3 = useCountUp(1230, 2000, start);
  const count4 = useCountUp(127, 2000, start);

  /* ---------- Number Formatter (حل الهيدرشن) ---------- */
  const formatNumber = (num) =>
    new Intl.NumberFormat(locale).format(num);

  return (
    <div className="Statistic-section" ref={sectionRef}>
      {/* -------- Background -------- */}
      <div className={`img-bg ${locale}`}>
        <Image
          src={imgbg}
          alt="Statistic-section-img"
          fill
          quality={75}
          loading="lazy"
          style={{ objectFit: "cover", objectPosition: "center" }}
        />
        <div className="content">
          <h2>{t("title")}</h2>
          <h5>{t("subtitle")}</h5>
          <p>{t("description")}</p>
        </div>
      </div>

      {/* -------- Statistics -------- */}
      <div className="Statistic">
        <div className="row">
          {/* -------- Left Content -------- */}
          <div className="col-12 col-md-6">
            <div className="boxs">
              <div className="box">
                <div className="box-title">
                  <div className="icon">
                    <FontAwesomeIcon
                      icon={faArrowLeft}
                      className={`i ${locale}`}
                    />
                  </div>
                  <h5>{t("title1")}</h5>
                </div>
                <p>{t("decrption1")}</p>
              </div>

              <div className="box">
                <div className="box-title">
                  <div className="icon">
                    <FontAwesomeIcon
                      icon={faArrowLeft}
                      className={`i ${locale}`}
                    />
                  </div>
                  <h5>{t("title2")}</h5>
                </div>
                <p>{t("decrption2")}</p>
              </div>
            </div>

            <div className="boxs">
              <div className="box">
                <div className="box-title">
                  <div className="icon">
                    <FontAwesomeIcon
                      icon={faArrowLeft}
                      className={`i ${locale}`}
                    />
                  </div>
                  <h5>{t("title3")}</h5>
                </div>
                <p>{t("decrption3")}</p>
              </div>

              <div className="box">
                <div className="box-title">
                  <div className="icon">
                    <FontAwesomeIcon
                      icon={faArrowLeft}
                      className={`i ${locale}`}
                    />
                  </div>
                  <h5>{t("title4")}</h5>
                </div>
                <p>{t("decrption4")}</p>
              </div>
            </div>
          </div>

          {/* -------- Right Numbers -------- */}
          <div className="col-12 col-md-6">
            <div className="boxs2">
              <div className="box box-1">
                <p>+{formatNumber(count1)}</p>
                <h4>{t("title5")}</h4>
                <h5>{t("decrption5")}</h5>
              </div>

              <div className="box box-2">
                <p>{formatNumber(count2)}</p>
                <h4>{t("title6")}</h4>
                <h5>{t("decrption6")}</h5>
              </div>
            </div>

            <div className="boxs2">
              <div className="box box-2">
                <p>{formatNumber(count3)}</p>
                <h4>{t("title7")}</h4>
                <h5>{t("decrption7")}</h5>
              </div>

              <div className="box box-1">
                <p>{formatNumber(count4)}</p>
                <h4>{t("title8")}</h4>
                <h5>{t("decrption8")}</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
