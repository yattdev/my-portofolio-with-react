import React from "react";
import { MDBIcon } from "mdb-react-ui-kit";

const SkillSection = () => {
  return (
    <>
      <aside className="skills aside section">
        <div className="section-inner shadow-sm rounded">
          <h2 className="heading">Skills &amp; Tools</h2>
          <div className="content">
            <p className="intro">
              Modern go-getter, seasoned developer, in his adventure, Alassane
              has developed full stack skills in development, AI and management
              skills.
            </p>

            <div className="skillset">
              <div className="item">
                <h3 className="level-title">
                  Python, Django &amp; DRF
                  <span
                    className="level-label"
                    data-bs-toggle="tooltip"
                    data-bs-placement="left"
                    title="seasoned full stack python developer, with django, django-rest-framework"
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
                  Reactjs &amp; Vuejs
                  <span
                    className="level-label"
                    data-bs-toggle="tooltip"
                    data-bs-placement="left"
                    title="seasoned and confirmed full stack Reactjs and Vuejs developer, and use django rest framework as backend"
                  >
                    <i className="fas fa-info-circle"></i>Pro
                  </span>
                </h3>
                <div className="level-bar progress">
                  <div
                    className="progress-bar level-bar-inner"
                    role="progressbar"
                    style={{ width: "90%" }}
                    aria-valuenow="90"
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
                  DevOps tools
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
            </div>
          </div>
          <hr />
          <blockquote>
            <q>
              My super power is my ability to learn and experience new things
            </q>
          </blockquote>
          <div className="content">
            <div className="item">
              {/* Backend web tools */}
              <p style={{ textIndent: "-0.6em" }}>
                <strong style={{ fontSize: "1.1em" }}>
                  Backend Web/Mobile: &nbsp;&nbsp;
                  <MDBIcon fab icon="python" />
                  <MDBIcon fab icon="js" />
                  <MDBIcon fas icon="bug" />
                  <MDBIcon fab icon="node-js" />
                </strong>
                <br />
                <strong>Python: &nbsp;&nbsp;</strong>
                <span>
                  Django, Django Rest Framework, Flask, FastAPI, Sanic
                  Framework.
                </span>
                <br />
                <strong>Java: &nbsp;&nbsp;</strong>
                <span>SpringBoot</span>
                <br />
                <strong>Javascript/Typescript: &nbsp;&nbsp;</strong>
                <span>NodeJs</span>
                <br />
                <strong>Testing: &nbsp;&nbsp;</strong> Unit-tests, JMeter,
                Katalon, Selenuim, Cypress.io, Jest.io
              </p>
              {/* API Specification web tools */}
              <p style={{ textIndent: "-0.6em" }}>
                <strong style={{ fontSize: "1.1em" }}>
                  API Specification: &nbsp;&nbsp;
                </strong>
                <span>REST</span>
              </p>
              {/* Frontend web tools */}
              <p style={{ textIndent: "-0.6em" }}>
                <strong style={{ fontSize: "1.1em" }}>
                  Frontend Web &amp; CMS: &nbsp;&nbsp;
                  <MDBIcon fab icon="react" />
                  <MDBIcon fab icon="vuejs" />
                  <MDBIcon fab icon="mdb" />
                  <MDBIcon fab icon="angular" />
                  <MDBIcon fab icon="wordpress" />
                </strong>
                <br />
                <strong>Javascript/Typescript: &nbsp;&nbsp; </strong>
                <span>ReactJS, NextJS(React), VueJS, NuxtJS(VueJS)</span>
                <br />
                <strong>CMS: </strong>
                <span>Django CMS, WordPress, Prestashop</span>
                <br />
                <strong>Testing: &nbsp;&nbsp;</strong> Selenium, Katalon, JMeter
              </p>
              {/* Mobile tools */}
              <p style={{ textIndent: "-0.6em" }}>
                <strong style={{ fontSize: "1.1em" }}>
                  Mobile: &nbsp;&nbsp;
                  <MDBIcon fas icon="mobile" />
                  <MDBIcon fab icon="react" />
                  <MDBIcon fab icon="vuejs" />
                </strong>
                <br />
                <span>React Native, NextJS(React), NuxtJS(Vuejs)</span>
                <br />
                <strong>Testing: &nbsp;&nbsp;</strong> Cypress.io, Jest.io
              </p>
              {/* UI Design web tools */}
              <p style={{ textIndent: "-0.6em" }}>
                <strong style={{ fontSize: "1.1em" }}>
                  UI Design: &nbsp;&nbsp;
                  <MDBIcon fab icon="figma" />
                  <MDBIcon fab icon="sketch" />
                  <MDBIcon fab icon="microsoft" />
                </strong>
                <br />
                <strong>UI/Prototyping: &nbsp;&nbsp; </strong>
                <span>Photoshop, Figma</span>
                <br />
                <strong>Presentation: &nbsp;&nbsp; </strong>
                <span>Canva, Microsoft PowerPoint</span>
              </p>
              {/* Databases tools */}
              <p style={{ textIndent: "-0.6em" }}>
                <strong style={{ fontSize: "1.1em" }}>
                  Databases: &nbsp;&nbsp;
                  <MDBIcon fas icon="database" />
                  <MDBIcon fas icon="search" />
                </strong>
                <br />
                <strong>PL/SQL: &nbsp;&nbsp; </strong>
                <span>PostgreSQL, MySQL, SQLite</span>
                <br />
                <strong>NoSQL: &nbsp;&nbsp; </strong>
                <span>Elasticsearch, Search Engine Whoosh</span>
                <br />
                <strong>Data Objects/Transferts: &nbsp;&nbsp; </strong>
                <span>MongoDB, JSON, YAML</span>
              </p>
              {/* Artificial Intelligence tools */}
              <p style={{ textIndent: "-0.6em" }}>
                <strong style={{ fontSize: "1.1em" }}>
                  Artificial Intelligence: &nbsp;&nbsp;
                  <MDBIcon fab icon="python" />
                  <MDBIcon fas icon="robot" />
                </strong>
                <br />
                <strong>Machine Learning: &nbsp;&nbsp; </strong>
                <span>NLP Chatbot with Rasa open source</span>
                <br />
                <strong>Robotics: &nbsp;&nbsp; </strong>
                <span>ROS, Raspberry, Arduino</span>
              </p>
              {/* DevOps tools */}
              <p style={{ textIndent: "-0.6em" }}>
                <strong style={{ fontSize: "1.1em" }}>
                  DevOps: &nbsp;&nbsp;
                  <MDBIcon fab icon="aws" />
                  <MDBIcon fab icon="jenkins" />
                  <MDBIcon fab icon="git-alt" />
                  <MDBIcon fab icon="github" />
                  <MDBIcon fab icon="gitlab" />
                  <MDBIcon fab icon="docker" />
                </strong>
                <br />
                <span>
                  Git, GitGuardian, Github Actions, Docker/Compose, CircleCI,
                  AWS(EC2, S3, RDS, ECR), Heroku, Jenkins.
                </span>
              </p>
              {/* IDE tools */}
              <p style={{ textIndent: "-0.6em" }}>
                <strong style={{ fontSize: "1.1em" }}>
                  {" "}
                  IDE: &nbsp;&nbsp;
                </strong>
                <br />
                <span>Vim/SpaceVim, VSCode, SpringTools</span>
              </p>
              {/* Operating Systems tools */}
              <p style={{ textIndent: "-0.6em" }}>
                <strong style={{ fontSize: "1.1em" }}>
                  Operating Systems: &nbsp;&nbsp;
                  <MDBIcon fab icon="linux" />
                  <MDBIcon fab icon="ubuntu" />
                  <MDBIcon fab icon="apple" />
                  <MDBIcon fab icon="windows" />
                </strong>
                <br />
                <span>Ubuntu, Windows, MacOS</span>
              </p>
              {/* Other Skills tools */}
              <p style={{ textIndent: "-0.6em" }}>
                <strong style={{ fontSize: "1.1em" }}>
                  {" "}
                  Other Skills: &nbsp;&nbsp;
                  <MDBIcon fab icon="html5" />
                  <MDBIcon fab icon="css3" />
                  <MDBIcon fas icon="terminal" />
                  <MDBIcon fas icon="server" />
                </strong>
                <br />
                <span>
                  HTML5, CSS3, Shell-scripting, Nginx, ssh, mdb/Bootstrap,
                  Hadoop, C/C++, Go language, Php/laravel.
                </span>
              </p>
              {/* Methodologies tools */}
              <p style={{ textIndent: "-0.6em" }}>
                <strong style={{ fontSize: "1.1em" }}>
                  Methodologies: &nbsp;&nbsp;
                </strong>
                <br />
                <span>
                  Agile Software Development (Scrum, Kanban), CI/CD, Distributed
                  Systems, Test-driven Development, Coversational-driven
                  Development(bot) Engineering Best Practices,
                  Concurrent/Parallel Programming.
                </span>
              </p>
            </div>
          </div>
          <p>
            <a className="more-link" href="https://www.linkedin.com/in/yattara">
              <i className="fas fa-external-link-alt"></i>More on Linkedin
            </a>
          </p>
        </div>
      </aside>
    </>
  );
};

export default SkillSection;
