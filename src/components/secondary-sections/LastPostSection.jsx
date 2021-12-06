import React from "react";

const LastPostSection = () => {
  return (
    <>
      <aside className="blog aside section">
        <div className="section-inner shadow-sm rounded">
          <h2 className="heading">Latest Blog Posts</h2>
          <p>
            How to install &nbsp;
            <a
              href="https://yattdeveloper.medium.com/how-to-install-vim-with-clipboard-on-ubuntu18-to-20-x-5cc4970eb3dc"
              target="blank"
            >
              Vim with +clipboard &nbsp;
            </a>
            on Ubuntu 20.x
          </p>
          <div id="rss-feeds" className="content"></div>
        </div>
      </aside>
    </>
  );
};

export default LastPostSection;
