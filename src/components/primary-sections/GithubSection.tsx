// import React from "react";
import ReactGitHubCalendar from "react-ts-github-calendar";

const GithubSection: React.FC = () => {
  return (
    <>
      <section className="github section">
        <div className="section-inner shadow-sm rounded">
          <h2 className="heading">My GitHub GitHub Calendar</h2>
          <ReactGitHubCalendar userName="yattdev" />
        </div>
      </section>
    </>
  );
};

export default GithubSection;
