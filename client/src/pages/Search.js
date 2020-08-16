import React, { Component } from "react";
import SearchArea from "../components/SearchArea";
import SearchResults from "../components/SearchResults";
import API from "../utils/API";

class Search extends Component {
    state = {
        bookSearch: "",
        searchList: []
    };

    handleChange = (e) => {
        this.setState({
            bookSearch: e.target.value
        });
    };

    handleSearchClick = async (e) => {
        e.preventDefault();

        const { data } = await API.searchBooks(this.state.bookSearch);

        const booksInfo = data.items.map(({ volumeInfo }) => {
            const book = {
                title: volumeInfo.title,
                author: volumeInfo.authors[0],
                synopsis: volumeInfo.description,
                date: volumeInfo.publishedDate,
                thumbnail: volumeInfo.imageLinks.thumbnail
            }
            return book;
        });

        this.setState({
            searchList: booksInfo
        });
    };

    render() {
        return (
            <main>
                <SearchArea handleSearchClick={this.handleSearchClick} handleChange={this.handleChange} />
                <SearchResults searchList={this.searchList} />
            </main>
        );
    }
}

export default Search;