const Header = ({ headerTitle }) => {
    return (
        <div className="w-full h-96 relative flex flex-1 items-center text-white uppercase bg-gray-800 overflow-hidden z-10">
            <span className="ml-8 sm:ml-20 font-montserrat text-6xl sm:text-9xl">
                {headerTitle}
            </span>
        </div>
    )
}

export default Header
