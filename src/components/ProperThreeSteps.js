import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import {
  PRIMARY_COLOR,
  SECONDARY_COLOR,
} from "../styles/itcss/1-settings/settings";
import Card from "@material-ui/core/Card";
import LIGHTBULG_IMG from "../img/SVG/Lightbulb.svg";
import SHIELD_IMG from "../img/SVG/Shield.svg";
import HANDSHAKE_IMG from "../img/SVG/ProperHandshake.svg";

const ProperThreeStepsStyled = styled.div`
  background-color: ${SECONDARY_COLOR};
  padding-top: 6rem;
  padding-bottom: 6rem;
  padding-left: 2rem;
  padding-right: 2rem;
  color: ${PRIMARY_COLOR};
  .cards {
    > * {
      color: ${PRIMARY_COLOR};
    }
    h3 {
      margin-bottom: 1rem;
    }
    ul {
      list-style-type: none;
    }
    ul > li {
      float: left;
      display: block;
      margin-right: 0;
    }
  }
`;

const ProperThreeSteps = ({ style }) => {
  return (
    <ProperThreeStepsStyled>
      <div style={{ ...style }} className="mw6 mw7-ns center">
        <section>
          <p className="f4 f3-ns f3-m f2-l ttu b tc">
            How we put the "proper" in property
          </p>
        </section>
        <section>
          <div className="flex flex-wrap flex-nowrap-l justify-center cards">
            <Card className="w-70 w-50-m w-33-ns ma2 pa3">
              <img className="w3 h3" src={LIGHTBULG_IMG} />
              <h3 className="f6 f3-ns f3-m f2-l sans-serif tc mt2">Simple</h3>
              <ul className="pdp-list pdp-list--vertical f5 f3-ns">
                <li>- Fast</li>
                <li>- Easy</li>
                <li>- Hassle-free</li>
                <li>- No fees</li>
                <li>- No stress</li>
              </ul>
            </Card>
            <Card className="w-70 w-50-m w-33-ns ma2 pa3">
              <img className="w3 h3" src={SHIELD_IMG} />
              <h3 className="f6 f3-ns f3-m f2-l sans-serif tc mt2">Trusted</h3>
              <ul className="pdp-list--vertical f5 f3-ns">
                <li>- Transparent</li>
                <li>- Fair</li>
                <li>- Secure</li>
                <li>- Reliable</li>
                <li>- COVID-compliant</li>
              </ul>
            </Card>
            <Card className="w-70 w-50-m w-33-ns ma2 pa3">
              <img className="w3 h3" src={HANDSHAKE_IMG} />
              <h3 className="f6 f3-ns f3-m f2-l sans-serif tc mt2">Proper</h3>
              <ul className="pdp-list--vertical f5 f3-ns">
                <li>- Above and beyond services</li>
                <li>- Targeted to YOUR needs</li>
                <li>- We CARE</li>
              </ul>
            </Card>
          </div>
        </section>
      </div>
    </ProperThreeStepsStyled>
  );
};

ProperThreeSteps.propTypes = {
  style: PropTypes.object,
};

export default ProperThreeSteps;
