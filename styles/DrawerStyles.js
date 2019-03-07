import styled from "styled-components";

const DrawerStyles = styled.div`
  position: fixed;
  background: transparent;
  height: 100vh;
  top: 0;
  right: 0;
  width: 100%;
  pointer-events: none;
  bottom: 0;
  transform: translateX(100%);
  transition: all 0.4s;
  transition-property: transform, opacity;
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

  .newPageWrapper {
    max-width: 1068px;
    margin: 0 auto;
    pointer-events: none;
    height: 100%;

    .newDrawerConstraint {
      width: 95%;
      height: 100%;
      overflow-y: scroll;
      -webkit-overflow-scrolling: touch;
      margin-left: 5%;
      background: white;
      padding: 20px;
      box-sizing: border-box;
      pointer-events: auto;
      -webkit-user-select: none;
      -khtml-user-select: none;
      -moz-user-select: none;
      -o-user-select: none;
      user-select: none;

      img {
        pointer-events: none;
      }

      header {
        padding: 10px 20px;
        margin: -20px -20px 0;
        background: #000;
        display: flex;
        justify-content: space-between;
        align-items: center;
        position: relative;

        button {
          background: transparent;
          border: none;
        }
      }
    }
  }
`;

export default DrawerStyles;
