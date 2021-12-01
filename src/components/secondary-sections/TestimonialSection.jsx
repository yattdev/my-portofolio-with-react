import React from "react";

const TestimonialSection = () => {
  return (
    <>
      <aside className="testimonials aside section">
        <div className="section-inner shadow-sm rounded">
          <h2 className="heading">Testimonials</h2>
          <div className="content">
            <div className="item">
              <blockquote className="quote">
                <p>
                  <i className="fas fa-quote-left"></i>James is an excellent
                  software engineer and he is passionate about what he does. You
                  can totally count on him to deliver your projects!
                </p>
              </blockquote>
              <p className="source">
                <span className="name">Tim Adams</span>
                <br />
                <span className="title">Curabitur commodo</span>
              </p>
            </div>

            <p>
              <a className="more-link" href="https://backenk.yatt.tech">
                <i className="fas fa-external-link-alt"></i>More on Linkedin
              </a>
            </p>
          </div>
        </div>
      </aside>
    </>
  );
};

export default TestimonialSection;
