import React from 'react';
import Project from '../components/project';
// Use gatsby-image, sharp, etc.
// Widths
// desktop: 1200px
// superwide: 2200px
// phone: 414px

export default ({ data }) => {
  return (
    <div>
      {data.allMarkdownRemark.edges.map(({ node }) => {
        console.log('node', node.frontmatter);
        return (
          <Project
            key={node.id}
            slug={node.fields.slug}
            title={node.frontmatter.title}
            tagline={node.frontmatter.tagline}
            image={
              node.frontmatter.img
                ? node.frontmatter.img.childImageSharp.fixed
                : null
            }
          />
        );
      })}
    </div>
  );
};

export const query = graphql`
  query {
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
                  fixed(width: 600) {
                    ...GatsbyImageSharpFixed
                  }
              }
            }
          }
          fields {
            slug
          }
        }
      }
    }
  }
`;
