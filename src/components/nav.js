import React from 'react';
import styled from 'styled-components';

const StyledNav = styled.nav`
  display: flex;
  justify-content: space-between;
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  z-index: 999;
`;

const Nav = (props) => {
    return (
        <StyledNav>
            {props.children}
        </StyledNav>
    )
};

export default Nav;