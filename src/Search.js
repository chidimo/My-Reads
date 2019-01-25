import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { debounce } from 'throttle-debounce';

import Book from './Book';
import * as BooksAPI from './BooksAPI';

class Search extends Component {

    state = {books : [], search_message: "Type to search"}


    // Two conditions:
    // If search API is called on an empty query, it returns undefined
    // If search term is not found, it returns {error: "empty query", items: []}
    // In both cases, we want to return an empty book list, [], but display 
    // meaningful message
    componentDidMount() {
        this.getValidQueryBooks = debounce(1000, this.getValidQueryBooks)
    }
    
    getValidQueryBooks(query) {
        BooksAPI.search(query, 20)
        .then((books) => {
            if (books.error) {
                this.setState({books: [], search_message: "No results for your search"})
            }
            else {
                const home_titles = this.props.home_shelf.map((book) => (
                    book.title
                ))
                books.map((book) => {
                    // check whether current book title is found in home shelf
                    if (home_titles.includes(book.title)) {
                        // Search for book title and set the shelf
                        for (let bk of this.props.home_shelf) {
                            if (bk.title === book.title) book.shelf = bk.shelf
                        }
                    }
                    else {
                        book.shelf="none"
                    }
                    return book
                })
                this.setState({books: books})
            }
        });
    }

    findBooks = (query) => {
        if (!query) this.setState({books: [], search_message: "Type to search"})
        else this.getValidQueryBooks(query)
    }

    render() {
        const { books, search_message } = this.state
        const { book_mover } = this.props

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
                                <Book key={book.id} book={book} book_mover={book_mover}/>
                            ))
                            :
                            <p>{search_message}</p>
                        }

                    </ol>
                </div>
            </div>
        )
    }
}

export default Search
