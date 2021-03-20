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

        !header.classList.toggle('header-background', scrollTop >= 10)
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
            className="fixed z-20 w-full uppercase font-oswald text-base text-white border-b border-white border-opacity-50"
        >
            <nav className="relative flex flex-wrap items-center justify-between px-8 py-3">
                <div className="w-full flex flex-wrap items-center">
                    <div className="w-full flex justify-between items-center sm:w-auto">
                        <Link href="/#">
                            <p className="cursor-pointer text-xl hover:text-yellow-300">
                                Sunlight Esports
                            </p>
                        </Link>

                        <a
                            className="cursor-pointer -my-2 select-none block sm:hidden text-3xl"
                            type="button"
                            onClick={Toggle}
                        >
                            ☰
                        </a>
                    </div>

                    <div
                        className={
                            'fixed inset-0 overflow-hidden' +
                            (navOpen ? ' flex justify-end' : ' hidden')
                        }
                    >
                        <div className="absolute inset-0 overflow-hidden">
                            <div className="absolute inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>
                            <div className="absolute inset-y-0 right-0 flex">
                                <div className="relative w-56">
                                    <div className="h-full flex flex-col py-2 px-4 bg-white ">
                                        <div className="flex flex-row w-full pb-4">
                                            <a
                                                className="text-black cursor-pointer mx-4 select-none block text-3xl text-right w-full"
                                                type="button"
                                                onClick={Toggle}
                                            >
                                                ☰
                                            </a>
                                        </div>

                                        <div className="pl-2 pt-16 text-black">
                                            <div className=" mb-4 text-gray-500 text-xl font-medium">
                                                Sunlight Esports
                                            </div>

                                            <Link href="/#">
                                                <a className="my-3 block text-lg font-medium">
                                                    Inicio
                                                </a>
                                            </Link>

                                            <Link href="/#social">
                                                <a className="my-3 block text-lg font-medium">
                                                    Redes Sociais
                                                </a>
                                            </Link>

                                            <Link href="/#discord">
                                                <a className="my-3 block text-lg font-medium">
                                                    Discord
                                                </a>
                                            </Link>
                                        </div>

                                        <div className="pl-2 pt-4 text-black">
                                            <div className="mb-4 text-gray-500 text-xl font-medium">
                                                Sobre
                                            </div>

                                            <Link href="/quem-somos">
                                                <a className="my-2 block text-lg font-medium">
                                                    Quem somos
                                                </a>
                                            </Link>

                                            <Link href="/contato">
                                                <a className="my-2 block text-lg font-medium">
                                                    Contato
                                                </a>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div
                        className={
                            'sm:flex flex-1 items-center' +
                            (navOpen ? ' hidden' : ' hidden')
                        }
                    >
                        <ul className="flex flex-col sm:flex-row list-none sm:ml-auto justify-end items-center tracking-wider sm:mr-8">
                            <div className="dropdown">
                                <li className="px-1 flex flex-1 my-3 sm:my-0 sm:mx-4 cursor-pointer hover:text-yellow-300">
                                    <span>Sobre</span>
                                </li>
                                <div className="dropdown-menu absolute hidden text-black pt-4 pl-5 text-left">
                                    <div className="flex flex-1 whitespace-nowrap flex-col bg-gray-100 p-4 shadow">
                                        <div className="block py-1 hover:text-gray-700">
                                            <Link href="/quem-somos">
                                                <a
                                                    className={
                                                        router.pathname ==
                                                        '/quem-somos'
                                                            ? 'active'
                                                            : ''
                                                    }
                                                >
                                                    Quem somos
                                                </a>
                                            </Link>
                                        </div>
                                        <div className="block py-1 hover:text-gray-700">
                                            <Link href="/contato">
                                                <a
                                                    className={
                                                        router.pathname ==
                                                        '/contato'
                                                            ? 'active'
                                                            : ''
                                                    }
                                                >
                                                    Contato
                                                </a>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Navbar
