import React from "react";

const LastPostSection = () => {
  return (
    <>
      <aside className="blog aside section">
        <div className="section-inner shadow-sm rounded">
          <h2 className="heading">Latest Blog Posts</h2>
          <p>
            You can use Sascha Depold's
            <a href="https://github.com/sdepold/jquery-rss" target="blank">
              Vanilla RSS plugin
            </a>
            to pull in your blog post feeds.
          </p>
          <div id="rss-feeds" className="content"></div>
        </div>
      </aside>
    </>
  );
};

export default LastPostSection;
