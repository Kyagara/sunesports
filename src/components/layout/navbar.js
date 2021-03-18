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
                        <Link href="/">
                            <a className="text-xl">Sunlight Esports</a>
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
                        <div class="absolute inset-0 overflow-hidden">
                            <div class="absolute inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>
                            <div class="absolute inset-y-0 right-0 flex">
                                <div class="relative w-56">
                                    <div class="h-full flex flex-col py-2 px-4 bg-white ">
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

                                            <Link href="/">
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
                                                Informações
                                            </div>

                                            <Link href="/sobre">
                                                <a className="my-2 block text-lg font-medium">
                                                    Sobre
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
                        <ul className="flex flex-col sm:flex-row list-none sm:ml-auto justify-end items-center tracking-wider sm:mx-2">
                            <li className="px-1 flex flex-1 my-3 sm:my-0">
                                <Link href="/">
                                    <a
                                        className={
                                            router.pathname == '/'
                                                ? 'active'
                                                : ''
                                        }
                                    >
                                        Inicio
                                    </a>
                                </Link>
                            </li>
                            <li className="px-1 flex flex-1 my-3 sm:my-0">
                                <Link href="/sobre">
                                    <a
                                        className={
                                            router.pathname == '/sobre'
                                                ? 'active'
                                                : ''
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
