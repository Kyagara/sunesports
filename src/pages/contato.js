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
                <div className="font-openSans">
                    <section className="relative flex flex-1 flex-col sm:flex-row gap-8 px-8 p-4 sm:p-4 bg-gray-100 py-8 justify-center min-h-screen">
                        <img
                            className="absolute h-full bottom-0 right-0 opacity-5"
                            src="sun-section.svg"
                            alt=""
                        />
                        <div className="flex flex-1 flex-col items-center justify-center max-w-lg text-left">
                            <div className="">
                                <span className="font-oswald uppercase text-2xl">
                                    Fale com a Sunlight Esports
                                </span>

                                <div className="my-8">
                                    <span className="flex flex-1 items-center gap-2 flex-row">
                                        <AiOutlineWhatsApp />
                                        (71) 98234-1420
                                    </span>
                                    <span className="hover:text-gray-700">
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
                            className="kwes-form flex justify-center flex-col z-10"
                        >
                            <div>
                                <div className="w-full">
                                    <label
                                        className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                                        htmlFor="name"
                                    >
                                        Nome *
                                    </label>
                                    <input
                                        className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                        type="text"
                                        name="name"
                                        id="name"
                                        rules="required"
                                    ></input>
                                </div>
                            </div>
                            <div className="flex flex-wrap -mx-3 ">
                                <div className="w-full px-3">
                                    <label
                                        className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                                        htmlFor="email"
                                    >
                                        Email *
                                    </label>
                                    <input
                                        className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                        type="email"
                                        name="email"
                                        id="email"
                                        rules="required|email|max:255"
                                    ></input>
                                </div>
                            </div>
                            <div className="flex flex-wrap -mx-3 mb-6">
                                <div className="w-full px-3">
                                    <label
                                        className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                                        htmlFor="subject"
                                    >
                                        Assunto *
                                    </label>
                                    <input
                                        className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                        type="subject"
                                        name="subject"
                                        id="subject"
                                        rules="required"
                                    ></input>
                                </div>
                            </div>
                            <div className="flex flex-wrap -mx-3 mb-6">
                                <div className="w-full px-3">
                                    <label
                                        className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                                        htmlFor="message"
                                    >
                                        Mensagem *
                                    </label>
                                    <textarea
                                        className="resize-y appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 h-48"
                                        name="message"
                                        id="message"
                                        rules="required"
                                    />
                                </div>
                            </div>
                            <div className="md:flex md:items-center">
                                <div className="md:w-1/3">
                                    <button
                                        className="shadow bg-gray-200 text-gray-700 font-bold py-2 px-4 rounded transform transition duration-200 hover:scale-105"
                                        type="submit"
                                    >
                                        Enviar
                                    </button>
                                </div>
                            </div>
                        </form>
                    </section>
                </div>
            </Layout>
        </>
    )
}

export default ContatoPage
