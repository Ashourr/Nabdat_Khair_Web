"use client";
import React, { useState } from "react";
import "./review.css";
import { useLocale, useTranslations } from "next-intl";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faQuoteRight } from "@fortawesome/free-solid-svg-icons";
import Review_model from "./Review_model";
import Link from "next/link";
export default function Review_section() {
  const [show, setshow] = useState("");
  const t = useTranslations("Review");
  const locale = useLocale();

  const review = [
    {
      id: 1,
      rating: 4,
      name: "John Doe",
      review:
        "The platform has made volunteering more organized, and I felt that my efforts have a real impact. ",
      image: "/images/team.webp",
      job: "متبرع",
    },
    {
      id: 2,
      rating: 5,
      name: "Mohhmed Ashour",
      review:
        "  المنصة خلت العمل التطوعي منظم أكتر، وحسّيت إن مجهودي ليه أثر  حقيقي المنصة خلت العمل التطوعي منظم أكتر، وحسّيت إن مجهودي ليه أثر حقيقي",
      image: "/images/team.webp",
      job: "متبرع",
    },
    {
      id: 3,
      rating: 3,
      name: "محمد عاشور",
      review:
        "  المنصة خلت العمل التطوعي منظم أكتر، وحسّيت إن مجهودي ليه أثر  حقيقي المنصة خلت العمل التطوعي منظم أكتر، وحسّيت إن مجهودي ليه أثر حقيقي",
      image: "/images/team.webp",
      job: "Donor",
    },
    {
      id: 4,
      rating: 2,
      name: "محمد عاشور",
      review:
        "  المنصة خلت العمل التطوعي منظم أكتر، وحسّيت إن مجهودي ليه أثر  حقيقي المنصة خلت العمل التطوعي منظم أكتر، وحسّيت إن مجهودي ليه أثر حقيقي",
      image: "/images/team.webp",
      job: "Donor",
    },
    {
      id: 5,
      rating: 1,
      name: "محمد عاشور",
      review:
        "  المنصة خلت العمل التطوعي منظم أكتر، وحسّيت إن مجهودي ليه أثر  حقيقي المنصة خلت العمل التطوعي منظم أكتر، وحسّيت إن مجهودي ليه أثر حقيقي",
      image: "/images/team.webp",
      job: "Donor",
    },
    {
      id: 6,
      rating: 1,
      name: "محمد عاشور",
      review:
        "  المنصة خلت العمل التطوعي منظم أكتر، وحسّيت إن مجهودي ليه أثر  حقيقي المنصة خلت العمل التطوعي منظم أكتر، وحسّيت إن مجهودي ليه أثر حقيقي",
      image: "/images/team.webp",
      job: "Donor",
    },
    {
      id: 7,
      rating: 1,
      name: "محمد عاشور",
      review:
        "  المنصة خلت العمل التطوعي منظم أكتر، وحسّيت إن مجهودي ليه أثر  حقيقي المنصة خلت العمل التطوعي منظم أكتر، وحسّيت إن مجهودي ليه أثر حقيقي",
      image: "/images/team.webp",
      job: "Donor",
    },
    {
      id: 8,
      rating: 1,
      name: "محمد عاشور",
      review:
        "  المنصة خلت العمل التطوعي منظم أكتر، وحسّيت إن مجهودي ليه أثر  حقيقي المنصة خلت العمل التطوعي منظم أكتر، وحسّيت إن مجهودي ليه أثر حقيقي",
      image: "/images/team.webp",
      job: "Donor",
    },
  ];
  return (
    <div className="review-section">
      <div className="container">
        <div className="row">
          <div className="col-12 col-lg-6">
            <div className="po">
              <div className="content">
                <span>{t("subtitle")}</span>
                <h3>{t("title")}</h3>
                <p>{t("decrption")}</p>
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
                  <Link href={`/${locale}/review`} className="btn-2">
                  {t("more")}
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-6 anm">
            <div className="reviews">
              <div className="itmes">
                {review.map((item) => (
                  <div className="reviews-itme" key={item.id}>
                    <div style={{textAlign:"end"}}> 
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
                          quality={90}
                          loading="lazy"
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
        </div>
      </div>
      <Review_model show={show} setshow={setshow} />
    </div>
  );
}
