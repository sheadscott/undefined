import React from 'react';
import Img from 'gatsby-image';
import styled from 'styled-components';
import icon from '../images/button.svg';

const Section = styled.section`
  margin: 4rem 0 0 2rem;
  display: flex;
  flex-wrap: wrap;
`;

const Text = styled.div`
  padding-right: 20%;
  color: black;
  width: 50%;

  @media (min-width: 768px){
    width: 100%;
  }

  h1, h2 {
    font-weight: normal;
    width: 100%;
  }
  h1 {
    text-transform: uppercase;
    font-size: 36px;
    margin-top: 0;
  }
  h2 {
    font-size: 24px;
  }
`;

const Icon = styled.img`
  width: 80px;
  order: 1;
  align-self: flex-start;

  @media (min-width: 768px){
    order: 3;
    align-self: auto;
  }
`;

const ImageContainer = styled.div`
  max-width: 400px;

  @media (min-width: 1200px){
    max-width: 600px;
  }

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
        </Text>
        <Icon src={icon} alt="" />
        <ImageContainer>
            {props.image && <Img fluid={props.image} alt="" />}
        </ImageContainer>
      </Section>
      <HRule />
    </div>
  </a>
);
