import React, { Component } from "react";
import SearchArea from "../components/SearchArea";
import SearchResults from "../components/SearchResults";
import API from "../utils/API";

class Search extends Component {
    state = {
        bookSearch: ""
    };

    handleChange = (e) => {
        this.setState({
            bookSearch: e.target.value
        });
    };

    handleSearchClick = async (e) => {
        e.preventDefault();
        console.log(this.state);

        const books = await API.searchBooks(this.state.bookSearch);
        console.log(books);
    };

    render() {
        return (
            <main>
                <SearchArea handleSearchClick={this.handleSearchClick} handleChange={this.handleChange} />
                <SearchResults />
            </main>
        );
    }
}

export default Search;