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
                  Backend Web: &nbsp;&nbsp;
                  <MDBIcon fab icon="python" />
                  <MDBIcon fab icon="js" />
                  <MDBIcon fas icon="bug" />
                  <MDBIcon fab icon="node-js" />
                </strong>
                <br />
                <strong>Python: </strong>
                <span>
                  Django, Django Rest Framework, Flask, FastAPI, Sanic
                  Framework.
                </span>
                <br />
                <strong>Javascript/Typescript: </strong>
                <span>NodeJs</span>
                <br />
                <strong>Testing:</strong> Unit-tests, JMeter
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
                <strong>Javascript/Typescript: </strong>
                <span>ReactJS, VueJS, AngularJS</span>
                <br />
                <strong>CMS: </strong>
                <span>Django CMS, WordPress, Prestashop</span>
                <br />
                <strong>Testing:</strong> Selenium, Katalon
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
                <strong>UI/Prototyping: </strong>
                <span>Photoshop, Figma</span>
                <br />
                <strong>Presentation: </strong>
                <span>Canva, Microsoft PowerPoint</span>
                <br />
                <strong>Testing:</strong> Unit tests, JMeter
              </p>
              {/* Databases tools */}
              <p style={{ textIndent: "-0.6em" }}>
                <strong style={{ fontSize: "1.1em" }}> Databases:</strong>
                <br />
                <MDBIcon fab icon="python" />
                <strong>Python: </strong>
                <span>
                  Django, Django Rest Framework, Machine Learning, NLP, Rasa
                  Open Source, FastAPI, Flask, Sanic Framework, Search Engine
                  Whoosh.
                </span>
                <br />
                <MDBIcon fab icon="python" />
                <strong>Javascript/Typescript: </strong>
                <span>NodeJs</span>
                <br />
                <MDBIcon fab icon="python" />
                <strong>Testing:</strong> Unit tests, JMeter
              </p>
              {/* Artificial Intelligence tools */}
              <p style={{ textIndent: "-0.6em" }}>
                <strong style={{ fontSize: "1.1em" }}>
                  Artificial Intelligence:
                </strong>
                <br />
                <MDBIcon fab icon="python" />
                <strong>Python: </strong>
                <span>
                  Django, Django Rest Framework, Machine Learning, NLP, Rasa
                  Open Source, FastAPI, Flask, Sanic Framework, Search Engine
                  Whoosh.
                </span>
                <br />
                <MDBIcon fab icon="python" />
                <strong>Javascript/Typescript: </strong>
                <span>NodeJs</span>
                <br />
                <MDBIcon fab icon="python" />
                <strong>Testing:</strong> Unit tests, JMeter
              </p>
              {/* DevOps tools */}
              <p style={{ textIndent: "-0.6em" }}>
                <strong style={{ fontSize: "1.1em" }}> DevOps:</strong>
                <br />
                <MDBIcon fab icon="python" />
                <strong>Python: </strong>
                <span>
                  Django, Django Rest Framework, Machine Learning, NLP, Rasa
                  Open Source, FastAPI, Flask, Sanic Framework, Search Engine
                  Whoosh.
                </span>
                <br />
                <MDBIcon fab icon="python" />
                <strong>Javascript/Typescript: </strong>
                <span>NodeJs</span>
                <br />
                <MDBIcon fab icon="python" />
                <strong>Testing:</strong> Unit tests, JMeter
              </p>
              {/* IDE tools */}
              <p style={{ textIndent: "-0.6em" }}>
                <strong style={{ fontSize: "1.1em" }}> IDE:</strong>
                <br />
                <MDBIcon fab icon="python" />
                <strong>Python: </strong>
                <span>
                  Django, Django Rest Framework, Machine Learning, NLP, Rasa
                  Open Source, FastAPI, Flask, Sanic Framework, Search Engine
                  Whoosh.
                </span>
                <br />
                <MDBIcon fab icon="python" />
                <strong>Javascript/Typescript: </strong>
                <span>NodeJs</span>
                <br />
                <MDBIcon fab icon="python" />
                <strong>Testing:</strong> Unit tests, JMeter
              </p>
              {/* Operating Systems tools */}
              <p style={{ textIndent: "-0.6em" }}>
                <strong style={{ fontSize: "1.1em" }}>
                  Operating Systems:
                </strong>
                <br />
                <MDBIcon fab icon="python" />
                <strong>Python: </strong>
                <span>
                  Django, Django Rest Framework, Machine Learning, NLP, Rasa
                  Open Source, FastAPI, Flask, Sanic Framework, Search Engine
                  Whoosh.
                </span>
                <br />
                <MDBIcon fab icon="python" />
                <strong>Javascript/Typescript: </strong>
                <span>NodeJs</span>
                <br />
                <MDBIcon fab icon="python" />
                <strong>Testing:</strong> Unit tests, JMeter
              </p>
              {/* Other Skills tools */}
              <p style={{ textIndent: "-0.6em" }}>
                <strong style={{ fontSize: "1.1em" }}> Other Skills:</strong>
                <br />
                <MDBIcon fab icon="python" />
                <strong>Python: </strong>
                <span>
                  Django, Django Rest Framework, Machine Learning, NLP, Rasa
                  Open Source, FastAPI, Flask, Sanic Framework, Search Engine
                  Whoosh.
                </span>
                <br />
                <MDBIcon fab icon="python" />
                <strong>Javascript/Typescript: </strong>
                <span>NodeJs</span>
                <br />
                <MDBIcon fab icon="python" />
                <strong>Testing:</strong> Unit tests, JMeter
              </p>
              {/* Methodologies tools */}
              <p style={{ textIndent: "-0.6em" }}>
                <strong style={{ fontSize: "1.1em" }}> Methodologies:</strong>
                <br />
                <MDBIcon fab icon="python" />
                <strong>Python: </strong>
                <span>
                  Django, Django Rest Framework, Machine Learning, NLP, Rasa
                  Open Source, FastAPI, Flask, Sanic Framework, Search Engine
                  Whoosh.
                </span>
                <br />
                <MDBIcon fab icon="python" />
                <strong>Javascript/Typescript: </strong>
                <span>NodeJs</span>
                <br />
                <MDBIcon fab icon="python" />
                <strong>Testing:</strong> Unit tests, JMeter
              </p>
            </div>
          </div>
          <p>
            <a
              className="more-link"
              href="https://www.linkedin.com/in/alassane-yattara-587477166/"
            >
              <i className="fas fa-external-link-alt"></i>More on Linkedin
            </a>
          </p>
        </div>
      </aside>
    </>
  );
};

export default SkillSection;
