import React from "react";

const ListConferenceSection = () => {
  return (
    <>
      <aside className="list conferences aside section">
        <div className="section-inner shadow-sm rounded">
          <h2 className="heading">Conferences</h2>
          <div className="content">
            <ul className="list-unstyled">
              <li>
                <i className="far fa-calendar-alt"></i>
                <a href="https://backenk.yatt.tech" target="blank">
                  WWDC 2030
                </a>
                (San Francisco)
              </li>
              <li>
                <i className="far fa-calendar-alt"></i>
                <a href="https://backenk.yatt.tech">Hive</a> (Seattle)
              </li>
            </ul>
          </div>
        </div>
      </aside>
    </>
  );
};

export default ListConferenceSection;
