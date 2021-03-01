import Head from 'next/head'
import Navbar from './layout/navbar'
import Footer from './layout/footer'

const Layout = ({ children, title = 'Sunlight Esports' }) => {
    return (
        <>
            <Head>
                <title>{title}</title>
                <meta charSet="utf-8" />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />
                <link rel="icon" href="sun.svg"></link>
            </Head>

            <Navbar />

            {children}

            <Footer />
        </>
    )
}

export default Layout
