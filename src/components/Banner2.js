import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import HAPPY_COUPLE_XL from "../img/HappyHomeSeller/HappyHomeSeller-xl.jpg";
const Banner2Styled = styled.div`
  padding-top: 3rem;
  padding-bottom: 3rem;
  section {
    margin-top: 0.5rem;
    margin-bottom: 0rem;
  }
  p {
    margin-bottom: 0;
  }
`;

const Banner2 = ({ style }) => {
  return (
    <>
      <Banner2Styled>
        <div style={{ ...style }} className="mw6 mw7-l center">
          <section>
            <p className="f5 f3-ns f3-m f2-l">
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
            </p>
          </section>
          <section>
            <p className="f4 f2-ns f2-m f1-l sans-serif tc pa0 ma0">
              Give us a call: (XXX) XXX-XXXX
            </p>
          </section>
        </div>
      </Banner2Styled>
      <div className="mb5">
        <img src={HAPPY_COUPLE_XL} className="w-100" />
      </div>
    </>
  );
};

Banner2.propTypes = {
  style: PropTypes.object,
};

export default Banner2;
