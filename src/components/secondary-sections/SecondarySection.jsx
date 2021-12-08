import React from "react";
import HobbieInterestSection from "./HobbieInterestSection";
import EducationSection from "./EducationSection";
import LastBookReadSection from "./LastBookReadSection";
import InfoContactSection from "./InfoContactSection";
import LanguageSection from "./LanguageSection";
import LastPostSection from "./LastPostSection";
import ListVolunteerSection from "./ListVolunteerSection";
import ListMusicSection from "./ListMusicSection";
import SkillSection from "./SkillSection";
// import TestimonialSection from "./TestimonialSection";

const SecondarySection = () => {
  return (
    <>
      <div className="secondary col-lg-4 col-12">
        {/* info contact section */}
        <InfoContactSection />

        {/* education section */}
        <EducationSection />

        {/* skill section */}
        <SkillSection />

        {/* languages section */}
        <LanguageSection />

        {/* LastPost section */}
        <LastPostSection />

        {/* LastBookRead section */}
        <LastBookReadSection />

        {/* ListMusic section */}
        <ListMusicSection />

        {/* ListVolunteer section */}
        <ListVolunteerSection />

        {/* Hobbies and Interests section */}
        <HobbieInterestSection />
      </div>
    </>
  );
};

export default SecondarySection;
