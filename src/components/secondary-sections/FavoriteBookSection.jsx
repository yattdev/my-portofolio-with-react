import React from "react";
import { MDBIcon } from "mdb-react-ui-kit";

const FavoriteBookSection = () => {
  return (
    <>
      <aside className="blog aside section">
        <div className="section-inner shadow-sm rounded">
          <h2 className="heading">Last Books Read</h2>
          <p style={{ textIndent: "-0.4em" }}>
            <strong style={{ fontSize: "1.1em" }}>
              Engineering: &nbsp;&nbsp;
            </strong>
            <br />
            <span>
              <MDBIcon fas icon="book" /> &nbsp; Django for APIs/Professional
              &nbsp;
              <a
                href="https://leanpub.com/b/djangoforbeginnersapisprofessionals#:~:text=Django%20for%20APIs%20is%20a,Django%20fundamentals%20and%20best%20practices."
                target="blank"
              >
                read <i className="fas fa-external-link-alt" />
              </a>
            </span>
            <br />
            <span>
              <MDBIcon fas icon="book" /> &nbsp; Python Tricks &nbsp;
              <a
                href="https://www.amazon.fr/Python-Tricks-Buffet-Awesome-Features/dp/1775093301"
                target="blank"
              >
                read <i className="fas fa-external-link-alt" />
              </a>
            </span>
            <br />
            <span>
              <MDBIcon fas icon="book" /> &nbsp; Artificial Intelligence 101
              &nbsp;
              <a
                href="https://www.amazon.fr/Artificial-Intelligence-Things-Today-Future/dp/1982048808"
                target="blank"
              >
                read <i className="fas fa-external-link-alt" />
              </a>
            </span>
          </p>
          <p style={{ textIndent: "-0.4em" }}>
            <strong style={{ fontSize: "1.1em" }}>
              Personal/Professional Improvement: &nbsp;&nbsp;
            </strong>
            <br />
            <span>
              <MDBIcon fas icon="book" /> &nbsp; Screw it, Let's Do it &nbsp;
              <a
                href="https://www.amazon.fr/Screw-Lets-Do-Lessons-Life/dp/0753510995"
                target="blank"
              >
                read <i className="fas fa-external-link-alt" />
              </a>
            </span>
            <br />
            <span>
              <MDBIcon fas icon="book" /> &nbsp; Invent and Wander &nbsp;
              <a
                href="https://www.amazon.fr/Invent-Wander-Collected-Writings-Introduction-ebook/dp/B08BCCT6MW"
                target="blank"
              >
                read <i className="fas fa-external-link-alt" />
              </a>
            </span>
            <br />
            <span>
              <MDBIcon fas icon="book" /> &nbsp; Unscripted &nbsp;
              <a
                href="https://www.amazon.fr/UNSCRIPTED-Liberty-Pursuit-Entrepreneurship-English-ebook/dp/B06XBRLXJC"
                target="blank"
              >
                read <i className="fas fa-external-link-alt" />
              </a>
            </span>
          </p>
        </div>
      </aside>
    </>
  );
};

export default FavoriteBookSection;
