import React from "react";
import PropTypes from "prop-types";
import ImagePlaceholder from "./ImagePlaceholder";
import MainNav from "./MainNav";
import PDP_LOGO from "../img/SVG/PdpLogo.svg";

const Header = ({ style }) => {
  return (
    <div style={{ ...style }}>
      <div className="flex justify-center w-100">
        <div className="w5  ma3">
          {/* <ImagePlaceholder imageWidth="100%" imageHeight="100%" /> */}
          <img src={PDP_LOGO} />
        </div>
      </div>
      {/* <div className="flex justify-center w-100">
        <MainNav />
      </div> */}
    </div>
  );
};

Header.propTypes = {
  style: PropTypes.object,
};

export default Header;
