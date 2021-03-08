import Twitter from '../components/social/twitter'
import Instagram from '../components/social/Instagram'

const Social = () => {
    return (
        <div className="social">
            <div className="marquee">
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
                <Instagram />
                <Twitter />
            </div>
        </div>
    )
}

export default Social
