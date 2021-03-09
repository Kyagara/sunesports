import Link from 'next/link'

function Error() {
    return (
        <div className="oops">
            <div>
                <img
                    height="100%"
                    width="100%"
                    src="sun-black.svg"
                    alt=""
                ></img>

                <p>404 :/</p>

                <Link href="/">
                    <a>Volte para o sol!</a>
                </Link>
            </div>
        </div>
    )
}

export default Error
