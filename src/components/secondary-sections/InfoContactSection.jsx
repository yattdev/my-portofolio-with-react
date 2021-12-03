import React from "react";

const InfoContactSection = () => {
  return (
    <main>
      <aside className="info aside section">
        <div className="section-inner shadow-sm rounded">
          <h2 className="heading sr-only">Information:</h2>
          <div className="content">
            <ul className="list-unstyled">
              <li>
                <i className="fas fa-map-marker-alt"></i>
                <span className="sr-only">Location:</span>Casablanca, Morroco
              </li>
              <li>
                <i className="fas fa-envelope"></i>
                <span className="sr-only">Email:</span>
                <a href="https://github.com/yattdev">alassane@yatt.tech</a>
              </li>
              <li>
                <i className="fas fa-link"></i>
                <span className="sr-only">Website:</span>
                <a href="https://github.com/yattdev">
                  https://alassane.yatt.tech
                </a>
              </li>
            </ul>
          </div>
        </div>
      </aside>
    </main>
  );
};

export default InfoContactSection;
