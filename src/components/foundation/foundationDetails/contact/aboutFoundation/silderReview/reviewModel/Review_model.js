"use client";
import React, { useState } from "react";
import "./review-model.css";
import { useLocale, useTranslations } from "next-intl";
export default function Review_model({ show, setshow }) {
  const locale = useLocale();
  const t = useTranslations("reviewModel");
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  const [count, setCount] = useState(0);

  const handDelete = () => {
    setshow(""); // غلق
  };

  return (
    <div
      className={`Review-model ${show === "show" ? "active" : ""}`}
      onClick={handDelete}
    >
      <div className="rating-modal" onClick={(e) => e.stopPropagation()}>
        {/* Header */}
        <div className="modal-header">
          <div className="icon">☆</div>
          <div>
            <h3>{t("title")} موسسه</h3>
            <p>{t("subtitle")}</p>
          </div>
        </div>

        {/* Body */}
        <div className="modal-body">
          <label>{t("rating")}</label>

          <div className="stars">
            {[1, 2, 3, 4, 5].map((star) => (
              <span
                key={star}
                className={star <= (hover || rating) ? "active" : ""}
                onClick={() => setRating(star)}
                onMouseEnter={() => setHover(star)}
                onMouseLeave={() => setHover(0)}
              >
                ★
              </span>
            ))}
          </div>

          <label>{t("name")} :</label>
          <input type="text" defaultValue={locale === "en" ? "Philanthropist" : "فاعل خير"} />

          <label>{t("message")} :</label>
          <textarea
            maxLength={200}
            onChange={(e) => setCount(e.target.value.length)}
          ></textarea>
          <div className="counter">{count}/200</div>
        </div>

        {/* Footer */}
        <div className="modal-footer">
          <button className="btn cancel" onClick={handDelete}>
            {t("cancel")}
          </button>
          <button className="btn submit">
            {t("submit")}
          </button>
        </div>
      </div>
    </div>
  );
}
