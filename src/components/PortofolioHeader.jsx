import React, { useState, useEffect } from "react";
import Profile from "../assets/images/profile.jpg";
import { useDarkMode } from "usehooks-ts";
import { Helmet } from "react-helmet-async";

const PortofolioHeader = () => {
  const { isDarkMode, toggle } = useDarkMode();
  const [isShow, setIsShow] = useState({ state: false, msg: "" });
  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsShow({ msg: "", state: false });
    }, 3000);

    return () => clearTimeout(timeout);
  }, [isShow]);
  return (
    <>
      <Helmet>
        <body data-theme={`${isDarkMode ? "dark" : "ligth"}`} />
      </Helmet>
      <header className="header">
        <div className="container">
          <div className="row align-items-center">
            <div className="col">
              <img
                className="profile-image img-fluid float-start rounded-circle"
                src={Profile}
                alt="profile"
              />
              <div className="profile-content">
                <h1 className="name">Yattara Alassane</h1>
                <h2 className="desc">
                  Software engineer | FullStack Developer | Starter
                </h2>
                <h3 className="desc fw-bolder fst-italic">
                  MSc Computer Science '21, &nbsp;
                  <a href="https://fr.wikipedia.org/wiki/Casablanca">
                    Casablanca
                  </a>
                </h3>

                <ul className="social list-inline">
                  <li className="list-inline-item">
                    <a href="https://www.linkedin.com/in/alassane-yattara-587477166/">
                      <i className="fab fa-linkedin-in"></i>
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a
                      href="/#"
                      onClick={() => setIsShow({ state: true, msg: "twitter" })}
                    >
                      <i className="fab fa-twitter"></i>
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a href="https://github.com/yattdev">
                      <i className="fab fa-github-alt"></i>
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a href="https://stackoverflow.com/users/16842251/yatt-developer">
                      <i className="fab fa-stack-overflow"></i>
                    </a>
                  </li>
                  <li className="list-inline-item last-item">
                    <a
                      href="/#"
                      onClick={() => setIsShow({ state: true, msg: "Codepen" })}
                    >
                      <i className="fab fa-codepen"></i>
                    </a>
                  </li>
                  {isShow.state && (
                    <em className="text-info alert">No {isShow.msg} yet !</em>
                  )}
                </ul>
              </div>
            </div>
            <div className="col-12 col-md-auto">
              <div className="dark-mode-switch d-flex">
                <div className="form-check form-switch mx-auto mx-md-0">
                  <input
                    type="checkbox"
                    className="form-check-input me-2"
                    id="darkSwitch"
                    onClick={toggle}
                  />
                  <label className="custom-control-label" for="darkSwitch">
                    Dark Mode
                  </label>
                </div>
              </div>
              <a
                className="btn btn-cta-primary"
                href="mailto:alassane@yatt.tech"
                target="blank"
              >
                <i className="fas fa-paper-plane"></i> Contact Me
              </a>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default PortofolioHeader;
