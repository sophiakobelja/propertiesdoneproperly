import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import HAPPY_COUPLE_XL from "../img/HappyHomeSeller/HappyHomeSeller-xl.jpg";
import { ParallaxProvider, Parallax } from "react-scroll-parallax";

const Banner2Styled = styled.div`
  padding-top: 6rem;
  padding-bottom: 6rem;
  padding-left: 2rem;
  padding-right: 2rem;
  section {
    margin-top: 0.5rem;
    margin-bottom: 0rem;
  }
  p {
  }
`;

const Banner2 = ({ style }) => {
  return (
    <>
      <Banner2Styled>
        <div
          style={{ ...style }}
          className="mw6 mw7-l center flex flex-column justify-center"
        >
          <section>
            <p className="f4 f2-ns f2-m f1-l sans-serif pa0">
              "I have to sell my house in Prince George's County, MD"
            </p>
          </section>
          <section>
            <p className="f6 f3-ns f4-m f3-l w-100">
              If you need to:
              <ul className="pdp-list--vertical">
                <li>- Sell your property FAST</li>
                <li>- Sell your house as-is</li>
                <li>- Get cash QUICK</li>
                <li>- Learn about your home-selling options</li>
                <li>- Get connected with the right people</li>
              </ul>
              ...we can help.
              <br />
              <br />
              If we buy your house, you will not pay a cent. You will have{" "}
              <b> cash in your pocket</b> and be <b>stress-free</b> in as little
              as <b>24 hours</b>.
            </p>
          </section>

          <section className="">
            <p className="f4 f2-ns f2-m f1-l sans-serif pa0 mb0">
              Give us a call! <br /> (301) 265-2622
            </p>
          </section>
        </div>
      </Banner2Styled>
      <div className="mb2 mb5-l h5 vh-50-l overflow-hidden ">
        <Parallax className="custom-class" y={[20, -30]} tagOuter="figure">
          <img
            src={HAPPY_COUPLE_XL}
            className="w-100 relative"
            style={{ objectFit: "cover" }}
          />
        </Parallax>
      </div>
    </>
  );
};

Banner2.propTypes = {
  style: PropTypes.object,
};

export default Banner2;
