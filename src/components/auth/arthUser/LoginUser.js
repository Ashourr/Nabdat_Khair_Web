"use client";
import React from "react";
import Image from "next/image";
import "../authUser.css";
import Link from "next/link";
import { useLocale, useTranslations } from "next-intl";

export default function LoginUser() {
  const locale = useLocale();
  // const t = useTranslations("about");
  return (
    <div className="login">
      <div className="container">
        <div className="row">
          <div className="col-12 col-lg-6">
            <div className="login-form">
              <div className="form-wrapper">
                <h2>تسجيل الدخول كمستخدم</h2>
                <p className="subtitle">هلاً بعودتك! سجّل الدخول للمتابعة</p>

                <button className="google-btn">
                  <Image
                    src="/images/google-icon-logo-svgrepo-com (1).png"
                    alt="google"
                    width={20}
                    height={20}
                    style={{ margin: "0 10px" }}
                    loading="lazy"
                    quality={75}
                  />
                  تسجيل الدخول بجوجل
                </button>
                <button className="google-btn">
                  <Image
                    src="/images/facebook-icon-logo-svgrepo-com.png"
                    alt="google"
                    width={20}
                    height={20}
                    style={{ margin: "0 10px" }}
                    loading="lazy"
                    quality={75}
                  />
                  تسجيل الدخول بفيسبوك
                </button>

                <div className="divider">
                  <span>او</span>
                </div>

                <form>
                  <div className="input-group">
                    <label>البريد الالكتروني</label>
                    <input type="email" placeholder="ادخل البريد الالكتروني" />
                  </div>
                  <div className="input-group">
                    <label>كلمة المرور</label>
                    <input type="password" placeholder="ادخل كلمة المرور" />
                  </div>

                  <button type="submit" className="signup-btn">
                    تسجيل الدخول
                  </button>
                </form>

                <p className="footer-text">
                  اذ لم يكن لديك حساب؟{" "}
                  <Link href={`/${locale}/authUser/registerUser`}>
                    انشاء حساب
                  </Link>
                </p>
              </div>
            </div>
          </div>
          <div className="col-0 col-lg-6 d-none d-lg-block">
            <div className="login-image">
              <div className="image-wrapper">
                <Image
                  src="/images/art-1.webp" // ضع مسار صورتك هنا
                  alt="Furniture"
                  fill
                  priority
                  style={{ objectFit: "cover", objectPosition: "center" }}
                />
                <div className="image-overlay-text">
                  <h2>كل مساهمة تُحدث فرقًا</h2>
                  <p>
                    بخطوة بسيطة منك، يمكن أن تغيّر حياة إنسان. تبرع بسهولة وأمان
                    وكن سببًا في صناعة الأمل.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
