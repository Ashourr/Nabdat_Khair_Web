"use client";
import React, { useState } from "react";
import "./modelDonate.css";
import Image from "next/image";

export default function ModelDonate({ isOpen, onClose, user }) {
  const [activeStep, setActiveStep] = useState(0);
  const [donationType, setDonationType] = useState(""); // مالي أو عيني
  const [donorName, setDonorName] = useState("فاعل خير 💙");
  const [email, setEmail] = useState(user?.email || "");
  const [phone, setPhone] = useState(user?.phone || "");
  const [address, setAddress] = useState("");
  const [amount, setAmount] = useState("");
  const [itemType, setItemType] = useState("");
  const [itemDescription, setItemDescription] = useState("");
  const [itemQuantity, setItemQuantity] = useState(1);
  const [itemCondition, setItemCondition] = useState("جديد");
  const [itemImages, setItemImages] = useState([]);
  const [deliveryMethod, setDeliveryMethod] = useState("");
  const [deliveryTime, setDeliveryTime] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("");

  const [branch, setBranch] = useState("");
  const [collectionTime, setCollectionTime] = useState("");
  const [itemImage, setItemImage] = useState(null);
  const [selectedTime, setSelectedTime] = useState("");

  const maxImages = 3;

  if (!isOpen) return null;

  const handleNext = () => {
    // لو وصلنا لآخر خطوة (صفحة النجاح) → اقفل المودال مباشرة
    if (activeStep === steps.length - 1) {
      handleClose();
    } else {
      setActiveStep((prev) => prev + 1);
    }
  };

  const handleBack = () => {
    setActiveStep((prev) => prev - 1);
  };

  const handleClose = () => {
    // إعادة تهيئة كل المتغيرات
    setActiveStep(0);
    setDonationType("");
    setDonorName("فاعل خير 💙");
    setEmail(user?.email || "");
    setPhone(user?.phone || "");
    setAddress("");
    setAmount("");
    setItemType("");
    setItemDescription("");
    setItemQuantity(1);
    setItemCondition("جديد");
    setItemImages([]);
    setItemImage(null);
    setDeliveryMethod("");
    setDeliveryTime("");
    setBranch("");
    setCollectionTime("");
    setPaymentMethod("");

    // مسح معاينات الصور المؤقتة
    if (itemImage) URL.revokeObjectURL(itemImage);
    itemImages.forEach((img) => URL.revokeObjectURL(img));

    // إغلاق الموديل
    onClose();
  };

  const handleImageUpload = (e) => {
    const files = Array.from(e.target.files);
    const validFiles = files.slice(0, maxImages);
    setItemImages(validFiles);
  };

  const steps =
    donationType === "مالي"
      ? [
          "نوع التبرع",
          "بيانات المتبرع",
          "المبلغ",
          "الملخص",
          "الدفع",
          "تم بنجاح",
        ]
      : [
          "نوع التبرع",
          "بيانات المتبرع",
          "تفاصيل التبرع",
          "طريقة التسليم",
          "الملخص",
          "تم بنجاح",
        ];

  const renderStepContent = () => {
    switch (activeStep) {
      case 0: // نوع التبرع
        return (
          <div className="step-box">
            <h4>اختر نوع التبرع:</h4>
            <div className="radio-group">
              <label
                style={{ display: "flex", gap: "10px", cursor: "pointer" }}
              >
                <input
                  type="radio"
                  name="donationType"
                  value="مالي"
                  checked={donationType === "مالي"}
                  onChange={(e) => setDonationType(e.target.value)}
                />
                تبرع مالي
              </label>
              <label
                style={{ display: "flex", gap: "10px", cursor: "pointer" }}
              >
                <input
                  type="radio"
                  name="donationType"
                  value="عيني"
                  checked={donationType === "عيني"}
                  onChange={(e) => setDonationType(e.target.value)}
                />
                تبرع عيني
              </label>
            </div>
          </div>
        );

      case 1: // بيانات المتبرع
        return (
          <div className="step-box">
            <label>الاسم:</label>
            <input
              type="text"
              value={donorName}
              onChange={(e) => setDonorName(e.target.value)}
              placeholder="فاعل خير 💙"
              className="input"
            />
            {!user && (
              <>
                <label>رقم الهاتف:</label>
                <input
                  type="text"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="رقم الهاتف"
                  className="input"
                />
              </>
            )}
            {donationType === "عيني" && (
              <>
                <label>العنوان التفصيلي:</label>
                <textarea
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  placeholder="العنوان"
                  className="input"
                />
              </>
            )}
          </div>
        );

      case 2: // تفاصيل المبلغ أو الصنف
        if (donationType === "مالي") {
          return (
            <div className="step-box">
              {" "}
              <label>المبلغ:</label>{" "}
              <div className="amount-buttons">
                {" "}
                {[100, 250, 500, 1000].map((amt) => (
                  <button
                    type="button"
                    key={amt}
                    onClick={() => setAmount(amt)}
                    className={amount === amt ? "selected" : ""}
                  >
                    {" "}
                    {amt}{" "}
                  </button>
                ))}{" "}
              </div>{" "}
              <input
                type="text"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                placeholder="أدخل المبلغ"
                className="input"
              />{" "}
            </div>
          );
        } else {
          return (
            <div className="step-box">
              <label>نوع التبرع:</label>
              <select
                value={itemType}
                onChange={(e) => setItemType(e.target.value)}
              >
                <option value="">اختر نوع الصنف</option>
                {[
                  "ملابس",
                  "مواد غذائية",
                  "أدوية",
                  "أدوات مدرسية",
                  "أجهزة كهربائية",
                  "بطاطين",
                  "أثاث",
                  "مستلزمات طبية",
                  "أخرى",
                ].map((opt) => (
                  <option key={opt} value={opt}>
                    {opt}
                  </option>
                ))}
              </select>
              <label>وصف التبرع:</label>
              <textarea
                value={itemDescription}
                onChange={(e) => setItemDescription(e.target.value)}
                className="input"
              />
              <label>حالة التبرع:</label>
              <select
                value={itemCondition}
                onChange={(e) => setItemCondition(e.target.value)}
              >
                <option value="">اختر الحالة</option>
                <option value="جديد">جديد</option>
                <option value="مستعمل بحالة ممتازة">مستعمل بحالة ممتازة</option>
                <option value="مستعمل بحالة جيدة">مستعمل بحالة جيدة</option>
              </select>
            </div>
          );
        }

      case 3: // طريقة التسليم أو ملخص مالي
        if (donationType === "مالي") {
          return (
            <div className="step-box">
              <h4>ملخص التبرع</h4>
              <ul style={{ margin: "0px 40px" }}>
                <li>نوع التبرع: مالي</li>
                <li>المبلغ: {amount} جنيه</li>
              </ul>
            </div>
          );
        } else {
          return (
            <div className="step-box">
              {" "}
              <label>طريقة التسليم:</label>{" "}
              <select
                value={deliveryMethod}
                onChange={(e) => setDeliveryMethod(e.target.value)}
              >
                {" "}
                <option value="">اختر طريقة التسليم</option>{" "}
                <option value="استلام من المنزل">استلام من المنزل</option>{" "}
                <option value="تسليم في أقرب فرع">تسليم في أقرب فرع</option>{" "}
                <option value="نقطة تجميع">نقطة تجميع</option>{" "}
              </select>{" "}
              {deliveryMethod !== "" &&
                deliveryMethod !== "تسليم في أقرب فرع" && (
                  <>
                    <label>
                      {deliveryMethod === "استلام من المنزل"
                        ? "الوقت المناسب للاستلام:"
                        : "الوقت المناسب للتجميع:"}
                    </label>

                    <div className="datetime-wrapper">
                      <input
                        type="datetime-local"
                        className="input-datetime"
                        value={selectedTime}
                        onChange={(e) => setSelectedTime(e.target.value)}
                      />
                      <span className="custom-icon">📅</span>
                    </div>
                  </>
                )}
              {/* Step 3 أو أي خطوة فيها رفع الصورة */}
              <div className="input-group" style={{ marginTop: "20px" }}>
                <label>صورة التبرع</label>
                <div className="avatar-upload">
                  <label htmlFor="donationImageInput" className="avatar-label">
                    {itemImage ? (
                      <Image
                        src={URL.createObjectURL(itemImage)}
                        alt="Donation Preview"
                        fill
                        style={{
                          width: "100%",
                          height: "100%",
                          objectFit: "cover",
                          objectPosition: "center",
                        }}
                      />
                    ) : (
                      <span>+</span>
                    )}
                  </label>
                  <input
                    id="donationImageInput"
                    type="file"
                    accept="image/*"
                    onChange={(e) => setItemImage(e.target.files[0])}
                    hidden
                  />

                  <p className="avatar-text">إضافة صورة للتبرع (اختياري)</p>
                </div>
              </div>
            </div>
          );
        }

      case 4: // الدفع (مالي) أو ملخص عيني
        if (donationType === "مالي") {
          return (
            <div className="step-box">
              <h4>طرق الدفع</h4>
              {[
                "بطاقة ائتمان / فيزا",
                "Vodafone Cash",
                "Fawry",
                "تحويل بنكي",
                "محافظ إلكترونية",
              ].map((method) => (
                <label
                  key={method}
                  style={{ display: "flex", gap: "10px", cursor: "pointer" }}
                >
                  <input
                    type="radio"
                    name="paymentMethod"
                    value={method}
                    checked={paymentMethod === method}
                    onChange={(e) => setPaymentMethod(e.target.value)}
                  />
                  {method}
                </label>
              ))}
            </div>
          );
        } else {
          return (
            <div className="step-box">
              <h4>ملخص التبرع</h4>
              <ul style={{ margin: "0px 40px" }}>
                <li>نوع التبرع: عيني</li>
                <li>الصنف: {itemType}</li>
                <li>الوصف: {itemDescription}</li>
                <li>الحالة: {itemCondition}</li>
                <li>طريقة التسليم: {deliveryMethod}</li>
              </ul>
            </div>
          );
        }

      case 5: // صفحة النجاح
        return (
          <div className="step-box success-step">
            <div className="success-icon">✓</div>
            <h3>تم إرسال التبرع بنجاح 🎉</h3>
            <p>شكرًا لدعمك! سيتم التواصل معك قريبًا لإتمام الإجراءات.</p>

            <button
              className="success-btn"
              onClick={() => {
                setActiveStep(0);
                onClose();
              }}
            >
              إغلاق
            </button>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="model-donate">
      <div className="donate-overlay" onClick={handleClose}>
        <div className="donate-popup" onClick={(e) => e.stopPropagation()}>
          <div className="donate-header">
            <h4>عملية التبرع</h4>
            <button className="close-btn" onClick={handleClose}>
              ✖
            </button>
          </div>

          {/* Stepper */}
          <div className="stepper-container">
            <div className="vertical-stepper">
              {steps.map((label, index) => (
                <div
                  key={label}
                  className={`step ${index === activeStep ? "active" : ""} ${
                    index < activeStep ? "completed" : ""
                  }`}
                >
                  <div className="step-circle">
                    {index < activeStep ? "✓" : index + 1}
                  </div>
                  <div className="step-label">{label}</div>
                </div>
              ))}
            </div>

            <div className="step-content">
              {renderStepContent()}

              <div className="step-buttons">
                <button
                  className="btn back"
                  disabled={activeStep === 0}
                  onClick={handleBack}
                >
                  السابق
                </button>
                <button
                  className="btn next"
                  onClick={handleNext}
                  disabled={
                    (activeStep === 0 && !donationType) ||
                    (activeStep === 2 && donationType === "مالي" && !amount) ||
                    (activeStep === 2 &&
                      donationType === "عيني" &&
                      (!itemType || !itemDescription || !itemCondition)) ||
                    (activeStep === 3 &&
                      donationType === "عيني" &&
                      !deliveryMethod)
                  }
                >
                  {activeStep === steps.length - 1
                    ? "إغلاق"
                    : activeStep === steps.length - 2
                      ? donationType === "مالي"
                        ? "تأكيد ودفع الآن"
                        : "تأكيد التبرع"
                      : "التالي"}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
