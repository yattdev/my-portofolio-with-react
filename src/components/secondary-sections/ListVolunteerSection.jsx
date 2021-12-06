import React from "react";
import { MDBIcon } from "mdb-react-ui-kit";

const ListVolunteerSection = () => {
  return (
    <>
      <aside className="list conferences aside section">
        <div className="section-inner shadow-sm rounded">
          <h2 className="heading">Volunteer</h2>
          <div className="content">
            <ul className="list-unstyled">
              <li>
                <MDBIcon fas icon="broom" />
                <span>For the cleanliness of mosques</span>
              </li>
              <li>
                <MDBIcon fas icon="laptop-code" />
                <span>Tutoring and assistance student in IT</span>
              </li>
              <li>
                <MDBIcon fas icon="radiation-alt" />
                <span>Cleaning of the Casablanca beach.</span>
              </li>
            </ul>
          </div>
        </div>
      </aside>
    </>
  );
};

export default ListVolunteerSection;
