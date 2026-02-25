"use client";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { useLocale } from "next-intl";
import { usePathname } from "../../../i18n/navigation";
import "./sidebar.css";
import {
  faHouse,
  faBell,
  faHandHoldingDollar,
  faUser,
  faGear,
  faClock,
  faGlobe,
  faListCheck,
} from "@fortawesome/free-solid-svg-icons";
import { faWpforms } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import imgNav from "../../../public/images/logo.png";

function SidebarContent({ closeAll }) {
  const locale = useLocale();
  const pathname = usePathname();

  // غير القيمة دي حسب اليوزر الحقيقي (user | volunteer | organization)
  const role = "volunteer";

  const menus = {
    user: [
      {
        href: `/${locale}/dashboard/user`,
        label: locale === "en" ? "Home" : "الرئيسية",
        basePath: "/dashboard/user",
        icon: faHouse,
      },
      {
        href: `/${locale}/dashboard/user/donations`,
        label: locale === "en" ? "Donations" : "التبرعات",
        basePath: "/dashboard/user/donations",
        icon: faHandHoldingDollar,
      },
      {
        href: `/${locale}/dashboard/user/notifications`,
        label: locale === "en" ? "Notifications" : "الإشعارات",
        basePath: "/dashboard/user/notifications",
        icon: faBell,
      },
      {
        href: `/${locale}/dashboard/user/profile`,
        label: locale === "en" ? "Profile" : "الملف الشخصي",
        basePath: "/dashboard/user/profile",
        icon: faUser,
      },
      {
        href: `/${locale}/dashboard/user/settingsPage`,
        label: locale === "en" ? "Settings" : "الإعدادات",
        basePath: "/dashboard/user/settingsPage",
        icon: faGear,
      },
    ],

    volunteer: [
      {
        href: `/${locale}/dashboard/volunteer`,
        label: locale === "en" ? "Home" : "الرئيسية",
        basePath: "/dashboard/volunteer", // المسار الأساسي
        icon: faHouse,
      },
      {
        href: `/${locale}/dashboard/volunteer/opportunities`,
        label: locale === "en" ? "Opportunities" : "فرص التطوع",
        basePath: "/dashboard/volunteer/opportunities",
        icon: faGlobe,
      },
      {
        href: `/${locale}/dashboard/volunteer/myTasks`,
        label: locale === "en" ? "Tasks" : "المهام",
        basePath: "/dashboard/volunteer/myTasks",
        icon: faListCheck,
      },
      {
        href: `/${locale}/dashboard/volunteer/volunteerHours`,
        label: locale === "en" ? "Volunteer Hours" : "ساعات التطوع",
        basePath: "/dashboard/volunteer/volunteerHours",
        icon: faClock,
      },
      {
        href: `/${locale}/dashboard/volunteer/notifications`,
        label: locale === "en" ? "Notifications" : "الإشعارات",
        basePath: "/dashboard/volunteer/notifications",
        icon: faBell,
      },
      {
        href: `/${locale}/dashboard/volunteer/volunteerRatings`,
        label: locale === "en" ? "Volunteer Ratings" : "تقييم التطوع",
        basePath: "/dashboard/volunteer/volunteerRatings",
        icon: faBell,
      },
      {
        href: `/${locale}/dashboard/volunteer/profile`,
        label: locale === "en" ? "Profile" : "الملف الشخصي",
        basePath: "/dashboard/volunteer/profile",
        icon: faUser,
      },
      {
        href: `/${locale}/dashboard/volunteer/settingsPage`,
        label: locale === "en" ? "Settings" : "الإعدادات",
        basePath: "/dashboard/volunteer/settingsPage",
        icon: faGear,
      },
    ],

    organization: [
      {
        href: `/${locale}/dashboard/organization`,
        label: locale === "en" ? "Organization Home" : "الرئيسية للمؤسسة",
        basePath: "/dashboard/organization",
        icon: faHouse,
      },
      {
        href: `/${locale}/dashboard/organization/manage`,
        label: locale === "en" ? "Manage Projects" : "إدارة المشاريع",
        basePath: "/dashboard/organization/manage",
        icon: faWpforms,
      },
    ],
  };

  const menuItems = menus[role] || [];

  return (
    <div className="sidebar-content">
      <Link
        href={`/${locale}`}
        className="logo"
        onClick={closeAll}
        style={{ display: "flex", justifyContent: "center" }}
      >
        <div
          className="img"
          style={{ position: "relative", width: "100%", height: "75px" }}
        >
          <Image
            src={imgNav}
            alt="logo-img-website"
            quality={100}
            fill
            priority
            placeholder="blur"
          />
        </div>
      </Link>
      <ul className="menu-list">
        {menuItems.map((item, index) => {
          /**
           * 🛠️ الحل هنا:
           * إذا كان المسار هو "الرئيسية" (المسار القصير)، لازم يطابق pathname بالظبط.
           * غير كدة، نستخدم startsWith عشان الصفحات الفرعية تنور الأب بتاعها.
           */
          const isActive =
            item.basePath === "/dashboard/user" ||
            item.basePath === "/dashboard/volunteer" ||
            item.basePath === "/dashboard/organization"
              ? pathname === item.basePath
              : pathname.startsWith(item.basePath);

          return (
            <li key={index}>
              <Link
                href={item.href}
                className={`menu-link ${isActive ? "active" : ""}`}
                onClick={closeAll}
              >
                <FontAwesomeIcon icon={item.icon} className="menu-icon" />
                <span className="menu-label">{item.label}</span>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default function Sidebar({ isMobileOpen = false, onMobileToggle }) {
  const sidebarRef = useRef(null);
  const locale = useLocale();
  const isRTL = locale === "ar";

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        isMobileOpen &&
        sidebarRef.current &&
        !sidebarRef.current.contains(event.target)
      ) {
        onMobileToggle(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isMobileOpen, onMobileToggle]);

  const closeAll = () => {
    if (window.innerWidth <= 768) onMobileToggle(false);
  };

  return (
    <>
      <aside className={`desktop-sidebar ${isRTL ? "rtl" : "ltr"}`}>
        <SidebarContent closeAll={() => {}} />
      </aside>

      {isMobileOpen && (
        <div
          className="mobile-backdrop"
          onClick={() => onMobileToggle(false)}
        />
      )}

      <aside
        ref={sidebarRef}
        className={`mobile-sidebar ${isMobileOpen ? "open" : ""} ${isRTL ? "rtl" : "ltr"}`}
      >
        <SidebarContent closeAll={closeAll} />
      </aside>
    </>
  );
}
