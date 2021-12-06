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
                <a href="https://www.youtube.com/watch?v=Ny8YAnmpW7U">
                  Travis x Drake - Riot Ft ASAP
                </a>
              </li>
              <li>
                <i className="fas fa-headphones"></i>
                <a href="https://www.youtube.com/watch?v=ss7EJ-PW2Uk">
                  Instrumental Music
                </a>
              </li>
              <li>
                <i className="fas fa-headphones"></i>
                <a href="https://www.youtube.com/watch?v=rjctVZVM14s">
                  Travis x Drake - Goku Ft 21 Savage
                </a>
              </li>
              <li>
                <i className="fas fa-headphones"></i>
                <a href="https://www.youtube.com/watch?v=eCs8LT290a4">
                  Deep Programming - Modern VIBE
                </a>
              </li>
              <li>
                <i className="fas fa-headphones"></i>
                <a href="https://www.youtube.com/watch?v=M5QY2_8704o">
                  Chillstep Music pour la programmation
                </a>
              </li>
            </ul>
          </div>
        </div>
      </aside>
    </>
  );
};

export default ListMusicSection;
