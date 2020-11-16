import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import LOGO_ALTERNATE from "../img/PdPAlternateLogo/PdPAlternateLogo.svg";
import { PRIMARY_COLOR } from "../styles/itcss/1-settings/settings";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import LinkedInIcon from "@material-ui/icons/LinkedIn";

const FooterStyled = styled.div`
  padding-top: 6rem;
  padding-bottom: 6rem;
  padding-left: 2rem;
  padding-right: 2rem;
  color: ${PRIMARY_COLOR};
  section {
    margin-left: 0;
    margin-right: 0;
    margin-top: 0.5rem;
    margin-bottom: 0rem;
  }
`;

const Footer = ({ style }) => {
  return (
    <FooterStyled>
      <div style={{ ...style }}>
        <div className="mw7 mw8-ns center">
          <div className="w-100 flex flex-nowrap-ns flex-wrap">
            <div className="w-100 w-75-ns flex flex-nowrap-ns flex-wrap justify-center justify-start-ns items-center flex-row">
              <img className="h3 h4-ns w-20 ma2" src={LOGO_ALTERNATE} />
              <div className="ma2 f3 f2-ns tc tl-ns flex-auto">
                Properties Done Properly, LLC
              </div>
            </div>
            <div className="flex flex-column flex-nowrap-ns f4 f3-ns flex-wrap justify-center items-center items-end-ns flex-auto">
              <div>
                <FacebookIcon />
                <InstagramIcon />
                <LinkedInIcon />
              </div>
              <div>Contact Us Now!</div>
              <div className="f6 f5-ns">
                {" "}
                <a
                  href="mailto:info@propertiesdoneproper.com"
                  style={{ color: PRIMARY_COLOR }}
                >
                  info@propertiesdoneproper.com
                </a>
              </div>
              <div className="f6 f5-ns">
                <a href="tel:(301) 265-2622" style={{ color: PRIMARY_COLOR }}>
                  (301) 265-2622
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </FooterStyled>
  );
};

Footer.propTypes = {
  style: PropTypes.object,
};

export default Footer;
