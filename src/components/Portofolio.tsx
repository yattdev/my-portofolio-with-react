import React from "react";
import PrimarySection from "./primary-sections/PrimarySection";
import SecondarySection from "./secondary-sections/SecondarySection";

const Portofolio = () => {
  return (
    <>
      <div className="container sections-wrapper py-5">
        <div className="row">
          {/* PrimarySection */}
          <PrimarySection />
          {/* Secondaryection */}
          <SecondarySection />
        </div>
      </div>
    </>
  );
};

export default Portofolio;
