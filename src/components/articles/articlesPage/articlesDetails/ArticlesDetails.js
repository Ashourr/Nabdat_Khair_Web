"use client";
import HeaderPage from "@/components/headerPage/HeaderPage";
import { useLocale, useTranslations } from "next-intl";
import React from "react";
import "./articlesDetails.css";
import { useRouter } from "next/navigation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowLeft,
  faArrowRight,
  faCalendarDays,
} from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
export default function ArticlesDetails() {
  const t = useTranslations("Articles");
  const locale = useLocale();
  const router = useRouter();
  return (
    <>
      <HeaderPage
        bgImg="/images/b1.jpeg"
        title={t("title-page-details")}
        link={t("link-page-details")}
        suptitle={t("suptitle-page-details")}
      />
      <div className="art-details">
        <div className="container">
          <button onClick={() => router.back()} className="back-btn">
            <FontAwesomeIcon
              icon={locale === "en" ? faArrowLeft : faArrowRight}
              className={`back ${locale}`}
            />
            {locale === "en" ? "Back" : "رجوع"}
          </button>
          <div className="row">
            <div className="col-12 col-md-12 col-lg-6 ">
              <div className="content">
                <span>{locale === "en" ? "Article" : "مقال"}</span>
                <h6>
                  <FontAwesomeIcon icon={faCalendarDays} className="i" />
                  24-11-2023
                </h6>
                <h3>
                  {locale === "en"
                    ? "Nabdah Khair Launches New Support Campaign to Save Heart Patients"
                    : "نبضة خير تطلق حملة دعم جديدة لإنقاذ مرضى القلب"}
                </h3>
                <h5>
                  {locale === "en"
                    ? "A new humanitarian initiative aiming to provide urgent treatment for dozens of critical cases across various provinces"
                    : "مبادرة إنسانية جديدة تهدف إلى توفير العلاج العاجل لعشرات الحالات الحرجة في مختلف المحافظات"}
                </h5>
                <p>
                  {locale === "en"
                    ? "The Nabdah Khair platform announced the launch of a new humanitarian campaign to support heart patients unable to afford the costs of necessary surgical procedures and treatment, as part of its ongoing efforts to support the most needy humanitarian cases. The campaign aims to collect the necessary donations to cover the costs of surgical operations, medical examinations, and essential medications, in cooperation with a group of accredited charitable organizations and specialized hospitals. The platform's management confirmed that this initiative comes within the framework of Nabdah Khair's vision to enhance digital charitable work and provide smart and secure solutions that ensure support reaches its true beneficiaries. The platform also called on all donors and volunteers to participate in this humanitarian campaign and contribute to saving lives and creating hope in the lives of many needy families."
                    : "أعلنت منصة نبضة خير عن إطلاق حملة إنسانية جديدة لدعم مرضى القلب غير القادرين على تحمل تكاليف العمليات الجراحية والعلاج اللازم، وذلك ضمن جهودها المستمرة لدعم الحالات الإنسانية الأكثر احتياجاً. وتهدف الحملة إلى جمع التبرعات اللازمة لتغطية تكاليف العمليات الجراحية، الفحوصات الطبية، والأدوية الأساسية، بالتعاون مع مجموعة من المؤسسات الخيرية المعتمدة والمستشفيات المتخصصة. وأكدت إدارة المنصة أن هذه المبادرة تأتي في إطار رؤية نبضة خير لتعزيز العمل الخيري الرقمي، وتوفير حلول ذكية وآمنة تضمن وصول الدعم إلى مستحقيه الحقيقيين. كما دعت المنصة جميع المتبرعين والمتطوعين إلى المشاركة في هذه الحملة الإنسانية، والمساهمة في إنقاذ الأرواح وصناعة الأمل في حياة الكثير من الأسر المحتاجة."}
                </p>
              </div>
            </div>
            <div className="col-12 col-md-12 col-lg-6 ">
              <div
                style={{
                  position: "relative",
                  width: "100%",
                  height: "400px",
                  marginBottom: "50px",
                }}
              >
                <Image
                  src={"/images/asset 18.jpeg"}
                  alt="Header"
                  fill
                  quality={75}
                  style={{ objectFit: "cover", borderRadius: "10px" }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
