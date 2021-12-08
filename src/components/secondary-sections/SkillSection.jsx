import React from "react";
import { MDBIcon } from "mdb-react-ui-kit";
import PostgreSQLIcons from "../../assets/images/icons/postgresql_icon.svg";
import MySQLIcons from "../../assets/images/icons/mysql-icon.svg";
import MongoDBIcons from "../../assets/images/icons/mongodb-icon.svg";
import ElasticsearchIcons from "../../assets/images/icons/elastic-icon.svg";

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
                <strong>Python: &nbsp;&nbsp;</strong>
                <span>
                  Django, Django Rest Framework, Flask, FastAPI, Sanic
                  Framework.
                </span>
                <br />
                <strong>Javascript/Typescript: &nbsp;&nbsp;</strong>
                <span>NodeJs</span>
                <br />
                <strong>Testing: &nbsp;&nbsp;</strong> Unit-tests, JMeter
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
                <span>ReactJS, VueJS, AngularJS</span>
                <br />
                <strong>CMS: </strong>
                <span>Django CMS, WordPress, Prestashop</span>
                <br />
                <strong>Testing: &nbsp;&nbsp;</strong> Selenium, Katalon
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
                  <img
                    style={{ inlineSize: "2em" }}
                    src={PostgreSQLIcons}
                    alt="PostgreSQL icon"
                    srcset=""
                  />
                  <img
                    style={{ inlineSize: "1.5em" }}
                    src={MySQLIcons}
                    alt="PostgreSQL icon"
                    srcset=""
                  />
                  <img
                    style={{ inlineSize: "1.5em" }}
                    src={MongoDBIcons}
                    alt="PostgreSQL icon"
                    srcset=""
                  />
                  <img
                    style={{ inlineSize: "1em" }}
                    src={ElasticsearchIcons}
                    alt="PostgreSQL icon"
                    srcset=""
                  />
                </strong>
                <br />
                <strong>PL/SQL: &nbsp;&nbsp; </strong>
                <span>PostgreSQL, MySQL, SQLite</span>
                <br />
                <strong>NoSQL: &nbsp;&nbsp; </strong>
                <span>Elasticsearch, Search Engine Whoosh</span>
                <br />
                <strong>Data Objects: &nbsp;&nbsp; </strong>
                <span>MongoDB, JSON, YAML</span>
              </p>
              {/* Artificial Intelligence tools */}
              <p style={{ textIndent: "-0.6em" }}>
                <strong style={{ fontSize: "1.1em" }}>
                  Artificial Intelligence: &nbsp;&nbsp;
                  <MDBIcon fab icon="python" />
                </strong>
                <br />
                <strong>Machine Learning: &nbsp;&nbsp; </strong>
                <span>Rasa open source, NLP,</span>
                <br />
                <MDBIcon fab icon="python" />
                <strong>Javascript/Typescript: &nbsp;&nbsp; </strong>
                <span>NodeJs</span>
                <br />
                <MDBIcon fab icon="python" />
                <strong>Testing: &nbsp;&nbsp;</strong> Unit tests, JMeter
              </p>
              {/* DevOps tools */}
              <p style={{ textIndent: "-0.6em" }}>
                <strong style={{ fontSize: "1.1em" }}>
                  {" "}
                  DevOps: &nbsp;&nbsp;
                </strong>
                <br />
                <MDBIcon fab icon="python" />
                <strong>Python: &nbsp;&nbsp; </strong>
                <span>
                  Django, Django Rest Framework, Machine Learning, NLP, Rasa
                  Open Source, FastAPI, Flask, Sanic Framework, Search Engine
                  Whoosh.
                </span>
                <br />
                <MDBIcon fab icon="python" />
                <strong>Javascript/Typescript: &nbsp;&nbsp; </strong>
                <span>NodeJs</span>
                <br />
                <MDBIcon fab icon="python" />
                <strong>Testing: &nbsp;&nbsp;</strong> Unit tests, JMeter
              </p>
              {/* IDE tools */}
              <p style={{ textIndent: "-0.6em" }}>
                <strong style={{ fontSize: "1.1em" }}>
                  {" "}
                  IDE: &nbsp;&nbsp;
                </strong>
                <br />
                <MDBIcon fab icon="python" />
                <strong>Python: &nbsp;&nbsp; </strong>
                <span>
                  Django, Django Rest Framework, Machine Learning, NLP, Rasa
                  Open Source, FastAPI, Flask, Sanic Framework, Search Engine
                  Whoosh.
                </span>
                <br />
                <MDBIcon fab icon="python" />
                <strong>Javascript/Typescript: &nbsp;&nbsp; </strong>
                <span>NodeJs</span>
                <br />
                <MDBIcon fab icon="python" />
                <strong>Testing: &nbsp;&nbsp;</strong> Unit tests, JMeter
              </p>
              {/* Operating Systems tools */}
              <p style={{ textIndent: "-0.6em" }}>
                <strong style={{ fontSize: "1.1em" }}>
                  Operating Systems:
                </strong>
                <br />
                <MDBIcon fab icon="python" />
                <strong>Python: &nbsp;&nbsp; </strong>
                <span>
                  Django, Django Rest Framework, Machine Learning, NLP, Rasa
                  Open Source, FastAPI, Flask, Sanic Framework, Search Engine
                  Whoosh.
                </span>
                <br />
                <MDBIcon fab icon="python" />
                <strong>Javascript/Typescript: &nbsp;&nbsp; </strong>
                <span>NodeJs</span>
                <br />
                <MDBIcon fab icon="python" />
                <strong>Testing: &nbsp;&nbsp;</strong> Unit tests, JMeter
              </p>
              {/* Other Skills tools */}
              <p style={{ textIndent: "-0.6em" }}>
                <strong style={{ fontSize: "1.1em" }}>
                  {" "}
                  Other Skills: &nbsp;&nbsp;
                </strong>
                <br />
                <MDBIcon fab icon="python" />
                <strong>Python: &nbsp;&nbsp; </strong>
                <span>
                  Django, Django Rest Framework, Machine Learning, NLP, Rasa
                  Open Source, FastAPI, Flask, Sanic Framework, Search Engine
                  Whoosh.
                </span>
                <br />
                <MDBIcon fab icon="python" />
                <strong>Javascript/Typescript: &nbsp;&nbsp; </strong>
                <span>NodeJs</span>
                <br />
                <MDBIcon fab icon="python" />
                <strong>Testing: &nbsp;&nbsp;</strong> Unit tests, JMeter
              </p>
              {/* Methodologies tools */}
              <p style={{ textIndent: "-0.6em" }}>
                <strong style={{ fontSize: "1.1em" }}>
                  {" "}
                  Methodologies: &nbsp;&nbsp;
                </strong>
                <br />
                <MDBIcon fab icon="python" />
                <strong>Python: &nbsp;&nbsp; </strong>
                <span>
                  Django, Django Rest Framework, Machine Learning, NLP, Rasa
                  Open Source, FastAPI, Flask, Sanic Framework, Search Engine
                  Whoosh.
                </span>
                <br />
                <MDBIcon fab icon="python" />
                <strong>Javascript/Typescript: &nbsp;&nbsp; </strong>
                <span>NodeJs</span>
                <br />
                <MDBIcon fab icon="python" />
                <strong>Testing: &nbsp;&nbsp;</strong> Unit tests, JMeter
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
