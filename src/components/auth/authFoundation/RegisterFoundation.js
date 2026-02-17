"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import "../authUser.css";
import { useLocale } from "next-intl";
import toast from "react-hot-toast";
import Select from "react-select";

export default function RegisterFoundation() {
  const locale = useLocale();

  const [formData, setFormData] = useState({
    founderName: "",
    email: "",
    phone: "",
    foundationType: "",
    licenseNumber: "",
    supervisorAuthority: "",
    licenseImage: null,
    commercialRegister: null,
    taxCard: null,
    approvalLetter: null,
    buildingImage: null,
    logo: null,
    password: "",
    confirmPassword: "",
  });

  const [step, setStep] = useState(1);

  const [previews, setPreviews] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e, fieldName) => {
    const file = e.target.files?.[0];
    if (!file) return;

    if (file.size > 2 * 1024 * 1024) {
      toast.error(
        locale === "en"
          ? "File size must be less than 2MB"
          : "حجم الملف يجب أن يكون أقل من 2MB"
      );
      return;
    }

    setFormData((prev) => ({ ...prev, [fieldName]: file }));
    setPreviews((prev) => ({
      ...prev,
      [fieldName]: URL.createObjectURL(file),
    }));
  };

  useEffect(() => {
    return () => {
      Object.values(previews).forEach((url) => URL.revokeObjectURL(url));
    };
  }, [previews]);

  const foundationTypeOptions = [
    { value: "جمعية خيرية", label: "جمعية خيرية" },
    { value: "مؤسسة أهلية", label: "مؤسسة أهلية" },
    { value: "مبادرة", label: "مبادرة" },
    { value: "منظمة مجتمع مدني", label: "منظمة مجتمع مدني" },
  ];

  const nextStep = () => setStep((prev) => prev + 1);
  const prevStep = () => setStep((prev) => prev - 1);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      toast.error(
        locale === "en"
          ? "Passwords do not match"
          : "كلمات المرور غير متطابقة"
      );
      return;
    }

    console.log("Foundation Data:", formData);
    toast.success(
      locale === "en"
        ? "Foundation registered successfully!"
        : "تم تسجيل المؤسسة بنجاح!"
    );
  };

  return (
    <div className="login">
      <div className="container">
        <div className="row">
          <div className="col-12 col-lg-6">
            <div className="login-form">
              <div className="form-wrapper">
                <h2>🏢 تسجيل المؤسسات الخيرية</h2>
                <p>سجّل مؤسستك وابدأ رحلة العطاء الرقمي.</p>

                <div className="step-indicator">
                  <span className={step >= 1 ? "active" : ""}>1</span>
                  <span className={step >= 2 ? "active" : ""}>2</span>
                  <span className={step >= 3 ? "active" : ""}>3</span>
                </div>

                <form onSubmit={handleSubmit}>
                  {/* ================== STEP 1 ================== */}
                  {step === 1 && (
                    <>
                      <h4>🏛 معلومات المؤسسة</h4>

                      <div className="input-group">
                        <label>اسم المؤسس</label>
                        <input
                          name="founderName"
                          type="text"
                          onChange={handleChange}
                          placeholder="ادخل اسم المؤسسة"
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

                      <label>نوع المؤسسة</label>
                      <Select
                      instanceId="availability-select-2"
                        options={foundationTypeOptions}
                        onChange={(option) =>
                          setFormData((prev) => ({
                            ...prev,
                            foundationType: option?.value || "",
                          }))
                        }
                        placeholder="اختر نوع المؤسسة"
                        classNamePrefix="my-select"
                      />

                      <button
                        type="button"
                        className="signup-btn"
                        onClick={nextStep}
                      >
                        التالي
                      </button>
                    </>
                  )}

                  {/* ================== STEP 2 ================== */}
                  {step === 2 && (
                    <>
                      <h4>📜 معلومات الترخيص</h4>

                      <div className="input-group">
                        <label>رقم الترخيص الرسمي</label>
                        <input
                          name="licenseNumber"
                          type="text"
                          onChange={handleChange}
                          placeholder="ادخل رقم الترخيص الرسمي"
                        />
                      </div>

                      <div className="input-group">
                        <label>الجهة المشرفة</label>
                        <input
                          name="supervisorAuthority"
                          type="text"
                          onChange={handleChange}
                          placeholder="ادخل الجهة المشرفة"
                        />
                      </div>

                      {[
                        { label: "صورة الترخيص", name: "licenseImage" },
                        { label: "السجل التجاري", name: "commercialRegister" },
                        { label: "البطاقة الضريبية", name: "taxCard" },
                        { label: "خطاب اعتماد رسمي", name: "approvalLetter" },
                      ].map((item , index) => (
                        <div className="input-group" key={index}>
                          <label>{item.label}</label>
                          <div className="avatar-upload">
                            <label
                              htmlFor={item.name}
                              className="doc-upload-square"
                            >
                              {previews[item.name] ? (
                                <Image
                                  fill
                                  src={previews[item.name]}
                                  alt="doc"
                                  style={{ objectFit: "cover" }}
                                />
                              ) : (
                                <span>+</span>
                              )}
                            </label>
                            <input
                              id={item.name}
                              type="file"
                              hidden
                              accept="image/*"
                              onChange={(e) =>
                                handleFileChange(e, item.name)
                              }
                            />
                          </div>
                        </div>
                      ))}

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

                  {/* ================== STEP 3 ================== */}
                  {step === 3 && (
                    <>
                      <h4>📄 مستندات التوثيق</h4>

                      {/* صورة المقر */}
                      <div className="input-group">
                        <label>صورة مقر المؤسسة</label>
                        <div className="avatar-upload">
                          <label
                            htmlFor="buildingImage"
                            className="building-upload"
                          >
                            {previews.buildingImage ? (
                              <Image
                                fill
                                src={previews.buildingImage}
                                alt="building"
                                style={{ objectFit: "cover" }}
                              />
                            ) : (
                              <span>+</span>
                            )}
                          </label>
                          <input
                            id="buildingImage"
                            type="file"
                            hidden
                            accept="image/*"
                            onChange={(e) =>
                              handleFileChange(e, "buildingImage")
                            }
                          />
                        </div>
                      </div>

                      {/* لوجو المؤسسة */}
                      <div className="input-group">
                        <label>لوجو المؤسسة</label>
                        <div className="avatar-upload">
                          <label
                            htmlFor="logo"
                            className="logo-upload"
                          >
                            {previews.logo ? (
                              <Image
                                fill
                                src={previews.logo}
                                alt="logo"
                                style={{ objectFit: "cover" }}
                              />
                            ) : (
                              <span>+</span>
                            )}
                          </label>
                          <input
                            id="logo"
                            type="file"
                            hidden
                            accept="image/*"
                            onChange={(e) =>
                              handleFileChange(e, "logo")
                            }
                          />
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
                        <label>إعادة كلمة المرور</label>
                        <input
                          name="confirmPassword"
                          type="password"
                          onChange={handleChange}
                          placeholder="ادخل كلمة المرور"
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
                  <Link href={`/${locale}/authFoundation/loginFoundation`}>
                    تسجيل الدخول
                  </Link>
                </p>
              </div>
            </div>
          </div>

          {/* صورة جانبية */}
          <div className="col-0 col-lg-6 d-none d-lg-block">
            <div className="login-image">
              <div className="image-wrapper">
                <Image
                  src="/images/art-1.webp"
                  alt="Artwork"
                  fill
                  priority
                  style={{ objectFit: "cover" }}
                />
                <div className="image-overlay-text">
                  <h2>نحو عمل خيري رقمي أكثر احترافية</h2>
                  <p>
                    سجّل مؤسستك وابدأ إدارة حملاتك بشفافية واحتراف.
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
