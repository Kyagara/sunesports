import { useEffect } from 'react'
import kwesforms from 'kwesforms'

import Layout from '../components/layout'

const ContatoPage = () => {
    useEffect(() => {
        kwesforms.init()
    }, [])

    return (
        <>
            <Layout pageTitle="Contato">
                <div className="pt-24 pb-24 font-openSans">
                    <section className="flex py-8 justify-center bg-gray-100">
                        <form
                            method="POST"
                            action="https://kwes.io/api/foreign/forms/rxOftyQTeHxJMkXTMGRX"
                            className="kwes-form flex justify-center flex-col w-full max-w-lg mx-4"
                        >
                            <div>
                                <div className="w-full">
                                    <label
                                        className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                                        htmlFor="name"
                                    >
                                        Nome:
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
                            <div className="flex flex-wrap -mx-3 mb-6">
                                <div className="w-full px-3">
                                    <label
                                        className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                                        htmlFor="email"
                                    >
                                        Email:
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
                                        htmlFor="message"
                                    >
                                        Mensagem:
                                    </label>
                                    <textarea
                                        className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 h-48 resize-none"
                                        name="message"
                                        id="message"
                                        rules="required"
                                    />
                                </div>
                            </div>
                            <div className="md:flex md:items-center">
                                <div className="md:w-1/3">
                                    <button
                                        className="shadow bg-teal-400 hover:bg-teal-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
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
