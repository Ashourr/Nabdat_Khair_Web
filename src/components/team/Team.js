"use client";
import { useState } from "react";
import Image from "next/image";
import "./team.css";

export default function HappyCustomersTiltCarousel() {
  const customers = [
    {
      id: 1,
      name: "Mitu Dey",
      review: "Amazing taste and fast delivery!",
      image: "/images/PicsArt_12-29-02.05.43.jpg",
    },
    {
      id: 2,
      name: "Sadia Rahman",
      review: "Very high quality!",
      image: "/images/PicsArt_12-29-02.05.43.jpg",
    },
    {
      id: 3,
      name: "Arif Hossain",
      review: "Fresh and delicious!",
      image: "/images/PicsArt_12-29-02.05.43.jpg",
    },
    {
      id: 4,
      name: "Tanvir Ahmed",
      review: "Great for daily meals.",
      image: "/images/PicsArt_12-29-02.05.43.jpg",
    },
    {
      id: 5,
      name: "Jhon Doe",
      review: "Excellent user experience!",
      image: "/images/PicsArt_12-29-02.05.43.jpg",
    },
        {
      id: 6,
      name: "Jhon Doe",
      review: "Excellent user experience!",
      image: "/images/PicsArt_12-29-02.05.43.jpg",
    },
        {
      id: 7,
      name: "Jhon Doe",
      review: "Excellent user experience!",
      image: "/images/PicsArt_12-29-02.05.43.jpg",
    },
    
  ];

  const [index, setIndex] = useState(2);

  const goNext = () => {
    setIndex((prev) => (prev + 1) % customers.length);
  };

  const goPrev = () => {
    setIndex((prev) => (prev - 1 + customers.length) % customers.length);
    /*************  ✨ Windsurf Command ⭐  *************/
    /**
     * Goes to the next customer in the list.
     * If the current index is at the end of the list, it wraps around to the start.
     */
    /*******  baf47063-4400-41db-b934-47bdcec85832  *******/
  };

  return (
    <div className="tilt-wrapper">
      <h2 className="tilt-title">Happy Customers</h2>

      <div className="tilt-slider">
        {customers.map((item, i) => {
          const offset = i - index;

          return (
            <div
              key={i}
              className="tilt-card"
              style={{
                transform: `
                  translateX(${offset * 160}px)
                  rotate(${offset * -12}deg)
                  scale(${1 - Math.abs(offset) * 0.15})
                `,
                opacity: Math.abs(offset) > 2 ? 0 : 1,
                zIndex: 10 - Math.abs(offset),
              }}
            >
              <Image
                src={item.image}
                width={220}
                height={260}
                alt={item.name}
                className="tilt-img"
              />
            </div>
          );
        })}
      </div>

      <div className="tilt-review-box">
        <h3>{customers[index].name}</h3>
        <p>{customers[index].review}</p>
      </div>

      <div className="tilt-nav">
        <button onClick={goPrev} className="tilt-btn">
          ‹
        </button>
        <button onClick={goNext} className="tilt-btn">
          ›
        </button>
      </div>
    </div>
  );
}
