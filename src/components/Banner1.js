import React from "react";
import PropTypes from "prop-types";
import ImagePlaceholder from "./ImagePlaceholder";
import styled from "styled-components";
import HELPING_HAND_FULL from "../img/PdpHelpingHand/PdPHelpingHand_xl.png";
import HELPING_HAND_XL from "../img/PdpHelpingHand/PdPHelpingHand_xl.png";
import HELPING_HAND_LG from "../img/PdpHelpingHand/PdPHelpingHand_lg.png";
import HELPING_HAND_MD from "../img/PdpHelpingHand/PdPHelpingHand_md.png";
import HELPING_HAND_SM from "../img/PdpHelpingHand/PdPHelpingHand_sm_cropped.png";
import HANDSHAKE_IMG_WHITE from "../img/SVG/PdPHandshakeWhite.svg";
import { PRIMARY_COLOR } from "../styles/itcss/1-settings/settings";

const Banner1Styled = styled.div`
  color: ${"white"};

  * + * section {
    margin-left: 0.25rem;
    margin-right: 0.25rem;
    margin-top: 0.5rem;
    margin-bottom: 0rem;
  }
  background-color: #00449e;
`;

const ResponsiveImageContainer = styled.div`
  margin: 0;
  width: 100vw;
  height: calc(100vw * 0.45);
  overflow: hidden;
  position: relative;

  &:before {
    position: absolute;
    content: "";
    margin: 0;
    padding: 0;
    width: 100vw;
    height: 100%;
    background-repeat: no-repeat;
    background-size: cover;
    margin: 0;
    background-image: url(${HELPING_HAND_FULL});
    object-fit: cover;
    transform-translate(-25%, 0);
    @media only screen and (max-width: 1280px) {
      background-image: url(${HELPING_HAND_XL});
    }
    @media only screen and (max-width: 1024px) {
      background-image: url(${HELPING_HAND_LG});
    }
    @media only screen and (max-width: 768px) {
      background-image: url(${HELPING_HAND_MD});
      min-height: 100%;
      min-width: 100%;
    }
    @media only screen and (max-width: 640px) {

      background-image: url(${HELPING_HAND_SM});
      min-height: 100%;
      min-width: 100%;
    }
  }
  @media only screen and (max-width: 1280px) {
  }
  @media only screen and (max-width: 1024px) {
  }
  @media only screen and (max-width: 768px) {
  }
  @media only screen and (max-width: 640px) {
    height: 100vw;
  }
`;

const ResponsiveImageContainer2 = styled.div`
  position: relative;
  margin: 0;
  padding: 0;
  width: 100%;
  height: 75rem;
  box-sizing: border-box;

  & > img {
    display: block;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    min-height: 100%;
    width: 100%;
    background-size: cover;
    background-position: center;
    object-fit: contain;
    margin: 0;
    background: url(${HELPING_HAND_FULL}) no-repeat;

    @media only screen and (max-width: 1280px) {
      background: url(${HELPING_HAND_XL}) no-repeat;
    }
    @media only screen and (max-width: 1024px) {
      background: url(${HELPING_HAND_LG});
    }
    @media only screen and (max-width: 768px) {
      background: url(${HELPING_HAND_MD});
    }
    @media only screen and (max-width: 640px) {
      background: url(${HELPING_HAND_SM});
    }
  }
  @media only screen and (max-width: 1280px) {
    height: 75vh;
  }
  @media only screen and (max-width: 1024px) {
    height: calc(100vw * 0.6);
  }
  @media only screen and (max-width: 768px) {
    height: calc(100vw * 0.6);
  }
  @media only screen and (max-width: 640px) {
    height: calc(100vw * 0.7);
  }
`;

//height: calc(100vw * 0.55);

const Banner1 = ({ style }) => {
  return (
    <Banner1Styled>
      <div style={{ ...style }}>
        <div className="flex justify-center w-100">
          {/* <div className="w-100 relative h-100" style={{ overflow: "hidden" }}> */}
          {/* <ImagePlaceholder imageWidth="100%" imageHeight="100%"
            margin={0} /> */}
          <ResponsiveImageContainer>
            <div className="absolute w-100 bottom-1 sans-serif">
              <div className="w-100 mw7 center">
                <section>
                  <div className="flex w-100">
                    <h1 className="f3 f2-ns f1-l sans-serif pa0 ma0 pl4 pr4">
                      Have to sell your house in Prince George's County, MD?
                    </h1>
                  </div>
                </section>

                <section>
                  <div className="flex w-100">
                    <h2 className="f5 f3-l sans-serif pa0 ma0 ttu pl4 pr4">
                      Everyone needs a helping hand from time to time <br /> We
                      are here to help.
                      <span style={{ fontWeight: 850 }}>
                        {" "}
                        No fees. No commission.
                      </span>
                    </h2>
                  </div>
                </section>
                <section>
                  <div className="flex w-100">
                    <h2 className="f5 f3-ns f3-m f2-l sans-serif mw7 ttu flex items-center pl4 pr4">
                      <span>Simple. Trusted. Proper.</span>
                      <span>
                        <img src={HANDSHAKE_IMG_WHITE} className="w2" />
                      </span>
                    </h2>
                  </div>
                </section>
              </div>
            </div>
          </ResponsiveImageContainer>
        </div>
      </div>
    </Banner1Styled>
  );
};

Banner1.propTypes = {
  style: PropTypes.object,
};

export default Banner1;
