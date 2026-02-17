"use client";
import { useState, useEffect, useRef, useCallback } from "react";
import Link from "next/link";
import "./header.css";
import { useLocale, useTranslations } from "next-intl";
import { useRouter, usePathname } from "../../../i18n/navigation";

export default function Header({ onToggleSidebar }) {
  const tLocaleSwitcher = useTranslations("LocaleSwitcher");
  const [dark, setDark] = useState(false);
  const [notificationsOpen, setNotificationsOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);

  const notificationsRef = useRef(null);
  const profileRef = useRef(null);

  // تبديل الثيم
  const toggleTheme = () => {
    const newTheme = !dark ? "dark" : "light";
    setDark(!dark);
    document.documentElement.setAttribute("data-theme", newTheme);
    localStorage.setItem("theme", newTheme);
  };

  // إغلاق القوائم عند النقر خارجها
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (
        notificationsOpen &&
        notificationsRef.current &&
        !notificationsRef.current.contains(e.target)
      ) {
        setNotificationsOpen(false);
      }
      if (
        profileOpen &&
        profileRef.current &&
        !profileRef.current.contains(e.target)
      ) {
        setProfileOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [notificationsOpen, profileOpen]);

  // إغلاق بالـ Escape
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === "Escape") {
        setNotificationsOpen(false);
        setProfileOpen(false);
      }
    };
    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, []);

  // تحميل الثيم من localStorage
  useEffect(() => {
    const saved = localStorage.getItem("theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const initial = saved || (prefersDark ? "dark" : "light");
    setDark(initial === "dark");
    document.documentElement.setAttribute("data-theme", initial);
  }, []);

  const locale = useLocale();
  const nextLocale = locale === "en" ? "ar" : "en";
  const router = useRouter();
  const pathname = usePathname();

  const handleChangeLanguage = useCallback(() => {
    router.replace(pathname, { locale: nextLocale });
  }, [router, pathname, nextLocale]);

  // ✅ فتح القوائم (ما تقفلش لما تضغط نفس الزر)
  const openNotifications = () => {
    setNotificationsOpen(true);
    setProfileOpen(false);
  };

  const openProfile = () => {
    setProfileOpen(true);
    setNotificationsOpen(false);
  };

  return (
    <header className="header">
      <div className="header-container">
        {/* زر الهامبرغر (Mobile) */}
        <button
          className="hamburger-btn"
          onClick={onToggleSidebar}
          aria-label="فتح القائمة الجانبية"
        >
          <svg className="icon" viewBox="0 0 20 20" fill="currentColor">
            <path
              fillRule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
              clipRule="evenodd"
            />
          </svg>
        </button>

        {/* البحث */}
        <div className="search-wrapper">
          <div className="search-container">
            <div className="search-icon">
              <svg className="icon-sm" viewBox="0 0 20 20" fill="currentColor">
                <path
                  fillRule="evenodd"
                  d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <input
              type="text"
              placeholder="البحث عن المشاريع..."
              className="search-input"
              aria-label="البحث"
            />
          </div>
        </div>

        {/* الأيقونات */}
        <ul className="header-actions">
          <li>
            <button
              onClick={toggleTheme}
              className="theme-btn"
              aria-label="تبديل الوضع الليلي"
            >
              {dark ? (
                <svg className="icon" viewBox="0 0 20 20" fill="currentColor">
                  <path
                    fillRule="evenodd"
                    d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              ) : (
                <svg className="icon" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                </svg>
              )}
            </button>
          </li>

          {/* اللغة */}
          <li className="lang-but" onClick={handleChangeLanguage}>
            {tLocaleSwitcher(nextLocale === "en" ? "english" : "arabic")}
          </li>

          {/* الإشعارات */}
          <li className="dropdown" ref={notificationsRef}>
            <button
              onClick={openNotifications}
              className="dropdown-btn"
              aria-label="الإشعارات"
            >
              <svg className="icon" viewBox="0 0 20 20" fill="currentColor">
                <path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6z" />
              </svg>
              <span className="badge"></span>
            </button>

            <ul className={`dropdown-menu ${notificationsOpen ? "open" : ""}`}>
              <li>
                <Link href="#" className="dropdown-item">
                  <span>الرسائل</span>
                  <span className="badge-sm">13</span>
                </Link>
              </li>
              <li>
                <Link href="#" className="dropdown-item">
                  <span>المبيعات</span>
                  <span className="badge-sm">2</span>
                </Link>
              </li>
              <li>
                <Link href="#" className="dropdown-item">
                  <span>التنبيهات</span>
                </Link>
              </li>
            </ul>
          </li>

          {/* الملف الشخصي */}
          <li className="dropdown" ref={profileRef}>
            <button
              onClick={openProfile}
              className="avatar-btn"
              aria-label="الحساب"
            ></button>

            <ul className={`dropdown-menu ${profileOpen ? "open" : ""}`}>
              <li>
                <Link href="#" className="dropdown-item">
                  الملف الشخصي
                </Link>
              </li>
              <li>
                <Link href="#" className="dropdown-item">
                  الإعدادات
                </Link>
              </li>
              <li>
                <Link href="#" className="dropdown-item">
                  تسجيل الخروج
                </Link>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </header>
  );
}
