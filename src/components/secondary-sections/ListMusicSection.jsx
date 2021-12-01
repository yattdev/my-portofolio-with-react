import React from "react";

const ListMusicSection = () => {
  return (
    <>
      <aside className="list music aside section">
        <div className="section-inner shadow-sm rounded">
          <h2 className="heading">Favourite coding music</h2>
          <div className="content">
            <ul className="list-unstyled">
              <li>
                <i className="fas fa-headphones"></i>
                <a href="https://backenk.yatt.tech">
                  Etiam hendrerit urna nunc
                </a>
              </li>
              <li>
                <i className="fas fa-headphones"></i>
                <a href="https://backenk.yatt.tech">
                  Ut sollicitudin in mauris non auctor
                </a>
              </li>
              <li>
                <i className="fas fa-headphones"></i>
                <a href="https://backenk.yatt.tech">
                  Etiam hendrerit urna nunc
                </a>
              </li>
              <li>
                <i className="fas fa-headphones"></i>
                <a href="https://backenk.yatt.tech">Duis et felis bibendum</a>
              </li>
            </ul>
          </div>
        </div>
      </aside>
    </>
  );
};

export default ListMusicSection;
