import React from "react";
import PropTypes from "prop-types";
import ImagePlaceholder from "./ImagePlaceholder";
import styled from "styled-components";
import HELPING_HAND_FULL from "../img/PdpHelpingHand/PdPHelpingHand_full.png";
import HANDSHAKE_IMG from "../img/SVG/ProperHandshake.svg";
import { PRIMARY_COLOR } from "../styles/itcss/1-settings/settings";

const Banner1Styled = styled.div`
  color: ${"white"};
  * + * section {
    margin-left: 0.25rem;
    margin-right: 0.25rem;
    margin-top: 0.5rem;
    margin-bottom: 0rem;
  }
`;

const Banner1 = ({ style }) => {
  return (
    <Banner1Styled>
      <div style={{ ...style }}>
        <div className="flex justify-center w-100">
          <div className="w-100 relative h-100" style={{ overflow: "hidden" }}>
            {/* <ImagePlaceholder imageWidth="100%" imageHeight="100%"
            margin={0} /> */}
            <img
              src={HELPING_HAND_FULL}
              className="m0 mb4"
              style={{
                minHeight: "50vh",
                minWidth: "100%",
              }}
            />
            <div className="absolute w-100 h-100 bottom-0 sans-serif">
              <div className="flex flex-column flex-auto justify-end h-100">
                <section>
                  <div className="flex justify-center w-100">
                    <h1 className="f3 f2-ns f2-m f1-l sans-serif mw7 tc pa0 ma0">
                      Have to sell your house in <br /> Prince George's County,
                      MD?
                    </h1>
                  </div>
                </section>
                <section>
                  <div className="flex justify-center w-100">
                    <h2 className="f7 f4-ns f4-m f3-l sans-serif mw6 mw6-ns mw6-m mw7-l tc pa0 ma0 ttu">
                      Everyone needs a helping hand from time to time <br /> We
                      are here to help.
                      <span style={{ fontWeight: 850 }}>
                        {" "}
                        No fees. No commission.
                      </span>
                    </h2>
                  </div>
                </section>
                {/* <hr style={{ lineHeight: ".5rem" }} className="pdp-separator" /> */}
                <section>
                  <div className="flex justify-center w-100">
                    <h2 className="f5 f3-ns f3-m f2-l sans-serif mw7 tc ttu">
                      <span>Simple. Trusted. Proper.</span>
                      <span>
                        <img src={HANDSHAKE_IMG} className="w3" />
                      </span>
                    </h2>
                  </div>
                </section>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Banner1Styled>
  );
};

Banner1.propTypes = {
  style: PropTypes.object,
};

export default Banner1;
