import React, { Component } from "react";
import SavedBookCard from "../components/SavedBookCard";
import API from "../utils/API";

class Saved extends Component {
    state = {
        bookList: []
    };

    async componentDidMount() {
        const { data } = await API.getBooks();

        this.setState({
            bookList: data
        });
        console.log(this.state);
    };

    render() {
        return (
            <main className="flex flex-col border m-4 p-2 sm:mx-auto sm:w-2/3">
                <h2 className="m-2">Saved Books</h2>
                {this.state.bookList.map((book, i) => (
                    <SavedBookCard book={book} key={i} index={i} />
                ))}
            </main>
        );
    };
}

export default Saved;