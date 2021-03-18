const Header = ({ headerTitle }) => {
    return (
        <div className="relative z-10 w-full h-96 bg-gray-800 flex flex-1 items-center">
            <p className="ml-20 text-white uppercase font-montserrat text-9xl">
                {headerTitle}
            </p>
        </div>
    )
}

export default Header
