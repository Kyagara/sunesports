import Link from 'next/link'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'

const Navbar = () => {
    const router = useRouter()
    const [navOpen, setNavOpen] = useState(false)

    const Toggle = () => {
        const header = document.getElementById('mainHeader')

        if (!header) return

        const isHeaderTransparent = !header.classList.contains('header-background')

        setNavOpen(!navOpen)

        if (isHeaderTransparent && !navOpen) {
            header.classList.add('header-background')

            return
        }

        if (!isHeaderTransparent && navOpen && document.documentElement.scrollTop <= 50) {
            header.classList.remove('header-background')
        }
    }

    const handleScroll = () => {
        const header = document.getElementById('mainHeader')
        const scrollTop = document.documentElement.scrollTop

        if (!header) return

        header.classList.toggle('header-background', scrollTop >= 50)
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScroll)

        return () => {
            window.removeEventListener('scroll', () => handleScroll)
        }
    }, [])

    return (
        <header
            id="mainHeader"
            className="fixed w-full uppercase font-oswald text-white border-b border-white border-opacity-50 z-30"
        >
            <nav className="relative flex flex-wrap items-center justify-between px-8 py-3">
                <div className="w-full flex flex-wrap items-center">
                    <div className="w-full flex justify-between items-center sm:w-auto">
                        <Link href="/">
                            <a className="cursor-pointer text-xl hover:text-sun-yellow">
                                Sunlight Esports
                            </a>
                        </Link>

                        <span
                            className="cursor-pointer -my-2 select-none block sm:hidden text-3xl"
                            onClick={Toggle}
                        >
                            ☰
                        </span>
                    </div>

                    <div
                        className={
                            'fixed inset-0 overflow-hidden' +
                            (navOpen ? ' flex justify-end' : ' hidden')
                        }
                    >
                        <div className="absolute inset-0 overflow-hidden">
                            <div className="absolute inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />

                            <div className="absolute inset-y-0 right-0 flex bg-white">
                                <div className="relative w-56">
                                    <div className="flex flex-col h-full py-2 px-4">
                                        <div className="flex flex-row w-full justify-center items-center pb-4">
                                            <span
                                                className="text-black cursor-pointer mx-4 select-none block text-3xl text-right w-full"
                                                onClick={Toggle}
                                            >
                                                ☰
                                            </span>
                                        </div>

                                        <div className="pl-2 pt-16 text-black font-medium">
                                            <div className="mb-6 text-gray-500 text-xl">
                                                Sunlight Esports
                                            </div>

                                            <div className="text-lg">
                                                <Link href="/#home">
                                                    <a>Inicio</a>
                                                </Link>

                                                <Link href="/#social">
                                                    <a className="my-3 block">Redes Sociais</a>
                                                </Link>

                                                <Link href="/#discord">
                                                    <a className="mb-3 block">Discord</a>
                                                </Link>
                                            </div>
                                        </div>

                                        <div className="pl-2 pt-4 text-black font-medium">
                                            <div className="mb-6 text-gray-500 text-xl">Sobre</div>

                                            <div className="text-lg">
                                                <Link href="/quem-somos">
                                                    <a>Quem somos</a>
                                                </Link>

                                                <Link href="/contato">
                                                    <a className="my-3 block">Contato</a>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="sm:flex flex-1 items-center hidden">
                        <div className="flex flex-row justify-end items-center list-none ml-auto tracking-wider mr-8">
                            <div className="dropdown">
                                <div className="flex flex-1 px-1 mx-4 cursor-pointer hover:text-yellow-300">
                                    <span>Sobre</span>
                                </div>

                                <div className="dropdown-menu absolute hidden text-black pt-4 pl-5 text-left">
                                    <div className="flex flex-1 whitespace-nowrap flex-col bg-gray-100 p-4 shadow">
                                        <div className="block py-1 hover:text-gray-700">
                                            <Link href="/quem-somos">
                                                <a
                                                    className={
                                                        router.pathname == '/quem-somos'
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
                                                        router.pathname == '/contato'
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
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Navbar
