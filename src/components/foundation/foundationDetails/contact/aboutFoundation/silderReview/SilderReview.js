"use client";
import React, { useState } from "react";
import { useLocale, useTranslations } from "next-intl";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faQuoteRight } from "@fortawesome/free-solid-svg-icons";
import Review_model from "./reviewModel/Review_model";
import Image from "next/image";
import "./silderReview.css";

export default function SilderReview() {
  const [show, setshow] = useState("");
  const t = useTranslations("Review");
  const locale = useLocale();

  const review = [
    {
      id: 1,
      rating: 4,
      name: "John Doe",
      review: "The platform has made volunteering more organized...",
      image: "/images/PicsArt_12-29-02.05.43.jpg",
      job: "Donor",
    },
    {
      id: 2,
      rating: 5,
      name: "Mohhmed Ashour",
      review: "المنصة خلت العمل التطوعي منظم أكتر...",
      image: "/images/PicsArt_12-29-02.05.43.jpg",
      job: "متبرع",
    },
    {
      id: 3,
      rating: 5,
      name: "Mohhmed Ashour",
      review: "المنصة خلت العمل التطوعي منظم أكتر...",
      image: "/images/PicsArt_12-29-02.05.43.jpg",
      job: "متبرع",
    },
    {
      id: 4,
      rating: 5,
      name: "Mohhmed Ashour",
      review: "المنصة خلت العمل التطوعي منظم أكتر...",
      image: "/images/PicsArt_12-29-02.05.43.jpg",
      job: "متبرع",
    },
  ];

  const enableScroll = review.length >= 3;

  return (
    <div className="sliderReview">
      <div className="container">
        <div className="titile">
          <h3>
            {locale === "en"
              ? "Our Partners & Supporters"
              : "شركاؤنا والداعمون"}
          </h3>
          <p>
            {locale === "en"
              ? "We are proud to partner with organizations..."
              : "فخر بشراكتنا مع جهات تشاركنا القيم الإنسانية"}
          </p>
        </div>
        <div className="links">
          <button onClick={() => setshow("show")} className="btn-2">
            <FontAwesomeIcon icon={faPlus} />
            {t("btnadd")}
          </button>
        </div>
        <div className="scrolling-wrap">
          <div
            className={`comm ${locale} ${enableScroll ? "animate" : "no-animate"}`}
          >
            {review.map((item) => (
              <div className="reviews-itme" key={item.id}>
                <span
                  className={`star-rating ${locale}`}
                  data-rating={item.rating}
                ></span>
                <p>{item.review}</p>

                <div className="info">
                  <Image
                    width={60}
                    height={60}
                    src={item.image}
                    alt={item.name}
                  />
                  <div>
                    <h4>{item.name}</h4>
                    <h6>{item.job}</h6>
                  </div>
                </div>

                <FontAwesomeIcon
                  icon={faQuoteRight}
                  className={`i ${locale}`}
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      <Review_model show={show} setshow={setshow} />
    </div>
  );
}
