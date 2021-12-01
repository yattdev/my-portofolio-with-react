import React from "react";
import ReactGithubCalendar from "react-github-calendar";

const GithubSection = () => {
  return (
    <>
      <section className="github section">
        <div className="section-inner shadow-sm rounded">
          <h2 className="heading">My GitHub GitHub Calendar</h2>
          <ReactGithubCalendar name="yattdev" />
          <div id="github-graph" className="github-graph"></div>
          GitHub Activity Stream
          <div id="ghfeed" className="ghfeed"></div>
        </div>
      </section>
    </>
  );
};

export default GithubSection;
