import React from "react";

const OtherProjectSection = () => {
  return (
    <>
      <section className="projects section">
        <div className="section-inner shadow-sm rounded">
          <h2 className="heading">Other Open Source Projects</h2>
          <div className="content">
            <div className="item">
              <h3 className="title">
                <a
                  href="https://github.com/yattdev/django-docker-postgres"
                  target="blank"
                >
                  DJANGO API: A ready to start django rest api with User &nbsp;
                </a>
                <span className="badge badge-theme">Free</span>
              </h3>
              <p className="summary">
                Running Django + PostgreSQL containers and persisting data with
                Docker. A big reason to use Docker is that it completely removes
                any issues around local development set up. Instead of worrying
                about which software packages are installed or running a local
                database alongside a project, you simply run a Docker image of
                the entire project. Best of all, this can be shared in groups
                and makes team development much simpler.
              </p>
              <p>
                <a
                  className="more-link"
                  href="https://github.com/yattdev/django-docker-postgres"
                  target="blank"
                >
                  <i className="fas fa-external-link-alt"></i>Try now
                </a>
              </p>
            </div>
            <div className="item">
              <h3 className="title">
                <a href="https://github.com/yattdev/backend_edu" target="blank">
                  RESTFULL API MADE WITH DJANGO, FOR E-LEARNING PLATFORM &nbsp;
                </a>
                <span className="badge badge-theme">Free</span>
              </h3>
              <p className="summary">
                This app responsible for creating the courses and handling CRUD
                operations on them, it also has a simple api for enable working
                with the site through api consumers, possibility for the student
                enrollment into courses and displaying the content of the
                courses to students.
              </p>
              <p>
                <a
                  className="more-link"
                  href="https://github.com/yattdev/backend_edu"
                  target="blank"
                >
                  <i className="fas fa-external-link-alt"></i>Try now
                </a>
              </p>
            </div>
            <div className="item">
              <h3 className="title">
                <a
                  href="https://github.com/yattdev/data-set-nlu"
                  target="blank"
                >
                  NLU DATA: A DATA-SET FOR VIRTUAL PERSONAL ASSISTANT &nbsp;
                </a>
                <span className="badge badge-theme">Free</span>
              </h3>
              <p className="summary">
                The goal of NLU (Natural Language Understanding) is to extract
                structured information from user messages. This usually includes
                the user's intent and any entities their message contains. NLU
                training data consists of example user utterances categorized by
                intent. This dataset is an example for educational IA assistant,
                a extentions created while Jady development.
              </p>
              <p>
                <a
                  className="more-link"
                  href="https://github.com/yattdev/data-set-nlu"
                  target="blank"
                >
                  <i className="fas fa-external-link-alt"></i>Try Now
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
