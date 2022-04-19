const DiscordSection = () => {
    return (
        <div className="flex flex-1 flex-col my-16 items-center text-white text-center">
            <h3 className="font-oswald uppercase text-5xl">Sunlight Community</h3>

            <div className="flex flex-col my-14 px-4 text-2xl font-openSans">
                <span>
                    O servidor de Discord da Sunlight Esports conta com mais de 200 membros jogando
                    diversos jogos, conversando sobre diversos assuntos, assistindo os jogos da SUN,
                    ouvindo juntos as rádios da SUN e muito mais.
                </span>
                <span>Venha para a #SUN Community!</span>
            </div>

            <a
                target="_blank"
                href="https://discord.gg/c8Y5QFy4Qa"
                aria-label="Discord"
                rel="noreferrer"
                className="inline-block p-4 font-bold border-none no-underline cursor-pointer font-openSans bg-discord-blue transform transition duration-200 hover:scale-105"
            >
                Acesse o nosso discord!
            </a>
        </div>
    )
}

export default DiscordSection
