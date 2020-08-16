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
                author: volumeInfo.authors ? volumeInfo.authors[0] : "No Attributed Author",
                synopsis: volumeInfo.description,
                link: volumeInfo.infoLink,
                thumbnail: volumeInfo.imageLinks ? volumeInfo.imageLinks.thumbnail : "https://via.placeholder.com/150"
            }
            return book;
        });

        this.setState({
            searchList: booksInfo
        });
    };

    handleSaveClick = async (e) => {
        e.preventDefault();
        const index = parseInt(e.target.name);

        await API.saveBook(this.state.searchList[index]);
        console.log("Successfully added to book list!");
    }

    render() {
        return (
            <main className="m-4 sm:mx-auto sm:w-2/3">
                <SearchArea handleSearchClick={this.handleSearchClick} handleChange={this.handleChange} />
                <SearchResults searchList={this.state.searchList} handleSaveClick={this.handleSaveClick} />
            </main>
        );
    };
}

export default Search;