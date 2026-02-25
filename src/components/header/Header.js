"use client";
import React from "react";
import "./header.css";
// استيراد المكونات من i18n لضمان توافق الروابط مع اللغة
import { Link, useRouter } from "../../../i18n/navigation";
import { useLocale, useTranslations } from "next-intl";
import Image from "next/image";
import headerImg from "../../../public/images/header.webp";

export default function Header() {
  const t = useTranslations("header");
  const locale = useLocale();
  const router = useRouter();

  /**
   * ✅ دالة تغيير الصفة والتوجيه
   * تقوم بحفظ الرول في localStorage لضمان استمرارية التجربة داخل الداشبورد
   */
  const changeRoleAndNavigate = (role) => {
    // 1. حفظ الاختيار محلياً
    localStorage.setItem("userRole", role);

    // 2. إنشاء المسار (مثال: /ar/dashboard/volunteer)
    const url = `/${locale}/dashboard/${role}`;

    // 3. فتح المسار في نافذة جديدة كما طلبت
    window.open(url, "_blank");
  };

  return (
    <header className={`header ${locale}`}>
      {/* خلفية الهيدر باستخدام Next.js Image لتحسين الأداء */}
      <Image
        src={headerImg}
        alt="Nabdah Khair Header"
        fill
        quality={80}
        priority
        style={{ objectFit: "cover", objectPosition: "top" }}
        placeholder="blur"
      />

      <div className="container">
        {/* أزرار اختيار الصفة (Role Selection) */}
        <div
          className="role-links-container"
          style={{
            position: "absolute",
            top: "20px",
            left: locale === "ar" ? "20px" : "auto",
            right: locale === "en" ? "20px" : "auto",
            zIndex: 100,
            display: "flex",
            gap: "12px",
          }}
        >
          {/* زر دخول كمتبرع */}
          <button
            onClick={() => changeRoleAndNavigate("user")}
            className="role-link-btn donor-btn"
            style={{
              cursor: "pointer",
              background: "rgba(255, 255, 255, 0.15)",
              border: "1px solid rgba(255, 255, 255, 0.4)",
              padding: "10px 18px",
              borderRadius: "30px",
              color: "#fff",
              fontSize: "14px",
              fontWeight: "500",
              backdropFilter: "blur(8px)",
              transition: "all 0.3s ease",
            }}
          >
            <span
              style={{
                marginLeft: locale === "ar" ? "5px" : "0",
                marginRight: locale === "en" ? "5px" : "0",
              }}
            >
              🤝
            </span>
            {locale === "en" ? "As Donor" : "كمتبرع"}
          </button>

          {/* زر دخول كمتطوع */}
          <button
            onClick={() => changeRoleAndNavigate("volunteer")}
            className="role-link-btn volunteer-btn"
            style={{
              cursor: "pointer",
              background: "rgba(255, 255, 255, 0.15)",
              border: "1px solid rgba(255, 255, 255, 0.4)",
              padding: "10px 18px",
              borderRadius: "30px",
              color: "#fff",
              fontSize: "14px",
              fontWeight: "500",
              backdropFilter: "blur(8px)",
              transition: "all 0.3s ease",
            }}
          >
            <span
              style={{
                marginLeft: locale === "ar" ? "5px" : "0",
                marginRight: locale === "en" ? "5px" : "0",
              }}
            >
              🙋‍♂️
            </span>
            {locale === "en" ? "As Volunteer" : "كمتطوع"}
          </button>
        </div>

        {/* المحتوى النصي والترحيب */}
        <div
          className="header-content"
          style={{ position: "relative", zIndex: 5 }}
        >
          <h1
            className={`${locale}`}
            style={{ fontWeight: "800", marginBottom: "15px" }}
          >
            {locale === "en"
              ? "Together, we create change… and give hope to those in need"
              : "معًا نصنع فرقًا… ونمنح الأمل لمن يحتاجه"}
          </h1>
          <p
            className={`${locale}`}
            style={{
              fontSize: "1.2rem",
              maxWidth: "600px",
              marginBottom: "30px",
              lineHeight: "1.6",
            }}
          >
            {locale === "en"
              ? "Nabdah Khair is a comprehensive platform that brings together donors, charitable organizations, and volunteers in one place to support humanitarian cases and transform the lives of thousands of families through a single act of kindness."
              : "نبضة خير هي منصة شاملة تجمع بين المتبرعين، المؤسسات، والمتطوعين في مكان واحد لدعم الحالات الإنسانية وتغيير حياة آلاف الأسر بلمسة خير."}
          </p>

          {/* أزرار العمل الرئيسية */}
          <div
            className="header-buttons"
            style={{ display: "flex", gap: "20px" }}
          >
            <Link href="/cases" className={`btn-1 ${locale}`}>
              {t("btn1")}
            </Link>
            <Link href="/calculate_zakat" className={`btn-2 ${locale}`}>
              {t("btn2")}
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
