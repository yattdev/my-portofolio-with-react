import React from "react";

const InfoContactSection = () => {
  return (
    <main>
      <aside className="info aside section">
        <div className="section-inner shadow-sm rounded">
          <h2 className="heading sr-only">Basic Information</h2>
          <div className="content">
            <ul className="list-unstyled">
              <li>
                <i className="fas fa-map-marker-alt"></i>
                <span className="sr-only">Location:</span>San Francisco, US
              </li>
              <li>
                <i className="fas fa-envelope"></i>
                <span className="sr-only">Email:</span>
                <a href="https://github.com/yattdev">jameslee@website.com</a>
              </li>
              <li>
                <i className="fas fa-link"></i>
                <span className="sr-only">Website:</span>
                <a href="https://github.com/yattdev">https://www.website.com</a>
              </li>
            </ul>
          </div>
        </div>
      </aside>
    </main>
  );
};

export default InfoContactSection;
