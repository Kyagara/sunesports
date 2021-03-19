import styles from '../../sass/modules/scaleHoverAnimation.module.scss'

const Social = ({ instagram, twitter }) => {
    return (
        <div className="flex flex-wrap flex-1 justify-items-center items-center z-10 min-h-0">
            <div className="flex items-stretch flex-wrap justify-around gap-3 flex-1">
                <div>
                    <h3 className="flex justify-center uppercase text-4xl my-2 social-title">
                        <div>
                            <a
                                target="_blank"
                                href="https://instagram.com/sunlightesports"
                                aria-label="Instagram"
                                rel="noopener"
                                className={`flex items-center hover:text-yellow-500 font-oswald ${styles.scaleBig}`}
                            >
                                Instagram
                            </a>
                        </div>
                    </h3>

                    <div className="grid gap-5 sm:grid-cols-2 grid-cols-1">
                        {instagram.map((post) => (
                            <a
                                target="_blank"
                                href={post.link}
                                aria-label="Instagram"
                                rel="noopener"
                                key={post.id}
                                className={`${styles.scaleSmall}`}
                            >
                                <img
                                    height="300px"
                                    width="300px"
                                    src={post.image}
                                    href=""
                                    alt=""
                                />
                            </a>
                        ))}
                        <div className="flex flex-1 flex-col items-center justify-center text-center font-montserrat text-9xl opacity-25 select-none">
                            <p className="w-full tracking-tight">#GO</p>
                            <p className="w-full text-right tracking-wide">
                                SUN
                            </p>
                        </div>
                    </div>
                </div>
                <div>
                    <h3 className="flex justify-center uppercase text-4xl my-2 social-title">
                        <div>
                            <a
                                target="_blank"
                                href="https://twitter.com/sunesportsbr"
                                aria-label="Twitter"
                                rel="noopener"
                                className={`flex items-center hover:text-yellow-500 font-oswald ${styles.scaleBig}`}
                            >
                                Twitter
                            </a>
                        </div>
                    </h3>
                    <div className="text-lg twitter font-openSans">
                        <ul>
                            {twitter.map((tweet) => (
                                <li
                                    key={tweet.id}
                                    className="flex flex-col max-w-md"
                                >
                                    <a
                                        target="_blank"
                                        href={tweet.link}
                                        aria-label="Twitter"
                                        rel="noopener"
                                    >
                                        <div className="flex flex-col p-4 mb-4">
                                            <p>{tweet.text}</p>
                                            <span className="mt-2 text-sm">
                                                {tweet.date}
                                            </span>
                                        </div>
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
            <div className="block overflow-hidden whitespace-nowrap w-full my-6 transform-gpu translate-y-2/4 pointer-events-none select-none text-black text-sm uppercase font-lato tracking-widest hashtag-slider">
                <span className="inline-block">
                    #SUN #SUN #SUN #SUN #SUN #SUN #SUN #SUN #SUN #SUN #SUN #SUN
                    #SUN #SUN #SUN #SUN #SUN #SUN #SUN #SUN #SUN #SUN #SUN #SUN
                    #SUN #SUN #SUN #SUN #SUN #SUN #SUN #SUN #SUN #SUN #SUN #SUN
                    #SUN #SUN #SUN
                </span>
                <span className="inline-block">
                    #SUN #SUN #SUN #SUN #SUN #SUN #SUN #SUN #SUN #SUN #SUN #SUN
                    #SUN #SUN #SUN #SUN #SUN #SUN #SUN #SUN #SUN #SUN #SUN #SUN
                    #SUN #SUN #SUN #SUN #SUN #SUN #SUN #SUN #SUN #SUN #SUN #SUN
                    #SUN #SUN #SUN
                </span>
            </div>
        </div>
    )
}

export default Social
