import React from "react";
import HeaderCasesDetails from "./headerCasesDetails/HeaderCasesDetails";
import SitebarCasesDetails from "./sitebarCasesDetails/SitebarCasesDetails";
import ContactCasesDetails from "./headerCasesDetails/ContactCasesDetails";
import "./casesDetails.css";
export default function CasesDetails() {
  return (
    <div className="foundation-details">
      <div className="container-fluid container-lg">
        <div className="row">
          <div className="col-12 col-lg-8">
            <HeaderCasesDetails />
            <div className="d-block d-lg-none container-lg">
              <SitebarCasesDetails />
            </div>
            <ContactCasesDetails />
          </div>
          <div className="col-12 col-lg-4 d-none d-lg-block">
            <SitebarCasesDetails />
          </div>
        </div>
      </div>
    </div>
  );
}
