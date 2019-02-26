import App, { Container } from 'next/app';
import styled, { ThemeProvider, createGlobalStyle } from 'styled-components';

import Link from 'next/link';

import Meta from '../components/Meta';
import Header from '../components/Header';
import ProjectList from '../components/ProjectList';
import DrawerStyles from '../styles/DrawerStyles';
import Arrow from '../static/arrow.svg';
import { white } from 'ansi-colors';

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
    console.log('drawer ref', this.drawer.scrollTop);
    this.drawer.scrollTop = 0;
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
    console.log('click target: ', e.target);

    if (project) {
      this.setState({ selectedProject: project });
    }

    if (!this.state.drawerOpen) {
      this.setState({ transitionEnded: false });
    }
    this.setState(prevState => ({ drawerOpen: !prevState.drawerOpen }));
  };

  handleTransitionEnd = e => {
    console.log('transition ended');
    if (!this.state.drawerOpen && e.propertyName === 'opacity') {
      document.querySelector('.drawer').scrollTop = 0;
      // document.querySelector('.drawer').style.width = '0';
      this.setState({ transitionEnded: true }, () => {
        document.querySelector('.drawer').scrollTop = 0;
      });
    }
  };

  render() {
    const { Component } = this.props;
    return (
      <ThemeProvider theme={theme}>
        <div>
          <StyledPage>
            <Meta />
            <GlobalStyle />
            <Header openDrawer={this.openDrawer} />
            <Link href="/" scroll={false}>
              <a onClick={e => this.handleClick(null, e)}>
                <Screen
                  className="screen"
                  open={this.state.drawerOpen}
                  transitionEnded={this.state.transitionEnded}
                  aria-label="back"
                />
              </a>
            </Link>

            {/*
          <ProjectList openDrawer={this.openDrawer} /> 
          */}

            <ProjectList openDrawer={this.openDrawer} />
            {/*
          {siteData.map((project, index) => {
            console.log("oh crap its a render!", Math.random());
            return (
              <Link key={index} href={project.url}>
                <a onClick={this.openDrawer}>
                  <Project project={project} />
                </a>
              </Link>
            );
          })}
          */}
          </StyledPage>

          {/* 
            So to make things easier I just expanded drawer to 100% width
            background became transparent and pointer events are none
          */}
          <DrawerStyles
            className="drawer"
            open={this.state.drawerOpen}
            onTransitionEnd={this.handleTransitionEnd}
            transitionEnded={this.state.transitionEnded}
            ref={el => (this.drawer = el)}
          >
            {/*
              This thing just positions the content centered over the page
            */}
            <div
              className="newPageWrapper"
              style={{
                maxWidth: '1068px',
                margin: '0 auto',
                pointerEvents: 'none',
                height: '100%'
              }}
            >
              {/*
                This one contains the visible drawer
              */}
              <div
                className="newDrawerConstraint"
                style={{
                  width: '95%',
                  height: '100%',
                  overflowY: 'scroll',
                  marginLeft: '5%',
                  background: 'white',
                  padding: '20px',
                  boxSizing: 'border-box',
                  pointerEvents: 'auto'
                }}
              >
                <header
                  style={{
                    padding: '10px 20px',
                    margin: '-20px -20px 0',
                    background: '#000',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    position: 'relative'
                    // width: '100%'
                  }}
                >
                  <Link href="/">
                    <a onClick={e => this.handleClick(null, e)}>
                      <button
                        style={{
                          background: 'transparent',
                          border: 'none'
                        }}
                        aria-label="back"
                      >
                        <Arrow />
                      </button>
                    </a>
                  </Link>

                  <div
                    style={{
                      textAlign: 'right',
                      color: 'white',
                      fontSize: '24px'
                    }}
                  >
                    UNDEFINED
                    <br />
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
              </div>
            </div>
          </DrawerStyles>
        </div>
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

  ${props =>
    props.open &&
    `
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

  img,
  figure,
  iframe {
    width: calc(100% + 40px);
    display: block;
    margin: 0 -20px;
  }

  figure img {
    width: 100%;
    margin: 0;
  }

  figcaption {
    padding: 0.5rem 20px 1rem;
  }
`;
