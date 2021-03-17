const Discord = () => {
    return (
        <div className="flex flex-col items-center justify-center flex-1 z-10">
            <h3 className="uppercase text-center text-white text-5xl mt-20 mb-20 font-bold discord-title">
                Sunlight Community
            </h3>

            <span className="text-center sm:pr-8 pr-20 sm:pl-8 pl-20 text-2xl text-white  discord-paragraph">
                O servidor de Discord da Sunlight Esports conta com mais de 250
                membros jogando diversos jogos, conversando sobre diversos
                assuntos, assistindo os jogos da SUN, ouvindo juntos as rádios
                da SUN e muito mais.
            </span>
            <span className="text-center sm:pr-8 pr-20 sm:pl-8 pl-20 text-2xl text-white discord-paragraph">
                Venha para a #SUN Community!
            </span>

            <a
                target="_blank"
                href="https://discord.gg/c8Y5QFy4Qa"
                aria-label="Discord"
                rel="noopener"
                className="inline-block p-4 mt-10 mb-28 text-center text-base text-white font-bold border-none no-underline cursor-pointer discord-invite"
            >
                Acesse o nosso discord!
            </a>
        </div>
    )
}

export default Discord
