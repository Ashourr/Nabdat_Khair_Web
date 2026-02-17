"use client";

import dynamic from "next/dynamic";
import { useEffect, useState, useRef } from "react";
import "leaflet/dist/leaflet.css";
import "./contactUsFoundation.css";
import { useLocale } from "next-intl";
import Image from "next/image";

// react-leaflet (client only)
const MapContainer = dynamic(
  () => import("react-leaflet").then((m) => m.MapContainer),
  { ssr: false },
);
const TileLayer = dynamic(
  () => import("react-leaflet").then((m) => m.TileLayer),
  { ssr: false },
);
const Marker = dynamic(() => import("react-leaflet").then((m) => m.Marker), {
  ssr: false,
});
const Popup = dynamic(() => import("react-leaflet").then((m) => m.Popup), {
  ssr: false,
});

export default function Map() {
  const locale = useLocale();
  const [L, setL] = useState(null);
  const mapRef = useRef(null);

  // تحميل leaflet على client فقط
  useEffect(() => {
    import("leaflet").then((leaflet) => {
      delete leaflet.Icon.Default.prototype._getIconUrl;

      leaflet.Icon.Default.mergeOptions({
        iconRetinaUrl:
          "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
        iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
        shadowUrl:
          "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
      });

      setL(leaflet);
    });
  }, []);

  // المواقع
  const locations = [
    {
      id: 1,
      name: locale === "en" ? "Cairo Branch" : "فرع القاهرة",
      description:
        locale === "en"
          ? "Our main headquarters in downtown."
          : "مقرنا الرئيسي في وسط البلد.",
      image: "/images/asset 18.jpeg", // المسار في folder public
      position: [30.0444, 31.2357],
    },
    {
      id: 2,
      name: locale === "en" ? "Giza" : "جيزة",
      description:
        locale === "en"
          ? "Our main headquarters in downtown."
          : "مقرنا الرئيسي في وسط البلد.",
      image: "/images/asset 18.jpeg", // المسار في folder public
      position: [30.0131, 31.2089],
    },
  ];

  // bounds لتوسيط مصر بالكامل
  const egyptBounds = [
    [22.0, 25.0], // جنوب غرب مصر
    [31.7, 35.9], // شمال شرق مصر
  ];

  if (!L || typeof window === "undefined") return null;

  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        position: "relative",
        textAlign: locale === "en" ? "left" : "right",
      }}
    >
      <MapContainer
        zoom={10}
        ref={mapRef}
        bounds={egyptBounds} // يظهر مصر كاملة
        style={{
          width: "100%",
          height: "100%",
          borderRadius: "20px",
          zIndex: "1",
        }}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution="&copy; OpenStreetMap contributors"
        />

        {locations.map((loc) => (
          <Marker
            key={loc.id}
            position={loc.position}
            eventHandlers={{
              click: () => {
                if (mapRef.current) {
                  const map = mapRef.current;
                  map.flyTo(loc.position, 15, { duration: 1.5 }); // zoom + animation
                }
              },
            }}
          >
            <Popup>
              <Image
                src={loc.image}
                alt={loc.name}
                quality={99}
                width={250}
                height={250}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  marginBottom: "10px",
                }}
              />
              <h6
                style={{
                  direction: locale === "en" ? "ltr" : "rtl",
                  textAlign: locale === "en" ? "left" : "right",
                }}
              >
                📍{loc.name}
              </h6>
              <p
                style={{
                  direction: locale === "en" ? "ltr" : "rtl",
                  textAlign: locale === "en" ? "left" : "right",
                  margin: "0px",
                }}
              >
                {loc.description}
              </p>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
}
