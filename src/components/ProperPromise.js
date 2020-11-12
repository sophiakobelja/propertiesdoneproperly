import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { PRIMARY_COLOR } from "../styles/itcss/1-settings/settings";

const ProperPromiseStyled = styled.div`
  padding-top: 3rem;
  padding-bottom: 3rem;
  color: ${PRIMARY_COLOR};
  p {
    margin-bottom: 0;
  }
`;
const ProperPromise = ({ style }) => {
  return (
    <ProperPromiseStyled>
      <div style={{ ...style }} className="mw6 mw7-ns center">
        <section>
          <p className="f5 f3-ns f3-m f2-l b">A Proper Promise</p>
          <hr />
        </section>
        <section>
          <p className="f6 f5-ns f5-m f3-l">
            We promise to do everything in our power to provide quick, fair, and
            proper services--tailored to YOUR needs. At Properties Done
            Property, we believe that selling your home should be simple and
            stress-free. Let us take care of everything, from closing costs to
            moving to moving trucks! You can get cash in your pocket and be
            worry-free in as little as <span className="b">24 hours</span>.
          </p>
        </section>
      </div>
    </ProperPromiseStyled>
  );
};

ProperPromise.propTypes = {
  style: PropTypes.object,
};

export default ProperPromise;
