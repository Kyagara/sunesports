import Link from 'next/link'

const Error = ({ statusCode }) => {
    return (
        <div className="flex flex-col justify-center content-center text-center h-screen bg-gray-300 font-sans error">
            <div className="flex flex-col justify-center content-center items-center">
                <img
                    className="max-h-96 opacity-25"
                    height="100%"
                    width="100%"
                    src="sun-black.svg"
                    alt=""
                />

                <p className="font-bold">{statusCode} :/</p>

                <Link href="/">
                    <a className="font-lato text-black underline inline">
                        Volte para o sol!
                    </a>
                </Link>
            </div>
        </div>
    )
}

Error.getInitialProps = ({ res, err }) => {
    const statusCode = res ? res.statusCode : err ? err.statusCode : 404
    return { statusCode }
}

export default Error
