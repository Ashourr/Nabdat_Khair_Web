"use client";
import React, { useState } from "react";
// import "./tabs.css";
import "./foundationContact.css";
import { useLocale } from "next-intl";
import AboutFoundation from "./aboutFoundation/AboutFoundation";
import ServiceFoundation from "./serviceFoundation/ServiceFoundation";
import CasesServices from "./serviceFoundation/casesServices/CasesServices";
// import CasesServicesDetails from "./contactUsFoundation/ContactUsFoundation";
import ContactUsFoundation from "./contactUsFoundation/ContactUsFoundation";
import CasesFoundation from "./CasesFoundation/CasesFoundation";
export default function FoundationContact() {
  const locale = useLocale();
  const [activeTab, setActiveTab] = useState("about");
  const [selectedServiceName, setSelectedServiceName] = useState("");
  const [selectedCasesID, setSelectedCasesID] = useState("");

  const handleTabChange = (tabName, serviceName = "", id = "") => {
    setActiveTab(tabName);

    if (serviceName) {
      setSelectedServiceName(serviceName);
    }

    if (id) {
      setSelectedCasesID(id);
      console.log("ID الحالة المختارة هو: ", id);
    }
  };
  return (
    <div className="tabs-container">
      {/* Tabs Header */}
      <div className="tabs-header">
        <button
          className={activeTab === "about" ? "tab active" : "tab"}
          onClick={() => setActiveTab("about")}
        >
          {locale === "en" ? "About Us" : "من نحن"}
        </button>

        <button
          className={
            activeTab === "services" ||
            activeTab === "casesService" ||
            activeTab === "casesServiceDetails"
              ? "tab active"
              : "tab"
          }
          onClick={() => setActiveTab("services")}
        >
          {locale === "en" ? "Services" : "الخدمات"}
        </button>

        <button
          className={
            activeTab === "cases" || activeTab === "casesDetails"
              ? "tab active"
              : "tab"
          }
          onClick={() => setActiveTab("cases")}
        >
          {locale === "en" ? "Cases" : "الحالات"}
        </button>

        <button
          className={activeTab === "contact" ? "tab active" : "tab"}
          onClick={() => setActiveTab("contact")}
        >
          {locale === "en" ? "Contact Us" : "تواصل معنا"}
        </button>
      </div>

      {/* Tabs Content */}
      <div className="tabs-content">
        {activeTab === "about" && (
          <div className="tab-content">
            <AboutFoundation />
          </div>
        )}

        {activeTab === "services" && (
          <div className="tab-content">
            <ServiceFoundation setActiveTab={handleTabChange} />
          </div>
        )}

        {activeTab === "casesService" && (
          <div className="tab-content">
            <CasesServices
              selectedServiceName={selectedServiceName}
              setActiveTab={handleTabChange}
            />
          </div>
        )}

        {activeTab === "casesServiceDetails" && (
          <div className="tab-content">
            <h3>{locale === "en" ? "Case Details" : "تفاصيل الحالة"}</h3>
            <div className="alert alert-info">ID: {selectedCasesID}</div>
            <p>اسم الخدمة التابعة لها: {selectedServiceName}</p>

            {/* هنا يمكنك استدعاء مكون التفاصيل وتمرير الـ ID له */}
            {/* <CaseDetails id={selectedCasesID} /> */}
          </div>
        )}

        {activeTab === "cases" && (
          <div className="tab-content">
            <CasesFoundation setActiveTab={handleTabChange} />
          </div>
        )}

        {activeTab === "casesDetails" && (
          <div className="tab-content">
            <h3>{locale === "en" ? "Case Details" : "تفاصيل الحالة"}</h3>
            <div className="alert alert-info">ID: {selectedCasesID}</div>
            {/* هنا يمكنك استدعاء مكون التفاصيل وتمرير الـ ID له */}
            {/* <CaseDetails id={selectedCasesID} /> */}
          </div>
        )}

        {activeTab === "contact" && (
          <div className="tab-content">
            <ContactUsFoundation />
          </div>
        )}
      </div>
    </div>
  );
}
