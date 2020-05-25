import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import styles from "./BlogPost.module.scss"

const BlogPostTemplate = props => {
  const aboutImage = data.artImage.childImageSharp.fluid

  return (
    <div>
      <div className={styles.container}>
        <h2 className={styles.title}>My TITLE</h2>
        <Img fluid={aboutImage} className={styles.blogImage} />
        <div>
          orem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
          veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
          ea commodo consequat. Duis aute irure dolor in reprehenderit in
          voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur
          sint occaecat cupidatat non proident, sunt in culpa qui officia
          deserunt mollit anim id est laborum.
        </div>
      </div>
    </div>
  )
}

export default BlogPostTemplate
