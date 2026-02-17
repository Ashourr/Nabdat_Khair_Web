"use client";
import React, { useEffect, useRef, useState } from "react";
import "./history.css";
import { useLocale, useTranslations } from "next-intl";

export default function TimelineDemo() {
  const t = useTranslations("about");
  const locale = useLocale();
  const containerRef = useRef(null);
  const [progress, setProgress] = useState(0);

  const data = [
    {
      title:
        locale === "ar"
          ? "أكتوبر ٢٠٢٥ – بداية الفكرة"
          : "October 2025 – The Idea Begins",
      text:
        locale === "ar"
          ? "ولدت فكرة نبضة خير من حاجة حقيقية لمنصة تجمع العمل الخيري في مكان واحد، وتوفر الشفافية وسهولة الوصول للحالات الإنسانية الموثوقة."
          : "The idea of Nabdah Khair was born from a real need for a platform that brings charitable work together in one place, providing transparency and easy access to reliable humanitarian cases.",
      // image: "https://assets.aceternity.com/templates/startup-1.webp",
    },
    {
      title:
        locale === "ar"
          ? "ديسمبر ٢٠٢٥ – التخطيط والتصميم"
          : "December 2025 – Planning & Design",
      text:
        locale === "ar"
          ? "تم بناء الرؤية، تحديد الأهداف، وتصميم الهيكل الكامل للمنصة وتجربة المستخدم."
          : "The vision was built, objectives were defined, and the complete platform structure and user experience were designed.",
      // image: "https://assets.aceternity.com/templates/startup-1.webp",
    },
    {
      title:
        locale === "ar"
          ? "فبراير ٢٠٢٦ – التطوير والبناء"
          : "February 2026 – Development & Building",
      text:
        locale === "ar"
          ? "انطلاق مرحلة التطوير التقني وبناء الأنظمة الأساسية: الحالات، التبرعات، المؤسسات، والمتطوعين."
          : "The technical development phase commenced, building the core systems: cases, donations, organizations, and volunteers.",
      // image: "https://assets.aceternity.com/templates/startup-1.webp",
    },
    {
      title:
        locale === "ar"
          ? "أبريل ٢٠٢٦ – الشراكات والهوية"
          : "April 2026 – Partnerships & Identity",
      text:
        locale === "ar"
          ? "بناء الهوية البصرية، وإطلاق التواصل مع المؤسسات الخيرية وبناء شبكة الشركاء الأولى."
          : "The visual identity was built, and outreach to charitable organizations began to establish the first partner network.",
      // image: "https://assets.aceternity.com/templates/startup-1.webp",
    },
    {
      title:
        locale === "ar"
          ? "مايو ٢٠٢٦ – الإطلاق التجريبي"
          : "May 2026 – Pilot Launch",
      text:
        locale === "ar"
          ? "إطلاق النسخة التجريبية، إدخال أول الحالات والحملات، وجمع الملاحظات لتحسين النظام."
          : "The pilot version was launched, the first cases and campaigns were introduced, and feedback was gathered to enhance the system.",
      // image: "https://assets.aceternity.com/templates/startup-1.webp",
    },
    {
      title:
        locale === "ar"
          ? "يوليو ٢٠٢٦ – الإطلاق الرسمي"
          : "July 2026 – Official Launch",
      text:
        locale === "ar"
          ? "الإطلاق الرسمي لمنصة نبضة خير كنظام خيري رقمي متكامل يخدم المجتمع ويصنع الأثر."
          : "The official launch of the Nabdah Khair platform as a complete digital charitable system serving the community and creating impact.",
      // image: "https://assets.aceternity.com/templates/startup-1.webp",
    },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const total = rect.height - windowHeight;
      const scrolled = Math.min(Math.max(-rect.top, 0), total);
      const lead = 0.05; // نسبة التقديم (12%)
      let percent = total > 0 ? scrolled / total : 0;
      percent = Math.min(percent + lead, 1); // نخلي الخط سابق بشوية
      setProgress(percent);
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="timeline-container" ref={containerRef}>
      <div className="container-lg container-fluid">
        {/* الخط */}
        <div className={`timeline-line-bg ${locale}`} />
        <div
          className={`timeline-line-glow ${locale}`}
          style={{ height: `${progress * 100}%` }}
        />

        {data.map((item, index) => (
          <div
            className={`timeline-item ${locale} ${index % 2 === 0 ? "left" : "right"}`}
            key={index}
          >
            <div className={`timeline-dot ${locale}`} />

            <div className="timeline-card">
              <h3>{item.title}</h3>

              <p>{item.text}</p>
              {item.subText && <p>{item.subText}</p>}

              {/* صورة اختيارية */}
              {/* {item.image && (
              <div className="single-image">
                <img src={item.image} alt="timeline" />
              </div>
            )} */}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
