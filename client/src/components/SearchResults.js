import React from "react";
import BookCard from "./BookCard";

function SearchResults() {
    return (
        <section className="flex flex-col border m-4 p-2">
            <h2 className="m-2">Results</h2>
            <BookCard />
        </section>
    );
}

export default SearchResults;