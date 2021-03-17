import Navbar from './layout/navbar'
import Footer from './layout/footer'

const Layout = ({ children }) => {
    return (
        <>
            <Navbar />

            <div id="stars" />
            <div id="moving-stars" />

            {children}

            <Footer />
        </>
    )
}

export default Layout
