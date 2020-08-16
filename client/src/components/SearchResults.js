import React from "react";
import BookCard from "./BookCard";

function SearchResults({ searchList, handleSaveClick }) {
    return (
        <section className="flex flex-col border my-4 p-2">
            <h2 className="m-2">Results</h2>
            {searchList.map((book, i) => (
                <BookCard book={book} key={i} index={i} handleSaveClick={handleSaveClick} />
            ))}
        </section>
    );
}

export default SearchResults;