"use client";
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLock,
  faShieldHalved,
  faHistory,
  faLaptop,
  faMobileScreenButton,
} from "@fortawesome/free-solid-svg-icons";
import "./securitySettings.css";
import Link from "next/link";
import { useLocale } from "next-intl";

export default function SecuritySettings() {
  const locale = useLocale();
  const [is2FAEnabled, setIs2FAEnabled] = useState(false);

  return (
    <div className="security-page">
      {/* رأس الصفحة */}
      <div className="header-flex">
        <div style={{textAlign:"start"}}>
          <h1 className="main-title">إعدادات الأمان</h1>
          <p className="sub-title">
            تحكم في حماية حسابك وكلمات المرور الخاصة بك.
          </p>
        </div>
        <Link href={`/${locale}/dashboard/user/profile`} className="back-btn">
          العودة للملف الشخصي
        </Link>
      </div>

      <div className="cards-container">
        {/* كارت تغيير كلمة المرور */}
        <div className="card-box">
          <div className="card-top flex-start">
            <div className="title-with-icon">
              <FontAwesomeIcon icon={faLock} className="purple-clr" />
              <span>تغيير كلمة المرور</span>
            </div>
          </div>
          <div className="input-unit">
            <label>كلمة المرور الحالية</label>
            <input type="password" placeholder="********" />
          </div>
          <div className="input-unit">
            <label>كلمة المرور الجديدة</label>
            <input type="password" placeholder="********" />
          </div>
          <div className="input-unit">
            <label>تاكيد كلمة المرور</label>
            <input type="password" placeholder="********" />
          </div>
          <button className="submit-purple-btn">تحديث كلمة المرور</button>
        </div>

        {/* كارت المصادقة الثنائية */}
        <div className="card-box">
          <div className="card-top">
            <div className="title-with-icon">
              <FontAwesomeIcon icon={faShieldHalved} className="purple-clr" />
              <span>المصادقة الثنائية (2FA)</span>
            </div>
            <label className="custom-switch">
              <input
                type="checkbox"
                checked={is2FAEnabled}
                onChange={() => setIs2FAEnabled(!is2FAEnabled)}
              />
              <span className="round-slider"></span>
            </label>
          </div>
          <p className="description-text">
            أضف طبقة حماية إضافية لحسابك عبر إرسال رمز تأكيد لهاتفك عند تسجيل
            الدخول.
          </p>
          <div className={is2FAEnabled ? "status-on" : "status-off"}>
            {is2FAEnabled ? "الميزة مفعلة" : "الميزة غير مفعلة"}
          </div>

          
        </div>
        
      </div>

      {/* سجل تسجيل الدخول */}
      <div className="history-card">
        <div className="card-top flex-start mb-20">
          <div className="title-with-icon">
            <span>سجل تسجيل الدخول</span>
            <FontAwesomeIcon icon={faHistory} className="purple-clr" />
          </div>
        </div>

        <div className="list-wrapper">
          {/* جهاز ويندوز */}
          <div className="device-row">
            <div className="device-content">
              <div className="device-icon-wrapper">
                <FontAwesomeIcon icon={faLaptop} />
              </div>
              <div className="device-text">
                <h4 className="device-name">Windows على Chrome</h4>
                <p className="device-meta">القاهرة، مصر • نشط الآن</p>
              </div>
            </div>
            <button className="red-logout-btn">تسجيل الخروج</button>
          </div>

          {/* جهاز موبايل */}
          <div className="device-row">
            <div className="device-content">
              <div className="device-icon-wrapper">
                <FontAwesomeIcon icon={faMobileScreenButton} />
              </div>
              <div className="device-text">
                <h4 className="device-name">iPhone 13</h4>
                <p className="device-meta">الجيزة، مصر • منذ ساعتين</p>
              </div>
            </div>
            <button className="red-logout-btn">تسجيل الخروج</button>
          </div>
        </div>
      </div>
    </div>
  );
}
