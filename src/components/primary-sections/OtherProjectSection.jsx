import React from "react";

const OtherProjectSection = () => {
  return (
    <>
      <section className="projects section">
        <div className="section-inner shadow-sm rounded">
          <h2 className="heading">Other Projects</h2>
          <div className="content">
            <div className="item">
              <h3 className="title">
                <a
                  href="https://themes.3rdwavemedia.com/bootstrap-templates/resume/free-bootstrap4-resume-cv-template-for-developers-pillar/"
                  target="blank"
                >
                  Pillar - Free Boootstrap Resume/CV Template for Developers
                </a>{" "}
                <span className="badge badge-theme">Free</span>
              </h3>
              <p className="summary">
                Provide a brief description of your project. Ut enim ad minima
                veniam, quis nostrum exercitationem ullam corporis suscipit
                laboriosam, nisi ut aliquid ex ea commodi consequatu.
              </p>
              <p>
                <a
                  className="more-link"
                  href="https://themes.3rdwavemedia.com/bootstrap-templates/resume/free-bootstrap4-resume-cv-template-for-developers-pillar/"
                  target="blank"
                >
                  <i className="fas fa-external-link-alt"></i>Download Now
                </a>
              </p>
            </div>
            <div className="item">
              <h3 className="title">
                <a
                  href="https://themes.3rdwavemedia.com/bootstrap-templates/speciality/devblog-free-bootstrap-4-blog-template-for-developers/"
                  target="blank"
                >
                  DevBlog - Free Boootstrap Blog Template for Developers
                </a>{" "}
                <span className="badge badge-theme">Free</span>
              </h3>
              <p className="summary">
                Provide a brief description of your project. Maecenas ornare
                ultricies risus, in fermentum augue consectetur in. Vestibulum
                vitae mauris iaculis, sollicitudin velit in, molestie nulla.{" "}
              </p>
              <p>
                <a
                  className="more-link"
                  href="https://themes.3rdwavemedia.com/bootstrap-templates/speciality/devblog-free-bootstrap-4-blog-template-for-developers/"
                  target="blank"
                >
                  <i className="fas fa-external-link-alt"></i>Download Now
                </a>
              </p>
            </div>
            <div className="item">
              <h3 className="title">
                <a
                  href="https://themes.3rdwavemedia.com/bootstrap-templates/startup/nova-bootstrap-landing-page-template-for-mobile-apps/"
                  target="blank"
                >
                  Nova - Free App Landing Page Template for App Developers
                </a>{" "}
                <span className="badge badge-theme">Free</span>
              </h3>
              <p className="summary">
                Provide a brief description of your project. Lorem ipsum dolor
                sit amet, consectetur adipiscing elit. In vel purus enim. Etiam
                tortor felis, fermentum ac ultrices sed.
              </p>
              <p>
                <a
                  className="more-link"
                  href="https://themes.3rdwavemedia.com/bootstrap-templates/startup/nova-bootstrap-landing-page-template-for-mobile-apps/"
                  target="blank"
                >
                  <i className="fas fa-external-link-alt"></i>Download Now
                </a>
              </p>
            </div>

            <a
              className="btn btn-cta-secondary"
              href="https://github.com/yattdev"
            >
              More on GitHub <i className="fas fa-chevron-right pt-1"></i>
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default OtherProjectSection;
