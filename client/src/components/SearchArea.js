import React from "react";

function SearchArea() {
    return (
        <form className="flex flex-col border m-4 p-2 hover:shadow-lg">
            <h1 className="m-2">Book Search</h1>
            <input className="border m-2" type="text" name="bookSearch" />
            <button className="p-2 m-2 self-end bg-yellow-400 w-24 rounded-lg hover:shadow-outline" type="button">Search</button>
        </form>
    );
}

export default SearchArea;