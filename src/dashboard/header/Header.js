"use client";
import { useEffect, useCallback } from "react"; // شيلنا useState لأننا هنستخدم Redux
import Link from "next/link";
import "./header.css";
import { useLocale } from "next-intl";
import { useRouter, usePathname } from "../../../i18n/navigation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faBell,
  faEarthAmericas,
  faMagnifyingGlass,
  faMoon,
  faSun,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";

// استيراد أدوات Redux والـ Action بتاعك زي الـ Navbar بالظبط
import { useDispatch, useSelector } from "react-redux";
import { toggleTheme } from "@/rit/slices/ThemeSlice";

export default function Header({ onToggleSidebar, isSidebarOpen }) {
  const locale = useLocale();
  const nextLocale = locale === "en" ? "ar" : "en";
  const router = useRouter();
  const pathname = usePathname();

  // 1. استخدام Redux للمزامنة مع الـ Navbar والـ LocalStorage
  const dispatch = useDispatch();
  const theme = useSelector((state) => state.theme.theme);

  // 2. دالة تبديل الثيم (نفس اللي في الـ Navbar)
  const handleToggleTheme = useCallback(() => {
    dispatch(toggleTheme());
  }, [dispatch]);

  // 3. تطبيق التغيير على الـ HTML و الـ LocalStorage (نفس منطق الـ Navbar)
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const handleChangeLanguage = useCallback(() => {
    router.replace(pathname, { locale: nextLocale });
  }, [router, pathname, nextLocale]);

  // تأكد من نعومة التبديل عند تغيير المسار (اختياري زي الـ Navbar)
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [pathname]);

  return (
    <header className="header">
      <div className="container">
        <div className="header-container">
          {/* زر الهامبرجر */}
          <button
            className="hamburger-btn"
            onClick={onToggleSidebar}
            aria-label={isSidebarOpen ? "Close Menu" : "Open Menu"}
          >
            <FontAwesomeIcon
              icon={isSidebarOpen ? faXmark : faBars}
              className="i"
            />
          </button>

          {/* البحث */}
          <div className="search-wrapper">
            <div className="search-container">
              <span className="search-icon">
                <FontAwesomeIcon icon={faMagnifyingGlass} />
              </span>
              <input
                type="text"
                placeholder={locale === "ar" ? "بحث..." : "Search..."}
                className="search-input"
              />
            </div>
          </div>

          {/* الأيقونات الجانبية */}
          <ul className="header-actions">
            {/* تبديل الثيم باستخدام Redux لضمان عدم تغيره عند تغيير اللغة */}
            <li
              className="action-item"
              onClick={handleToggleTheme}
              title="Toggle Theme"
            >
              <FontAwesomeIcon 
                icon={theme === "light" ? faMoon : faSun} 
                className="i" 
              />
            </li>

            {/* تغيير اللغة */}
            <li className="action-item" onClick={handleChangeLanguage}>
              <FontAwesomeIcon icon={faEarthAmericas} className="i" />
            </li>

            {/* الإشعارات */}
            <li className="action-item">
              <Link href="#">
                <FontAwesomeIcon icon={faBell} className="i" />
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}