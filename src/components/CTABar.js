import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { GUTTER, BG, TEXT } from "../styles/itcss/1-settings/settings";
import { PRIMARY_COLOR } from "../styles/itcss/1-settings/settings";

const CTABarStyled = styled.div`
  padding-top: ${GUTTER};
  padding-bottom: ${GUTTER};
  display: flex;
  justify-content: center;
  background-color: ${BG};
  color: ${TEXT};
`;

const CTABar = ({ style }) => {
  return (
    <div style={{ ...style, position: "fixed", width: "100%", zIndex: 1000 }}>
      <CTABarStyled>
        CALL US! &nbsp;
        <a href="tel:(301) 265-2622" className="pdp-link--clean">
          (301) 265-2622
        </a>
      </CTABarStyled>
    </div>
  );
};

CTABar.propTypes = {
  style: PropTypes.object,
};

export default CTABar;
