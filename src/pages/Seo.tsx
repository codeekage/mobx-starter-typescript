import React from 'react'
import { inject, observer } from 'mobx-react'
import { Helmet } from 'react-helmet'

const SEO = inject('mbx_appstore')(
  observer(({ mbx_appstore }) => {
    return (
      <Helmet>
        <title>{mbx_appstore.getAppName}</title>
        <meta charSet="utf-8" />
        <meta name="description" content="A React.js application" />
      </Helmet>
    )
  })
)

export default SEO
