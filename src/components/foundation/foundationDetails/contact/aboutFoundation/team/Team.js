"use client";
import React from "react";
import "../aboutFoundation.css";
import { useLocale, useTranslations } from "next-intl";
export default function Team() {
      const locale = useLocale();
      const t = useTranslations("foundation-Details");
  return (
    <div className="row mb-5">
      <div className="title-team">
        <h3>
          {locale === "en"
            ? "Leadership that Makes an Impact"
            : "قيادة تصنع الأثر"}
        </h3>
        <p>
          {locale === "en"
            ? "A board of directors that combines experience, vision, and commitment to serve the foundation's mission and achieve its humanitarian goals."
            : "مجلس إدارة يجمع بين الخبرة، الرؤية، والالتزام لخدمة رسالة المؤسسة وتحقيق أهدافها الإنسانية"}
        </p>
      </div>
      <div className="col-12 col-sm-6 col-md-4">
        <div className="team-itme">
          <div className="contact">
            <h5>
              {locale === "en"
                ? "Dr. Ahmed Abdel Rahman"
                : "د. أحمد عبد الرحمن"}
            </h5>
            <h6>
              {locale === "en" ? "Chairman of the Board" : "رئيس مجلس الإدارة"}
            </h6>
          </div>
        </div>
      </div>
      <div className="col-12 col-sm-6 col-md-4">
        <div className="team-itme">
          <div className="contact">
            <h5>
              {locale === "en"
                ? "Dr. Ahmed Abdel Rahman"
                : "د. أحمد عبد الرحمن"}
            </h5>
            <h6>
              {locale === "en" ? "Chairman of the Board" : "رئيس مجلس الإدارة"}
            </h6>
          </div>
        </div>
      </div>
      <div className="col-12 col-sm-6 col-md-4">
        <div className="team-itme">
          <div className="contact">
            <h5>
              {locale === "en"
                ? "Dr. Ahmed Abdel Rahman"
                : "د. أحمد عبد الرحمن"}
            </h5>
            <h6>
              {locale === "en" ? "Chairman of the Board" : "رئيس مجلس الإدارة"}
            </h6>
          </div>
        </div>
      </div>
    </div>
  );
}
