import Link from 'next/link'
import { useEffect } from 'react'

const Navbar = () => {
    useEffect(() => {
        document.addEventListener('scroll', () => {
            handleScroll()
        })
    }, [])

    const Toggle = () => {
        document.body.classList.toggle('nav-open')
        var header = document.getElementById('mainHeader')
        if (!header.classList.toggle('header-background')) {
            header.classList.toggle('header-background')
        }
    }

    const handleScroll = () => {
        setInterval(function () {
            var header = document.getElementById('mainHeader')
            var scrollTop =
                document.documentElement.scrollTop || document.body.scrollTop
            header.classList.toggle('header-background', scrollTop >= 100)
        }, 100)
    }

    return (
        <header id="mainHeader">
            <nav className="navbar">
                <div className="navbar-logo">
                    <Link href="/">
                        <img
                            width="104"
                            height="38"
                            src="sun.svg"
                            alt="Sunlight Esports"
                        />
                    </Link>
                </div>

                <a className="navbar-toggle" onClick={Toggle}>
                    ☰
                </a>
                <div className="dummy"></div>
                <ul className="navbar-menu">
                    <li className="navbar-links">
                        <Link href="/#inicio" replace>
                            <a>Inicio</a>
                        </Link>
                    </li>

                    <li className="navbar-links">
                        <Link href="/#social" replace>
                            <a>Redes Sociais</a>
                        </Link>
                    </li>

                    <li className="navbar-links">
                        <Link href="/#discord" replace>
                            <a>Discord</a>
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Navbar
