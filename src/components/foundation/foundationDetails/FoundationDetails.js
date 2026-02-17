"use client";
import React from "react";
import Header from "./headerFoundation/HeaderFoundation";
import SiteBar from "./sitebar/SiteBar";
import FoundationContact from "./contact/FoundationContact";
import "./foundation-details.css"
export default function FoundationDetails({ name, image }) {
  return (
    <div className="foundation-details">
      <div className="container-fluid container-lg">
        <div className="row">
          <div className="col-12 col-lg-9">
            <Header />
            <div className="d-block d-lg-none container">
              <SiteBar name={name} image={image} />
            </div>
            <div className="content container-md">
              <FoundationContact />
            </div>
          </div>
          <div className="col-12 col-lg-3 d-none d-lg-block">
            <SiteBar name={name} image={image} />
          </div>
        </div>
      </div>
    </div>
  );
}
