import Navbar from './layout/navbar'
import Footer from './layout/footer'

const Layout = ({ children }) => {
    return (
        <>
            <Navbar />

            {children}

            <Footer />
        </>
    )
}

export default Layout
