import Link from 'next/link'

import styles from '../sass/modules/sunBlendOverlay.module.scss'

const Error = () => {
    return (
        <div className="flex flex-col justify-center content-center text-center h-screen bg-gray-300 font-sans">
            <div className="flex flex-col justify-center content-center items-center">
                <img
                    className={`max-h-96 ${styles.sunBlendOverlay}`}
                    height="100%"
                    width="100%"
                    src="sun-black.svg"
                    alt=""
                />

                <p className="font-bold">404 :/</p>

                <Link href="/">
                    <a className="font-lato text-black underline inline">
                        Volte para o sol!
                    </a>
                </Link>
            </div>
        </div>
    )
}

export default Error
