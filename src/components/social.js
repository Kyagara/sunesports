const Social = ({ instagram, twitter }) => {
    return (
        <div className="social">
            <div className="sun-slider">
                <span>
                    #SUN #SUN #SUN #SUN #SUN #SUN #SUN #SUN #SUN #SUN #SUN #SUN
                    #SUN #SUN #SUN #SUN #SUN #SUN #SUN #SUN #SUN #SUN #SUN #SUN
                    #SUN #SUN #SUN #SUN #SUN #SUN #SUN #SUN #SUN #SUN #SUN #SUN
                    #SUN #SUN #SUN
                </span>
                <span>
                    #SUN #SUN #SUN #SUN #SUN #SUN #SUN #SUN #SUN #SUN #SUN #SUN
                    #SUN #SUN #SUN #SUN #SUN #SUN #SUN #SUN #SUN #SUN #SUN #SUN
                    #SUN #SUN #SUN #SUN #SUN #SUN #SUN #SUN #SUN #SUN #SUN #SUN
                    #SUN #SUN #SUN
                </span>
            </div>
            <div className="social-container">
                <div>
                    <h3 className="social-title">
                        <div>
                            <a
                                target="_blank"
                                href="https://instagram.com/sunlightesports"
                                aria-label="Instagram"
                                rel="noopener"
                            >
                                <span>Instagram</span>
                            </a>
                        </div>
                    </h3>
                    <div className="instagram-container">
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
                    <h3 className="social-title">
                        <div>
                            <a
                                target="_blank"
                                href="https://twitter.com/sunesportsbr"
                                aria-label="Twitter"
                                rel="noopener"
                            >
                                <span>Twitter</span>
                            </a>
                        </div>
                    </h3>
                    <div className="twitter-container">
                        <ul>
                            {twitter.map((tweet) => (
                                <li key={tweet.id}>
                                    <a
                                        target="_blank"
                                        href={tweet.link}
                                        aria-label="Twitter"
                                        rel="noopener"
                                    >
                                        <div className="tweet">
                                            <p>{tweet.text}</p>
                                            <span className="date">
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
