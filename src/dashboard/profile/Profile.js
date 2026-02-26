"use client";
import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUserEdit,
  faEnvelope,
  faPhone,
  faMapMarkerAlt,
  faHeart,
  faShieldAlt,
  faUser,
  faIdCard,
  faCamera,
  faVenusMars,
  faBriefcase,
  faClock,
  faTimes,
  faExpand,
  faEye,
} from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import Image from "next/image";
import "./profile.css";
import { useLocale } from "next-intl";

export default function Profile() {
  const locale = useLocale();

  const [role, setRole] = useState("user");

  useEffect(() => {
    const savedRole = localStorage.getItem("userRole");
    if (savedRole) {
      setRole(savedRole);
    }
  }, []);

  const [selectedImage, setSelectedImage] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [userData] = useState({
    name: "أحمد محمود",
    email: "ahmed@example.com",
    phone: "+20 100 123 4567",
    city: "الجيزة، مصر",
    joinDate: "يناير 2023",
    donationsCount: 15,
    supportedCampaigns: 8,
    interests: ["طبية", "تعليمية", "سقيا الماء"],
    avatar: "/images/team-0.webp",
    gender: "ذكر",
    volunteerType: "فردي",
    availability: "دوام جزئي",
    volunteerFields: ["صحة", "تعليم", "إغاثة", "بيئة"],
    idFrontImage: "/images/faq.webp", // صورة البطاقة الأمامية
    idBackImage: "/images/faq.webp", // صورة البطاقة الخلفية
    idNumber: "12345678901234",
  });

  const openImageModal = (imageSrc, imageLabel) => {
    setSelectedImage({ src: imageSrc, label: imageLabel });
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedImage(null);
  };

  return (
    <div className="profile-container">
      <div className="header-section">
        <h1>الملف الشخصي</h1>
        <p>
          إدارة بياناتك الشخصية، تتبع مساهماتك، والتحكم في إعدادات حسابك في مكان
          واحد.
        </p>
        <Link
          href={`/${locale}/dashboard/${role}/profile/profile-edit`}
          className="edit-profile-btn"
        >
          <FontAwesomeIcon icon={faUserEdit} /> تعديل البيانات
        </Link>
      </div>

      <div className="profile-side-card">
        <div className="avatar-wrapper">
          <Image
            src={userData.avatar}
            alt={userData.name}
            width={200}
            height={200}
            quality={100}
          />
          <span className="badge-pro">
            {role === "volunteer" ? "متطوع نشط" : "متبرع مميز"}
          </span>
          <button
            className="expand-avatar-btn"
            onClick={() => openImageModal(userData.avatar, "الصورة الشخصية")}
          >
            <FontAwesomeIcon icon={faExpand} />
          </button>
        </div>
        <h2 style={{ textAlign: "center" }}>{userData.name}</h2>
        <p className="join-date">انضم منذ {userData.joinDate}</p>

        <div>
          <div className="quick-info">
            <div className="info-item">
              <FontAwesomeIcon icon={faUser} /> <span>{userData.name}</span>
            </div>
            <div className="info-item">
              <FontAwesomeIcon icon={faEnvelope} />{" "}
              <span>{userData.email}</span>
            </div>
            <div className="info-item">
              <FontAwesomeIcon icon={faPhone} /> <span>{userData.phone}</span>
            </div>
            <div className="info-item">
              <FontAwesomeIcon icon={faMapMarkerAlt} />{" "}
              <span>{userData.city}</span>
            </div>

            {role === "volunteer" && (
              <>
                <div className="info-item">
                  <FontAwesomeIcon icon={faVenusMars} />{" "}
                  <span>{userData.gender}</span>
                </div>
                <div className="info-item">
                  <FontAwesomeIcon icon={faBriefcase} />{" "}
                  <span>تطوع {userData.volunteerType}</span>
                </div>
                <div className="info-item">
                  <FontAwesomeIcon icon={faClock} />{" "}
                  <span>{userData.availability}</span>
                </div>
              </>
            )}
          </div>

          {role === "volunteer" && (
            <div className="details-section">
              <h3>
                <FontAwesomeIcon icon={faHeart} /> مجالات التطوع
              </h3>
              <div className="interests-tags">
                {userData.volunteerFields.map((field, i) => (
                  <span key={i} className="tag">
                    {field}
                  </span>
                ))}
              </div>
            </div>
          )}

          {role === "user" && (
            <div className="details-section">
              <h3>
                <FontAwesomeIcon icon={faHeart} /> الاهتمامات الخيرية
              </h3>
              <div className="interests-tags">
                {userData.interests.map((int, i) => (
                  <span key={i} className="tag">
                    {int}
                  </span>
                ))}
              </div>
            </div>
          )}

          {role === "volunteer" && (
            <div className="details-section">
              <h3>
                <FontAwesomeIcon icon={faIdCard} /> البطاقة الشخصية
              </h3>
              <div className="id-cards-container">
                {/* الوجه الأمامي */}
                <div className="id-card-item">
                  <p className="id-card-label">
                    {locale === "en" ? "Front Side" : "الوجه الأمامي"}
                  </p>
                  <div className="id-card-image">
                    <Image
                      src={userData.idFrontImage}
                      alt="ID Front"
                      width={200}
                      height={120}
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                      }}
                    />
                    <button
                      className="view-id-btn"
                      onClick={() =>
                        openImageModal(
                          userData.idFrontImage,
                          locale === "en" ? "ID Front" : "الوجه الأمامي"
                        )
                      }
                    >
                      <FontAwesomeIcon icon={faEye} />
                      <span>{locale === "en" ? "View" : "عرض"}</span>
                    </button>
                  </div>
                </div>

                {/* الوجه الخلفي */}
                <div className="id-card-item">
                  <p className="id-card-label">
                    {locale === "en" ? "Back Side" : "الوجه الخلفي"}
                  </p>
                  <div className="id-card-image">
                    <Image
                      src={userData.idBackImage}
                      alt="ID Back"
                      width={200}
                      height={120}
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                      }}
                    />
                    <button
                      className="view-id-btn"
                      onClick={() =>
                        openImageModal(
                          userData.idBackImage,
                          locale === "en" ? "ID Back" : "الوجه الخلفي"
                        )
                      }
                    >
                      <FontAwesomeIcon icon={faEye} />
                      <span>{locale === "en" ? "View" : "عرض"}</span>
                    </button>
                  </div>
                </div>
              </div>
              <p className="id-number">رقم البطاقة: {userData.idNumber}</p>
            </div>
          )}
        </div>
      </div>

      {/* Modal لعرض الصورة المكبرة */}
      {isModalOpen && selectedImage && (
        <div className="image-modal" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h3>{selectedImage.label}</h3>
              <button className="close-modal-btn" onClick={closeModal}>
                <FontAwesomeIcon icon={faTimes} />
              </button>
            </div>
            <div className="modal-body">
              <Image
                src={selectedImage.src}
                alt={selectedImage.label}
                width={600}
                height={500}
                style={{
                  width: "100%",
                  height: "auto",
                  maxHeight: "70vh",
                  objectFit: "contain",
                  borderRadius: "10px",
                }}
                quality={100}
              />
            </div>
          </div>
        </div>
      )}

      <div className="security-box">
        <div className="sec-info">
          <FontAwesomeIcon icon={faShieldAlt} />
          <div>
            <h4>أمان الحساب</h4>
            <p>يمكنك تغيير كلمة المرور أو تفعيل المصادقة الثنائية</p>
          </div>
        </div>
        <Link
          href={`/${locale}/dashboard/${role}/profile/security-settings`}
          className="sec-link"
        >
          إعدادات الأمان
        </Link>
      </div>
    </div>
  );
}