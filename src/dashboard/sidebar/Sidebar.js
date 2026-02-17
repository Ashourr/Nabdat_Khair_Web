"use client";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { useLocale } from "next-intl";
import { usePathname } from "../../../i18n/navigation";
import "./sidebar.css";
import { faHouse } from "@fortawesome/free-solid-svg-icons";
import { faWpforms } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function SidebarContent({ isPagesOpen, onPagesToggle, closeAll }) {
  const locale = useLocale();
  const pathname = usePathname();

  const menuItems = [
    {
      href: `/${locale}/dashboard`,
      hr: `/dashboard`,
      label: locale === "en" ? "Home" : "الرئيسية",
      icon: <FontAwesomeIcon icon={faHouse} className="menu-icon" />,
    },
    {
      href: `/${locale}/dashboard/profile`,
      hr: `/dashboard/profile`,
      label: locale === "en" ? "Profile" : "الملف الشخصي",
      icon: <FontAwesomeIcon icon={faWpforms} className="menu-icon" />,
    },
  ];

  const pagesItems = [
    { href: `/${locale}/login`, label: "Login" },
    { href: `/${locale}/create-account`, label: "Create account" },
    { href: `/${locale}/forgot-password`, label: "Forgot password" },
    { href: `/${locale}/404`, label: "404" },
    { href: `/${locale}/blank`, label: "Blank" },
  ];

  return (
    <div className="sidebar-content">
      <Link href={`/${locale}`} className="logo" onClick={closeAll}>
        Project Logo
      </Link>

      <ul className="menu-list">
        {menuItems.map((item, index) => {
          const isActive = pathname === item.hr || pathname === item.href;
          return (
            <li key={index}>
              <Link
                href={item.href}
                className={`menu-link ${isActive ? "active" : ""}`}
                onClick={closeAll}
              >
                {item.icon}
                <span className="menu-label">{item.label}</span>
              </Link>
            </li>
          );
        })}

        {/* Pages Section */}
        {/* <li className="relative">
          <button
            className="menu-link submenu-toggle"
            onClick={(e) => {
              e.stopPropagation();
              onPagesToggle();
            }}
            aria-expanded={isPagesOpen}
          >
            <span className="inline-flex items-center">
              <svg
                className="menu-icon"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 5h16M4 12h16M4 19h16"
                />
              </svg>
              <span className="menu-label">Pages</span>
            </span>
            <svg
              className={`chevron ${isPagesOpen ? "rotate-180" : ""}`}
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0-01-1.414 0l-4-4a1 1 0-01-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </button>

          <ul className={`submenu ${isPagesOpen ? "open" : ""}`}>
            {pagesItems.map((page, index) => (
              <li key={index} className="sub-li">
                <Link href={page.href} className="sub-link" onClick={closeAll}>
                  {page.label}
                </Link>
              </li>
            ))}
          </ul>
        </li> */}
      </ul>
    </div>
  );
}

export default function Sidebar({ isMobileOpen = false, onMobileToggle }) {
  const [isPagesOpen, setIsPagesOpen] = useState(false);
  const sidebarRef = useRef(null);
  const locale = useLocale();
  const isRTL = locale === "ar";

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
        setIsPagesOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handlePagesToggle = () => {
    setIsPagesOpen((prev) => !prev);
  };

  const closeAll = () => setIsPagesOpen(false);

  return (
    <>
      {/* Sidebar Desktop */}
      <aside
        className={`desktop-sidebar ${isRTL ? "rtl" : "ltr"}`}
        aria-label="Desktop sidebar"
        ref={sidebarRef}
      >
        <SidebarContent
          isPagesOpen={isPagesOpen}
          onPagesToggle={handlePagesToggle}
          closeAll={closeAll}
        />
      </aside>

      {/* الخلفية عند الفتح في الموبايل */}
      {isMobileOpen && (
        <div
          className="mobile-backdrop"
          onClick={() => onMobileToggle(false)}
          aria-hidden="true"
        />
      )}

      {/* Sidebar Mobile */}
      <aside
        className={`mobile-sidebar ${isMobileOpen ? "open" : ""} ${
          isRTL ? "rtl" : "ltr"
        }`}
        aria-label="Mobile sidebar"
        ref={sidebarRef}
      >
        <SidebarContent
          isPagesOpen={isPagesOpen}
          onPagesToggle={handlePagesToggle}
          closeAll={closeAll}
        />
      </aside>
    </>
  );
}
