import styled, { ThemeProvider, createGlobalStyle } from 'styled-components';
import React, { Component } from 'react';
import Parser from 'html-react-parser';
import Link from 'next/link';
import Meta from './Meta';
import Header from './Header';
import Project from './Project';
import DrawerStyles from '../styles/DrawerStyles';

import siteData from '../data.js';

const theme = {
  fontFamily: `'brandon-grotesque', Arial, Helvetica, sans-serif;`,
  black: '#000000',
};

const GlobalStyle = createGlobalStyle`
  @import url('https://use.typekit.net/ccq8qac.css');

  html, body, #screen {
    min-height: 100%;
  }

  html {
    box-sizing: border-box;
    font-size: 10px;
  }

  *, *::before, *::after {
      box-sizing: inherit;
  }

  body {
    background: white;
    padding: 0;
    margin: 0;
    font-family: ${props => props.theme.fontFamily};
    font-size: 1.5rem;
    color: ${props => props.theme.black};

  }

  a {
    color: ${props => props.theme.black};
    text-decoration: none;
  }
`;

class Page extends Component {
  state = {
    selectedProject: {},
    drawerOpen: false,
    transitionEnded: false,
  };

  handleClick = (project, e) => {
    console.log(e.target);
    if (project) {
      this.setState({ selectedProject: project });
    }
    if (!this.state.drawerOpen) {
      // document.querySelector('.drawer').style.width = '80%';
      this.setState({ transitionEnded: false });
    }
    this.setState(prevState => ({ drawerOpen: !prevState.drawerOpen }));
  };

  handleTransitionEnd = e => {
    if (!this.state.drawerOpen && e.propertyName === 'opacity') {
      console.log('ended');
      // document.querySelector('.drawer').style.width = '0';
      this.setState({ transitionEnded: true });
    }
  };

  render() {
    console.log(siteData);
    return (
      <ThemeProvider theme={theme}>
        <StyledPage>
          <Meta />
          <GlobalStyle />
          <Screen
            open={this.state.drawerOpen}
            onClick={
              this.state.drawerOpen ? e => this.handleClick(null, e) : null
            }
            transitionEnded={this.state.transitionEnded}
          />
          <Header />
          {siteData.map((project, index) => (
            <Link key={index} href="/" scroll={false}>
              <a onClick={e => this.handleClick(project, e)}>
                <Project project={project} key={index} />
              </a>
            </Link>
          ))}
          <DrawerStyles
            className="drawer"
            open={this.state.drawerOpen}
            onTransitionEnd={this.handleTransitionEnd}
            transitionEnded={this.state.transitionEnded}
          >
            <h1>{this.state.selectedProject.title}</h1>
            <h3>{this.state.selectedProject.tagline}</h3>
            <p>
              {Object.keys(this.state.selectedProject).length !== 0
                ? Parser(this.state.selectedProject.content)
                : null}
            </p>
          </DrawerStyles>
        </StyledPage>
      </ThemeProvider>
    );
  }
}

export default Page;

const StyledPage = styled.div`
  background: white;
  box-shadow: 12px 0 15px -4px rgba(0, 0, 0, 0.2),
    -12px 0 8px -4px rgba(0, 0, 0, 0.2);
  box-shadow: 0 9px 0px 0px white, 0 -9px 0px 0px white,
    12px 0 15px -4px rgba(0, 0, 0, 0.2), -12px 0 15px -4px rgba(0, 0, 0, 0.2);

  margin: 0 auto;
  padding: 0 2rem;
  width: 1068px;
  height: 100%;
  /* You have to set transform so that Screen's fixed position 
  will be relative to StyledPage instead of the viewport */
  transform: rotate(0);
`;

const Screen = styled.div`
  min-height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  opacity: 0;
  background: black;
  transition: opacity 0.4s;
  ${props => props.open && `opacity: 0.5;`};
  ${props => props.open && `z-index: 1;`};
  ${props => props.transitionEnded && `z-index: -9999;`}; */
`;
