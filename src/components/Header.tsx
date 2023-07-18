import logo from "../assets/logo.png"
const Header = () => {
    return (
        <>
            <div className="w-full flex gap-1 items-center mx-2">
                <img
                    src={logo}
                    alt="Logo"
                    className="object-contain h-[2.8rem]" />
                <h1 className="text-2xl font-bold hidden md:block whitespace-no-wrap">Mero Bazaar</h1>
                <input placeholder="Search anything"
                    className="shadow rounded-lg focus:outline-none  px-5 py-2 mx-3 md:w-1/2 w-full" />
            </div>

        </>

    )
}
export default Header;