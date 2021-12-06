import React from "react";

const CreditSection = () => {
  return (
    <>
      <aside className="credits aside section">
        <div className="section-inner shadow-sm rounded">
          <h2 className="heading">Credits</h2>
          <div className="content">
            <ul className="list-unstyled pb-2">
              <li>
                <a href="https://getbootstrap.com/" target="blank">
                  <i className="fas fa-external-link-alt"></i>Bootstrap
                </a>
              </li>
              <li>
                <a
                  href="https://fortawesome.github.io/Font-Awesome/"
                  target="blank"
                >
                  <i className="fas fa-external-link-alt"></i>FontAwesome
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/IonicaBizau/github-calendar"
                  target="blank"
                >
                  <i className="fas fa-external-link-alt"></i>GitHub Calendar
                  Plugin
                </a>
              </li>

              <li>
                <a
                  href="https://caseyscarborough.com/projects/github-activity/"
                  target="blank"
                >
                  <i className="fas fa-external-link-alt"></i>GitHub Activity
                  Stream
                </a>
              </li>

              <li>
                <a href="https://github.com/sdepold/vanilla-rss" target="blank">
                  <i className="fas fa-external-link-alt"></i>Vanilla RSS
                </a>
              </li>
              <li>
                <a href="https://github.com/coliff/dark-mode-switch">
                  <i className="fas fa-external-link-alt"></i>Dark Mode Switch
                </a>
              </li>
            </ul>
            <hr />
            <a
              className="btn btn-cta-secondary btn-follow"
              href="https://twitter.com/3rdwave_themes"
              target="blank"
            >
              <i className="fab fa-twitter"></i> Follow on twitter
            </a>
          </div>
        </div>
      </aside>
    </>
  );
};

export default CreditSection;
