import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'

import Layout from '../components/Layout2'
import Hero from '../components/Hero'
import Contact from '../components/Contact'
import Start from '../components/Start'
import Speakers from '../components/Speakers'
import Schedule from '../components/Schedule'

export const IndexPage2Template = ({
  title,
  image,
  speakers,
  venue,
  mainpitch,
  schedule,
  contact
}) => (
    <div>
      <Hero
        title={title}
        image={image.childImageSharp.fluid.src}
        venue={venue}
      />
      <div className="container">
        <Start pitch={mainpitch} />
        <Speakers
          title={speakers.title}
          description={speakers.description}
          speakers={speakers.items}
        />
        <Schedule schedule={schedule} />
        <Contact
          contact={contact}
          venue={venue}
        />
      </div>
    </div>
  )

IndexPage2Template.propTypes = {
  title: PropTypes.string,
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string])
}

const IndexPage2 = ({ data }) => {
  const { frontmatter } = data.markdownRemark
  return (
    <Layout>
      <IndexPage2Template
        title={frontmatter.title}
        image={frontmatter.hero}
        venue={frontmatter.venue}
        mainpitch={frontmatter.mainpitch}
        speakers={frontmatter.speakers}
        schedule={frontmatter.schedule}
        contact={frontmatter.contact}
      />
    </Layout>
  )
}

IndexPage2.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  })
}

export default IndexPage2

export const pageQuery = graphql`
  query IndexPage2Template {
    markdownRemark(frontmatter: { templateKey: { eq: "index2-page" } }) {
      frontmatter {
        title
        hero {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }        
        contact {
          phone
          general_email
          press_email
        }
        venue {
          date
          time
          city
          location {
            name
            lat
            long
            address
            city
            postal
          }
          audience
        }
        mainpitch {
          title
          description
          primary_url
          secondary_url
        }
        speakers {
          title
          description
          items {
            name
            company
            role
            image {
              childImageSharp {
                fluid(maxWidth: 1048, quality: 50, grayscale: true) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
        schedule {
          title
          description
          events {
            date
            items {
              start
              end
              title
              description
            }
          }
        }
      }
    }
  }
  `