import Link from 'next/link'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'

const Navbar = () => {
    const router = useRouter()
    const [navOpen, setNavOpen] = useState(false)

    useEffect(() => {
        document.addEventListener('scroll', () => {
            handleScroll()
        })
    }, [])

    const Toggle = () => {
        let header = document.getElementById('mainHeader')

        if (!navOpen) {
            setNavOpen(!navOpen)
        } else {
            setNavOpen(!navOpen)
        }

        if (!header.classList.toggle('header-background')) {
            !header.classList.toggle('header-background')
        }
    }

    const handleScroll = () => {
        let header = document.getElementById('mainHeader')
        let scrollTop = document.documentElement.scrollTop

        !header.classList.toggle('header-background', scrollTop >= 100)
        setNavOpen(navOpen)
    }

    return (
        <header
            id="mainHeader"
            className="fixed z-20 w-full uppercase text-white"
        >
            <nav className="relative flex flex-wrap items-center justify-between px-2">
                <div className="w-full px-4 mx-auto flex flex-wrap items-center">
                    <div className="w-full relative flex justify-between items-center md:w-auto md:static md:block md:justify-start">
                        <Link href="/">
                            <img
                                height="100%"
                                width="100%"
                                src="sun.svg"
                                alt="Sunlight Esports"
                                className="h-10 w-auto"
                            />
                        </Link>
                        <a
                            className="cursor-pointer select-none my-2 text-4xl block md:hidden outline-none focus:outline-none"
                            type="button"
                            onClick={Toggle}
                        >
                            ☰
                        </a>
                    </div>
                    <div
                        className={
                            'md:flex flex-1 items-center' +
                            (navOpen ? ' flex justify-end' : ' hidden')
                        }
                    >
                        <ul className="flex flex-col text-right md:flex-row list-none md:ml-auto text-lg">
                            <li>
                                <Link href="/">
                                    <a
                                        className={
                                            router.pathname == '/'
                                                ? 'active px-1 my-3 md:mx-4 flex justify-end items-center font-bold'
                                                : 'px-1 my-3 md:mx-4 flex justify-end items-center font-bold'
                                        }
                                    >
                                        Inicio
                                    </a>
                                </Link>
                            </li>
                            <li>
                                <Link href="/sobre">
                                    <a
                                        className={
                                            router.pathname == '/sobre'
                                                ? 'active px-1 my-3 md:mx-4 flex justify-end items-center font-bold'
                                                : 'px-1 my-3 md:mx-4 flex justify-end items-center font-bold'
                                        }
                                    >
                                        Sobre
                                    </a>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Navbar
