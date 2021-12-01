import React from "react";
import CreditSection from "./CreditSection";
import EducationSection from "./EducationSection";
import InfoContactSection from "./InfoContactSection";
import LanguageSection from "./LanguageSection";
import LastPostSection from "./LastPostSection";
import ListConferenceSection from "./ListConferenceSection";
import ListMusicSection from "./ListMusicSection";
import SkillSection from "./SkillSection";
import TestimonialSection from "./TestimonialSection";

const SecondarySection = () => {
  return (
    <>
      <div className="secondary col-lg-4 col-12">
        {/* info contact section */}
        <InfoContactSection />

        {/* skill section */}
        <SkillSection />

        {/* testimonials section */}
        <TestimonialSection />

        {/* education section */}
        <EducationSection />

        {/* languages section */}
        <LanguageSection />

        {/* LastPost section */}
        <LastPostSection />

        {/* ListMusic section */}
        <ListMusicSection />

        {/* ListConference section */}
        <ListConferenceSection />

        {/* CreditSection section */}
        <CreditSection />
      </div>
    </>
  );
};

export default SecondarySection;
