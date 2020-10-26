import React from 'react';
import AppBar from './appbar';
import AboutImage from '../img/AboutImage.png';

export default function AboutPage(props) {
  return (
    <PageContainer {...props}>
      <PageHeader text="About Us" />
      <div className="relative w-100">
        <img src={AboutImage} className="w-100 absolute z--1" />
        <div className="center w-90 white">
          <div className="flex w-100 justify-center">
            <div className="definition h-25 mt3 f3">
              <Definition />
            </div>
          </div>
          <div className="h-75 mt3 f3">hi</div>
        </div>
      </div>
    </PageContainer>
  );
}

const Definition = () => {
  return (
    <React.Fragment>
      <div>
        <span className="f1 mr2">Proper</span>
        <span className="ma0 i">adjective</span>
      </div>
      <div>prop•er | /’präpәr/</div>
      <div className="f2">
        Truly what something is said or regarded to be; genuine
      </div>
    </React.Fragment>
  );
};

const CenteredLine = () => {
  return (
    <div className="flex items-center">
      <div className="w-100 h3 relative centered-line" />
    </div>
  );
};

const PageHeader = props => {
  return (
    <div className="w-100 flex items-center justify-center">
      <div className="w-25">
        <CenteredLine />
      </div>
      <div className="ma2 f1">{props.text.toUpperCase()}</div>
      <div style={{ flex: 1 }}>
        <CenteredLine />
      </div>
    </div>
  );
};

const PageContainer = ({ children, ...props }) => {
  return (
    <div>
      <AppBar {...props} />
      <div className="mw8 center">{children}</div>
    </div>
  );
};
