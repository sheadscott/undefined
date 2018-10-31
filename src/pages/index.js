import React from 'react';
import Project from '../components/project';
import Layout from '../components/layout';
// Use gatsby-image, sharp, etc.
// Widths
// desktop: 1200px
// superwide: 2200px
// phone: 414px

export default ({ data }) => {
  return (
    <Layout>
      {data.allMarkdownRemark.edges.map(({ node }) => (
        <Project
          key={node.id}
          slug={node.fields.slug}
          title={node.frontmatter.title}
          tagline={node.frontmatter.tagline}
          image={node.frontmatter.img}
        />
      ))}
    </Layout>
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
            img
          }
          fields {
            slug
          }
        }
      }
    }
  }
`;
