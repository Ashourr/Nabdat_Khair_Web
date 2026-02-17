"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import "../authUser.css";
import { useLocale } from "next-intl";
import toast from "react-hot-toast";
import Select from "react-select";

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
    volunteerType: "",
    volunteerFields: [],
    availability: "",
    regions: "",
    // idCard: null,
    avatar: null,
    idCardFront: null,
    idCardBack: null,
  });

  const [step, setStep] = useState(1);
  const [avatarPreview, setAvatarPreview] = useState(null);
  // const [idCardPreview, setIdCardPreview] = useState(null);

  const [selectedVolunteerType, setSelectedVolunteerType] = useState(null);
  const [selectedAvailability, setSelectedAvailability] = useState(null);
  const [selectedOption, setSelectedOption] = useState(null);

  const [idCardFrontPreview, setIdCardFrontPreview] = useState(null);
  const [idCardBackPreview, setIdCardBackPreview] = useState(null);

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
    setIdCardFrontPreview(URL.createObjectURL(file));
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

  const volunteerTypeOptions = [
    { value: "ميداني", label: "ميداني" },
    { value: "إلكتروني", label: "إلكتروني" },
    { value: "إداري", label: "إداري" },
  ];

  const availabilityOptions = [
    { value: "full", label: "دوام كامل" },
    { value: "part", label: "جزئي" },
    { value: "onDemand", label: "حسب الطلب" },
  ];

  const nextStep = () => {
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
                  {/* Step 1 */}
                  {step === 1 && (
                    <>
                      <div className="input-group">
                        <label>الاسم الكامل</label>
                        <input
                          name="fullName"
                          type="text"
                          onChange={handleChange}
                          placeholder="ادخل الاسم الكامل"
                        />
                      </div>

                      <div className="input-group">
                        <label>البريد الإلكتروني</label>
                        <input
                          name="email"
                          type="email"
                          onChange={handleChange}
                          placeholder="ادخل البريد الإلكتروني"
                        />
                      </div>

                      <div className="input-group">
                        <label>رقم الهاتف</label>
                        <input
                          name="phone"
                          type="text"
                          onChange={handleChange}
                          placeholder="ادخل رقم الهاتف"
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

                  {/* Step 2 */}
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
                            }));
                          }}
                          options={volunteerTypeOptions}
                          placeholder="نوع التطوع"
                          isClearable
                          classNamePrefix="my-select"
                        />
                      </div>

                      <label>مجالات التطوع</label>
                      <div className="input-group">
                        <div className="input-group-checkbox">
                          {["طبي", "تعليمي", "إغاثي", "لوجستي", "تقني"].map(
                            (field) => (
                              <label key={field} className="checkbox">
                                <div>
                                  <input
                                  // className="input"
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

                      <label>التفرغ</label>
                      <div style={{ margin: "10px 0" }}>
                        <Select
                          instanceId="availability-select"
                          value={selectedAvailability}
                          onChange={(option) => {
                            setSelectedAvailability(option);
                            setFormData((prev) => ({
                              ...prev,
                              availability: option?.value || "",
                            }));
                          }}
                          options={availabilityOptions}
                          placeholder="اختر التفرغ"
                          isClearable
                          classNamePrefix="my-select"
                        />
                      </div>

                      <div className="input-group">
                        <label>المناطق المتاحة</label>
                        <input
                          name="regions"
                          type="text"
                          onChange={handleChange}
                          placeholder="ادخل المناطق المتاحة"
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

                  {/* Step 3 */}
                  {step === 3 && (
                    <>
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
