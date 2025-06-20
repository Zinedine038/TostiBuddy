import { ThemeSelector } from "./ThemeSelector"
import { Link } from "react-router-dom"

export function Navbar () {
    return (
        <>
            <nav className="navbar bg-base-100 relative">
                <div className="absolute left-1/2 transform -translate-x-1/2">
                    <Link to="/" className="btn btn-ghost normal-case text-3xl">
                        Tosti Buddy!
                    </Link>
                    <div>
                        <ul className="flex space-x-6 text-lg underline">
                            <li>
                                <Link to="/storage">Opslag</Link>
                            </li>
                            <li>
                                <Link to="/tosti">Eters</Link>
                            </li>
                            <li>
                                <Link to="/result">Resultaat</Link>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="ml-auto">
                    <ThemeSelector />
                </div>
            </nav>
        </>
    )
}