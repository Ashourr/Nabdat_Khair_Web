"use client";
import Link from "next/link";
import imgNav from "../../../public/images/logo.png";
import "./navbar.css";
import { useTranslations, useLocale } from "next-intl";
import { useRouter, usePathname } from "../../../i18n/navigation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faBell,
  faCommentDollar,
  faEarthAmericas,
  faHouse,
  faMoon,
  faPassport,
  faSearch,
  faSun,
  faUserTie,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState, useCallback, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleTheme } from "@/rit/slices/ThemeSlice";
import Image from "next/image";

export default function Navbar() {
  const t = useTranslations("navbar");
  const tLocaleSwitcher = useTranslations("LocaleSwitcher");
  const locale = useLocale();
  const nextLocale = locale === "en" ? "ar" : "en";
  const router = useRouter();
  const pathname = usePathname();
  const dispatch = useDispatch();
  const theme = useSelector((state) => state.theme.theme);

  const handleChangeLanguage = useCallback(() => {
    router.replace(pathname, { locale: nextLocale });
  }, [router, pathname, nextLocale]);

  const handleToggleTheme = useCallback(() => {
    dispatch(toggleTheme());
  }, [dispatch]);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [pathname]);

  const [open, setOpen] = useState(false);
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  const [openDropdown, setOpenDropdown] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setOpenDropdown(false);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  return (
    <div className={`nav-bar w-100 fixed-top`}>
      <div className="container pe-3 ps-3 p-lg-0">
        <nav className={`navbar navbar-expand-lg `}>
          <Link href="/" className="navbar-brand">
            <div className="img">
              <Image
                src={imgNav}
                alt="logo-img-website"
                width={150}
                height={75}
                quality={75}
                priority
                placeholder="blur"
              />
            </div>
          </Link>

          <div className="d-flex align-items-center">
            <div className="lang" onClick={handleChangeLanguage}>
              <FontAwesomeIcon icon={faEarthAmericas} className="ico2" />
            </div>

            <div onClick={handleToggleTheme}>
              <FontAwesomeIcon
                icon={theme === "light" ? faMoon : faSun}
                className="ico2"
              />
            </div>

            <div className="lang">
              <FontAwesomeIcon icon={faSearch} className="ico2" />
            </div>

            <button
              className="navbar-toggler"
              type="button"
              aria-expanded={open}
              onClick={() => setOpen(!open)}
            >
              <FontAwesomeIcon icon={open ? faXmark : faBars} />
            </button>
          </div>

          <div
            className={`collapse navbar-collapse ${open ? "show" : ""}`}
            id="mian"
          >
            <ul
              className={`navbar-nav ${
                nextLocale === "en" ? "m-auto" : "m-auto"
              } mb-2 mb-lg-0`}
            >
              <li className="nav-item">
                <Link
                  href={`/${locale}`}
                  className={`nav-link ${
                    pathname === `/${locale}` || pathname === "/"
                      ? "active"
                      : ""
                  }`}
                  aria-current={
                    pathname === `/${locale}` || pathname === "/"
                      ? "page"
                      : undefined
                  }
                >
                  <FontAwesomeIcon className="link-icon" icon={faHouse} />
                  {t("home")}
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  href={`/${locale}/about`}
                  className={`nav-link ${
                    pathname === `/${locale}/about` || pathname === "/about"
                      ? "active"
                      : ""
                  }`}
                  aria-current={
                    pathname === `/${locale}/about` || pathname === "/about"
                      ? "page"
                      : undefined
                  }
                >
                  <FontAwesomeIcon className="link-icon" icon={faUserTie} />
                  {t("about")}
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  href={`/${locale}/foundation`}
                  className={`nav-link ${
                    pathname === `/${locale}/foundation` ||
                    pathname === "/organizafoundationtions"
                      ? "active"
                      : ""
                  }`}
                  aria-current={
                    pathname === `/${locale}/foundation` ||
                    pathname === "/foundation"
                      ? "page"
                      : undefined
                  }
                >
                  <FontAwesomeIcon className="link-icon" icon={faPassport} />
                  {t("foundation")}
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  href={`/${locale}/cases`}
                  className={`nav-link ${
                    pathname === `/${locale}/Donate` || pathname === "/Donate"
                      ? "active"
                      : ""
                  }`}
                  aria-current={
                    pathname === `/${locale}/Donate` || pathname === "/Donate"
                      ? "page"
                      : undefined
                  }
                >
                  <FontAwesomeIcon
                    className="link-icon"
                    icon={faCommentDollar}
                  />
                  {t("Donate")}
                </Link>
              </li>
            </ul>
            <li className="mood" onClick={handleToggleTheme}>
              <FontAwesomeIcon
                icon={theme === "light" ? faMoon : faSun}
                className="ico1"
              />
            </li>
            <li className="mood">
              <FontAwesomeIcon icon={faSearch} className="ico1" />
            </li>
            <li className="mood">
              <FontAwesomeIcon icon={faBell} className="ico1" />
            </li>
            <li className="mood lang-but" onClick={handleChangeLanguage}>
              <FontAwesomeIcon icon={faEarthAmericas} className="ico1" />
            </li>

            <div className="dropdown-login" ref={dropdownRef}>
              <button
                className="login-btn"
                onClick={() => setOpenDropdown(!openDropdown)}
              >
                {t("register")}
                <span
                  className={`arrow ${openDropdown ? "up" : "down"}`}
                ></span>
              </button>

              <div
                className={`login-menu ${locale} ${openDropdown ? "open" : ""}`}
              >
                <Link
                  href={`/${locale}/authUser/loginUser`}
                  className="login-item"
                  onClick={() => setOpenDropdown(!openDropdown)}
                >
                  {t("registerUser")}
                </Link>
                <Link
                  href={`/${locale}/authVolunteer/loginVolunteer`}
                  className="login-item"
                  onClick={() => setOpenDropdown(!openDropdown)}
                >
                  {t("registerVolunteer")}
                </Link>
                <Link
                  href={`/${locale}/authFoundation/loginFoundation`}
                  className="login-item"
                  onClick={() => setOpenDropdown(!openDropdown)}
                >
                  {t("registerOrganization")}
                </Link>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
}
