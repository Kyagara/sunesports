const Social = ({ instagram, twitter }) => {
    return (
        <div className="flex flex-1 flex-wrap items-center z-10">
            <div className="flex flex-1 flex-wrap justify-around my-2">
                <div>
                    <h3 className="flex justify-center uppercase text-4xl my-2">
                        <div>
                            <a
                                target="_blank"
                                href="https://instagram.com/sunlightesports"
                                aria-label="Instagram"
                                rel="noopener"
                                className="flex items-center hover:text-sun-orange font-oswald transform transition duration-200 hover:scale-110"
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
                                className={`transform transition duration-200 hover:scale-105`}
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
                                className="flex items-center hover:text-sun-orange font-oswald transform transition duration-200 hover:scale-110"
                            >
                                Twitter
                            </a>
                        </div>
                    </h3>
                    <div className="font-openSans text-lg twitter">
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
                                            <span className="font-lato mt-2 text-sm">
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
            <div className="block overflow-hidden w-full my-6 font-lato text-sm tracking-widest whitespace-nowrap transform-gpu pointer-events-none select-none slider">
                <span className="inline-block animate-hashtag-slider">
                    #SUN #SUN #SUN #SUN #SUN #SUN #SUN #SUN #SUN #SUN #SUN #SUN
                    #SUN #SUN #SUN #SUN #SUN #SUN #SUN #SUN #SUN #SUN #SUN #SUN
                    #SUN #SUN #SUN #SUN #SUN #SUN #SUN #SUN #SUN #SUN #SUN #SUN
                    #SUN #SUN #SUN
                </span>
                <span className="inline-block animate-hashtag-slider">
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
