import { useEffect } from 'react'
import kwesforms from 'kwesforms'

import Layout from '../components/layout'
import Header from '../components/layout/header'
import { AiFillMail, AiOutlineWhatsApp } from 'react-icons/ai'

const ContatoPage = () => {
    useEffect(() => {
        kwesforms.init()
    }, [])

    return (
        <>
            <Layout pageTitle="Contato">
                <Header headerTitle="Contato" />
                <div className="relative p-8 min-h-screen font-openSans bg-gray-100">
                    <section className="flex flex-1 flex-col sm:flex-row justify-center gap-8">
                        <img
                            className="absolute h-full right-0 opacity-5"
                            src="sun-section.svg"
                            alt=""
                        />
                        <div className="flex flex-1 flex-col items-center justify-center max-w-lg">
                            <div>
                                <span className="font-oswald uppercase text-2xl">
                                    Fale com a Sunlight Esports
                                </span>

                                <div className="my-8">
                                    <span className="flex flex-1 items-center gap-2 flex-row">
                                        <AiOutlineWhatsApp />
                                        (71) 98234-1420
                                    </span>
                                    <span className="hover:text-gray-400">
                                        <a
                                            target="_blank"
                                            href="mailto:contato@sunesports.com.br"
                                            aria-label="Email"
                                            rel="noopener"
                                            className="flex flex-1 items-center gap-2 flex-row"
                                        >
                                            <AiFillMail />
                                            contato@sunesports.com.br
                                        </a>
                                    </span>
                                </div>

                                <p>
                                    Caso tenha dúvidas relacionada à organização
                                    ou queira discutir assuntos comerciais, por
                                    favor entre em contato e nós iremos
                                    responder o mais rápido possivel.
                                </p>
                            </div>
                        </div>
                        <form
                            method="POST"
                            action="https://kwes.io/api/foreign/forms/rxOftyQTeHxJMkXTMGRX"
                            className="kwes-form flex flex-1 max-w-3xl flex-col justify-center z-10"
                        >
                            <div className="text-gray-700">
                                <label
                                    className="block uppercase tracking-wide text-xs font-bold mb-1"
                                    htmlFor="name"
                                >
                                    Nome *
                                </label>
                                <input
                                    className="block w-full appearance-none bg-gray-200 border border-gray-200 rounded p-3 mb-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                    type="text"
                                    name="name"
                                    id="name"
                                    rules="required"
                                />
                            </div>
                            <div className="text-gray-700">
                                <label
                                    className="block uppercase tracking-wide text-xs font-bold mb-1"
                                    htmlFor="email"
                                >
                                    Email *
                                </label>
                                <input
                                    className="block w-full appearance-none bg-gray-200 border border-gray-200 rounded p-3 mb-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                    type="email"
                                    name="email"
                                    id="email"
                                    rules="required|email|max:255"
                                />
                            </div>
                            <div className="text-gray-700">
                                <label
                                    className="block uppercase tracking-wide text-xs font-bold mb-1"
                                    htmlFor="subject"
                                >
                                    Assunto *
                                </label>
                                <input
                                    className="block w-full appearance-none bg-gray-200 border border-gray-200 rounded p-3 mb-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                    type="subject"
                                    name="subject"
                                    id="subject"
                                    rules="required"
                                />
                            </div>
                            <div className="text-gray-700">
                                <label
                                    className="block uppercase tracking-wide text-xs font-bold mb-1"
                                    htmlFor="message"
                                >
                                    Mensagem *
                                </label>
                                <textarea
                                    className="block w-full resize-y appearance-none bg-gray-200 border border-gray-200 rounded p-3 mb-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 h-48"
                                    name="message"
                                    id="message"
                                    rules="required"
                                />
                            </div>
                            <div>
                                <button
                                    className="shadow bg-gray-200 text-gray-700 font-bold p-3 rounded transform transition duration-200 hover:scale-105"
                                    type="submit"
                                >
                                    Enviar
                                </button>
                            </div>
                        </form>
                    </section>
                </div>
            </Layout>
        </>
    )
}

export default ContatoPage
