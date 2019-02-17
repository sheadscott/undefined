import App, { Container } from 'next/app';
// import Page from '../components/Page';
import styled, { ThemeProvider, createGlobalStyle } from 'styled-components';

import Meta from '../components/Meta';
import Header from '../components/Header';

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
    transitionEnded: false
  };

  handleClick = (project, e) => {
    console.log(e.target);
    console.log('screen clicked');
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
          <Header />
          <Container>
            <Component />
          </Container>
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
  height: 100%;
  /* You have to set transform so that Screen's fixed position 
  will be relative to StyledPage instead of the viewport */
  transform: rotate(0);
`;
