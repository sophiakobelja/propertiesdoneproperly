import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { PRIMARY_COLOR } from "../styles/itcss/1-settings/settings";
import HANDSHAKE_IMG_WHITE from "../img/SVG/PdPHandshakeWhite.svg";

const ContactForm1Styled = styled.div`
  padding-top: 6rem;
  padding-bottom: 6rem;
  padding-left: 2rem;
  padding-right: 2rem;
  background-color: ${PRIMARY_COLOR};
  color: white;
  section {
    margin-left: 0;
    margin-right: 0;
    margin-top: 0.5rem;
    margin-bottom: 0rem;
  }
`;

const ContactForm1 = ({ style }) => {
  return (
    <ContactForm1Styled>
      <div style={{ ...style }}>
        <div className="mw6 mw7-ns center vh-75 flex items-center">
          <div className="w-100 relative">
            <section className="flex flex-column justify-center w-100">
              <h3 className="f3 f2-ns f2-m f1-l sans-serif fw4 mb2">
                We buy houses in Prince George's County, MD and the surrounding
                areas.
              </h3>

              <section className="flex flex-column items-start w-100">
                <h3 className="f4 f2-ns f2-m f1-l sans-serif pa0 ma0 fw4">
                  Contact us now! <br /> (301) 265-2622
                </h3>
                <h3 className="f5 f4-ns f3-m f2-l sans-serif pa0"></h3>
              </section>
              <div className="pdp-grid-container flex items-center">
                <div className="col-10">
                  <section className="w-100 ">
                    <p className="f4 f3-ns">
                      We are <b>real</b> people looking to provide <b>real </b>
                      solutions.
                    </p>
                  </section>
                  <section className="w-100">
                    <p className="f4 f3-ns">
                      There is no obligation, we are here to serve you.
                    </p>
                  </section>
                </div>
                <div className="col-2 flex flex-auto h-100 items-center">
                  <img src={HANDSHAKE_IMG_WHITE} className="w4 mb4" />
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </ContactForm1Styled>
  );
};

ContactForm1.propTypes = {
  style: PropTypes.object,
};

export default ContactForm1;
