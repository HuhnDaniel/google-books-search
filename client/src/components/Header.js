import React from "react";
import { Link } from "react-router-dom";

function Header() {
    return (
        <header className="flex flex-col sm:flex-row bg-blue-200">
            <Link className="text-center text-3xl my-4 mx-3 sm:mx-8" to="/">Google Books Search</Link>
            <nav className="flex flex-row text-2xl items-center">
                <Link className="text-center flex-auto my-4 mx-3 sm:mx-6" to="/">Search</Link>
                <Link className="text-center flex-auto my-4 mx-3 sm:mx-6" to="/saved/">Saved</Link>
            </nav>
        </header>
    );
}

export default Header;