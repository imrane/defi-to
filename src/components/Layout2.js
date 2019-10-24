import React from 'react'
import { Helmet } from 'react-helmet'
import useSiteMetadata from './SiteMetadata'
import Navbar from '../components/Navbar2'
import Footer from '../components/Footer2'
import './app.css'

const TemplateWrapper = ({ children }) => {
  const { title, description } = useSiteMetadata()
  return (
    <div>
      <Helmet>
        <html lang="en" />
        <title>{title}</title>
        <meta http-equiv="X-UA-Compatible" content="IE=Edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no" />
        <meta name="theme-color" content="#fff" />
        <meta name="format-detection" content="telephone=no" />
        <meta name="description" content={description} />
        {/* Twitter Card data */}
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="@publisher_handle" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:creator" content="@defitoronto" />
        <meta name="twitter:image" content="http://www.example.com/image.jpg" />
        {/* Open Graph Data*/}
        <meta property="og:title" content={title} />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="http://www.example.com/" />
        <meta property="og:image" content="http://example.com/image.jpg" />
        <meta property="og:description" content={description} />
        <meta property="og:site_name" content="Site Name, i.e. Moz" />
        <meta property="fb:admins" content="Facebook numeric ID" />
        <link rel="stylesheet" href="https://use.typekit.net/xyj8hju.css"></link>
      </Helmet>

      <div className="out">
        <Navbar />
        {children}
        <Footer />
      </div>
      <script type="text/javascript" src="./js/app.js"></script>
    </div>
  )
}

export default TemplateWrapper