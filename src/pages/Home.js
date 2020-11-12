import React from "react";
import PropTypes from "prop-types";
import CTABar from "../components/CTABar";
import Header from "../components/Header";
import Body from "../components/Body";

const Home = ({ style }) => {
  return (
    <div style={{ ...style }}>
      <CTABar />
      <Header style={{ paddingTop: "4rem" }} />
      <Body />
    </div>
  );
};

Home.propTypes = {
  style: PropTypes.object,
};

export default Home;
