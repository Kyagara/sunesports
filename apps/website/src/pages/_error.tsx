import { NextPageContext } from 'next'
import Image from '@/components/NextImage'
import Link from 'next/link'

import { AiOutlineHome } from 'react-icons/ai'

const Error = ({ statusCode }: { statusCode: number }) => {
    return (
        <div className="flex flex-col justify-center min-h-screen bg-gray-300 bg-opacity-100 font-oswald">
            <div className="flex flex-col items-center">
                <Image
                    className="opacity-25"
                    height="300px"
                    width="300px"
                    src="/sun-black.svg"
                    alt="Logo SUN"
                />

                <p className="font-bold">{statusCode} :/</p>

                <Link href="/" passHref>
                    <div className="flex flex-row items-center cursor-pointer gap-1">
                        <a className="underline text-lg">Volte para o sol!</a>

                        <AiOutlineHome />
                    </div>
                </Link>
            </div>
        </div>
    )
}

Error.getInitialProps = (ctx: NextPageContext) => {
    const statusCode = ctx.res ? ctx.res.statusCode : ctx.err ? ctx.err.statusCode : 404

    return { statusCode }
}

export default Error
