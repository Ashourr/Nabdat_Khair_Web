"use client";
import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSave,
  faCamera,
  faUser,
  faEnvelope,
  faPhone,
  faMapMarkerAlt,
  faTimes,
  faHeart,
  faBriefcase,
  faIdCard,
  faIdCardAlt,
  faEye,
  faShieldAlt,
} from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import Image from "next/image";
import "./profileEdit.css";
import toast from "react-hot-toast";
import { useLocale } from "next-intl";
import { useRouter } from "next/navigation";

export default function ProfileEdit() {
  const locale = useLocale();
  const router = useRouter();

  // 1. تحديد الرول من التخزين المحلي
  const [role, setRole] = useState("user");

  useEffect(() => {
    const savedRole = localStorage.getItem("userRole");
    if (savedRole) {
      setRole(savedRole);
    }
  }, []);

  // 2. حالات المودال والصور
  const [selectedImage, setSelectedImage] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [formData, setFormData] = useState({
    name: "أحمد محمود",
    email: "ahmed@example.com",
    phone: "+20 100 123 4567",
    city: "الجيزة",
    interests: ["طبية", "تعليمية", "سقيا الماء"],
    avatar: "/images/team-0.webp",
    gender: "ذكر",
    volunteerType: "فردي",
    availability: "دوام جزئي",
    volunteerFields: ["صحة", "تعليم", "إغاثة"],
    nationalId: "12345678901234",
    idFrontImage: "/images/faq.webp",
    idBackImage: "/images/faq.webp",
  });

  // دالة فتح المودال
  const openImageModal = (imageSrc, imageLabel) => {
    setSelectedImage({ src: imageSrc, label: imageLabel });
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedImage(null);
  };

  // دالة تغيير الصورة الشخصية
  const handleAvatarChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const maxSizeInBytes = 1024 * 1024; // 1MB
      if (file.size > maxSizeInBytes) {
        toast.error(
          locale === "en"
            ? "File too large! Max 1MB."
            : "الملف كبير جداً! الحد الأقصى 1 ميجابايت.",
        );
        return;
      }
      const reader = new FileReader();
      reader.onload = () => {
        setFormData((prev) => ({ ...prev, avatar: reader.result }));
        toast.success(
          locale === "en" ? "Image selected!" : "تم اختيار الصورة!",
        );
      };
      reader.readAsDataURL(file);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleInterestChange = (interest) => {
    setFormData((prev) => {
      const isSelected = prev.interests.includes(interest);
      const updated = isSelected
        ? prev.interests.filter((i) => i !== interest)
        : [...prev.interests, interest];
      return { ...prev, interests: updated };
    });
  };

  const handleVolunteerFieldChange = (field) => {
    setFormData((prev) => {
      const isSelected = prev.volunteerFields.includes(field);
      const updated = isSelected
        ? prev.volunteerFields.filter((f) => f !== field)
        : [...prev.volunteerFields, field];
      return { ...prev, volunteerFields: updated };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Final Data to Save:", formData);
    toast.success(
      locale === "en" ? "Profile Updated!" : "تم تحديث الملف بنجاح!",
    );
    setTimeout(() => {
      router.push(`/${locale}/dashboard/${role}/profile`);
    }, 1500);
  };

  const allInterests = [
    "كفالة أيتام",
    "بناء مساجد",
    "سقيا الماء",
    "تجهيز عرائس",
    "عمليات جراحية",
    "تعليم وفقر",
    "إطعام مساكين",
    "فك كرب غارمين وغارمات",
    "صدقة جارية",
    "زكاة مال",
    "رعاية مسنين",
    "حقيبة مدرسية وزي مدرسي",
    "أضحية وعقيقة",
    "دعم ذوي الهمم",
    "وصلات كهرباء وأسقف منازل",
    "علاج أورام وسرطان",
    "مشاريع صغيرة للأسر المنتجة",
    "كفالة طلبة العلم",
    "شتاء آمن",
    "ترميم المستشفيات الحكومية",
  ];

  const allVolunteerFields = [
    "صحة",
    "تعليم",
    "إغاثة وطوارئ",
    "حماية البيئة والتشجير",
    "تنظيم فعاليات وندوات",
    "تعبئة وتوزيع كراتين الإطعام",
    "بحث اجتماعي",
    "دعم نفسي للأطفال",
    "تسويق وتصوير فوتوغرافي",
    "برمجة وتصميم جرافيك",
    "ترجمة وتعريب",
    "توعية دينية وثقافية",
    "تطوير مهارات الشباب",
    "رعاية أطفال الشوارع",
    "إدخال بيانات وأعمال إدارية",
    "تدريب حرفي ومهني",
    "زيارة دور الأيتام والمسنين",
    "توزيع ملابس وكساء",
    "توعية صحية ووقائية",
    "إدارة فرق وفرق كشافة",
  ];

  return (
    <div className="profile-container">
      <form className="edit-card" onSubmit={handleSubmit}>
        <div className="edit-header">
          <div className="title-area">
            <h2>{locale === "en" ? "Edit Profile" : "تعديل البيانات"}</h2>
            <p>
              {locale === "en"
                ? "Update your personal information"
                : "قم بتحديث معلوماتك الشخصية"}
            </p>
          </div>
          <div className="action-buttons">
            <Link
              href={`/${locale}/dashboard/${role}/profile`}
              className="btn-cancel"
            >
              <FontAwesomeIcon icon={faTimes} />{" "}
              {locale === "en" ? "Cancel" : "إلغاء"}
            </Link>
            <button type="submit" className="btn-save">
              <FontAwesomeIcon icon={faSave} />{" "}
              {locale === "en" ? "Save Changes" : "حفظ التغييرات"}
            </button>
          </div>
        </div>

        <div className="avatar-edit-section">
          <div className="avatar-preview-wrapper">
            <Image
              width={200}
              height={200}
              src={formData.avatar}
              alt="Profile"
            />
            <label htmlFor="avatar-upload" className="change-photo-badge">
              <FontAwesomeIcon icon={faCamera} />
              <input
                type="file"
                id="avatar-upload"
                hidden
                accept="image/*"
                onChange={handleAvatarChange}
              />
            </label>
          </div>
        </div>

        <div className="inputs-grid">
          <div className="input-group">
            <label>
              <FontAwesomeIcon icon={faUser} />{" "}
              {locale === "en" ? "Full Name" : "الاسم بالكامل"}
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
            />
          </div>
          <div className="input-group">
            <label>
              <FontAwesomeIcon icon={faEnvelope} />{" "}
              {locale === "en" ? "Email" : "البريد الإلكتروني"}
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
          </div>
          <div className="input-group">
            <label>
              <FontAwesomeIcon icon={faPhone} />{" "}
              {locale === "en" ? "Phone Number" : "رقم الهاتف"}
            </label>
            <input
              type="text"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
            />
          </div>
          <div className="input-group">
            <label>
              <FontAwesomeIcon icon={faMapMarkerAlt} />{" "}
              {locale === "en" ? "City" : "المدينة"}
            </label>
            <input
              type="text"
              name="city"
              value={formData.city}
              onChange={handleChange}
            />
          </div>
        </div>

        {role === "volunteer" && (
          <>
            {/* <div className="inputs-grid" style={{ margin: "30px 0" }}>
              <div className="input-group">
                <label>
                  <FontAwesomeIcon icon={faBriefcase} />{" "}
                  {locale === "en" ? "Availability" : "التفرغ"}
                </label>
                <select
                  name="availability"
                  value={formData.availability}
                  onChange={handleChange}
                >
                  <option value="دوام جزئي">دوام جزئي</option>
                  <option value="دوام كامل">دوام كامل</option>
                </select>
              </div>
            </div> */}

            <div className="id-card-section">
              <h3>
                <FontAwesomeIcon
                  icon={faIdCardAlt}
                  style={{ marginLeft: "8px", color: "#7c3aed" }}
                />
                {locale === "en" ? "National ID Card" : "البطاقة الشخصية"}
              </h3>
              <div className="input-group" style={{ marginBottom: "20px" }}>
                <label>
                  <FontAwesomeIcon icon={faIdCard} />{" "}
                  {locale === "en" ? "National ID Number" : "الرقم القومي"}
                </label>
                <input
                  type="text"
                  value={formData.nationalId}
                  disabled
                  readOnly
                  className="disabled-input"
                />
              </div>

              <div className="id-cards-container">
                <div className="id-card-item">
                  <p className="id-card-label">
                    {locale === "en" ? "Front Side" : "الوجه الأمامي"}
                  </p>
                  <div className="id-card-image">
                    <Image
                      width={200}
                      height={120}
                      src={formData.idFrontImage}
                      alt="ID Front"
                    />
                    <button
                      type="button"
                      className="view-id-btn"
                      onClick={() =>
                        openImageModal(
                          formData.idFrontImage,
                          locale === "en" ? "ID Front" : "الوجه الأمامي",
                        )
                      }
                    >
                      <FontAwesomeIcon icon={faEye} />{" "}
                      {locale === "en" ? "View" : "عرض"}
                    </button>
                  </div>
                </div>
                <div className="id-card-item">
                  <p className="id-card-label">
                    {locale === "en" ? "Back Side" : "الوجه الخلفي"}
                  </p>
                  <div className="id-card-image">
                    <Image
                      width={200}
                      height={120}
                      src={formData.idBackImage}
                      alt="ID Back"
                    />
                    <button
                      type="button"
                      className="view-id-btn"
                      onClick={() =>
                        openImageModal(
                          formData.idBackImage,
                          locale === "en" ? "ID Back" : "الوجه الخلفي",
                        )
                      }
                    >
                      <FontAwesomeIcon icon={faEye} />{" "}
                      {locale === "en" ? "View" : "عرض"}
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* مجالات التطوع */}
            <div className="interests-selection" style={{ marginTop: "30px" }}>
              <h3>{locale === "en" ? "Volunteer Fields" : "مجالات التطوع"}</h3>
              <div className="tags-container">
                {allVolunteerFields.map((field) => (
                  <label
                    key={field}
                    className={`check-tag ${formData.volunteerFields.includes(field) ? "active" : ""}`}
                  >
                    <input
                      type="checkbox"
                      checked={formData.volunteerFields.includes(field)}
                      onChange={() => handleVolunteerFieldChange(field)}
                      hidden
                    />
                    <span>{field}</span>
                  </label>
                ))}
              </div>
            </div>
          </>
        )}

        {role === "user" && (
          <div className="interests-selection">
            <h3>
              <FontAwesomeIcon
                icon={faHeart}
                style={{ marginLeft: "8px", color: "#7c3aed" }}
              />
              {locale === "en" ? "Charity Interests" : "الاهتمامات الخيرية"}
            </h3>
            <div className="tags-container">
              {allInterests.map((interest) => (
                <label
                  key={interest}
                  className={`check-tag ${formData.interests.includes(interest) ? "active" : ""}`}
                >
                  <input
                    type="checkbox"
                    checked={formData.interests.includes(interest)}
                    onChange={() => handleInterestChange(interest)}
                    hidden
                  />
                  <span>{interest}</span>
                </label>
              ))}
            </div>
          </div>
        )}
      </form>

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
                width={600}
                height={400}
                src={selectedImage.src}
                alt="Full view"
                className="full-image"
                style={{
                  width: "100%",
                  height: "auto",
                  maxHeight: "70vh",
                  objectFit: "contain",
                  borderRadius: "10px ",
                  padding:"10px"
                }}
                quality={80}
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
