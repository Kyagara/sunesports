import Link from 'next/link'
import {
    AiFillTwitterSquare,
    AiFillInstagram,
    AiFillFacebook,
} from 'react-icons/ai'

const Footer = () => {
    return (
        <footer className="relative bg-gray-800 pt-4 z-10 font-lato">
            <div className="max-w-6xl m-auto text-gray-800 flex flex-wrap">
                <div className="p-5 w-1/2 sm:w-4/12 md:w-3/12">
                    <Link href="/#">
                        <img
                            height="50%"
                            width="50%"
                            src="sun-white.svg"
                            alt=""
                            className="cursor-pointer"
                        />
                    </Link>
                </div>

                <div className="p-5 w-1/2 sm:w-4/12 md:w-3/12">
                    <div className="text-xs uppercase text-gray-400 font-medium mb-6">
                        Sunlight Esports
                    </div>

                    <Link href="/#">
                        <a className="my-3 block text-gray-300 hover:text-gray-50 text-sm font-medium duration-300">
                            Inicio
                        </a>
                    </Link>

                    <Link href="/#social">
                        <a className="my-3 block text-gray-300 hover:text-gray-50 text-sm font-medium duration-300">
                            Redes Sociais
                        </a>
                    </Link>

                    <Link href="/#discord">
                        <a className="my-3 block text-gray-300 hover:text-gray-50 text-sm font-medium duration-300">
                            Discord
                        </a>
                    </Link>
                </div>

                <div className="p-5 w-1/2 sm:w-4/12 md:w-3/12">
                    <div className="text-xs uppercase text-gray-400 font-medium mb-6">
                        Sobre
                    </div>

                    <Link href="/quem-somos">
                        <a className="my-3 block text-gray-300 hover:text-gray-50 text-sm font-medium duration-300">
                            Quem somos
                        </a>
                    </Link>

                    <Link href="/contato">
                        <a className="my-3 block text-gray-300 hover:text-gray-50 text-sm font-medium duration-300">
                            Contato
                        </a>
                    </Link>
                </div>

                <div className="p-5 w-1/2 sm:w-4/12 md:w-3/12">
                    <div className="text-xs uppercase text-gray-400 font-medium mb-6">
                        Redes Sociais
                    </div>

                    <a
                        target="_blank"
                        href="https://twitter.com/sunesportsbr"
                        aria-label="Twitter"
                        rel="noopener"
                        className="my-3 flex flex-row items-center text-gray-300 hover:text-gray-50 text-sm font-medium duration-300"
                    >
                        <AiFillTwitterSquare className="text-base my-0 mr-1" />
                        Twitter
                    </a>

                    <a
                        target="_blank"
                        href="https://www.instagram.com/sunlightesports"
                        aria-label="Twitter"
                        rel="noopener"
                        className="my-3 flex flex-row items-center text-gray-300 hover:text-gray-50 text-sm font-medium duration-300"
                    >
                        <AiFillInstagram className="text-base mr-1" />
                        Instagram
                    </a>

                    <a
                        target="_blank"
                        href="https://www.facebook.com/sunesportsbr"
                        aria-label="Facebook"
                        rel="noopener"
                        className="my-3 flex flex-row items-center text-gray-300 hover:text-gray-50 text-sm font-medium duration-300"
                    >
                        <AiFillFacebook className="text-base mr-1" /> Facebook
                    </a>
                </div>
            </div>

            <div className="pt-2">
                <div
                    className="flex flex-1 py-5 px-3 m-auto 
                    border-t border-gray-500 text-gray-400 text-sm 
                    flex-col md:flex-row max-w-6xl justify-center"
                >
                    <div>
                        Sunlight Esports 2020-2020 ® Todos os Direitos
                        Reservados
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
