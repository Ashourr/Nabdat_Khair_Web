"use client";
import React from "react";
import Image from "next/image";
import "../authUser.css";
import Link from "next/link";
import { useLocale } from "next-intl";

export default function LoginVolunteer() {
  const locale = useLocale();
  // const t = useTranslations("about");
  return (
    <div className="login">
      <div className="container">
        <div className="row">
          <div className="col-12 col-lg-6">
            <div className="login-form">
              <div className="form-wrapper">
                <h2>تسجيل الدخول كمتطوع</h2>
                <p className="subtitle">هلاً بعودتك! سجّل الدخول للمتابعة</p>

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
                  <Link href={`/${locale}/authVolunteer/registerVolunteer`}>
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
                  <h2>كن جزءًا من التغيير</h2>
                  <p>
                    شارك بخبرتك وجهدك لدعم المحتاجين، وكن سببًا في رسم
                    الابتسامة.
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
