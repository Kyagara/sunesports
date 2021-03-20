import styles from '../../sass/modules/scaleHoverAnimation.module.scss'

const Discord = () => {
    return (
        <div className="flex flex-1 text-white text-center flex-col items-center justify-center z-10 my-16">
            <h3 className="uppercase text-5xl font-oswald">
                Sunlight Community
            </h3>

            <div className="flex flex-col my-14 px-4 text-2xl font-openSans">
                <span>
                    O servidor de Discord da Sunlight Esports conta com mais de
                    250 membros jogando diversos jogos, conversando sobre
                    diversos assuntos, assistindo os jogos da SUN, ouvindo
                    juntos as rádios da SUN e muito mais.
                </span>
                <span>Venha para a #SUN Community!</span>
            </div>
            <a
                target="_blank"
                href="https://discord.gg/c8Y5QFy4Qa"
                aria-label="Discord"
                rel="noopener"
                className={`inline-block p-4 text-base font-bold border-none no-underline cursor-pointer font-openSans discord-invite ${styles.scaleSmall}`}
            >
                Acesse o nosso discord!
            </a>
        </div>
    )
}

export default Discord
