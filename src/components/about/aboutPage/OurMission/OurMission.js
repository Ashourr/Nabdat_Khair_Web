"use client";
import React from "react";
import "./ourMission.css";
import Image from "next/image";
import { useLocale, useTranslations } from "next-intl";
export default function OurMission() {
  const locale = useLocale();
  const t = useTranslations("about");

  const data = [
    {
      url: "/images/our-1.png",
      title_ar: "مهمتنا",
      title_en: "Mission",
      description_ar:
        "نسعى لتسهيل التبرع وطلب المساعدة باستخدام التكنولوجيا مع ضمان الشفافية والأمان وسرعة الوصول للمحتاجين.",
      description_en:
        "We aim to simplify donations and requests for help using technology, ensuring transparency, security, and fast access to those in need.",
    },
    {
      url: "/images/our-2.png",
      title_ar: "رؤيتنا",
      title_en: "Vision",
      description_ar:
        "أن نكون المنصة الخيرية الرقمية الرائدة في العالم العربي، ونموذجاً يحتذى به في العمل الخيري الذكي والمستدام.",
      description_en:
        "To become the leading digital charitable platform in the Arab world, serving as a role model for smart and sustainable charitable work.",
    },
    {
      url: "/images/our-3.png",
      title_ar: "رسالتنا",
      title_en: "Message",
      description_ar:
        "تمكين كل فرد من المشاركة في الخير بسهولة وثقة، ودعم المؤسسات والمتطوعين لتحقيق أكبر أثر إنساني ممكن.",
      description_en:
        "Empowering every individual to participate in good deeds with ease and confidence, while supporting organizations and volunteers to achieve the greatest possible humanitarian impact.",
    },
  ];

  const ourGoals = [
    {
      url: "/images/our-1.png",
      title_ar: "تسهيل الوصول للحالات الإنسانية",
      title_en: "Simplify access to humanitarian cases",
      description_ar:
        "تجميع الحالات الموثوقة في منصة واحدة لسهولة الوصول والدعم.",
      description_en: "Centralizing verified cases in one trusted platform.",
    },
    {
      url: "/images/our-1.png",
      title_ar: "تعزيز الشفافية في العمل الخيري",
      title_en: "Enhance transparency in charity work",
      description_ar: "عرض بيانات وتقارير واضحة لكل حالة وتبرع.",
      description_en: "Clear data and reports for every donation and case",
    },
    {
      url: "/images/our-1.png",
      title_ar: "تمكين المؤسسات الخيرية رقمياً",
      title_en: "Digitally empower charity organizations",
      description_ar: "توفير أدوات ذكية لإدارة الحالات والحملات بكفاءة.",
      description_en: "Smart tools for managing cases and campaigns.",
    },
    {
      url: "/images/our-1.png",
      title_ar: "دعم ثقافة التطوع والمشاركة المجتمعية",
      title_en: "Promote volunteering and community engagement",
      description_ar: "خلق فرص تطوع حقيقية ومؤثرة داخل المجتمع.",
      description_en: "Creating real and impactful volunteer opportunities.",
    },
    {
      url: "/images/our-1.png",
      title_ar: "ضمان وصول التبرعات لمستحقيها",
      title_en: "Ensure donations reach the right people",
      description_ar: "أنظمة تحقق ومتابعة دقيقة لمسار كل تبرع.",
      description_en: "Accurate tracking and verification systems.",
    },
    {
      url: "/images/our-1.png",
      title_ar: "بناء مجتمع رقمي إنساني متكامل",
      title_en: "Build an integrated humanitarian digital community",
      description_ar: "ربط المتبرعين والمؤسسات والمتطوعين في منظومة واحدة.",
      description_en: "Connecting donors, organizations, and volunteers.",
    },
  ];
  return (
    <div className="our-mission">
      <div className="container-lg container-fluid">
        <div className="title">
          <h3>{t("title-mission")}</h3>
          <p>{t("description-mission")}</p>
        </div>
        <div className="row">
          <div className="col-12 col-md-6">
            <div className="sub-title">
              <h4 className={`${locale}`}>
                {locale === "ar"
                  ? "مهمتنا، رؤيتنا، رسالتنا"
                  : "Our Mission, Vision, Message"}
              </h4>
              <p>
                {locale === "ar"
                  ? "نسعى في نبضة خير لتسهيل التبرع ودعم المحتاجين باستخدام التكنولوجيا الحديثة، مع ضمان الشفافية والأمان، وتمكين الأفراد والمؤسسات والمتطوعين لتحقيق أكبر أثر إنساني ممكن. تشمل أهدافنا دعم الحالات الإنسانية، تعزيز الثقة في العمل الخيري الرقمي، وتمكين المؤسسات من إدارة حملاتها بكفاءة."
                  : "At Nabdah Khair, we strive to facilitate donations and support those in need using modern technology, while ensuring transparency and security, and enabling individuals, institutions, and volunteers to achieve the greatest possible humanitarian impact. Our objectives include supporting humanitarian cases, enhancing trust in digital charitable work, and enabling institutions to manage their campaigns efficiently."}
              </p>
            </div>
          </div>
          <div className="col-12 col-md-6">
            <div className="itmes">
              {data.map((item, index) => (
                <div className="itme" key={index}>
                  <Image
                    src={item.url}
                    width={50}
                    height={50}
                    alt={item.title_en}
                    style={{ marginBottom: "15px" }}
                  />
                  <h5>{locale === "ar" ? item.title_ar : item.title_en}</h5>
                  <p>
                    {locale === "ar"
                      ? item.description_ar
                      : item.description_en}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div
          className="row"
          style={{
            disabled: "flex",
            flexDirection: "row-reverse",
            marginTop: "100px",
          }}
        >
          <div className="col-12 col-md-6">
            <div className="sub-title">
              <h4 className={`${locale}`}>
                {locale === "ar" ? "أهدافنا" : "Our Goals"}
              </h4>
              <p>
                {locale === "ar"
                  ? "نؤمن في نبضة خير أن النجاح الحقيقي يقاس بالأثر، لذلك وضعنا أهدافاً واضحة تسعى لبناء منظومة خيرية رقمية مستدامة، تعزز الثقة، وتسهّل العطاء، وتربط الخير بأهله بكفاءة وشفافية."
                  : "At Nabdah Khair, we believe that true success is measured by impact. That’s why we set clear goals to build a sustainable digital charity ecosystem that strengthens trust, simplifies giving, and connects goodness to those who need it efficiently and transparently."}
              </p>
            </div>
          </div>
          <div className="col-12 col-md-6">
            <div className="itmes">
              {ourGoals.map((item, index) => (
                <div className="itme" key={index}>
                  <h5>{locale === "ar" ? item.title_ar : item.title_en}</h5>
                  <p>
                    {locale === "ar"
                      ? item.description_ar
                      : item.description_en}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
