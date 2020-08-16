import axios from "axios";

export default {
    searchBooks: function(title) {
        return axios.get(`https://www.googleapis.com/books/v1/volumes?q=${title}`);
    },

    saveBook: function(bookData) {
        return axios.post("/api/books", bookData);
    }
}