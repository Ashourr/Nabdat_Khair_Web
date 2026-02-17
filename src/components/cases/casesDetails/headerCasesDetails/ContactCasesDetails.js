import React from "react";
import "./headerCasesDetails.css";
import {
  faClockRotateLeft,
  faEye,
  faImage,
  faPaste,
  faTriangleExclamation,
  faVideo,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
export default function ContactCasesDetails() {
  return (
    <div className="header-cases-details-contact">
      <div className="progress-cases">
        <div className="row">
          <div className="col-12 col-md-3">
            <div className="itme">
              <p>15</p>
              <h6>العمر</h6>
            </div>
          </div>
          <div className="col-12 col-md-3">
            <div className="itme">
              <p>#3510</p>
              <h6>رقم الحاله</h6>
            </div>
          </div>
          <div className="col-12 col-md-3">
            <div className="itme">
              <p>#3510</p>
              <h6>المبلغ المطلوب</h6>
            </div>
          </div>
          <div className="col-12 col-md-3">
            <div className="itme">
              <p>#3510</p>
              <h6>المبلغ المحقق</h6>
            </div>
          </div>
        </div>
      </div>
      <div className="contact-cases">
        <h5>قصة الحاله</h5>
        <p>
          الطفل عمر يعاني من مرض في القلب ويحتاج إلى إجراء عملية جراحية عاجلة
          لإنقاذ حياته. الأسرة غير قادرة على تحمل تكاليف العملية بسبب الظروف
          المعيشية الصعبة وعدم وجود دخل ثابت. هذه الحالة موثقة بالكامل
          بالمستندات الطبية الرسمية وتم التحقق منها ميدانيًا من خلال الجهة
          المسؤولة. تبرعك اليوم قد يكون سببًا مباشرًا في إنقاذ حياة طفل.
        </p>
        <p>
          الطفل عمر يعاني من مرض في القلب ويحتاج إلى إجراء عملية جراحية عاجلة
          لإنقاذ حياته الطفل عمر يعاني من مرض في القلب ويحتاج إلى إجراء عملية
          جراحية عاجلة لإنقاذ حياته
        </p>
        <div className="warning">
          <FontAwesomeIcon icon={faTriangleExclamation} className="i" />
          <p>
            الطفل عمر يعاني من مرض في القلب ويحتاج إلى إجراء عملية جراحية عاجلة
            لإنقاذ حياته الطفل عمر يعاني من مرض في القلب ويحتاج إلى إجراء عملية
            جراحية عاجلة لإنقاذ حياته
          </p>
        </div>
        <p>
          الطفل عمر يعاني من مرض في القلب ويحتاج إلى إجراء عملية جراحية عاجلة
          لإنقاذ حياته الطفل عمر يعاني من مرض في القلب ويحتاج إلى إجراء عملية
          جراحية عاجلة لإنقاذ حياته
        </p>
      </div>

      <div className="documents-cases">
        <h5>المستندات المرافقه</h5>
        <div className="documents">
          <div>
            <a
              target="_blank"
              href={"/images/4fa45132-eb7a-4c45-a164-60d5445835dd.pdf"}
              rel="noopener noreferrer"
              className="itme"
            >
              <FontAwesomeIcon icon={faPaste} className="i pdf" />
              <h6>تقرير الحاله .pdf</h6>
              <FontAwesomeIcon icon={faEye} />
              {/* <FontAwesomeIcon icon={faPaste} className="i pdf" /> */}
            </a>
          </div>
          <div>
            <a
              target="_blank"
              href={"/images/education.mp4"}
              rel="noopener noreferrer"
              className="itme"
            >
              <FontAwesomeIcon icon={faVideo} className="i video" />
              <h6>فيديو الحاله</h6>
              <FontAwesomeIcon icon={faEye} />
            </a>
          </div>
          <div>
            <a
              target="_blank"
              href={"/images/0.png"}
              rel="noopener noreferrer"
              className="itme"
            >
              <FontAwesomeIcon icon={faImage} className="i image" />
              <h6>معاينه المتطوع</h6>
              <FontAwesomeIcon icon={faEye} />
            </a>
          </div>
        </div>
      </div>

      <div className="Status-update">
        <h4>
          <FontAwesomeIcon icon={faClockRotateLeft} className="i" />
          تحديثات الحاله
        </h4>
        <ul>
          <li>
            <div>
              <h6>اليوم</h6>
              <h5>تم حجز موعد العمليه </h5>
              <p>بفضل تبرعكم قمنا بدفع مقدم العمليه</p>
            </div>
          </li>
          <li>
            <div>
              <h6>اليوم</h6>
              <h5>تم حجز موعد العمليه </h5>
              <p>بفضل تبرعكم قمنا بدفع مقدم العمليه</p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}
