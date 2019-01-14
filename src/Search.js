import React, { Component } from 'react';

import Book from './Book';
import * as BooksAPI from './BooksAPI';

class Search extends Component {

    state = {
        books : []
    }

    findBooks = (query) => {
        BooksAPI.search(query.trim(), 20)
        .then((books) => {
            this.setState({books: books})
        });
    }

    render() {
        const { books } = this.state

        return (

            <div className="search-books">
                <div className="search-books-bar">
                    <a className="close-search" onClick={() => (console.log("Go back"))}>Close</a>
                    <div className="search-books-input-wrapper">
                        <input type="text" 
                            onChange={(event) => this.findBooks(event.target.value)}
                            placeholder="Search by title or author"
                        />
                    </div>
                </div>

                <div className="search-books-results">
                    <ol className="books-grid">
                        {
                            books.map((book) => (
                                <Book key={book.id} book={book}/>
                            ))
                        }
                    </ol>
                </div>
            </div>
        )
    }
}

export default Search
