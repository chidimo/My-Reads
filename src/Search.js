import React, { Component } from 'react';

import { Link } from 'react-router-dom';

import Book from './Book';
import * as BooksAPI from './BooksAPI';

class Search extends Component {

    state = {books : []}

    findBooks = (query) => {

        if (!query) {
            this.setState({books: []})
        }

        else {
            BooksAPI.search(query, 20)
            .then((books) => {
                if (books.error) {
                    this.setState({books: []})
                }
                else {
                    this.setState({books: books})
                }
            });
        }
    }

    render() {
        const { books } = this.state

        return (
            <div className="search-books">
                <div className="search-books-bar">
                    <Link to='/' className='close-search'>Go back</Link>
                    
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
                            books.length !==0 
                            ?
                            books
                            .filter((book) => (
                                book.imageLinks !== undefined
                                ))
                            .filter((book) => (
                                book.authors !== undefined
                            ))
                            .map((book) => (
                                <Book key={book.id} book={book}/>
                            ))
                            :
                            <p>No match for your query</p>
                        }

                    </ol>
                </div>
            </div>
        )
    }
}

export default Search
