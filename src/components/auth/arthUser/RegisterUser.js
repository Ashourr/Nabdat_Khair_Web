"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import "../authUser.css";
import { useLocale } from "next-intl";
import toast from "react-hot-toast";

export default function RegisterUser() {
  const locale = useLocale();
  // const t = useTranslations("about");
  const [step, setStep] = useState(1);

  const nextStep = () => setStep((prev) => prev + 1);
  const prevStep = () => setStep((prev) => prev - 1);

  const [preview, setPreview] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;

    // ✅ تحقق من الحجم الأول
    if (file.size > 2 * 1024 * 1024) {
      toast.error(
        locale === "en"
          ? "Image size must be less than 2MB"
          : "حجم الصورة لازم يكون أقل من 2MB",
      );

      e.target.value = ""; // يمسح الاختيار
      setPreview(null); // يمنع عرض الصورة
      return;
    }

    // ✅ لو الحجم مناسب نعرضها
    const imageUrl = URL.createObjectURL(file);
    setPreview(imageUrl);
  };
  useEffect(() => {
    return () => {
      if (preview) URL.revokeObjectURL(preview);
    };
  }, [preview]);

  return (
    <div className="login">
      <div className="container">
        <div className="row">
          <div className="col-12 col-lg-6">
            <div className="login-form">
              <div className="form-wrapper">
                <h2>خطوتك الأولى نحو الخير</h2>
                <p>سجّل الآن وابدأ رحلة العطاء بكل سهولة وثقة.</p>
                <button className="google-btn">
                  <Image
                    src="/images/google-icon-logo-svgrepo-com (1).png"
                    alt="google"
                    width={20}
                    height={20}
                    style={{ margin: "0 10px" }}
                    loading="lazy"
                    quality={75}
                  />
                  تسجيل الدخول بجوجل
                </button>
                <button className="google-btn">
                  <Image
                    src="/images/facebook-icon-logo-svgrepo-com.png"
                    alt="google"
                    width={20}
                    height={20}
                    style={{ margin: "0 10px" }}
                    loading="lazy"
                    quality={75}
                  />
                  تسجيل الدخول بفيسبوك
                </button>

                <div className="divider">
                  <span>او</span>
                </div>

                <h2>انشاء حساب مستخدم</h2>

                {/* Step Indicator */}
                <div className="step-indicator">
                  <span className={step >= 1 ? "active" : ""}>1</span>
                  <span className={step >= 2 ? "active" : ""}>2</span>
                  <span className={step >= 3 ? "active" : ""}>3</span>
                </div>

                <form>
                  {/* Step 1 */}
                  {step === 1 && (
                    <>
                      <div className="input-group">
                        <label>الاسم الكامل</label>
                        <input type="text" placeholder="ادخل الاسم الكامل" />
                      </div>

                      <div className="input-group">
                        <label>البريد الالكتروني</label>
                        <input
                          type="email"
                          placeholder="ادخل البريد الالكتروني"
                        />
                      </div>

                      <button
                        type="button"
                        onClick={nextStep}
                        className="signup-btn"
                      >
                        التالي
                      </button>
                    </>
                  )}

                  {/* Step 2 */}
                  {step === 2 && (
                    <>
                      <div className="input-group">
                        <label>رقم الهاتف</label>
                        <input type="text" placeholder="ادخل رقم الهاتف" />
                      </div>
                      <div className="avatar-upload">
                        <label htmlFor="avatarInput" className="avatar-label">
                          {preview ? (
                            <Image
                              fill
                              src={preview}
                              alt="preview"
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
                          onChange={handleImageChange}
                          hidden
                        />

                        <p className="avatar-text">
                          إضافة صورة شخصية (اختياري)
                        </p>
                      </div>

                      <div className="button-group">
                        <button
                          type="button"
                          onClick={prevStep}
                          className="back-btn"
                        >
                          رجوع
                        </button>
                        <button
                          type="button"
                          onClick={nextStep}
                          className="signup-btn"
                        >
                          التالي
                        </button>
                      </div>
                    </>
                  )}

                  {/* Step 3 */}
                  {step === 3 && (
                    <>
                      <div className="input-group">
                        <label>كلمة المرور</label>
                        <input type="password" placeholder="ادخل كلمة المرور" />
                      </div>

                      <div className="input-group">
                        <label>تأكيد كلمة المرور</label>
                        <input
                          type="password"
                          placeholder="اعد ادخال كلمة المرور"
                        />
                      </div>

                      <div className="button-group">
                        <button
                          type="button"
                          onClick={prevStep}
                          className="back-btn"
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
                  <Link href={`/${locale}/authUser/loginUser`}>
                    تسجيل الدخول
                  </Link>
                </p>
              </div>
            </div>
          </div>

          <div className="col-0 col-lg-6 d-none d-lg-block">
            <div className="login-image">
              <div className="image-wrapper">
                <Image
                  src="/images/art-1.webp" // ضع مسار صورتك هنا
                  alt="Furniture"
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
