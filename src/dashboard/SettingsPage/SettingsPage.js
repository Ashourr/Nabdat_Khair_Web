"use client";
import { useCallback, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGlobe,
  faMoon,
  faSun,
  faSignOutAlt,
  faTrashAlt,
  faChevronLeft,
} from "@fortawesome/free-solid-svg-icons";
import Swal from "sweetalert2";
import "./settingsPage.css";

import { useLocale } from "next-intl";
import { useRouter, usePathname } from "../../../i18n/navigation";

// Redux
import { useDispatch, useSelector } from "react-redux";
import { toggleTheme } from "@/rit/slices/ThemeSlice";

export default function SettingsPage() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const dispatch = useDispatch();

  // جلب حالة الثيم
  const theme = useSelector((state) => state.theme.theme);
  const isDarkMode = theme === "dark";

  // ✅ دالة تبديل اللغة (Switch Language)
  const handleToggleLanguage = useCallback(() => {
    const nextLocale = locale === "en" ? "ar" : "en";
    router.replace(pathname, { locale: nextLocale });
  }, [router, pathname, locale]);

  // دالة تبديل الثيم
  const handleToggleTheme = useCallback(() => {
    dispatch(toggleTheme());
  }, [dispatch]);

  // مزامنة الـ LocalStorage
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const confirmAction = (config) => {
    Swal.fire({
      confirmButtonColor: config.isDanger ? "#ef4444" : "#7c3aed",
      cancelButtonColor: "#64748b",
      reverseButtons: true,
      showCancelButton: true,
      confirmButtonText: locale === "ar" ? "نعم" : "Yes",
      cancelButtonText: locale === "ar" ? "إلغاء" : "Cancel",
      ...config,
    });
  };

  return (
    <div className="settings-page">
      <header className="settings-header">
        <h1>{locale === "ar" ? "الإعدادات" : "Settings"}</h1>
        <p>
          {locale === "ar"
            ? "تخصيص حسابك وتفضيلات النظام"
            : "Customize your preferences"}
        </p>
      </header>

      <div className="settings-grid">
        <section className="settings-section">
          <h2 className="section-title">
            {locale === "ar" ? "التفضيلات" : "Preferences"}
          </h2>

          {/* ✅ زر تغيير اللغة بدلاً من القائمة */}
          <div className="setting-item">
            <div className="setting-info">
              <div className="icon-box purple">
                <FontAwesomeIcon icon={faGlobe} />
              </div>
              <div>
                <h3>{locale === "ar" ? "اللغة" : "Language"}</h3>
                <p>
                  {locale === "ar"
                    ? "تغيير لغة التطبيق"
                    : "Change app language"}
                </p>
              </div>
            </div>
            <button className="lang-toggle-btn" onClick={handleToggleLanguage}>
              {locale === "ar" ? "English" : "العربية"}
            </button>
          </div>

          {/* تغيير المظهر */}
          <div className="setting-item">
            <div className="setting-info">
              <div className="icon-box blue">
                <FontAwesomeIcon icon={isDarkMode ? faMoon : faSun} />
              </div>
              <div>
                <h3>{locale === "ar" ? "المظهر" : "Appearance"}</h3>
                <p>
                  {isDarkMode
                    ? locale === "ar"
                      ? "الوضع الليلي مفعّل"
                      : "Dark Mode active"
                    : locale === "ar"
                      ? "الوضع النهاري مفعّل"
                      : "Light Mode active"}
                </p>
              </div>
            </div>
            <label className="toggle-switch">
              <input
                type="checkbox"
                checked={isDarkMode}
                onChange={handleToggleTheme}
              />
              <span className="slider round"></span>
            </label>
          </div>
        </section>

        {/* ... باقي الأقسام كما هي ... */}
        <section className="settings-section">
          <h2 className="section-title">
            {locale === "ar" ? "الحساب والأمان" : "Account & Security"}
          </h2>

          {/* تسجيل الخروج */}

          <div
            className="setting-item clickable"
            onClick={() =>
              confirmAction({
                title: locale === "ar" ? "تسجيل الخروج؟" : "Logout?",

                text:
                  locale === "ar"
                    ? "هل تود الخروج من الحساب؟"
                    : "Do you want to sign out?",
              })
            }
          >
            <div className="setting-info">
              <div className="icon-box gray">
                <FontAwesomeIcon icon={faSignOutAlt} />
              </div>

              <div>
                <h3>{locale === "ar" ? "تسجيل الخروج" : "Logout"}</h3>
              </div>
            </div>

            <FontAwesomeIcon
              icon={faChevronLeft}
              className={`arrow-icon ${locale === "ar" ? "" : "rotate-180"}`}
            />
          </div>

          {/* حذف الحساب */}

          <div
            className="setting-item clickable danger-row"
            onClick={() =>
              confirmAction({
                title:
                  locale === "ar" ? "حذف الحساب نهائياً؟" : "Delete Account?",

                text:
                  locale === "ar"
                    ? "هذا الإجراء لا يمكن التراجع عنه!"
                    : "This action cannot be undone!",

                isDanger: true,
              })
            }
          >
            <div className="setting-info">
              <div className="icon-box red">
                <FontAwesomeIcon icon={faTrashAlt} />
              </div>

              <div>
                <h3 className="text-danger">
                  {locale === "ar" ? "حذف الحساب" : "Delete Account"}
                </h3>
              </div>
            </div>

            <FontAwesomeIcon
              icon={faChevronLeft}
              className={`arrow-icon ${locale === "ar" ? "" : "rotate-180"}`}
            />
          </div>
        </section>
      </div>
    </div>
  );
}
