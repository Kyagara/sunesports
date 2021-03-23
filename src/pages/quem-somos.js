import Layout from '../components/layout'

import Header from '../components/layout/header'

const SobrePage = () => {
    return (
        <Layout pageTitle="Quem somos">
            <Header headerTitle="Quem somos" />
            <div id="moving-stars"></div>
            <div className="text-white flex flex-1 flex-col font-openSans gap-20 m-4">
                <span className="font-oswald uppercase text-4xl italic mt-14 sm:ml-20 animate-fade-in">
                    "In it's own time, sunlight bathes even the darkest of
                    shadows."
                </span>

                <section className="flex flex-1">
                    <div className="flex flex-1 flex-col p-4 gap-4 items-start justify-center text-lg">
                        <span className="font-montserrat uppercase text-4xl">
                            Missão
                        </span>
                        <p>
                            Fazer parte da Sunlight Esports significa ter a
                            liberdade para seguir seu próprio caminho e não ser
                            limitado a seguir padrões ou suprir expectativas
                            externas. Seja você um dos nossos fãs ou esteja
                            disputando uma vaga para fazer parte de nossa
                            organização, sempre iremos escolher dedicação, foco
                            e paixão pela causa acima de rótulos. Sempre
                            pautamos nossas decisões buscando o que é certo,
                            mesmo que não nos beneficie diretamente. A nossa
                            missão é inspirar todos os jogadores a competir,
                            independente da sua situação. Há espaço para todos.
                        </p>
                    </div>
                </section>

                <span className="font-oswald uppercase text-4xl italic sm:ml-20 animate-fade-in">
                    "Praise the sun, which will light your way."
                </span>

                <section>
                    <div className="flex flex-1 flex-col p-4 gap-4 items-start justify-center text-lg">
                        <span className="font-montserrat uppercase text-4xl">
                            Valores
                        </span>
                        <p>
                            Buscamos estar em constante desenvolvimento. Nossos
                            padrões de qualidade se tornam mais rígidos junto a
                            nossa caminhada, buscando a excelência das nossas
                            equipes para fazer um bom espetáculo para nossos
                            fãs, incluindo nós mesmos. Em nossa organização,
                            acreditamos que não devemos temer mudanças sejam
                            sutis ou ousadas, acreditamos que a vitória está no
                            aprendizado, no preparo, no companheirismo, e no ato
                            de competir, acima de tudo, não somente em
                            resultados.
                        </p>
                        <p>
                            Desde que começamos nossas atividades, fizemos
                            movimentos que foram em sentido contrário ao que
                            nossos oponentes acreditavam, dentro e fora de
                            campo. Sabemos dos riscos das nossas estratégias e
                            como elas podem aumentar nossa oportunidade de
                            vencer e evoluir. Nos bastidores de cada objetivo
                            alcançado, tem um time de pessoas empenhadas, que
                            abdicam de coisas em prol de um objetivo em comum,
                            competir em alto nível.
                        </p>
                    </div>
                </section>

                <span className="font-oswald uppercase text-4xl italic sm:ml-20 animate-fade-in">
                    "Eternity is the sun mixed with the sea."
                </span>

                <section>
                    <div className="flex flex-1 flex-col p-4 gap-4 items-start justify-center text-lg">
                        <span className="font-montserrat uppercase text-4xl">
                            Futuro
                        </span>
                        <p>
                            Desde que foi fundada em Fevereiro de 2020, a única
                            certeza que seus criadores tinham em relação a
                            Sunlight era que, independente de como as coisas
                            viriam a se desenvolver, não iremos progredir rumo a
                            um ambiente engessado, onde as pessoas seriam
                            privadas de serem autênticas. Temos muito orgulho do
                            trabalho que realizamos no último ano, e temos dado
                            passos expressivos para nossa história. Refletimos
                            muito durante esse curto trajeto, e aprendemos
                            bastante com as conquistas de pessoas de outros
                            pores do sol. Já quando pensamos no futuro,
                            aproveitamos da amplitude desses conhecimentos, e
                            nos damos a missão de reinventá-los nos próximos
                            nasceres do sol. A Sunlight Esports é um projeto que
                            representa esperança e liberdade, e prezamos isso
                            acima de tudo.
                        </p>
                    </div>
                </section>

                <span className="text-white font-montserrat uppercase text-6xl sm:text-9xl p-4 sm:p-10 my-8 text-center">
                    #GOSUN
                </span>
            </div>
        </Layout>
    )
}

export default SobrePage
