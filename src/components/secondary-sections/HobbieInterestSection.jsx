import React from "react";
import { MDBIcon } from "mdb-react-ui-kit";

const HobbieInterestSection = () => {
  return (
    <>
      <aside className="credits aside section">
        <div className="section-inner shadow-sm rounded">
          <h2 className="heading"> Hobbies & Interests </h2>
          <div className="content">
            <ul className="list-unstyled">
              <li>
                <MDBIcon fas icon="hands-helping" />
                <span>Volunteering</span>
              </li>
              <li>
                <MDBIcon fas icon="book-reader" />
                <span>Reading</span>
              </li>
              <li>
                <MDBIcon fas icon="futbol" />
                <span>Football (Soccer)</span>
              </li>
              <li>
                <MDBIcon fas icon="radiation-alt" />
                <span>Adventure (Road Trips)</span>
              </li>
              <li>
                <MDBIcon fas icon="gamepad" />
                <span>PlayStation Game (FIFA, Adventure, Action)</span>
              </li>
            </ul>
          </div>
        </div>
      </aside>
    </>
  );
};

export default HobbieInterestSection;
