import React from "react";

const EducationSection = () => {
  return (
    <>
      <aside className="education aside section">
        <div className="section-inner shadow-sm rounded">
          <h2 className="heading">Education</h2>
          <div className="content">
            <div className="item">
              <h3 className="title">
                <i className="fas fa-graduation-cap"></i> MSc Computer Science
              </h3>
              <h4 className="university">
                University College London
                <span className="year">(2017-2018)</span>
              </h4>
            </div>
            <div className="item">
              <h3 className="title">
                <i className="fas fa-graduation-cap"></i> BSc Computer Science
              </h3>
              <h4 className="university">
                University of Bristol
                <span className="year">(2013-2017)</span>
              </h4>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
};

export default EducationSection;
