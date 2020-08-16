import React from "react";
import BookCard from "./BookCard";

function SearchResults({ searchList }) {
    return (
        <section className="flex flex-col border m-4 p-2">
            <h2 className="m-2">Results</h2>
            {searchList.map((book, i) => (
                <BookCard book={book} key={i} />
            ))}
        </section>
    );
}

export default SearchResults;