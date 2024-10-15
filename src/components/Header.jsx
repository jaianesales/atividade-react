import { Link } from "react-router-dom";

function Header() {
    return (
        <>
            <>
                <header className="flex align-items-center justify-content-between px-7 bg-primary">
                    <h1>logo</h1>
                    <nav>
                        <ul className="flex list-none gap-6">
                            <li>
                                <Link to={"/"}className="text-white">Home</Link>
                            </li>
                            <li>
                                <Link to={"/about"} className="text-white">About</Link>
                            </li>
                            <li>
                                <Link to={"/contact"} className="text-white">Contact</Link>
                            </li>
                        </ul>
                    </nav>
                </header>
            </>
        </>
    )
}
export default Header;