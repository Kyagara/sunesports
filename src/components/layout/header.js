const Header = ({ headerTitle }) => {
    return (
        <div>
            <div className="w-full h-96 relative flex flex-1 items-center text-white uppercase bg-gray-800 overflow-hidden z-10">
                <span className="mt-10 sm:ml-20 text-center sm:text-left w-full font-montserrat text-6xl sm:text-8xl">
                    {headerTitle}
                </span>
            </div>
        </div>
    )
}

export default Header
