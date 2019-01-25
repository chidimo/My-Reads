import React from 'react';

import Book from './Book.js';

const Shelf = ({ shelf_code_name, books, book_mover }) => {

    const shelf_codes = {
        currentlyReading : 'Currently Reading',
        wantToRead : 'Want to read',
        read : 'Read'
    }
    
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
                            <Book
                                key={book.id}
                                book={book}
                                book_mover={book_mover}
                            />
                        ))
                    }
                </ol>
            </div>
        </div>
    )
}

export default Shelf
