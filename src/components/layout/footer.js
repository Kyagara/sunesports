import Link from 'next/link'
import {
    AiFillTwitterSquare,
    AiFillInstagram,
    AiFillFacebook,
} from 'react-icons/ai'

const Footer = () => {
    return (
        <footer className="relative bg-gray-800 pt-4 z-20">
            <div className="flex flex-wrap max-w-6xl m-auto">
                <div className="p-5 w-1/2 sm:w-4/12 md:w-3/12">
                    <Link href="/">
                        <a aria-label="Sunesports">
                            <img
                                height="50%"
                                width="50%"
                                src="sun-white.svg"
                                alt=""
                                className="cursor-pointer"
                            />
                        </a>
                    </Link>
                </div>

                <div className="p-5 w-1/2 sm:w-4/12 md:w-3/12 font-lato text-gray-300 font-medium text-sm">
                    <span className="text-xs uppercase text-gray-400 mb-6">
                        Sunlight Esports
                    </span>

                    <Link href="/">
                        <a className="my-3 block hover:text-gray-50 duration-300">
                            Inicio
                        </a>
                    </Link>

                    <Link href="/#social">
                        <a className="my-3 block hover:text-gray-50 duration-300">
                            Redes Sociais
                        </a>
                    </Link>

                    <Link href="/#discord">
                        <a className="my-3 block hover:text-gray-50 duration-300">
                            Discord
                        </a>
                    </Link>
                </div>

                <div className="p-5 w-1/2 sm:w-4/12 md:w-3/12 font-lato text-gray-300 font-medium text-sm">
                    <span className="text-xs uppercase text-gray-400 mb-6">
                        Sobre
                    </span>

                    <Link href="/quem-somos">
                        <a className="my-3 block hover:text-gray-50 duration-300">
                            Quem somos
                        </a>
                    </Link>

                    <Link href="/contato">
                        <a className="my-3 block hover:text-gray-50 duration-300">
                            Contato
                        </a>
                    </Link>
                </div>

                <div className="p-5 w-1/2 sm:w-4/12 md:w-3/12 font-lato text-gray-300 font-medium text-sm">
                    <div className="text-xs uppercase text-gray-400 mb-6">
                        Redes Sociais
                    </div>

                    <a
                        target="_blank"
                        href="https://twitter.com/sunesportsbr"
                        aria-label="Twitter"
                        rel="noopener"
                        className="my-3 flex flex-row items-center hover:text-gray-50 duration-300"
                    >
                        <AiFillTwitterSquare className="text-base my-0 mr-1" />
                        Twitter
                    </a>

                    <a
                        target="_blank"
                        href="https://www.instagram.com/sunlightesports"
                        aria-label="Twitter"
                        rel="noopener"
                        className="my-3 flex flex-row items-center hover:text-gray-50 duration-300"
                    >
                        <AiFillInstagram className="text-base mr-1" />
                        Instagram
                    </a>

                    <a
                        target="_blank"
                        href="https://www.facebook.com/sunesportsbr"
                        aria-label="Facebook"
                        rel="noopener"
                        className="my-3 flex flex-row items-center hover:text-gray-50 duration-300"
                    >
                        <AiFillFacebook className="text-base mr-1" /> Facebook
                    </a>
                </div>
            </div>

            <div className="pt-2">
                <div
                    className="flex flex-1 py-5 px-3 m-auto justficy-center items-center
                    border-t border-gray-500 text-gray-400 text-sm 
                    flex-col md:flex-row max-w-6xl justify-center"
                >
                    <span>#GOSUN</span>
                </div>
            </div>
        </footer>
    )
}

export default Footer
