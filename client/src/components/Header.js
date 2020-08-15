import React from "react";
import { Link } from "react-router-dom";

function Header() {
    return (
        <header className="flex flex-row">
            <h1 className="flex-auto text-center text-3xl p-4">Google Books Search</h1>
            <nav className="flex flex-row flex-auto text-center text-2xl p-4">
                <Link className="flex-auto" to="/">Search</Link>
                <Link className="flex-auto" to="/saved/">Saved</Link>
            </nav>
        </header>
    )
}

export default Header;