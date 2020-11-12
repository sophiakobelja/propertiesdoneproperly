import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import QUOTES_IMAGE from "../img/SVG/Quotes.svg";

const TestimonalStyled = styled.div`
  padding-bottom: 3rem;
`;

const Testimonial = ({ style }) => {
  return (
    <TestimonalStyled>
      <div className="flex items-center">
        <div className="mr2" style={{ borderTop: "1px solid", flex: 1 }} />
        <img className="w1 w2-ns h1 h2-ns" src={QUOTES_IMAGE} />
        <div className="ml2" style={{ borderTop: "1px solid", flex: 1 }} />
      </div>
      <div style={{ ...style }}>
        <div style={{ ...style }} className="mw6 mw7-l center mt4">
          <section>
            <p className="f5 f3-ns f3-m f2-l">
              "I was so relieved to have found a company that actually cares
              about me...
            </p>
          </section>
          <section>
            <p className="f6 f5-ns f5-m f3-l">
              "I was completely floored by how much time and care Darius gave
              throughout the whole process. He really went above and beyond in
              answering all of my questions and walking me through my options. I
              was so relieved to have found a company that actually cares about
              me and gave such a fair price for my home. Thank you, Darius!"
            </p>
            <p className="flex flex-auto justify-end f6 f5-ns f5-m f3-l">
              -Patricia (Upper Marlboro, MD)
            </p>
          </section>
        </div>
      </div>
    </TestimonalStyled>
  );
};

Testimonial.propTypes = {
  style: PropTypes.object,
};

export default Testimonial;
