import { NextSeo } from 'next-seo'

import Navbar from './layout/navbar'
import Footer from './layout/footer'

const Layout = ({ pageTitle, children }) => {
    return (
        <>
            <NextSeo title={pageTitle} />

            <Navbar />

            {children}

            <Footer />
        </>
    )
}

export default Layout
