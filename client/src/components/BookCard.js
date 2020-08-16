import React from "react";

function BookCard({ book, index, handleSaveClick }) {
    return (
        <article className="border m-2 p-2 hover:shadow-lg">
            <div className="flex flex-col sm:flex-row justify-between">
                <h2 className="text-center self-center m-2">{book.title} - {book.author}</h2>
                <div className="flex flex-row items-center self-center">
                    <button className="m-2 self-end bg-blue-200 w-16 rounded-lg hover:shadow-outline" type="button" onClick={() => window.location.href=book.link}>View</button>
                    <button className="m-2 self-end bg-green-400 w-16 rounded-lg hover:shadow-outline" name={index} type="button" onClick={handleSaveClick}>Save</button>
                </div>
            </div>
            <div className="flex flex-col sm:flex-row">
                <img className="mx-auto m-2 sm:mx-2 self-start" src={book.thumbnail ? book.thumbnail : "https://via.placeholder.com/150"} alt="Book Cover" />
                <p className="m-2">{book.synopsis}</p>
            </div>
        </article>
    );
}

export default BookCard;