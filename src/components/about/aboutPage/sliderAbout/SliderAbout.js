"use client";
import React from "react";
import "./sliderAbout.css";
import { useLocale, useTranslations } from "next-intl";
import Image from "next/image";
export default function SliderAbout() {
  const locale = useLocale();
  //   const t = useTranslations("slider-about");

  const images = [
    {
      imgurl: "/images/0.png",
    },
    {
      imgurl: "/images/6.png",
    },
    {
      imgurl: "/images/7.png",
    },
    {
      imgurl: "/images/8.png",
    },
    {
      imgurl: "/images/56.png",
    },
    {
      imgurl: "/images/59.png",
    },
    {
      imgurl: "/images/0.png",
    },
    {
      imgurl: "/images/6.png",
    },
    {
      imgurl: "/images/7.png",
    },
    {
      imgurl: "/images/8.png",
    },
  ];
  const enableScroll = images.length >= 3;
  return (
    <div className={`sliderabout`}>
      <div className="container">
        <div className="titile">
          <h3>
            {locale === "en"
              ? "Our Partners & Supporters"
              : "شركاؤنا والداعمون"}
          </h3>
          <p>
            {locale === "en"
              ? "We are proud to partner with organizations that share our values to support goodness and create real impact."
              : "فخر بشراكتنا مع جهات تشاركنا القيم الإنسانية لدعم الخير وصناعة الأثر."}
          </p>
        </div>
        <div className="mycustom-marque">
          <div className="scrolling-wrap">
            <div
              className={`comm ${locale} ${enableScroll ? "animate" : "no-animate"}`}
            >
              {images.map((image, index) => (
                <div className={`img ${locale}`} key={index}>
                  <Image
                    src={image.imgurl}
                    alt="slider"
                    width={150}
                    height={150}
                  />
                </div>
              ))}
            </div>
            <div
              className={`comm ${locale} ${enableScroll ? "animate" : "no-animate"}`}
            >
              {images.map((image, index) => (
                <div className={`img ${locale}`} key={index}>
                  <Image
                    src={image.imgurl}
                    alt="slider"
                    width={150}
                    height={150}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
