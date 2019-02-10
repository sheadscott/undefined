import styled from 'styled-components';

const DrawerStyles = styled.div`
  padding: 20px;
  position: fixed;
  background: white;
  height: 100%;
  top: 0;
  right: 0;
  width: 95%;
  bottom: 0;
  transform: translateX(100%);
  transition: all 0.4s;
  transition-property: transform, opacity;
  box-shadow: 0 0 10px 3px rgba(0, 0, 0, 0.2);
  z-index: 5;
  opacity: 0;
  ${props => props.open && `transform: translateX(0);`};
  ${props => props.open && `opacity: 1;`};
  ${props => props.transitionEnded && `width: 0;`};
  ${props => props.transitionEnded && `padding: 0;`};

  h1 {
    text-transform: uppercase;
  }
`;

export default DrawerStyles;
