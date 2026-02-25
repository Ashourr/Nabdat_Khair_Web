import DonationDetails from "@/dashboard/donationsDashboard/DonationDetails/DonationDetails";
import React from "react";

export default function page({ params }) {
  let { id } = params;
  return (
    <div>
      <DonationDetails id={id} />
    </div>
  );
}
