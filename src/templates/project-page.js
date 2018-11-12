import React from 'react';
import { graphql, Link } from 'gatsby';
import Img from 'gatsby-image';
import styled from 'styled-components';

import Nav from '../components/nav';
import Back from '../components/back';
import Contact from '../components/contact';

const BackButton = styled(Back)`
  background: black;
  border-radius: 0 0 10px 0;

  svg {
    fill: white;
  }
`;

const ContactButton = styled(Contact)`
  background: black;
  color: white;
  border-radius: 0 0 0 10px;
`;

const Article = styled.article`
  padding: 2rem;
  padding-right: 0;
  font-size: 18px;
`;

const Header = styled.header`
  display: flex;
  justify-content: space-between;
`;

const H1 = styled.h1`
  font-size: 19px;
  margin: 0;
  font-weight: 400;
  @media (min-width: 415px) {
      font-size: 48px;
    }
`;

const H2 = styled.h2`
  font-size: 16px;
  margin: 0;
  font-weight: 400;
  @media (min-width: 415px) {
      font-size: 24px;
    }
`;

const ContentWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-end;
  margin-top: 4.5rem;
  padding-bottom: 2rem;
  padding-right: 2rem;
  width: 70%;
`;

const ImageWrap = styled.div`
  width: 50%;
  align-self: flex-end;
`;

const HRule = styled.div`
  border-bottom: 1px solid #666;
  margin-left: 10%;
`;

const PageContent = styled.div`

  .float {
    width: 300px; 
  }

  .right {
    float: right; 
    padding: 0 0 2rem 3rem;
  }

  .left {
    float: left; 
    padding: 0 3rem 2rem 0;
  }

  @media (max-width: 600px) {
    .right, .left {
      float: none;
      margin: 0 auto;
      padding: 1rem;
    }
  }
`;
export default props => {
  const page = props.data.markdownRemark;
  console.log('page', page);
  return (
    <div>
      <Nav>
        <BackButton />
        <ContactButton />
      </Nav>

      <Article>
        <Header>
          <ContentWrap>
            <Link to={`/`}>
              <Img
                fixed={props.data.siteLogo.childImageSharp.fixed}
                alt={props.data.site.siteMetadata.title}
              />
            </Link>
            <H1>{page.frontmatter.title}</H1>
            <H2>{page.frontmatter.tagline}</H2>
          </ContentWrap>

          <ImageWrap>
            <Img fluid={page.frontmatter.img.childImageSharp.fluid} />
          </ImageWrap>
        </Header>

        <HRule />

        <PageContent dangerouslySetInnerHTML={{ __html: page.html }} />
      </Article>
    </div>
  );
};
export const query = graphql`
  query($slug: String!) {
    site {
      siteMetadata {
        title
      }
    }
    siteLogo: file(relativePath: {eq: "undefined-logo.png"}) {
      childImageSharp{
          fixed(width: 140) {
              ...GatsbyImageSharpFixed
          }
      }
  }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        tagline
        img {
          childImageSharp{
            fluid(maxWidth: 520) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`;
