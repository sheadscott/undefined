import React from 'react';
import styled from 'styled-components';
import Img from 'gatsby-image';
import { Link } from 'gatsby';

import Project from '../components/project';
import Contact from '../components/contact';

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  padding: 2rem;
`;

const SiteTagline = styled.p`
  text-align: right;
  font-size: 1.5rem;
`;

// Use gatsby-image, sharp, etc.
// Widths
// desktop: 1200px
// superwide: 2200px
// phone: 414px

export default ({ data }) => {
  return (
    <div>
      <Header>
        <Link to={`/`}>
          <Img
            fixed={data.siteLogo.childImageSharp.fixed}
            alt={data.site.siteMetadata.title}
          />
        </Link>
        <div style={{ textAlign: 'right', maxWidth: '520px' }}>
          <Contact />
          <SiteTagline>
            Really amazing tagline will go right here! Is it amazing enough? Then write it again!
          </SiteTagline>
        </div>
      </Header>
      <main>
        {data.allMarkdownRemark.edges.map(({ node }) => {
          return (
            <Project
              key={node.id}
              slug={node.fields.slug}
              title={node.frontmatter.title}
              tagline={node.frontmatter.tagline}
              details={node.frontmatter.details === false ? false : true}
              image={
                node.frontmatter.img
                  ? node.frontmatter.img.childImageSharp.fluid
                  : null
              }
            />
          );
        })}
      </main>
    </div>
  );
};

export const query = graphql`
  query {
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
    allMarkdownRemark(sort: { fields: [frontmatter___order], order: DESC }) {
      totalCount
      edges {
        node {
          id
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
            details
          }
          fields {
            slug
          }
        }
      }
    }
  }
`;
