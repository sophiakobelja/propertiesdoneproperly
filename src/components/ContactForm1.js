import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { PRIMARY_COLOR } from "../styles/itcss/1-settings/settings";

const ContactForm1Styled = styled.div`
  padding-top: 3rem;
  padding-bottom: 3rem;
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
        <div className="mw6 mw7-ns center">
          <div className="w-100 relative">
            <section className="flex flex-column justify-center w-100">
              <h3 className="f6 f3-ns f3-m f2-l sans-serif tc ttu mt2">
                We buy houses in Prince George's County, MD and the surrounding
                areas.
              </h3>
              <section className="flex flex-column items-center items-start w-100">
                <h3 className="f4 f2-ns f2-m f1-l sans-serif pa0 ma0">
                  Contact us now
                </h3>
                <h3 className="f5 f4-ns f3-m f2-l sans-serif pa0">
                  (XXX) XXX-XXXX
                </h3>
              </section>
              <section className="flex flex-column items-center justify-center w-100">
                <p className="f6 f3-ns f4-m f3-l ma2">
                  We are <b>real</b> people looking to provide <b>real </b>
                  solutions.
                  <br />
                  There is no obligation, we are here to serve you.
                </p>
              </section>
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
