import App, { Container } from 'next/app';
// import Page from '../components/Page';
import styled, { ThemeProvider, createGlobalStyle } from 'styled-components';

import Link from 'next/link';
import Project from '../components/Project';

import Meta from '../components/Meta';
import Header from '../components/Header';
import DrawerStyles from '../styles/DrawerStyles';
import Arrow from '../static/arrow.svg';

import siteData from '../data.js';

const theme = {
  fontFamily: `'brandon-grotesque', Arial, Helvetica, sans-serif;`,
  black: '#000000'
};

const GlobalStyle = createGlobalStyle`
  @import url('https://use.typekit.net/ccq8qac.css');

  html, body, #screen {
    min-height: 100%;
  }

  html {
    box-sizing: border-box;
    font-size: 16px;
    width: 100%;
    overflow-x: hidden;
  }

  *, *::before, *::after {
      box-sizing: inherit;
  }

  body {
    background: white;
    padding: 0;
    margin: 0;
    font-family: ${props => props.theme.fontFamily};
    font-size: 16px;
    color: ${props => props.theme.black};

  }

  a {
    color: ${props => props.theme.black};
    text-decoration: none;
  }
`;

class CustomApp extends App {
  state = {
    selectedProject: {},
    drawerOpen: false,
    transitionEnded: false,
    count: 0
  };

  // static async getInitialProps({ router }) {
  //   console.log('request', router);
  //   return {};
  // }

  componentDidMount() {
    console.log('path', window.location.pathname);
    // open drawer if we're not at site root
    if (window.location.pathname !== '/') {
      this.openDrawer();
    }
  }

  openDrawer = () => {
    let temp = this.state.count + 1;
    this.setState({
      drawerOpen: true,
      transitionEnded: false,
      count: temp
    });
  };

  closeDrawer = () => {
    let temp = this.state.count + 1;
    this.setState({
      drawerOpen: false,
      count: temp
    });
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
    const { Component } = this.props;
    return (
      <ThemeProvider theme={theme}>
        <StyledPage>
          <Meta />
          <GlobalStyle />
          <Header openDrawer={this.openDrawer} />

          <Screen
            className="screen"
            open={this.state.drawerOpen}
            onClick={this.closeDrawer}
            transitionEnded={this.state.transitionEnded}
          />

          {siteData.map((project, index) => {
            console.log('oh crap its a render!', Math.random());
            return (
              <Link key={project.url} href={project.url}>
                <a onClick={this.openDrawer}>
                  <Project project={project} />
                </a>
              </Link>
            );
          })}

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
                style={{
                  textAlign: 'right',
                  color: 'white',
                  fontSize: '24px'
                }}
              >
                UNDEFINED<br />
                STATE
              </div>
            </header>

            <Wrapper>
              <Container>
                {/* Page Data */}
                <Component />
                {/* End Page Data */}
              </Container>
            </Wrapper>
          </DrawerStyles>
        </StyledPage>

      </ThemeProvider>
    );
  }
}

export default CustomApp;

const StyledPage = styled.div`
  background: white;
  box-shadow: 12px 0 15px -4px rgba(0, 0, 0, 0.2),
    -12px 0 8px -4px rgba(0, 0, 0, 0.2);
  box-shadow: 0 9px 0px 0px white, 0 -9px 0px 0px white,
    12px 0 15px -4px rgba(0, 0, 0, 0.2), -12px 0 15px -4px rgba(0, 0, 0, 0.2);

  margin: 0 auto;
  padding: 0 2rem;
  max-width: 1068px;
  min-height: 100%;
  /* You have to set transform so that Screen's fixed position 
  will be relative to StyledPage instead of the viewport */
  transform: rotate(0);
`;

const Screen = styled.div`
  min-height: 100%;
  position: fixed;
  transform: translateX(100%);
  top: 0;
  left: 0;
  width: 100%;
  opacity: 0;
  background: black;
  transition: opacity 0.4s;
  will-change: opacity;

  ${props => props.open && `
    transform: translateX(0%);
    opacity: 0.5;
    z-index: 1;
  `};
  ${props => props.transitionEnded && `z-index: -9999;`};
`;

const Wrapper = styled.div`
  margin-top: 90px;
  font-size: 1.125rem;

  h1 {
    margin-bottom: 0;
    font-size: 24px;
  }

  h2 {
    font-size: 20px;
    margin-top: 0;
    font-weight: 400;
  }

  img, figure, iframe {
    width: calc(100% + 40px);
    display: block;
    margin: 0 -20px;
  }

  figcaption {
    padding: 0.5rem 20px 1rem;
  }
`;
