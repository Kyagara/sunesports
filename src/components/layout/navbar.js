import Link from 'next/link'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'

const Navbar = () => {
    const router = useRouter()
    const [navOpen, setNavOpen] = useState(false)

    const Toggle = () => {
        const header = document.getElementById('mainHeader')

        if (!header.classList.toggle('header-background')) {
            !header.classList.toggle('header-background')
        }
        setNavOpen(!navOpen)
    }

    const handleScroll = () => {
        const header = document.getElementById('mainHeader')
        const scrollTop = document.documentElement.scrollTop

        !header.classList.toggle('header-background', scrollTop >= 100)
    }

    useEffect(() => {
        document.addEventListener('scroll', handleScroll)
        return () => {
            document.removeEventListener('scroll', () => handleScroll)
        }
    }, [handleScroll])

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
                        <ul className="flex flex-col text-right md:flex-row list-none md:ml-auto font-oswald">
                            <li>
                                <Link href="/">
                                    <a
                                        className={
                                            router.pathname == '/'
                                                ? 'active px-1 my-3 md:mx-4 flex justify-end items-center tracking-wider text-xl'
                                                : 'px-1 my-3 md:mx-4 flex justify-end items-center tracking-wider text-xl'
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
                                                ? 'active px-1 my-3 md:mx-4 flex justify-end items-center tracking-wider text-xl'
                                                : 'px-1 my-3 md:mx-4 flex justify-end items-center tracking-wider text-xl'
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
