import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"

const BlogPost = ({ data }) => {
  console.log("data,", data)
  return (
    <div>
      <div>
        <h2>{data.markdownRemark.frontmatter.title}</h2>
        <Img
          fixed={data.markdownRemark.frontmatter.image.childImageSharp.fixed}
        />
        <div> {data.markdownRemark.frontmatter.description}</div>
      </div>
    </div>
  )
}

export default BlogPost

export const BlogPostTemplateQuery = graphql`
  query BlogPostTemplateQuery($slug: String) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      fields {
        slug
      }
      frontmatter {
        title
        description
        image {
          childImageSharp {
            fixed(width: 200) {
              ...GatsbyImageSharpFixed
            }
          }
        }
      }
    }
  }
`
