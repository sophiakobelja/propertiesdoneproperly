import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { PRIMARY_COLOR } from "../styles/itcss/1-settings/settings";
// import { Modal } from "@material-ui/core";
import Modal from "react-modal";
import HANDSHAKE_IMG_WHITE from "../img/SVG/PdPHandshakeWhite.svg";

import { makeStyles } from "@material-ui/core/styles";

const LocationsServedStyled = styled.div`
  padding-top: 6rem;
  padding-bottom: 6rem;
  padding-left: 2rem;
  padding-right: 2rem;
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

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    backgroundColor: PRIMARY_COLOR,
    color: "white",
    borderColor: PRIMARY_COLOR,
    boxShadow: "2px 2px 4px 2px rgba( 0, 0, 0, .2 )",
    padding: "2rem",
    maxWidth: "60%",
  },
};

const COUNTIES = ["Prince George's", "Montgomery", "Anne Arundel", "Howard"];

const HowToSellForCash = () => {
  const [modalIsOpen, setIsOpen] = React.useState(false);
  const [string, setString] = React.useState("");

  const [tab, setTab] = React.useState(0);
  const [open, setOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }

  // function afterOpenModal() {
  //   // references are now sync'd and can be accessed.
  //   subtitle.style.color = "#f00";
  // }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <div>
      <Modal
        isOpen={modalIsOpen}
        // onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        contentLabel="Example Modal"
        style={customStyles}
      >
        <div className="flex flex-column">
          {" "}
          <section className="flex flex-column items-start w-100">
            <p className="f3 f2-ns mb0">{string}</p>
          </section>
          <hr className="pdp-separator w-100" />
          <section className="flex flex-column items-start w-100">
            <h3 className="f4 f2-ns f2-m f1-l sans-serif pa0 ma0 fw4">
              Contact us now!
            </h3>
            <div className="f4 f3-ns">
              <span>Email: &nbsp; </span>
              <a
                href="mailto:info@propertiesdoneproper.com"
                // style={{ color: PRIMARY_COLOR }}
              >
                info@propertiesdoneproper.com
              </a>
            </div>
            <div className="f4 f3-ns">
              <span>Phone: &nbsp;</span>
              <a
                href="tel:123-456-7890"
                // style={{ color: PRIMARY_COLOR }}
              >
                (301) 265-2622
              </a>
            </div>
          </section>
          <section className="w-100">
            <p className="f4 f3-ns">
              We can sell your house <b>fast</b> and for <b> cash</b>! Our
              customers get cash in their pockets in as little as 24 hours.
            </p>
          </section>
          <div className="pdp-grid-container flex items-center">
            <div className="col-10">
              <section className="w-100 ">
                <p className="f4 f3-ns">
                  We are <b>real</b> people looking to provide <b>real </b>
                  solutions.
                </p>
              </section>
              <section className="w-100">
                <p className="f4 f3-ns">
                  There is <b className="i">no obligation</b>, we are here to
                  serve you.
                </p>
              </section>
            </div>
            <div className="col-2 flex flex-auto h-100 items-start">
              <img src={HANDSHAKE_IMG_WHITE} className="w4 mb4" />
            </div>
          </div>
        </div>
      </Modal>
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
          <TabStyled className="f6 f5-ns f5-m f3-l white">
            {COUNTIES.map((e, index) => (
              <button
                key={`for-cash-${index}`}
                onClick={() => {
                  setIsOpen(true);
                  setString(
                    `Have to sell your house for cash in ${e} for cash in County, MD?`
                  );
                }}
                className="white f6 f5-ns f5-m f3-l"
              >
                Sell your house for cash in {e} County, MD
              </button>
            ))}
          </TabStyled>
        ) : (
          <TabStyled className="f6 f5-ns f5-m f3-l">
            {COUNTIES.map((e, index) => (
              <button
                key={`fast-${index}`}
                onClick={() => {
                  setIsOpen(true);
                  setString(`Have to sell your house fast in ${e} County, MD?`);
                }}
                className="white f6 f5-ns f5-m f3-l"
              >
                Sell your house fast in {e} County, MD
              </button>
            ))}
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
