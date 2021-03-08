import Layout from '../components/layout'
import Social from '../components/social'
import Discord from '../components/Discord'
import { useRef, useEffect } from 'react'

const IndexPage = () => {
    const inicioRef = useRef(null)
    const socialRef = useRef(null)
    const discordRef = useRef(null)

    useEffect(() => {
        let observer
        if (inicioRef.current && socialRef.current && discordRef.current) {
            const options = {
                root: document,
                rootMargin: '-50% 0px -50%',
            }

            observer = new IntersectionObserver((entries, observer) => {
                entries.forEach((entry) => {
                    const navElement = document.querySelector(
                        `a[href="/#${entry.target.id}"]`,
                    )
                    if (entry.isIntersecting) {
                        if (!navElement.classList.contains('active')) {
                            navElement.classList.add('active')
                        }
                    } else if (navElement.classList.contains('active')) {
                        navElement.classList.remove('active')
                    }
                })
            }, options)
            observer.observe(inicioRef.current)
            observer.observe(socialRef.current)
            observer.observe(discordRef.current)
        }
        return () => observer.disconnect()
    }, [inicioRef, socialRef, discordRef])

    return (
        <>
            <Layout>
                <div id="stars"></div>
                <div id="stars2"></div>

                <div id="inicio" ref={inicioRef} className="hero">
                    <div className="fade-in sunSpinBlock">
                        <img
                            height="100%"
                            width="100%"
                            src="sun.svg"
                            alt=""
                        ></img>
                    </div>
                </div>

                <div>
                    <section
                        id="social"
                        ref={socialRef}
                        className="section-social"
                    >
                        <img className="svg" src="sun-section.svg" alt=""></img>

                        <Social />
                    </section>

                    <section
                        id="discord"
                        ref={discordRef}
                        className="section-discord"
                    >
                        <Discord />
                    </section>
                </div>
            </Layout>
        </>
    )
}

export default IndexPage
