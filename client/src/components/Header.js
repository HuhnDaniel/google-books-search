import React from "react";
import { Link } from "react-router-dom";

function Header() {
    return (
        <header className="flex flex-row bg-blue-200">
            <Link className="text-3xl my-4 mx-3 md:mx-8" to="/">Google Books Search</Link>
            <nav className="flex flex-row text-2xl items-center">
                <Link className="flex-auto mx-3 md:mx-6" to="/">Search</Link>
                <Link className="flex-auto mx-3 md:mx-6" to="/saved/">Saved</Link>
            </nav>
        </header>
    )
}

export default Header;