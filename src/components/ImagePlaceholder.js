import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { GUTTER } from "../styles/itcss/1-settings/settings";

const ImagePlaceholderWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ImagePlaceholderObject = styled.div`
  width: ${(props) => (props.width ? props.width : "100%")};
  height: ${(props) => (props.height ? props.height : "10vh")};
  border: 1px solid red;
  margin: ${(props) =>
    `${props.margin} ${props.margin} ${props.margin} ${props.margin}`}; ;
`;

const ImagePlaceholder = ({ style, imageWidth, imageHeight, margin }) => {
  return (
    <ImagePlaceholderWrapper {...style}>
      <ImagePlaceholderObject
        width={imageWidth}
        height={imageHeight}
        margin={margin !== undefined ? margin : GUTTER}
      />
    </ImagePlaceholderWrapper>
  );
};

ImagePlaceholder.propTypes = {
  style: PropTypes.object,
  imageWidth: PropTypes.string.isRequired,
  imageHeight: PropTypes.string.isRequired,
};

export default ImagePlaceholder;
