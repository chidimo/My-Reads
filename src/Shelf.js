import React, { Component } from 'react';

import * as BooksAPI from './BooksAPI';

import Book from './Book.js';

class Shelf extends Component {

    moveBookToShelf = (new_shelf) => {
        BooksAPI.update(this.props.book, new_shelf)
    }

    render() {

        const shelf_codes = {
            currentlyReading : 'Currently Reading',
            wantToRead : 'Want to read',
            read : 'Read'
        }
        const {shelf_code_name, books } = this.props

        return (
            <div className="bookshelf">
                <h2 className="bookshelf-title">{shelf_codes[shelf_code_name]}</h2>

               <div className="bookshelf-books">
                    <ol className="books-grid">
        
                        {
                            books.filter((book) => (
                                book.shelf === shelf_code_name
                            ))
                            .map((book) => (
                                <Book key={book.id} book={book}/>
                            ))
                        }
                    </ol>
               </div>
            </div>
        )
    }
}

export default Shelf
