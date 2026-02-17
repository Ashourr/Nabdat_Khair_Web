"use client";
import React, { useState } from "react";
import { useLocale, useTranslations } from "next-intl";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowLeft,
  faArrowRight,
  faPlus,
  faQuoteRight,
} from "@fortawesome/free-solid-svg-icons";
import Review_model from "../Review_model";
import Image from "next/image";
import "./reviewPage.css";
import { useRouter } from "next/navigation";
import HeaderPage from "@/components/headerPage/HeaderPage";

export default function ReviewPage() {
  const [show, setshow] = useState("");
  const t = useTranslations("Review");
  const locale = useLocale();
  const router = useRouter();

  const review = [
    {
      id: 1,
      rating: 4,
      name: "John Doe",
      review:
        "The platform has made volunteering more organized, and I felt that my efforts have a real impact. ",
      image: "/images/PicsArt_12-29-02.05.43.jpg",
      job: "متبرع",
    },
    {
      id: 2,
      rating: 5,
      name: "Mohhmed Ashour",
      review:
        "  المنصة خلت العمل التطوعي منظم أكتر، وحسّيت إن مجهودي ليه أثر  حقيقي المنصة خلت العمل التطوعي منظم أكتر، وحسّيت إن مجهودي ليه أثر حقيقي",
      image: "/images/PicsArt_12-29-02.05.43.jpg",
      job: "متبرع",
    },
    {
      id: 3,
      rating: 3,
      name: "محمد عاشور",
      review:
        "  المنصة خلت العمل التطوعي منظم أكتر، وحسّيت إن مجهودي ليه أثر  حقيقي المنصة خلت العمل التطوعي منظم أكتر، وحسّيت إن مجهودي ليه أثر حقيقي",
      image: "/images/PicsArt_12-29-02.05.43.jpg",
      job: "Donor",
    },
    {
      id: 4,
      rating: 2,
      name: "محمد عاشور",
      review:
        "  المنصة خلت العمل التطوعي منظم أكتر، وحسّيت إن مجهودي ليه أثر  حقيقي المنصة خلت العمل التطوعي منظم أكتر، وحسّيت إن مجهودي ليه أثر حقيقي",
      image: "/images/PicsArt_12-29-02.05.43.jpg",
      job: "Donor",
    },
    {
      id: 5,
      rating: 1,
      name: "محمد عاشور",
      review:
        "  المنصة خلت العمل التطوعي منظم أكتر، وحسّيت إن مجهودي ليه أثر  حقيقي المنصة خلت العمل التطوعي منظم أكتر، وحسّيت إن مجهودي ليه أثر حقيقي",
      image: "/images/PicsArt_12-29-02.05.43.jpg",
      job: "Donor",
    },
    {
      id: 6,
      rating: 1,
      name: "محمد عاشور",
      review:
        "  المنصة خلت العمل التطوعي منظم أكتر، وحسّيت إن مجهودي ليه أثر  حقيقي المنصة خلت العمل التطوعي منظم أكتر، وحسّيت إن مجهودي ليه أثر حقيقي",
      image: "/images/PicsArt_12-29-02.05.43.jpg",
      job: "Donor",
    },
    {
      id: 7,
      rating: 1,
      name: "محمد عاشور",
      review:
        "  المنصة خلت العمل التطوعي منظم أكتر، وحسّيت إن مجهودي ليه أثر  حقيقي المنصة خلت العمل التطوعي منظم أكتر، وحسّيت إن مجهودي ليه أثر حقيقي",
      image: "/images/PicsArt_12-29-02.05.43.jpg",
      job: "Donor",
    },
    {
      id: 8,
      rating: 1,
      name: "محمد عاشور",
      review:
        "  المنصة خلت العمل التطوعي منظم أكتر، وحسّيت إن مجهودي ليه أثر  حقيقي المنصة خلت العمل التطوعي منظم أكتر، وحسّيت إن مجهودي ليه أثر حقيقي",
      image: "/images/PicsArt_12-29-02.05.43.jpg",
      job: "Donor",
    },
  ];
  return (
    <>
      <HeaderPage
        bgImg="/images/b1.jpeg"
        title={t("title-page")}
        link={t("link-page")}
        suptitle={t("suptitle-page")}
      />
      <div className="reviewPage">
        <div className="container-lg container-fluid">
          <button onClick={() => router.back()} className="back-btn">
            <FontAwesomeIcon
              icon={locale === "en" ? faArrowLeft : faArrowRight}
              className={`back ${locale}`}
            />
            {locale === "en" ? "Back" : "رجوع"}
          </button>
          <div className="links">
            <button
              onClick={() => {
                setshow("show");
              }}
              className="btn-2"
              href="#"
            >
              <FontAwesomeIcon icon={faPlus} />
              {t("btnadd")}
            </button>
          </div>
          <div className="row-review" style={{ columns: "2" }}>
            {review.map((item) => (
              <div className="reviews-itme" key={item.id}>
                <div>
                  <span
                    className={`star-rating ${locale}`}
                    data-rating={item.rating}
                  ></span>
                </div>
                <p>{item.review}</p>
                <div className="info">
                  <div>
                    <Image
                      width={100}
                      height={100}
                      quality={100}
                      alt={item.name}
                      src={item.image}
                    />
                  </div>
                  <div>
                    <h4>{item.name}</h4>
                    <h6>{locale === "en" ? "Donor" : "متبرع"}</h6>
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
    </>
  );
}
