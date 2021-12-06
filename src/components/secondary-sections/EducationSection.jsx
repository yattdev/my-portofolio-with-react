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
                PRIVATE POLYTECHNIC INSTITUTE OF CASABLANCA <br />
                <span className="year position-relative start-50">
                  (2016-2021)
                </span>
              </h4>
            </div>
            <div className="item">
              <h3 className="title">
                <i className="fas fa-graduation-cap"></i> BSc Mathematics,
                Physics &amp; Chemistry
              </h3>
              <h4 className="university">
                BAMINATA COULIBALY HIGH SCHOOL <br />
                <span className="year position-relative start-50">
                  (2012-2016)
                </span>
              </h4>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
};

export default EducationSection;
