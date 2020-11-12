import React from "react";
import PropTypes from "prop-types";
import Banner1 from "./Banner1";
import ContactForm1 from "./ContactForm1";
import Banner2 from "./Banner2";
import Testimonial from "./Testimonial";
import ProperThreeSteps from "./ProperThreeSteps";
import ProperPromise from "./ProperPromise";
import LocationsServed from "./LocationsServed";
const Body = ({ style }) => {
  return (
    <div style={{ ...style }}>
      <Banner1 />
      <ContactForm1 />
      <Banner2 />
      <Testimonial />
      <ProperThreeSteps />
      <ProperPromise />
      <LocationsServed />
    </div>
  );
};

Body.propTypes = {
  style: PropTypes.object,
};

export default Body;
