import styled, { ThemeProvider, createGlobalStyle } from 'styled-components';
import React, { Component } from 'react';
import Parser from 'html-react-parser';
import Link from 'next/link';
import Project from './Project';
import DrawerStyles from '../styles/DrawerStyles';
import Arrow from '../static/arrow.svg';

import siteData from '../data.js';
import newSiteData from '../data2.js';

class Page extends Component {
  state = {
    selectedProject: {},
    drawerOpen: false,
    transitionEnded: false,
    id: this.props.id
  };

  handleClick = (project, e) => {
    // console.log(e.target);
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
    //console.log(siteData);
    return (
      <React.Fragment>
        <Screen
          className="screen"
          open={this.state.drawerOpen}
          onClick={
            this.state.drawerOpen ? e => this.handleClick(null, e) : null
          }
          transitionEnded={this.state.transitionEnded}
        />
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
          <header
            style={{
              padding: '10px 20px',
              margin: '-20px -20px 0',
              background: '#000',
              display: 'flex',
              justifyContent: 'space-between',
              position: 'fixed',
              width: '100%'
            }}
          >
            <button
              style={{
                background: 'transparent',
                border: 'none'
              }}
              onClick={e => this.handleClick(null, e)}
              aria-label="back"
            >
              <Arrow />
            </button>

            <div
              style={{ textAlign: 'right', color: 'white', fontSize: '24px' }}
            >
              UNDEFINED<br />
              STATE
            </div>
          </header>

          <h1 style={{ marginTop: '90px' }}>
            {this.state.selectedProject.title}
          </h1>
          <h3>{this.state.selectedProject.tagline}</h3>
          <p>
            {Object.keys(this.state.selectedProject).length !== 0
              ? Parser(this.state.selectedProject.content)
              : null}
          </p>
        </DrawerStyles>

        <footer />
      </React.Fragment>
    );
  }
}

export default Page;

const Screen = styled.div`
  min-height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  opacity: 0;
  background: black;
  transition: opacity 0.4s;
  ${props => props.open && `
    opacity: 0.5;
    z-index: 1;
  `};
  ${props => props.transitionEnded && `z-index: -9999;`};
`;
