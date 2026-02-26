"use client";
import { useRef } from "react";
import { useLocale } from "next-intl";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPrint,
  faCheckCircle,
  faGlobe,
  faBoxOpen,
  faWallet,
  faInfoCircle,
} from "@fortawesome/free-solid-svg-icons";
import { useReactToPrint } from "react-to-print";
import "./donationDetails.css";
import Image from "next/image";

export default function DonationDetails({ id }) {
  const locale = useLocale();
  const printRef = useRef();

  // const donation = {
  //   id: id || 1,
  //   type: "مالي",
  //   entity: "جمعية البر الخيرية",
  //   donorName: "أحمد محمد",
  //   date: "21 فبراير 2026",
  //   referenceNumber: "REF-9920334",
  //   status: "مكتمل",
  //   paymentMethod: "بطاقة ائتمانية",
  //   amount: "1,000.00",
  //   tax: "150.00",
  //   totalAmount: "1,150.00",
  //   currency: "ج.م",
  // };

  const donation = {
    id: id || 1,
    type: "عيني",
    entity: "جمعية البر الخيرية",
    donorName: "أحمد محمد",
    date: "21 فبراير 2026",
    referenceNumber: "REF-BK-55421",
    status: "مكتمل",
    category: "أدوات مدرسية",
    description: "حقائب مدرسية وأدوات قرطاسية متنوعة",
    condition: "مستعمل بحالة جيدة",
    deliveryMethod: "تسليم في أقرب فرع",
    image: "/images/art-1.webp",
  };

  const handlePrint = useReactToPrint({
    contentRef: printRef,
    documentTitle: `Donation_Receipt_${donation.referenceNumber}`,
  });

  const isFinancial = donation.type === "مالي";

  return (
    <div className="donation-details">
      <div className="page-actions">
        <button className="print-btn" onClick={handlePrint}>
          <FontAwesomeIcon icon={faPrint} />{" "}
          {locale === "en" ? "Print PDF" : "طباعة PDF"}
        </button>
      </div>

      <div className="receipt-wrapper" ref={printRef}>
        <div className="receipt-header">
          <div className="brand">
            <div className="logo-placeholder">LOGO</div>
            <div className="brand-info">
              <h3>المنصة الوطنية للتبرع</h3>
              <span>رقم الترخيص: 12345678</span>
            </div>
          </div>
          <div className="receipt-meta">
            <h2>إيصال تبرع {donation.type}</h2>
            <p>الرقم المرجعي: {donation.referenceNumber}</p>
          </div>
        </div>

        <div className="receipt-body">
          {isFinancial ? (
            /* --- تصميم التبرع المالي --- */
            <div className="financial-summary">
              <div className="amount-hero">
                <span className="num">{donation.totalAmount}</span>
                <span className="cur">{donation.currency}</span>
                <p>إجمالي المبلغ</p>
              </div>
              <div className="payment-method-box">
                <label>طريقة الدفع:</label>
                <span>{donation.paymentMethod}</span>
              </div>
            </div>
          ) : (
            <div className="in-kind-summary">
              <div className="summary-card">
                <h3>ملخص التبرع</h3>
                <ul className="summary-list">
                  <li>
                    <strong>نوع التبرع:</strong> {donation.type}
                  </li>
                  <li>
                    <strong>الصنف:</strong> {donation.category}
                  </li>
                  <li>
                    <strong>الوصف:</strong> {donation.description}
                  </li>
                  <li>
                    <strong>الصورة:</strong>
                    <div className="item-image-container">
                      <Image
                        src={donation.image}
                        alt="Donation"
                        className="donation-img-preview"
                        width={150}
                        height={150}
                      />
                    </div>
                  </li>
                  <li>
                    <strong>الحالة:</strong> {donation.condition}
                  </li>
                  <li>
                    <strong>طريقة التسليم:</strong> {donation.deliveryMethod}
                  </li>
                </ul>
              </div>
            </div>
          )}

          <div className="info-grid">
            <div className="info-box">
              <label>اسم المتبرع</label>
              <p>{donation.donorName}</p>
            </div>
            <div className="info-box">
              <label>الجهة المستلمة</label>
              <p>{donation.entity}</p>
            </div>
            <div className="info-box">
              <label>المشروع</label>
              <p>{donation.project}</p>
            </div>
            <div className="info-box">
              <label>تاريخ التبرع</label>
              <p>{donation.date}</p>
            </div>
            <div className="info-box">
              <label>طريقة السداد</label>
              <p>{donation.paymentMethod}</p>
            </div>
            <div className="info-box">
              <label>حالة العملية</label>
              <div
                className={`status-pill ${donation.status === "مكتمل" ? "success" : ""}`}
              >
                <FontAwesomeIcon icon={faCheckCircle} /> {donation.status}
              </div>
            </div>
          </div>

          <div className="disclaimer">
            <FontAwesomeIcon icon={faInfoCircle} />
            <p style={{ margin: "0" }}>
              هذا المستند يعتبر إيصالاً رسمياً بالتبرع الموضح أعلاه، شكراً
              لعطائكم.
            </p>
          </div>
        </div>

        <div className="receipt-footer">
          <div className="contact-info">
            <span>
              <FontAwesomeIcon icon={faGlobe} /> www.donations.sa
            </span>
            <span>الرقم الموحد: 92000000</span>
          </div>
          <div className="watermark-text">نبضة خير</div>
        </div>
      </div>
    </div>
  );
}
