import Link from 'next/link'

const Error = () => {
    return (
        <div className="oops">
            <div>
                <img height="100%" width="100%" src="sun-black.svg" alt="" />

                <p>404 :/</p>

                <Link href="/">
                    <a>Volte para o sol!</a>
                </Link>
            </div>
        </div>
    )
}

export default Error
