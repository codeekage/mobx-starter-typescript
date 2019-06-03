import React from 'react'
import { Router } from '@reach/router'
import Home from './Home'
import About from './About'
import SEO from './Seo'
import Contact from './Contact'

const Components: React.FC = (props: any) => (
  <>
    <SEO />
    <Router>
      <Home path="/" {...props} />
      <About path="about" {...props} />
      <Contact path="contact" {...props} />
    </Router>
  </>
)

export default Components
