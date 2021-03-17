const Social = ({ instagram, twitter }) => {
    return (
        <div className="flex flex-wrap flex-1 justify-items-center items-center z-10 min-h-0">
            <div className="block overflow-hidden whitespace-nowrap w-full mt-4 mb-4 transform-gpu translate-y-2/4 pointer-events-none select-none text-black text-sm uppercase tracking-widest hashtag-slider">
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
            <div className="flex items-stretch flex-wrap justify-around gap-3 flex-1">
                <div>
                    <h3 className="flex justify-center uppercase text-4xl m-1 social-title">
                        <div>
                            <a
                                target="_blank"
                                href="https://instagram.com/sunlightesports"
                                aria-label="Instagram"
                                rel="noopener"
                                className="flex items-center hover:text-yellow-500"
                            >
                                Instagram
                            </a>
                        </div>
                    </h3>
                    <div className="grid gap-2 sm:grid-cols-2 grid-cols-1 instagram">
                        {instagram.map((post) => (
                            <a
                                target="_blank"
                                href={post.link}
                                aria-label="Instagram"
                                rel="noopener"
                                key={post.id}
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
                    </div>
                </div>
                <div>
                    <h3 className="flex justify-center uppercase text-4xl m-1 social-title">
                        <div>
                            <a
                                target="_blank"
                                href="https://twitter.com/sunesportsbr"
                                aria-label="Twitter"
                                rel="noopener"
                                className="flex items-center hover:text-yellow-500"
                            >
                                Twitter
                            </a>
                        </div>
                    </h3>
                    <div className="text-lg twitter">
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
        </div>
    )
}

export default Social
