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

            <p className="pt-2">
              This Boootstrap portfolio template is handcrafted by UX designer
              <a href="https://twitter.com/3rdwave_themes" target="blank">
                Xiaoying Riley
              </a>
              at
              <a href="https://themes.3rdwavemedia.com/" target="blank">
                3rd Wave Media
              </a>
              for developers and is <strong>FREE</strong> as long as you keep
              the footer attribution link.
            </p>
            <p>
              If you’d like to
              <strong>use this template without the attribution link</strong>,
              you can
              <a
                href="https://themes.3rdwavemedia.com/bootstrap-templates/resume/free-bootstrap-portfolio-theme-for-web-developers/"
                target="blank"
              >
                buy the commercial license
              </a>
              .
            </p>

            <a
              className="btn btn-cta-primary btn-download"
              href="https://themes.3rdwavemedia.com/bootstrap-templates/resume/free-bootstrap-portfolio-theme-for-web-developers/"
              target="blank"
            >
              <i className="fas fa-download"></i> I want to download
            </a>
            <hr />
            <h5 className="subheading pt-3">
              Want more free Bootstrap themes and templates?
            </h5>
            <p>
              Check out our
              <a href="https://themes.3rdwavemedia.com/bootstrap-templates/free/">
                collection of free themes and templates.
              </a>
            </p>
            <p>
              Follow
              <a href="https://twitter.com/3rdwave_themes" target="blank">
                Xiaoying
              </a>
              on twitter so you don't miss any future freebies!
            </p>

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
