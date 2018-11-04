import React from 'react';
import Img from 'gatsby-image';
import styled from 'styled-components';
import icon from '../images/button.svg';

const Section = styled.section`
  margin: 4rem 0 0 2rem;
  display: flex;
`;

const Text = styled.div`
  flex: 1;
  color: black;
  h1, h2 {
    font-weight: normal;
  }
  h1 {
    text-transform: uppercase;
    font-size: 36px;
  }
  h2 {
    font-size: 24px;
  }
`;

const Icon = styled.img`
  width: 80px;
`;

const Image = styled(Img)`
  align-self: center;
  flex: 2;
  margin-bottom: 0;
  max-width: 400px;
`;

const HRule = styled.div`
  border-bottom: 1px solid #666;
  margin-left: 10%;
`;

export default props => (
  <a href={props.slug}>
    <div>
      <Section>
        <Text>
          <h1>{props.title}</h1>
          <h2>{props.tagline}</h2>
          <Icon src={icon} alt="" />
        </Text>
        {props.image && <Image fluid={props.image} alt="" />}
      </Section>
      <HRule />
    </div>
  </a>
);
