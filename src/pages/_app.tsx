import React from 'react'
import { AppProps } from 'next/app'

import '../../public/styles/index.css'

function JobListingApp({ Component, pageProps }: AppProps) {
    return <Component {...pageProps} />
}

export default JobListingApp;
