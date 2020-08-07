import React from "react"
import Slider from "../components/slider"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { useStaticQuery, graphql } from "gatsby"

const IndexPage = () => {
  const { allFile } = useStaticQuery(graphql`
    {
      allFile(filter: { relativeDirectory: { eq: "scaleOut" } }) {
        nodes {
          childImageSharp {
            fluid(quality: 90, maxWidth: 1920) {
              ...GatsbyImageSharpFluid_withWebp_tracedSVG
            }
          }
        }
      }
    }
  `)
  return (
    <Layout>
      <SEO title="Home" />
      <Slider type="openAnimation" photos={allFile.nodes}></Slider>
    </Layout>
  )
}

export default IndexPage
