import Image from '@/components/NextImage'
import Link from 'next/link'

import { AiFillTwitterSquare, AiFillInstagram, AiFillFacebook, AiFillGithub } from 'react-icons/ai'

const Footer = () => {
    return (
        <footer className="relative bg-gray-800 pt-4 z-20">
            <div className="flex flex-wrap max-w-6xl m-auto">
                <div className="p-5 w-1/2 sm:w-4/12 md:w-3/12">
                    <Link href="/" passHref>
                        <a aria-label="Sunesports">
                            <Image
                                height="150"
                                width="150"
                                src="/sun-white.svg"
                                alt="Logo branco"
                                className="cursor-pointer"
                            />
                        </a>
                    </Link>
                </div>

                <div className="p-5 w-1/2 sm:w-4/12 md:w-3/12 font-lato text-gray-300 font-medium text-sm">
                    <span className="text-xs uppercase text-gray-400 mb-6">Sunlight Esports</span>

                    <Link href="/" passHref>
                        <a className="my-3 block hover:text-gray-50 duration-300">Inicio</a>
                    </Link>

                    <Link href="/#social" passHref>
                        <a className="my-3 block hover:text-gray-50 duration-300">Redes Sociais</a>
                    </Link>

                    <Link href="/#discord" passHref>
                        <a className="my-3 block hover:text-gray-50 duration-300">Discord</a>
                    </Link>
                </div>

                <div className="p-5 w-1/2 sm:w-4/12 md:w-3/12 font-lato text-gray-300 font-medium text-sm">
                    <span className="text-xs uppercase text-gray-400 mb-6">Sobre</span>

                    <Link href="/quem-somos" passHref>
                        <a className="my-3 block hover:text-gray-50 duration-300">Quem somos</a>
                    </Link>

                    <Link href="/contato" passHref>
                        <a className="my-3 block hover:text-gray-50 duration-300">Contato</a>
                    </Link>
                </div>

                <div className="p-5 w-1/2 sm:w-4/12 md:w-3/12 font-lato text-gray-300 font-medium text-sm">
                    <div className="text-xs uppercase text-gray-400 mb-4">Redes Sociais</div>

                    <a
                        target="_blank"
                        href="https://twitter.com/sunesportsbr"
                        aria-label="Twitter"
                        rel="noreferrer"
                        className="my-3 flex flex-row items-center hover:text-gray-50 duration-300"
                    >
                        <AiFillTwitterSquare className="text-base mr-1" />
                        Twitter
                    </a>

                    <a
                        target="_blank"
                        href="https://www.instagram.com/sunlightesports"
                        aria-label="Twitter"
                        rel="noreferrer"
                        className="my-3 flex flex-row items-center hover:text-gray-50 duration-300"
                    >
                        <AiFillInstagram className="text-base mr-1" />
                        Instagram
                    </a>

                    <a
                        target="_blank"
                        href="https://www.facebook.com/sunesportsbr"
                        aria-label="Facebook"
                        rel="noreferrer"
                        className="my-3 flex flex-row items-center hover:text-gray-50 duration-300"
                    >
                        <AiFillFacebook className="text-base mr-1" /> Facebook
                    </a>
                </div>
            </div>

            <div className="flex flex-row items-center justify-center mb-3">
                <a
                    target="_blank"
                    href="https://github.com/Kyagara/sunesports"
                    aria-label="Twitter"
                    rel="noreferrer"
                    className="flex flex-row items-center justify-center text-gray-300 hover:text-gray-50 duration-300"
                >
                    <AiFillGithub className="text-base mr-1" />
                    Github
                </a>
            </div>

            <div className="pt-2">
                <div
                    className="flex flex-1 py-5 px-3 m-auto justficy-center items-center
                    border-t border-gray-500 text-gray-300  
                    flex-col md:flex-row max-w-6xl justify-center"
                >
                    <span>#GOSUN</span>
                </div>
            </div>
        </footer>
    )
}

export default Footer
