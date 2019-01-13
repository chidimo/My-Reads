import React, { Component } from 'react';

import Book from './Book.js';

class Shelf extends Component {

    render() {

        const shelf_codes = {
            currentlyReading : 'Currently Reading',
            wantToRead : 'Want to read',
            read : 'Read'
        }

        const {name, books } = this.props

        return (
            <div className="bookshelf">
                <h2 className="bookshelf-title">{shelf_codes[name]}</h2>

               <div className="bookshelf-books">
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

export default Shelf
