import React from 'react'
import { Router } from '@reach/router'
import Home from './Home'
import SEO from './Seo';

const Components: React.FC = (props: any) => (
  <>
    <SEO />
    <Router>
      <Home path="/" {...props} />
    </Router>
  </>
)

export default Components
