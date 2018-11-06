import React from 'react';
import { graphql, Link } from 'gatsby';
import Img from 'gatsby-image';
import styled from 'styled-components';

import Back from '../components/back';
import Contact from '../components/contact';

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  z-index: 999;
`;

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
  font-size: 18px;
`;

const Header = styled.header`
  display: flex;
  justify-content: space-between;
`;

const H1 = styled.h1`
  font-size: 48px;
  margin: 0;
  font-weight: 400;
`;

const H2 = styled.h2`
  font-size: 36px;
  margin: 0;
  font-weight: 400;
`;

const ContentWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-end;
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
`
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