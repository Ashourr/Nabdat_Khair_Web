"use client";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSave,
  faCamera,
  faUser,
  faEnvelope,
  faPhone,
  faMapMarkerAlt,
  faTimes,
  faShieldAlt,
  faHeart,
  faVenusMars,
  faBriefcase,
  faClock,
  faIdCard,
  faIdCardAlt,
  faEye,
} from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import Image from "next/image";
import "./profileEdit.css"; // ✅ استيراد ملف CSS
import toast from "react-hot-toast";
import { useLocale } from "next-intl";

export default function ProfileEdit() {
  const locale = useLocale();
  // غير القيمة دي حسب اليوزر الحقيقي (user | volunteer | organization)
  const role = "volunteer";

  // حالة لعرض الصورة المكبرة
  const [selectedImage, setSelectedImage] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [formData, setFormData] = useState({
    name: "أحمد محمود",
    email: "ahmed@example.com",
    phone: "+20 100 123 4567",
    city: "الجيزة",
    interests: ["طبية", "تعليمية", "سقيا الماء"],
    avatar: "/images/team-0.webp",
    // بيانات إضافية للمتطوع
    gender: "ذكر",
    volunteerType: "فردي",
    availability: "دوام جزئي",
    volunteerFields: ["صحة", "تعليم", "إغاثة"],
    nationalId: "12345678901234", // الرقم القومي
    idFrontImage: "/images/faq.webp", // صورة البطاقة الأمامية
    idBackImage: "/images/faq.webp", // صورة البطاقة الخلفية
  });

  // دالة لعرض الصورة
  const openImageModal = (imageSrc, imageLabel) => {
    setSelectedImage({
      src: imageSrc,
      label: imageLabel,
    });
    setIsModalOpen(true);
  };

  // دالة لإغلاق المودال
  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedImage(null);
  };

  // --- دالة التعامل مع تغيير الصورة ---
  const handleAvatarChange = (e) => {
    const file = e.target.files[0];

    if (file) {
      console.log(
        "حجم الملف المختار:",
        (file.size / 1024 / 1024).toFixed(2),
        "MB",
      );

      const maxSizeInBytes = 1024 * 1024; // 1 ميجابايت

      if (file.size > maxSizeInBytes) {
        toast.error(
          locale === "en"
            ? "File is too large! Maximum limit is 1MB."
            : "الملف كبير جداً! الحد الأقصى المسموح به هو 1 ميجابايت.",
        );
        e.target.value = "";
        return;
      }

      const reader = new FileReader();
      reader.onload = () => {
        setFormData((prev) => ({
          ...prev,
          avatar: reader.result,
        }));
        toast.success(
          locale === "en"
            ? "Image selected successfully!"
            : "تم اختيار الصورة بنجاح!",
        );
      };
      reader.readAsDataURL(file);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleInterestChange = (interest) => {
    setFormData((prev) => {
      const isSelected = prev.interests.includes(interest);
      const updatedInterests = isSelected
        ? prev.interests.filter((i) => i !== interest)
        : [...prev.interests, interest];
      return { ...prev, interests: updatedInterests };
    });
  };

  const handleVolunteerFieldChange = (field) => {
    setFormData((prev) => {
      const isSelected = prev.volunteerFields.includes(field);
      const updatedFields = isSelected
        ? prev.volunteerFields.filter((f) => f !== field)
        : [...prev.volunteerFields, field];
      return { ...prev, volunteerFields: updatedFields };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Final Data to Save:", formData);
    toast.success(
      locale === "en" ? "Profile Updated!" : "تم تحديث الملف بنجاح!",
    );
  };

  const allInterests = [
    "كفالة أيتام",
    "بناء مساجد",
    "سقيا الماء",
    "تجهيز عرائس",
    "عمليات جراحية",
    "تعليم وفقر",
    "إطعام مساكين",
    "فك كرب غارمين",
    "أطراف صناعية",
    "صدقة جارية",
    "زكاة مال",
    "رعاية مسنين",
    "حقيبة مدرسية",
    "أضحية وعقيقة",
    "دعم ذوي الهمم",
  ];

  const allVolunteerFields = [
    "صحة",
    "تعليم",
    "إغاثة",
    "بيئة",
    "رياضة",
    "ثقافة",
    "تنمية",
    "إعلام",
  ];

  const volunteerTypeOptions = ["عام", "خاص"];

  return (
    <div className="profile-container">
      <form className="edit-card" onSubmit={handleSubmit}>
        {/* الهيدر */}
        <div className="edit-header">
          <div className="title-area">
            <h2>{locale === "en" ? "Edit Profile" : "تعديل البيانات"}</h2>
            <p>
              {locale === "en"
                ? "Update your personal information and preferences"
                : "قم بتحديث معلوماتك الشخصية وتفضيلات التطوع"}
            </p>
          </div>
          <div className="action-buttons">
            <Link
              href={`/${locale}/dashboard/user/profile`}
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

        {/* قسم الصورة الشخصية */}
        <div className="avatar-edit-section">
          <div className="avatar-preview-wrapper">
            <Image width={200} height={200} src={formData.avatar} alt="Profile" />
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

        {/* المعلومات الأساسية */}
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
              placeholder={locale === "en" ? "Enter your name" : "أدخل اسمك"}
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

        {/* حقول إضافية للمتطوع */}
        {role === "volunteer" && (
          <>
            <div className="inputs-grid" style={{ margin: "30px 0" }}>
              <div className="input-group">
                <label>
                  <FontAwesomeIcon icon={faBriefcase} />{" "}
                  {locale === "en" ? "Volunteer Type" : "نوع التطوع"}
                </label>
                <select
                  name="volunteerType"
                  value={formData.volunteerType}
                  onChange={handleChange}
                >
                  {volunteerTypeOptions.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* قسم البطاقة الشخصية - غير قابل للتعديل */}
            <div className="id-card-section">
              <h3>
                <FontAwesomeIcon
                  icon={faIdCardAlt}
                  style={{ marginLeft: "8px", color: "#7c3aed" }}
                />
                {locale === "en" ? "National ID Card" : "البطاقة الشخصية"}
              </h3>
              <p className="hint">
                {locale === "en"
                  ? "Your ID card information (cannot be edited)"
                  : "معلومات بطاقتك الشخصية (لا يمكن تعديلها)"}
              </p>

              {/* الرقم القومي */}
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
                  style={{
                    backgroundColor: "#f1f5f9",
                    color: "#64748b",
                    cursor: "not-allowed",
                    direction: "ltr",
                  }}
                />
              </div>

              {/* صور البطاقة */}
              <div className="id-cards-container">
                <div className="id-card-item">
                  <p className="id-card-label">
                    {locale === "en" ? "Front Side" : "الوجه الأمامي"}
                  </p>
                  <div className="id-card-image">
                    <Image
                      width={200}
                      height={200}
                      src={formData.idFrontImage}
                      alt="ID Front"
                    />
                    <button
                      type="button"
                      className="view-id-btn"
                      onClick={() =>
                        openImageModal(
                          formData.idFrontImage,
                          locale === "en"
                            ? "ID Card - Front"
                            : "البطاقة الشخصية - الوجه الأمامي",
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
                      height={200}
                      src={formData.idBackImage}
                      alt="ID Back"
                    />
                    <button
                      type="button"
                      className="view-id-btn"
                      onClick={() =>
                        openImageModal(
                          formData.idBackImage,
                          locale === "en"
                            ? "ID Card - Back"
                            : "البطاقة الشخصية - الوجه الخلفي",
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
            <div className="interests-selection" style={{ margin: "20px 0" }}>
              <h3>
                <FontAwesomeIcon
                  icon={faHeart}
                  style={{ marginLeft: "8px", color: "#7c3aed" }}
                />
                {locale === "en" ? "Volunteer Fields" : "مجالات التطوع"}
              </h3>
              <p className="hint">
                {locale === "en"
                  ? "Select the fields you're interested in volunteering"
                  : "اختر المجالات التي ترغب في التطوع بها"}
              </p>
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

        <hr className="divider" />

        {/* الاهتمامات الخيرية - تظهر للجميع */}
        {role === "user" && (
          <div className="interests-selection">
            <h3>
              <FontAwesomeIcon
                icon={faHeart}
                style={{ marginLeft: "8px", color: "#7c3aed" }}
              />
              {locale === "en" ? "Charity Interests" : "الاهتمامات الخيرية"}
            </h3>
            <p className="hint">
              {locale === "en"
                ? "Select your charity interests to get personalized recommendations"
                : "اختر اهتماماتك الخيرية للحصول على توصيات مخصصة"}
            </p>
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
                width={500}
                height={500}
                src={selectedImage.src}
                alt={selectedImage.label}
              />
            </div>
          </div>
        </div>
      )}

      {/* قسم الأمان */}
      <div className="security-alert-box">
        <div className="alert-content">
          <div className="icon-shield">🛡️</div>
          <div>
            <h4>{locale === "en" ? "Account Security" : "أمان الحساب"}</h4>
            <p>
              {locale === "en"
                ? "Manage your password and security settings"
                : "إدارة كلمة المرور وإعدادات الأمان"}
            </p>
          </div>
        </div>
        <Link
          href={`/${locale}/dashboard/user/profile/security-settings`}
          className="btn-security-link"
        >
          {locale === "en" ? "Security Settings" : "إعدادات الأمان"}
        </Link>
      </div>
    </div>
  );
}