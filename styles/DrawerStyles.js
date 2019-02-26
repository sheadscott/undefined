import styled from 'styled-components';

const DrawerStyles = styled.div`
  /* padding: 20px; */
  position: fixed;
  /* background: white; */
  background: transparent;
  height: 100vh;
  top: 0;
  right: 0;
  /* width: 95%; */
  width: 100%;
  /* max-width: calc(1068px * .95); */
  pointer-events: none;
  bottom: 0;
  transform: translateX(100%);
  transition: all 0.4s;
  transition-property: transform, opacity;
  /* box-shadow: 0 0 10px 3px rgba(0, 0, 0, 0.2); */
  z-index: 5;
  opacity: 0;
  ${props =>
    props.open &&
    `
    transform: translateX(0);
    opacity: 1;
  `};
  ${props =>
    props.transitionEnded &&
    `
    width: 0;
    padding: 0;
  `};

  h1 {
    text-transform: uppercase;
  }
`;

export default DrawerStyles;
