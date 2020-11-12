import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { PRIMARY_COLOR } from "../styles/itcss/1-settings/settings";

const LocationsServedStyled = styled.div`
  padding-top: 3rem;
  padding-bottom: 3rem;
  color: ${"white"};
  background-color: ${PRIMARY_COLOR};
  p {
    margin-bottom: 0;
  }
  hr {
    border-top: 1px solid ${"white"};
  }
`;

const LocationsServed = ({ style }) => {
  return (
    <LocationsServedStyled>
      <div style={{ ...style }} className="mw6 mw7-ns center">
        <section>
          <p className="f4 f3-ns f3-m f2-l b">Locations we serve</p>
          <hr />
        </section>
        <section>
          <p className="f6 f4-ns f4-m f3-l">
            We are Maryland Locals <br />
            From Maryland - For Maryland
          </p>
        </section>
        <section>
          <HowToSellForCash />
        </section>
      </div>
    </LocationsServedStyled>
  );
};

const HowToSellStyled = styled.div`
  .tab-header {
  }
`;

const TabHeaderStyled = styled.div`
  border: ${(props) => (props.tabHeaderSelected ? `1px solid white;` : "")}
  padding: 1rem;
  cursor: pointer;
  &:hover {
    border: 1px solid white;
    opacity: .8;
    padding: 1rem;
    cursor: pointer;
  }
`;

const TabStyled = styled.div`
  border: 1px solid white;
  padding: 2rem;
  a {
    font-weight: bold;
    line-height: 1.5rem;
  }
  a:hover {
    opacity: 0.9;
  }
`;

const HowToSellForCash = () => {
  const [tab, setTab] = React.useState(0);

  return (
    <div>
      <HowToSellStyled>
        <div className="flex items-center w-100">
          <TabHeaderStyled
            className="tab-header flex-auto tc"
            onClick={() => setTab(0)}
            tabHeaderSelected={tab === 0}
          >
            How to Sell your House For Cash:
          </TabHeaderStyled>
          <TabHeaderStyled
            className="tab-header flex-auto tc"
            onClick={() => setTab(1)}
            tabHeaderSelected={tab === 1}
          >
            How to Sell Your House Fast:
          </TabHeaderStyled>
        </div>
        {tab === 0 ? (
          <TabStyled className="f6 f5-ns f5-m f3-l">
            <a>Sell your house for cash in Prince George's County, MD</a>
            <a>Sell your house for cash in Montgomery County, MD</a>
            <a>Sell your house for cash in Anne Arundel County, MD</a>
            <a>Sell your house for cash in Howard County County, MD</a>
          </TabStyled>
        ) : (
          <TabStyled className="f6 f5-ns f5-m f3-l">
            <a>Sell your house for fast in Prince George's County, MD</a>
            <a>Sell your house for fast in Montgomery County, MD</a>
            <a>Sell your house for fast in Anne Arundel County, MD</a>
            <a>Sell your house for fast in Howard County County, MD</a>
          </TabStyled>
        )}
      </HowToSellStyled>
    </div>
  );
};

LocationsServed.propTypes = {
  style: PropTypes.object,
};

export default LocationsServed;
