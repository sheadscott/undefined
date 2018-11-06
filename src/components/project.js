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
  padding-right: calc(70px + 2rem);
  color: black;
  position: relative;

  @media (min-width: 768px){
    width: 40%;
  }

  h1, h2 {
    font-weight: normal;
    width: 100%;
  }
  h1 {
    text-transform: uppercase;
    font-size: 19px;
    margin-top: 0;
    @media (min-width: 415px) {
      font-size: 36px;
    }
  }
  h2 {
    font-size: 16px;
    @media (min-width: 415px) {
      font-size: 24px;
    }
  }
`;

const Icon = styled.img`
  width: 63px;
  position: absolute;
  top: 0;
  right: 2rem;
  
  @media (min-width: 415px) {
    width: 80px;
  }

  @media (min-width: 768px){
    position: relative;
    right: 0;
  }
`;

const ImageContainer = styled.div`
  width: 100%;
  flex: auto;
  order: 3;

  @media (min-width: 728px){
    width: 30%;
    order: 2;
  }
`;

const Image = styled(Img)`

  float: right;
  width: 280px;

  @media (min-width: 414px){
    width: 400px;
  }

  @media (min-width: 1200px){
    width: 600px;
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
          <Icon src={icon} alt="" />
        </Text>
        <ImageContainer>
          {props.image && <Image fluid={props.image} alt="" />}
        </ImageContainer>
      </Section>
      <HRule />
    </div>
  </a>
);
