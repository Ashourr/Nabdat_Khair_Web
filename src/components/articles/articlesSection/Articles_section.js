"use client";
import React, { useEffect, useState } from "react";
import "./articles.css";
import { useLocale, useTranslations } from "next-intl";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faEye } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
import artImg1 from "../../../../public/images/art-1.webp";
export default function Articles_section() {
  const [active, setActive] = useState(3);
  const [width, setWidth] = useState(0);
  const t = useTranslations("Articles");
  const locale = useLocale();

  const articles = [
    {
      id: 1,
      image: "/images/art-1.webp",
      title_ar: "كيف تصنع تبرعاتك فرقًا حقيقيًا؟",
      title_en: "How to create a donation that stands out",
      description_ar:
        " من اختيار الحالة إلى وصول الدعم، تعرف على أثر مساهمتك خطوة بخطوة",
      description_en:
        " By choosing the situation to go to and receiving support, you understand the impact of your situation",
      type_ar: "خبار",
      type_en: "News",
      date: "24/10/2023",
    },
    {
      id: 2,
      image: "/images/art-2.webp",
      title_ar: "كيف تصنع تبرعاتك فرقًا حقيقيًا؟",
      title_en: "How to create a donation that stands out",
      description_ar:
        " من اختيار الحالة إلى وصول الدعم، تعرف على أثر مساهمتك خطوة بخطوة",
      description_en:
        " By choosing the situation to go to and receiving support, you understand the impact of your situation",
      type_ar: "خبار",
      type_en: "News",
      date: "24/10/2023",
    },
    {
      id: 3,
      image: "/images/art-1.webp",
      title_ar: "كيف تصنع تبرعاتك فرقًا حقيقيًا؟",
      title_en: "How to create a donation that stands out",
      description_ar:
        " من اختيار الحالة إلى وصول الدعم، تعرف على أثر مساهمتك خطوة بخطوة",
      description_en:
        " By choosing the situation to go to and receiving support, you understand the impact of your situation",
      type_ar: "خبار",
      type_en: "News",
      date: "24/10/2023",
    },
    {
      id: 4,
      image: "/images/art-2.webp",
      title_ar: "كيف تصنع تبرعاتك فرقًا حقيقيًا؟",
      title_en: "How to create a donation that stands out",
      description_ar:
        " من اختيار الحالة إلى وصول الدعم، تعرف على أثر مساهمتك خطوة بخطوة",
      description_en:
        " By choosing the situation to go to and receiving support, you understand the impact of your situation",
      type_ar: "خبار",
      type_en: "News",
      date: "24/10/2023",
    },
    {
      id: 5,
      image: "/images/art-1.webp",
      title_ar: "كيف تصنع تبرعاتك فرقًا حقيقيًا؟",
      title_en: "How to create a donation that stands out",
      description_ar:
        " من اختيار الحالة إلى وصول الدعم، تعرف على أثر مساهمتك خطوة بخطوة",
      description_en:
        " By choosing the situation to go to and receiving support, you understand the impact of your situation",
      type_ar: "خبار",
      type_en: "News",
      date: "24/10/2023",
    },
  ];

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="articles-section">
      <div className="container-fluid">
        <div className="title">
          <h2>{t("title")}</h2>
          <p>{t("description")}</p>
        </div>

        <div className={width > 767 ? "articles-boxs" : "articles-row"}>
          {articles.map((article, index) => (
            <div
              key={article.id}
              className={`articles-box ${
                width > 767 && active === article.id ? "glass-active" : ""
              }  articles-box${index} `}
              onMouseEnter={() => width > 767 && setActive(article.id)}
            >
              <Image
                src={article.image}
                alt="article image "
                fill
                style={{
                  objectFit: "cover",
                  objectPosition: "center",
                  zIndex: -1,
                }}
                quality={85}
                loading="lazy"
              />
              <FontAwesomeIcon icon={faEye} className="icon-aye" />
              <div className={`spans ${locale}`}>
                <span>
                  {locale === "en" ? article.type_ar : article.type_en}
                  {article.id}
                </span>
                <span>{article.date}</span>
              </div>
              <div className="content">
                <h5>{locale === "en" ? article.title_en : article.title_ar}</h5>
                <p>
                  {locale === "en"
                    ? article.description_en
                    : article.description_ar}
                </p>
                <div>
                  <Link href={`/${locale}/articles/${article.id}`}>
                    <FontAwesomeIcon
                      icon={faArrowLeft}
                      className={`i ${locale}`}
                    />
                    {t("btn-itme")}
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="link">
        <Link href={`/${locale}/articles`}>{t("btn")}</Link>
      </div>
    </div>
  );
}
