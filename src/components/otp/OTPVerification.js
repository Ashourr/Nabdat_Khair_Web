"use client";
import { useState, useRef, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShieldAlt, faArrowRight, faRedo } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import "./otp.css";
import toast from "react-hot-toast";

export default function OTPVerification() {
  const [otp, setOtp] = useState(["", "", "", "", "", ""]); // 6 خانات
  const [timer, setTimer] = useState(59);
  const inputsRef = useRef([]);

  // مؤقت لإعادة الإرسال
  useEffect(() => {
    if (timer > 0) {
      const interval = setInterval(() => setTimer(timer - 1), 1000);
      return () => clearInterval(interval);
    }
  }, [timer]);

  // دالة التعامل مع الكتابة
  const handleChange = (element, index) => {
    if (isNaN(element.value)) return false;

    const newOtp = [...otp];
    newOtp[index] = element.value;
    setOtp(newOtp);

    // الانتقال للخانة التالية تلقائياً
    if (element.value !== "" && index < 5) {
      inputsRef.current[index + 1].focus();
    }
  };

  // التعامل مع زر الـ Backspace
  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace" && otp[index] === "" && index > 0) {
      inputsRef.current[index - 1].focus();
    }
  };

  const handleVerify = (e) => {
    e.preventDefault();
    const finalOtp = otp.join("");
    if (finalOtp.length < 6) {
      toast.error("يرجى إدخال الكود كاملاً");
      return;
    }
    console.log("Verifying OTP:", finalOtp);
    toast.success("تم التحقق بنجاح!");
  };

  return (
    <div className="otp-wrapper">
      <div className="otp-card">
        <div className="otp-icon">
          <FontAwesomeIcon icon={faShieldAlt} />
        </div>
        
        <h2>رمز التحقق</h2>
        <p>أدخل الكود المكون من 6 أرقام الذي أرسلناه إلى هاتفكم <span>+20 10****456</span></p>

        <form onSubmit={handleVerify}>
          <div className="otp-inputs">
            {otp.map((data, index) => (
              <input
                key={index}
                type="text"
                maxLength="1"
                ref={(el) => (inputsRef.current[index] = el)}
                value={data}
                onChange={(e) => handleChange(e.target, index)}
                onKeyDown={(e) => handleKeyDown(e, index)}
              />
            ))}
          </div>

          <button type="submit" className="btn-verify">
            تحقق الآن <FontAwesomeIcon icon={faArrowRight} className="flip-rtl" />
          </button>
        </form>

        <div className="otp-footer">
          {timer > 0 ? (
            <p>يمكنك إعادة إرسال الكود خلال <span>{timer} ثانية</span></p>
          ) : (
            <button className="btn-resend" onClick={() => setTimer(59)}>
              <FontAwesomeIcon icon={faRedo} /> إعادة إرسال الرمز
            </button>
          )}
        </div>
      </div>
    </div>
  );
}