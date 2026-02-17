"use client";
import React from "react";
import "./ourStory.css";
import { useLocale, useTranslations } from "next-intl";
export default function OurStory() {
  const t = useTranslations("about");
  const locale = useLocale();

  const story = [
    {
      id: 1,
      title:
        locale === "ar"
          ? "تنظيم العمل الخيري الرقمي"
          : "Organizing Digital Charity Work",
      description:
        locale === "ar"
          ? "تجميع المبادرات والحالات والمؤسسات في منصة واحدة منظمة وسهلة الوصول."
          : "Gathering initiatives, cases, and institutions on a single organized and easily accessible platform.",
    },
    {
      id: 2,
      title:
        locale === "ar"
          ? "تسهيل وصول الدعم للمحتاجين"
          : "Facilitating Access to Support for Those in Need",
      description:
        locale === "ar"
          ? "ربط المتبرعين بالحالات الإنسانية الحقيقية بسرعة وسهولة."
          : "Connecting donors with real humanitarian cases quickly and easily.",
    },
    {
      id: 3,
      title:
        locale === "ar"
          ? "تعزيز الشفافية والمصداقية"
          : "Enhancing Transparency and Credibility",
      description:
        locale === "ar"
          ? "ضمان وضوح مسار التبرعات وتتبع الأثر الحقيقي لكل مساهمة."
          : "Ensuring clarity in the donation process and tracking the real impact of each contribution.",
    },
    {
      id: 4,
      title:
        locale === "ar"
          ? "تمكين المؤسسات الخيرية"
          : "Empowering Charitable Organizations",
      description:
        locale === "ar"
          ? "توفير أدوات تقنية لإدارة الحملات والحالات بكفاءة واحترافية."
          : "Providing technical tools to manage campaigns and cases efficiently and professionally.",
    },
    {
      id: 5,
      title:
        locale === "ar"
          ? "دعم المتطوعين وتنظيم جهودهم"
          : "Supporting Volunteers and Organizing Their Efforts",
      description:
        locale === "ar"
          ? "تسهيل المشاركة المجتمعية وتنظيم العمل الميداني بشكل فعّال."
          : "Facilitating community participation and organizing field work effectively.",
    },
    {
      id: 6,
      title:
        locale === "ar"
          ? "نشر ثقافة العطاء والعمل الإنساني"
          : "Spreading a Culture of Giving and Humanitarian Work",
      description:
        locale === "ar"
          ? "تعزيز قيم التعاون والتكافل الاجتماعي في المجتمع."
          : "Promoting values of cooperation and social solidarity in society.",
    },
  ];
  return (
    <div className="our-story">
      <div className="container">
        <div className="title">
          <h3>{t("title-story")}</h3>
          <h5 className={`${locale}`}>{t("des-story")}</h5>
          <h4 className={`${locale}`}>{t("our-story")}</h4>
        </div>
        <div className="row">
          {story.map((item, index) => (
            <div className="col-12 col-md-6 col-lg-4 mb-4" key={item.id}>
              <div className="colg-itme">
                <p className="namber">{index + 1}</p>
                <h6 className={`${locale}`}>{item.title}</h6>
                <p className="description">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
