"use client";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRight,
  faBuilding,
  faCalendarCheck,
  faMapMarkerAlt,
  faCertificate,
  faCommentDots,
  faFileContract,
  faCheckCircle,
  faExclamationCircle,
  faCamera,
  faTimes,
  faSpinner,
  faHourglassHalf,
} from "@fortawesome/free-solid-svg-icons";
import "./taskDetails.css";
import Link from "next/link";
import { useLocale } from "next-intl";
import Swal from "sweetalert2";
import Image from "next/image";

export default function TaskDetails() {
  const locale = useLocale();
  const [showFinishModal, setShowFinishModal] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // ✅ State للبيانات والمعاينة
  const [reportData, setReportData] = useState({
    hours: "",
    summary: "",
  });
  const [previews, setPreviews] = useState([]); // لتخزين روابط معاينة الصور

  const taskData = {
    id: 1,
    title: "تعليم أساسيات الحاسوب للأطفال",
    org: "مؤسسة العلم نور",
    status: "accepted",
    startDate: "01 مارس 2026",
    location: "القاهرة - حي الأسمرات",
    requirements: ["الحضور مبكراً", "الزي الرسمي", "تحضير المحتوى"],
  };

  // ✅ دالة التعامل مع رفع الصور ومعاينتها
  const handleImageChange = (e) => {
    const files = Array.from(e.target.files);

    // تحويل الصور لروابط URL للمعاينة
    const newPreviews = files.map((file) => URL.createObjectURL(file));

    // دمج الصور الجديدة مع القديمة (إذا أراد المتطوع رفع أكثر من مرة)
    setPreviews((prev) => [...prev, ...newPreviews]);
  };

  // ✅ دالة حذف صورة من المعاينة
  const removeImage = (index) => {
    setPreviews(previews.filter((_, i) => i !== index));
  };

  const handleFinishSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setShowFinishModal(false);
      Swal.fire("تم الإرسال!", "شكرًا لتوثيق مجهودك.", "success");
      setPreviews([]); // تصفير الصور بعد النجاح
    }, 1500);
  };

  const handleWithdraw = () => {
    Swal.fire({
      title: "هل أنت متأكد من الانسحاب؟",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "نعم، انسحاب",
      cancelButtonText: "تراجع",
      confirmButtonColor: "#ef4444",
    });
  };

  return (
    <div className="task-details-page" dir="rtl">
      <Link
        href={`/${locale}/dashboard/volunteer/my-tasks`}
        className="back-link"
      >
        <FontAwesomeIcon icon={faArrowRight} /> العودة لمهامي
      </Link>

      <div className="task-header-card">
        <div className="header-info">
          <span className={`status-pill ${taskData.status}`}>
            {taskData.status === "accepted" ? "مهمة جارية" : "قيد المراجعة"}
          </span>

          <h1>{taskData.title}</h1>

          <p>
            <FontAwesomeIcon icon={faBuilding} /> {taskData.org}
          </p>
        </div>

        <div className="header-actions">
          <button className="chat-btn">
            <FontAwesomeIcon icon={faCommentDots} /> تواصل مع المسؤول
          </button>
        </div>
      </div>

      <div className="task-content-grid">
        <div className="main-info-col">
          {/* كارت التقدم */}

          <div className="info-card">
            <h3>
              <FontAwesomeIcon icon={faFileContract} /> وصف المهمة والتعليمات
            </h3>

            <p>
              هذه المهمة تتطلب مهارات عالية في التعامل مع الأطفال وتبسيط
              المعلومة. يجب الالتزام بالجدول الزمني المحدد من قبل المؤسسة لضمان
              أقصى استفادة للأطفال.
            </p>

            <ul className="rules-list">
              {taskData.requirements.map((req, index) => (
                <li key={index}>
                  <FontAwesomeIcon icon={faCheckCircle} /> {req}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="side-info-col">
          <div className="info-card details-summary">
            <div className="detail-row">
              <FontAwesomeIcon icon={faCalendarCheck} />

              <div>
                <span>التاريخ</span>

                <p>
                  {taskData.startDate} - {taskData.endDate}
                </p>
              </div>
            </div>

            <div className="detail-row">
              <FontAwesomeIcon icon={faMapMarkerAlt} />

              <div>
                <span>المكان</span>

                <p>{taskData.location}</p>
              </div>
            </div>

            <div className="detail-row">
              <FontAwesomeIcon icon={faCertificate} />

              <div>
                <span>الشهادة</span>

                <p>شهادة خبرة معتمدة عند الانتهاء</p>
              </div>
            </div>
          </div>

          <div className="action-buttons-stack">
            <button
              className="finish-btn"
              onClick={() => setShowFinishModal(true)}
            >
              <FontAwesomeIcon icon={faCheckCircle} /> إنهاء المهمة الآن
            </button>

            <button className="withdraw-btn" onClick={handleWithdraw}>
              <FontAwesomeIcon icon={faExclamationCircle} /> انسحاب من المهمة
            </button>
          </div>
        </div>
      </div>

      {/* --- نافذة إنهاء المهمة --- */}
      {showFinishModal && (
        <div className="modal-overlay">
          <div className="modal-content">
            <div className="modal-header">
              <h3>تقرير إتمام المهمة</h3>
              <button
                className="close-x"
                onClick={() => setShowFinishModal(false)}
              >
                <FontAwesomeIcon icon={faTimes} />
              </button>
            </div>

            <form onSubmit={handleFinishSubmit}>
              <div className="form-group">
                <label>
                  <FontAwesomeIcon icon={faHourglassHalf} /> كم ساعة تطوعت
                  اليوم؟
                </label>
                <input
                  type="text"
                  // step="0.5"
                  // min="0.5"
                  required
                  className="hours-input"
                  placeholder="مثال: 4"
                  value={reportData.hours}
                  onChange={(e) =>
                    setReportData({ ...reportData, hours: e.target.value })
                  }
                />
              </div>

              <div className="form-group">
                <label>ماذا أنجزت؟</label>
                <textarea
                  required
                  placeholder="ملخص سريع لما قمت به..."
                  rows="3"
                  value={reportData.summary}
                  onChange={(e) =>
                    setReportData({ ...reportData, summary: e.target.value })
                  }
                ></textarea>
              </div>

              <div className="form-group">
                <label>صور التوثيق</label>
                <div className="upload-container">
                  {/* منطقة الرفع */}
                  <label htmlFor="task-pics" className="file-upload-zone">
                    <FontAwesomeIcon icon={faCamera} />
                    <p>اضغط لإضافة صور</p>
                    <input
                      type="file"
                      id="task-pics"
                      hidden
                      multiple
                      accept="image/*"
                      onChange={handleImageChange}
                    />
                  </label>

                  {/* ✅ منطقة المعاينة الفورية */}
                  {previews.length > 0 && (
                    <div className="image-preview-grid">
                      {previews.map((src, index) => (
                        <div key={index} className="preview-item">
                          <Image
                            width={300}
                            height={300}
                            src={src}
                            alt={`preview ${index}`}
                          />
                          <button
                            type="button"
                            className="remove-img"
                            onClick={() => removeImage(index)}
                          >
                            <FontAwesomeIcon icon={faTimes} />
                          </button>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>

              <div className="modal-footer">
                <button
                  type="submit"
                  className="confirm-finish-btn"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <FontAwesomeIcon icon={faSpinner} spin />
                  ) : (
                    "تأكيد وإرسال التقرير"
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
