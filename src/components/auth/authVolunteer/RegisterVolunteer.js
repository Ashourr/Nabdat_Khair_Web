"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import "../authUser.css";
import { useLocale } from "next-intl";
import toast from "react-hot-toast";
import Select from "react-select";

// قائمة المؤسسات
const organizationsList = [
  { id: 1, name: "مؤسسة الرسالة", field: "طبي" },
  { id: 2, name: "جمعية الأورمان", field: "إغاثي" },
  { id: 3, name: "مؤسسة بهية", field: "طبي" },
  { id: 4, name: "مؤسسة مصر الخير", field: "تعليمي" },
  { id: 5, name: "جمعية راعي مصر", field: "إغاثي" },
  { id: 6, name: "بنك الطعام المصري", field: "إغاثي" },
  { id: 7, name: "مؤسسة صناع الحياة", field: "تقني" },
  { id: 8, name: "جمعية رسالة للأعمال الخيرية", field: "لوجستي" },
  { id: 9, name: "مؤسسة مجدي يعقوب", field: "طبي" },
  { id: 10, name: "الهلال الأحمر المصري", field: "إغاثي" },
];
export default function RegisterVolunteer() {
  const locale = useLocale();


  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    gender: "",
    address: "",
    password: "",
    confirmPassword: "",
    volunteerType: "", // نوع التطوع (عام، دائم، عادي)
    volunteerFields: [],
    nationalId: "",
    avatar: null,
    idCardFront: null,
    idCardBack: null,
    selectedOrganization: null, // المؤسسة المختارة
  });

  const [step, setStep] = useState(1);
  const [avatarPreview, setAvatarPreview] = useState(null);
  const [selectedVolunteerType, setSelectedVolunteerType] = useState(null);
  const [selectedOrganization, setSelectedOrganization] = useState(null);
  const [selectedOption, setSelectedOption] = useState(null);

  const [idCardFrontPreview, setIdCardFrontPreview] = useState(null);
  const [idCardBackPreview, setIdCardBackPreview] = useState(null);

  // تصفية المؤسسات حسب مجالات التطوع المختارة
  const [filteredOrganizations, setFilteredOrganizations] = useState([]);

  useEffect(() => {
    if (formData.volunteerFields.length > 0) {
      const filtered = organizationsList.filter((org) =>
        formData.volunteerFields.includes(org.field),
      );
      setFilteredOrganizations(filtered);
    } else {
      setFilteredOrganizations(organizationsList);
    }
  }, [formData.volunteerFields]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleAvatarChange = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;

    if (file.size > 2 * 1024 * 1024) {
      toast.error(
        locale === "en"
          ? "Image size must be less than 2MB"
          : "حجم الصورة لازم يكون أقل من 2MB",
      );
      return;
    }

    setFormData((prev) => ({ ...prev, avatar: file }));
    setAvatarPreview(URL.createObjectURL(file));
  };

  const handleIdFrontChange = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setFormData((prev) => ({ ...prev, idCardFront: file }));
    const previewUrl = URL.createObjectURL(file);
    setIdCardFrontPreview(previewUrl);
  };

  const handleIdBackChange = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setFormData((prev) => ({ ...prev, idCardBack: file }));
    setIdCardBackPreview(URL.createObjectURL(file));
  };

  useEffect(() => {
    return () => {
      if (idCardFrontPreview) URL.revokeObjectURL(idCardFrontPreview);
      if (idCardBackPreview) URL.revokeObjectURL(idCardBackPreview);
      if (avatarPreview) URL.revokeObjectURL(avatarPreview);
    };
  }, [idCardFrontPreview, idCardBackPreview, avatarPreview]);

  const optionsByLocale = (locale) => [
    { value: "male", label: locale === "en" ? "Male" : "ذكر" },
    { value: "female", label: locale === "en" ? "Female" : "أنثى" },
  ];

  // أنواع التطوع الرئيسية
  const volunteerTypeOptions = [
    {
      value: "عام",
      label: "عام (مع الكل)",
      description: "يمكنك التطوع مع أي مؤسسة أو في أي مجال",
    },
    {
      value: "دائم",
      label: "دائم (تابع لمؤسسة)",
      description: "متطوع دائم تابع لمؤسسة محددة",
    },
    {
      value: "عادي",
      label: "عادي (شغال مع الكل)",
      description: "متطوع عادي يعمل مع الجميع",
    },
  ];

  // خيارات المؤسسات لـ Select
  const organizationOptions = filteredOrganizations.map((org) => ({
    value: org.id,
    label: org.name,
    field: org.field,
  }));

  const nextStep = () => {
    // if (step === 1) {
    //   if (
    //     !formData.fullName ||
    //     !formData.email ||
    //     !formData.phone ||
    //     !formData.gender ||
    //     !formData.address
    //   ) {
    //     toast.error(
    //       locale === "en" ? "Please fill all fields" : "الرجاء ملء جميع الحقول",
    //     );
    //     return;
    //   }
    // }
    // if (step === 2) {
    //   if (!formData.volunteerType || formData.volunteerFields.length === 0) {
    //     toast.error(
    //       locale === "en"
    //         ? "Please select volunteer type and fields"
    //         : "الرجاء اختيار نوع ومجالات التطوع",
    //     );
    //     return;
    //   }

    //   if (formData.volunteerType === "دائم" && !formData.selectedOrganization) {
    //     toast.error(
    //       locale === "en"
    //         ? "Please select an organization"
    //         : "الرجاء اختيار مؤسسة",
    //     );
    //     return;
    //   }
    // }
    setStep((prev) => prev + 1);
  };

  const prevStep = () => setStep((prev) => prev - 1);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      toast.error(
        locale === "en" ? "Passwords do not match" : "كلمات المرور غير متطابقة",
      );
      return;
    }

    if (!formData.idCardFront || !formData.idCardBack) {
      toast.error(
        locale === "en"
          ? "Please upload both sides of ID card"
          : "الرجاء رفع وجهي البطاقة",
      );
      return;
    }

    console.log("Form Data:", formData);
    toast.success(locale === "en" ? "Account created!" : "تم إنشاء الحساب!");
  };

  return (
    <div className="login">
      <div className="container">
        <div className="row">
          {/* Form Section */}
          <div className="col-12 col-lg-6">
            <div className="login-form">
              <div className="form-wrapper">
                <h2>انضم كمتطوع وغير الحياة</h2>
                <p>سجّل الآن وابدأ رحلة العطاء بكل سهولة وثقة.</p>

                <div className="step-indicator">
                  <span className={step >= 1 ? "active" : ""}>1</span>
                  <span className={step >= 2 ? "active" : ""}>2</span>
                  <span className={step >= 3 ? "active" : ""}>3</span>
                </div>

                <form onSubmit={handleSubmit}>
                  {/* Step 1 - المعلومات الأساسية */}
                  {step === 1 && (
                    <>
                      <div className="input-group">
                        <label>الاسم الكامل</label>
                        <input
                          name="fullName"
                          type="text"
                          onChange={handleChange}
                          placeholder="ادخل الاسم الكامل"
                          value={formData.fullName}
                        />
                      </div>

                      <div className="input-group">
                        <label>البريد الإلكتروني</label>
                        <input
                          name="email"
                          type="email"
                          onChange={handleChange}
                          placeholder="ادخل البريد الإلكتروني"
                          value={formData.email}
                        />
                      </div>

                      <div className="input-group">
                        <label>رقم الهاتف</label>
                        <input
                          name="phone"
                          type="text"
                          onChange={handleChange}
                          placeholder="ادخل رقم الهاتف"
                          value={formData.phone}
                        />
                      </div>

                      <label>الجنس :</label>
                      <div style={{ margin: "10px 0" }}>
                        <Select
                          instanceId="gender-select"
                          value={selectedOption}
                          onChange={(option) => {
                            setSelectedOption(option);
                            setFormData((prev) => ({
                              ...prev,
                              gender: option?.value || "",
                            }));
                          }}
                          options={optionsByLocale(locale)}
                          placeholder={locale === "en" ? "Gender" : "الجنس"}
                          isClearable
                          classNamePrefix="my-select"
                        />
                      </div>

                      <div className="input-group">
                        <label>العنوان</label>
                        <input
                          name="address"
                          type="text"
                          onChange={handleChange}
                          placeholder="ادخل العنوان"
                          value={formData.address}
                        />
                      </div>

                      <button
                        type="button"
                        className="signup-btn"
                        onClick={nextStep}
                      >
                        التالي
                      </button>
                    </>
                  )}

                  {/* Step 2 - بيانات التطوع مع المؤسسات */}
                  {step === 2 && (
                    <>
                      <label>نوع التطوع</label>
                      <div style={{ margin: "10px 0" }}>
                        <Select
                          instanceId="volunteer-type-select"
                          value={selectedVolunteerType}
                          onChange={(option) => {
                            setSelectedVolunteerType(option);
                            setFormData((prev) => ({
                              ...prev,
                              volunteerType: option?.value || "",
                              selectedOrganization: null, // إعادة تعيين المؤسسة عند تغيير النوع
                            }));
                            setSelectedOrganization(null);
                          }}
                          options={volunteerTypeOptions}
                          placeholder="اختر نوع التطوع"
                          isClearable
                          classNamePrefix="my-select"
                        />
                      </div>

                      {/* عرض وصف النوع المختار */}
                      {selectedVolunteerType && (
                        <div
                          style={{
                            padding: "10px",
                            background: "#f0f9ff",
                            borderRadius: "8px",
                            marginBottom: "15px",
                            color: "#0369a1",
                            fontSize: "14px",
                          }}
                        >
                          {selectedVolunteerType.description}
                        </div>
                      )}

                      <label>مجالات التطوع</label>
                      <div className="input-group">
                        <div className="input-group-checkbox">
                          {["طبي", "تعليمي", "إغاثي", "لوجستي", "تقني"].map(
                            (field) => (
                              <label key={field} className="checkbox">
                                <div>
                                  <input
                                    type="checkbox"
                                    value={field}
                                    onChange={(e) => {
                                      if (e.target.checked) {
                                        setFormData((prev) => ({
                                          ...prev,
                                          volunteerFields: [
                                            ...prev.volunteerFields,
                                            field,
                                          ],
                                        }));
                                      } else {
                                        setFormData((prev) => ({
                                          ...prev,
                                          volunteerFields:
                                            prev.volunteerFields.filter(
                                              (f) => f !== field,
                                            ),
                                        }));
                                      }
                                    }}
                                  />
                                </div>
                                {field}
                              </label>
                            ),
                          )}
                        </div>
                      </div>

                      {/* اختيار المؤسسة - يظهر فقط إذا كان النوع "دائم" */}
                      {formData.volunteerType === "دائم" && (
                        <>
                          <label
                            style={{ marginTop: "20px", display: "block" }}
                          >
                            اختر المؤسسة
                          </label>
                          <div style={{ margin: "10px 0" }}>
                            <Select
                              instanceId="organization-select"
                              value={selectedOrganization}
                              onChange={(option) => {
                                setSelectedOrganization(option);
                                setFormData((prev) => ({
                                  ...prev,
                                  selectedOrganization: option
                                    ? {
                                        id: option.value,
                                        name: option.label,
                                        field: option.field,
                                      }
                                    : null,
                                }));
                              }}
                              options={organizationOptions}
                              placeholder="اختر المؤسسة"
                              isClearable
                              classNamePrefix="my-select"
                              isDisabled={filteredOrganizations.length === 0}
                            />
                            {filteredOrganizations.length === 0 && (
                              <p
                                style={{
                                  color: "#ef4444",
                                  fontSize: "12px",
                                  marginTop: "5px",
                                }}
                              >
                                لا توجد مؤسسات في المجالات المختارة
                              </p>
                            )}
                          </div>
                        </>
                      )}

                      {/* رسالة للمستخدمين العاديين */}
                      {(formData.volunteerType === "عام" ||
                        formData.volunteerType === "عادي") && (
                        <div
                          style={{
                            padding: "15px",
                            background: "#f3e8ff",
                            borderRadius: "8px",
                            marginTop: "20px",
                            color: "#7c3aed",
                            fontSize: "14px",
                          }}
                        >
                          {formData.volunteerType === "عام"
                            ? "🌟 ستظهر لك جميع الفرص التطوعية من جميع المؤسسات"
                            : "🤝 يمكنك التطوع مع أي مؤسسة في أي وقت"}
                        </div>
                      )}

                      <div
                        className="input-group"
                        style={{ marginTop: "20px" }}
                      >
                        <label>صورة شخصية (اختياري)</label>
                        <div className="avatar-upload">
                          <label htmlFor="avatarInput" className="avatar-label">
                            {avatarPreview ? (
                              <Image
                                fill
                                src={avatarPreview}
                                alt="Avatar Preview"
                                style={{
                                  objectFit: "cover",
                                  objectPosition: "center",
                                }}
                              />
                            ) : (
                              <span>+</span>
                            )}
                          </label>
                          <input
                            id="avatarInput"
                            type="file"
                            accept="image/*"
                            onChange={handleAvatarChange}
                            hidden
                          />
                          <p className="avatar-text">
                            إضافة صورة شخصية (اختياري)
                          </p>
                        </div>
                      </div>

                      <div className="button-group">
                        <button
                          type="button"
                          className="back-btn"
                          onClick={prevStep}
                        >
                          رجوع
                        </button>
                        <button
                          type="button"
                          className="signup-btn"
                          onClick={nextStep}
                        >
                          التالي
                        </button>
                      </div>
                    </>
                  )}

                  {/* Step 3 - الصور وكلمة المرور */}
                  {step === 3 && (
                    <>
                      <div className="input-group">
                        <label>الرقم القومي</label>
                        <input
                          name="nationalId"
                          type="text"
                          onChange={handleChange}
                          placeholder="ادخل الرقم القومي"
                          value={formData.nationalId}
                          style={{ direction: "ltr" }}
                        />
                      </div>

                      <label>صورة البطاقة الشخصية</label>
                      <div className="input-group" style={{ gap: "20px" }}>
                        {/* Front ID */}
                        <div className="avatar-upload">
                          <label
                            htmlFor="idFrontInput"
                            className="avatar-label-square"
                          >
                            {idCardFrontPreview ? (
                              <Image
                                fill
                                src={idCardFrontPreview}
                                alt="ID Front Preview"
                                style={{ objectFit: "contain", padding: "5px" }}
                              />
                            ) : (
                              <span>+</span>
                            )}
                          </label>
                          <input
                            id="idFrontInput"
                            type="file"
                            accept="image/*"
                            onChange={handleIdFrontChange}
                            hidden
                          />
                          <p className="avatar-text">الوجه الأمامي للبطاقة</p>
                        </div>

                        {/* Back ID */}
                        <div className="avatar-upload">
                          <label
                            htmlFor="idBackInput"
                            className="avatar-label-square"
                          >
                            {idCardBackPreview ? (
                              <Image
                                fill
                                src={idCardBackPreview}
                                alt="ID Back Preview"
                                style={{ objectFit: "contain", padding: "5px" }}
                              />
                            ) : (
                              <span>+</span>
                            )}
                          </label>
                          <input
                            id="idBackInput"
                            type="file"
                            accept="image/*"
                            onChange={handleIdBackChange}
                            hidden
                          />
                          <p className="avatar-text">الوجه الخلفي للبطاقة</p>
                        </div>
                      </div>

                      <div className="input-group">
                        <label>كلمة المرور</label>
                        <input
                          name="password"
                          type="password"
                          onChange={handleChange}
                          placeholder="ادخل كلمة المرور"
                        />
                      </div>

                      <div className="input-group">
                        <label>تأكيد كلمة المرور</label>
                        <input
                          name="confirmPassword"
                          type="password"
                          onChange={handleChange}
                          placeholder="تأكيد كلمة المرور"
                        />
                      </div>

                      <div className="button-group">
                        <button
                          type="button"
                          className="back-btn"
                          onClick={prevStep}
                        >
                          رجوع
                        </button>
                        <button type="submit" className="signup-btn">
                          إنشاء الحساب
                        </button>
                      </div>
                    </>
                  )}
                </form>

                <p className="footer-text">
                  لديك حساب بالفعل؟{" "}
                  <Link href={`/${locale}/authVolunteer/loginVolunteer`}>
                    تسجيل الدخول
                  </Link>
                </p>
              </div>
            </div>
          </div>

          {/* Image Section */}
          <div className="col-0 col-lg-6 d-none d-lg-block">
            <div className="login-image">
              <div className="image-wrapper">
                <Image
                  src="/images/art-1.webp"
                  alt="Artwork"
                  fill
                  priority
                  style={{ objectFit: "cover", objectPosition: "center" }}
                />
                <div className="image-overlay-text">
                  <h2>كل مساهمة تُحدث فرقًا</h2>
                  <p>
                    بخطوة بسيطة منك، يمكن أن تغيّر حياة إنسان. تبرع بسهولة وأمان
                    وكن سببًا في صناعة الأمل.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
