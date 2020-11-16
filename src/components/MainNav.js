import React, { useRef, useEffect } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { GUTTER__50, PRIMARY_COLOR } from "../styles/itcss/1-settings/settings";
import MenuIcon from "@material-ui/icons/Menu";
const NavItems = ["HOME", "ABOUT US"];

const MainNavStyled = styled.div`
  width: 100%;
  border: 1px solid black;
  display: flex;
  justify-content: center;
  align-items: center;

  ul {
    padding: ${GUTTER__50} 0 ${GUTTER__50} 0;
    margin: 0;
  }
  ul li {
    display: inline-block;
    list-style-type: none;
    margin-right: -4px;
    padding: 10px;
    border-right: 1px solid white;
    text-align: center;
  }
  a {
    color: ${PRIMARY_COLOR};
    font-size: 1.25em;
  }
  a:hover {
    color: ${PRIMARY_COLOR};
  }
  .pdp-accordion a {
    color: white;
    font-size: 1.25em;
    text-decoration: none;
  }
  .pdp-accordion a:hover {
    color: white;
  }
  .pdp-accordion ul li {
    display: block;
    list-style-type: none;
    margin-right: -4px;
    padding: 10px;
    border-right: 1px solid white;
    text-align: center;
  }
`;

// TODO: drawer if screen size too small
const MainNav = ({ style }) => {
  const [width, setWidth] = React.useState(window.innerWidth);

  React.useEffect(() => {
    /* Inside of a "useEffect" hook add an event listener that updates
       the "width" state variable when the window size changes */
    window.addEventListener("resize", () => setWidth(window.innerWidth));

    /* passing an empty array as the dependencies of the effect will cause this
       effect to only run when the component mounts, and not each time it updates.
       We only want the listener to be added once */
  }, []);
  console.log(width);

  return (
    <MainNavStyled>
      {width >= 640 ? (
        <nav style={{ ...style }}>
          <ul>
            {NavItems.map((e, index) => (
              <li key={`nav-item-${index}`}>
                <a className="pdp-link--clean">{e}</a>
              </li>
            ))}
          </ul>
        </nav>
      ) : (
        <Drawer />
      )}
    </MainNavStyled>
  );
};

const Drawer = () => {
  const navRef = useRef();
  const sandwichToggleRef = useRef();
  const [open, setOpen] = React.useState(false);

  useEffect(() => {
    /**
     * Alert if clicked on outside of element
     */
    function handleClickOutside(event) {
      console.log(event.target);
      console.log(event.target === sandwichToggleRef);

      if (
        event.target !== sandwichToggleRef &&
        navRef.current &&
        !navRef.current.contains(event.target)
      ) {
        setOpen(false);
      }
    }
    // Bind the event listener
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [navRef, sandwichToggleRef]);

  return (
    <>
      <MenuIcon
        ref={sandwichToggleRef}
        onClick={() => setOpen((state) => !state)}
      />
      {/* <SwipeableDrawer
    anchor={"left"}
    open={open}
    onClose={() => setOpen(false)}
    onOpen={() => setOpen(true)}
  >
    <nav style={{ ...style }}>
      <ul>
        {NavItems.map((e, index) => (
          <li key={`nav-item-${index}`}>
            <a className="pdp-link--clean">{e}</a>
          </li>
        ))}
      </ul>
    </nav>

  </SwipeableDrawer> */}
      <nav
        id="site-navigation"
        className="pdp-side-nav--accordion pdp-drawer"
        role="sub-navigation"
        style={{
          // height: !open ? 0 : "100vh",
          // width: "100vh",
          width: !open ? 0 : "80vw",
          height: "100vh",
          maxHeight: "100vh",
          position: "fixed",
          padding: 0,
          color: "white",
          zIndex: 1000,
        }}
        ref={navRef}
      >
        <div className="pdp-accordion pdp-accordion--vertical dense">
          <div
            // className={`pdp-accordion--section ${active ? 'active' : ''}`}
            className={`pdp-accordion--section ${true ? "active" : ""}`}
          >
            <ul>
              {NavItems.map((e, index) => (
                <li key={`nav-item-${index}`}>
                  <a className="pdp-link--clean">{e}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

MainNav.propTypes = {
  style: PropTypes.object,
};

export default MainNav;
