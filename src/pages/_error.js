function Error({ statusCode }) {
    return (
        <div className="oops">
            <div>
                <img
                    height="100%"
                    width="100%"
                    src="sun-black.svg"
                    alt=""
                ></img>

                <p>{statusCode} :/</p>
            </div>
        </div>
    )
}

Error.getInitialProps = ({ res, err }) => {
    const statusCode = res ? res.statusCode : err ? err.statusCode : 404
    return { statusCode }
}

export default Error
