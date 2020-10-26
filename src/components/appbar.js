import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import { Link } from 'react-router-dom';

export default function AppBar(props) {
  console.log(props);
  return (
    <div style={{ width: '100%', height: '100%' }} className="appBarContainer">
      <div>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={4}>
            <Link to="/">
              <img
                src="https://propertiesdoneproper.s3.amazonaws.com/PropertiesDoneProperlyLogo.png"
                className="PropertiesDoneProperImage"
              />
            </Link>
          </Grid>
          <Grid item xs={12} sm={8}>
            <div className="navBarContainer">
              <Link to="/services">
                <button
                  className={
                    props.location.pathname.includes('services')
                      ? 'selected'
                      : ''
                  }
                >
                  Services
                </button>
              </Link>
              <Link to="/about">
                <button
                  className={
                    props.location.pathname.includes('about') ? 'selected' : ''
                  }
                >
                  About
                </button>
              </Link>
              <Link to="/referrals">
                <button
                  className={
                    props.location.pathname.includes('referrals')
                      ? 'selected'
                      : ''
                  }
                >
                  Referrals
                </button>
              </Link>
              <Link to="/contact">
                <button
                  className={
                    props.location.pathname.includes('contact')
                      ? 'selected'
                      : ''
                  }
                >
                  Contact
                </button>
              </Link>
            </div>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}
