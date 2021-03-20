import Link from 'next/link'
import { AiOutlineHome } from 'react-icons/ai'

const Error = ({ statusCode }) => {
    return (
        <div className="flex flex-col justify-center min-h-screen bg-gray-300 bg-opacity-100 font-oswald">
            <div className="flex flex-col items-center">
                <img
                    className="max-h-96 opacity-25"
                    height="100%"
                    width="100%"
                    src="sun-black.svg"
                    alt=""
                />

                <p className="font-bold">{statusCode} :/</p>

                <Link href="/">
                    <div className="flex flex-row items-center cursor-pointer gap-1">
                        <a className="underline text-lg">Volte para o sol!</a>
                        <AiOutlineHome />
                    </div>
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
