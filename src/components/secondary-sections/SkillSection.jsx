import React from "react";

const SkillSection = () => {
  return (
    <>
      <aside className="skills aside section">
        <div className="section-inner shadow-sm rounded">
          <h2 className="heading">Skills</h2>
          <div className="content">
            <p className="intro">
              Intro about your skills goes here. Keep the list lean and only
              show your primary skillset. You can always provide a link to your
              Linkedin or Github profile so people can get more info there.
            </p>

            <div className="skillset">
              <div className="item">
                <h3 className="level-title">
                  Python &amp; Django
                  <span
                    className="level-label"
                    data-bs-toggle="tooltip"
                    data-bs-placement="left"
                    title="You can use the tooltip to explain more about your skill level..."
                  >
                    <i className="fas fa-info-circle"></i>Expert
                  </span>
                </h3>

                <div className="level-bar progress">
                  <div
                    className="progress-bar level-bar-inner"
                    role="progressbar"
                    style={{ width: "96%" }}
                    aria-valuenow="96"
                    aria-valuemin="0"
                    aria-valuemax="96"
                  ></div>
                </div>
              </div>

              <div className="item">
                <h3 className="level-title">
                  Javascript &amp; jQuery
                  <span
                    className="level-label"
                    data-bs-toggle="tooltip"
                    data-bs-placement="left"
                    title="You can use the tooltip to explain more about your skill level..."
                  >
                    <i className="fas fa-info-circle"></i>Expert
                  </span>
                </h3>
                <div className="level-bar progress">
                  <div
                    className="progress-bar level-bar-inner"
                    role="progressbar"
                    style={{ width: "94%" }}
                    aria-valuenow="94"
                    aria-valuemin="0"
                    aria-valuemax="94"
                  ></div>
                </div>
              </div>

              <div className="item">
                <h3 className="level-title">
                  HTML5, CSS3, SASS &amp; LESS
                  <span
                    className="level-label"
                    data-bs-toggle="tooltip"
                    data-bs-placement="left"
                    title="You can use the tooltip to explain more about your skill level..."
                  >
                    <i className="fas fa-info-circle"></i>Expert
                  </span>
                </h3>
                <div className="level-bar progress">
                  <div
                    className="progress-bar level-bar-inner"
                    role="progressbar"
                    style={{ width: "93%" }}
                    aria-valuenow="93"
                    aria-valuemin="0"
                    aria-valuemax="96"
                  ></div>
                </div>
              </div>

              <div className="item">
                <h3 className="level-title">
                  Ruby on Rails
                  <span
                    className="level-label"
                    data-bs-toggle="tooltip"
                    data-placement="left"
                    title="You can use the tooltip to explain more about your skill level..."
                  >
                    <i className="fas fa-info-circle"></i>Pro
                  </span>
                </h3>
                <div className="level-bar progress">
                  <div
                    className="progress-bar level-bar-inner"
                    role="progressbar"
                    style={{ width: "86%" }}
                    aria-valuenow="86"
                    aria-valuemin="0"
                    aria-valuemax="96"
                  ></div>
                </div>
              </div>

              <p>
                <a className="more-link" href="https://backenk.yatt.tech">
                  <i className="fas fa-external-link-alt"></i>More on GitHub
                </a>
              </p>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
};

export default SkillSection;
